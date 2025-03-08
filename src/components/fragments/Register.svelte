<script>
    import Input from "../patials/Input.svelte";
</script>



<main class="">


    <div class="text-primary mb-20">
        <p class="font-bold text-4xl">
            Welcome to Geoducation!
        </p>
        <p class="font-semibold text-xl">
            Register Your Account
        </p>
    </div>

    <div class="flex flex-col gap-10">
        <div>
            <label for="" class="font-bold text-xl text-primary mb-5">Name</label>
            <Input name="name" placeholder="Input Your Name" />
        </div>

        <div>
            <label for="" class="font-bold text-xl text-primary mb-5">Email</label>
            <Input name="email" placeholder="Input Your Email" />
        </div>

        <div>
            <label for="" class="font-bold text-xl text-primary mb-5">Password</label>
            <Input name="password" placeholder="Input Your Password" />
        </div>

    </div>
    <button class="bg-primary text-white text-sm  px-10 mt-10 rounded-xl p-2">
        Sign Up
    </button>


</main>