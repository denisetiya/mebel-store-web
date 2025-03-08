<script lang="ts">

    import Login from "../components/fragments/Login.svelte";
    import Register from "../components/fragments/Register.svelte";
    let activeTab: string = "Login";
    

</script>

<main class="bg-primary h-screen w-screen">

    <div class="flex">
        <img src="/logo-text.png" alt="" class="absolute top-5 left-10">
        <img src="/bg-auth.png" alt="">
        <img src="/bg-auth.png" alt="">

        <!-- <div class="md:w-[943px] border px-20 h-screen rounded-l-4xl bg-white flex flex-col justify-center">
            <Login />
        </div> -->

        <div class="md:w-[943px] border px-20 h-screen rounded-l-4xl bg-white flex flex-col justify-center">

            {#if activeTab == "Login"}
                <Login />
            {:else}
                <Register />
            {/if}

            <div class="flex gap-5 justify-end items-center mb-20 mt-20 ">
                <p class="font-medium">
                    {#if activeTab == "Register"}
                        Already have an account?
                    {:else}
                        Don't have an account?
                    {/if}
                </p>
                <button onclick={() => activeTab = activeTab === "Login" ? "Register" : "Login"} class="bg-slate-300 text-primary text-sm  px-10 rounded-2xl p-2">
                    {activeTab == "Login" ? "Register" : "Login"}
                </button>
            </div>
        </div>

    </div>

</main>