<script lang="ts">

    import axios from "axios";
    import { Spinner } from 'flowbite-svelte';
    import { Label, Input } from 'flowbite-svelte';

    let email: string = "";
    let password: string = "";
    let loading: boolean = false

    let errors: Array<{ path: string, message: string }> = [];
    let error:string = "";

    async function handleLogin() {
        loading = true
        errors = [];
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
                email,
                password
            }, {
                headers: {
                    "x-api-key": import.meta.env.VITE_API_KEY,
                    "Content-Type": "application/json" 
                }
            });

            if (response.status === 200) {
                alert("Login Success")
            }
            
        }catch (err) {
            if (axios.isAxiosError(err)) {
                // console.log("Error Status:", err.response?.status);
                // console.log("Error Data:", err.response?.data);
                if (err.response?.data.error && Array.isArray(err.response?.data.error)) {
                    errors = err.response?.data.error || []; 
                    console.log(errors)
                } else {
                    error = err.response?.data.error || "";
                    alert(error)
                }
            }
        } finally {
            loading = false
        }

    }
</script>

<main class="">
    <div class="text-primary mb-20">
        <p class="font-bold text-4xl">
            Welcome Back!
        </p>
        <p class="font-semibold text-xl">
            Please login to your account
        </p>
    </div>

    <div class="flex flex-col gap-10">
        <div>

            <div class="mb-6 ">
                <Label for="email" class="mb-2">Email address</Label>
                <Input type="email" id="email" placeholder="john.doe@company.com" required class="dark:bg-white" />
              </div>

            <div class="mb-6">
                <Label for="default-input" class="block mb-2">Default input</Label>
                <Input id="default-input" class="bg-white" onchange={(e) => email = (e.target as HTMLInputElement).value ?? ""} type="email" placeholder="Input Your Email" />
              </div>
            <label for="" class="font-bold text-xl text-primary mb-5">Email</label>
            <input class="p-2 px-6 border-2 border-primary rounded-2xl focus:outline-primary w-full">
            {#if errors.find(error => error.path === 'email')}
                <span class="text-red-500 mt-2 text-xs ml-3">{errors.find(error => error.path === 'email')?.message}</span>
            {/if}
        </div>

        <div>
            <label for="" class="font-bold text-xl text-primary mb-5">Password</label>
            <input onchange={(e) => password = (e.target as HTMLInputElement).value ?? ""} type="password" placeholder="Input Your Password" class="p-2 px-6 border-2 border-primary rounded-2xl focus:outline-primary w-full">
            {#if errors.find(error => error.path === 'password')}
                <span class="text-red-500 mt-2 text-xs ml-3">{errors.find(error => error.path === 'password')?.message}</span>
            {/if}
        </div>

        <div class="flex justify-between">
            <div>
                <input type="checkbox" id="rememberMe">
                <label for="rememberMe" class="font-medium text-sm text-primary mb-5">Remember Me</label>
            </div>

            <div class="font-medium text-sm text-primary">
                Forget Password ?
            </div>
        </div>
    </div>
    <button onclick={() => handleLogin()} class={`bg-primary ${loading ? "opacity-50" : ""} flex items-center gap-4 text-white hover:cursor-pointer hover:scale-110 transition-transform duration-300 text-sm  px-10 mt-10 py-3 rounded-xl p-2` }
        disabled={loading}
    >
        {#if loading}
            <Spinner size={5} color="white" />
        {/if}
        Sign In
    </button>
</main>

