<script lang="ts">
    import { navigate } from "svelte-routing";
    import { Motion } from 'svelte-motion'

    // setTimeout(() => {
    //     navigate("/home");
    // }, 4000);

</script>

<main class="h-screen w-screen bg-primary flex flex-col justify-center items-center">

    <div class="flex justify-center items-center text-white font-bold">
        <span class="text-7xl tracking-[20px]">
            Ge 
        </span>
        <Motion 
        animate={{ rotate: 360 }}
        transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity                
        }}
        let:motion
        >
            <img src="/logo.png" alt="" class="" use:motion>
        </Motion>
        <span class="ml-20 text-7xl tracking-[20px]">
            Education
        </span>
    </div>

    <p class="text-white text-2xl mt-10">
        Simplifying Geometry for Every Learner
    </p>

    <button onclick={() => navigate('/home')} class="p-6 bg-white text-primary mt-20 rounded-4xl font-bold text-xl px-20 hover:px-30 transition-all duration-300 hover:cursor-pointer">
        Start
    </button>
</main>