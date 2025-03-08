<script lang="ts">
    import { Link } from "svelte-routing";
    import { CaretDoubleLeft } from "phosphor-svelte";


    // setTimeout(() => {
    //     navigate("/home");
    // }, 4000);

</script>

<main class="h-screen w-screen bg-primary flex flex-col relative">
    <div class="flex items-center">
        <Link to="/splash/mood">
            <CaretDoubleLeft size={22} weight="bold" class="text-white ml-10" />
        </Link>
        <img src="/logo-text.png" alt="" width="250">
    </div>
    <img src="/bg-dificulty.svg" alt="" class="absolute top-0 w-screen">
    <div class="text-white z-10 mt-20 pl-40">
        <p class="text-5xl font-bold ">
            Hai, Alya...
        </p>
        <p>
            Let’s choose your level before we begin!
        </p>

    </div>
    <div class="flex w-full h-full rounded-t-[50px] p-10 bg-white z-10 mt-20 justify-center items-center gap-40">

        <div class="flex flex-col gap-10 justify-center">
            <Link to="/exercise" class="p-20 px-40 rounded-4xl bg-[#EBFFF1] font-bold text-2xl shadow-2xl border border-slate-300 hover:shadow-amber-400 transition-all hover:cursor-pointer duration-300">
                Easy
            </Link>

            <div class="p-20 px-40 rounded-4xl bg-[#FFF0C7] font-bold text-2xl shadow-2xl border border-slate-300 hover:shadow-amber-400 transition-all hover:cursor-pointer duration-300">
                Medium
            </div>

            <div class="p-20 px-40 rounded-4xl bg-[#FFC5C0] font-bold text-2xl shadow-2xl border border-slate-300 hover:shadow-amber-400 transition-all hover:cursor-pointer duration-300">
                Hard
            </div>
        </div>

        <img src="/bg-difficulty-body.svg" alt="">

    </div>

</main>