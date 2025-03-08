<script lang="ts">
    import { Link, navigate } from "svelte-routing";


    // setTimeout(() => {
    //     navigate("/home");
    // }, 4000);

</script>

<main class="h-screen w-screen bg-primary flex flex-col justify-center items-center relative">
    <img src="/bg-splash.svg" alt="" class="absolute top-0 w-screen h-screen">


    <img src="/bg-exercise.svg" alt="" class="" >

    <p class="text-white font-bold text-4xl leading-relaxed tracking-[10px]">
        Selamat Mengerjakan !
    </p>

    <Link to="/splash/difficulty" class=" z-10 p-6 bg-white text-primary mt-20 rounded-4xl font-bold text-xl px-20 hover:px-30 transition-all duration-300 hover:cursor-pointer">
        Mulai Tes
    </Link>
</main>