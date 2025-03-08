
<script lang="ts">

    import { CaretDoubleLeft } from "phosphor-svelte";
    import { Link } from "svelte-routing";

    let choice = [
        {
            question: "Bagaimana perasaan mu hari ini?",
            options: ["Sangat Bahagia", "Bahagia", "Netral", "Sedih", "Sangat Sedih"]
        },
        {
            question: "Bagaimana tingkat energimu saat ini?",
            options: ["Sangat Banyak", "Banyak", "Sedang", "Sedikit", "Sangat Sedikit"]
        },
        {
            question: "Bagaimana suasana hatimu hari ini?",
            options: ["Sangat Tenang", "Tenang", "Netral", "Gelisah", "Sangat Gelisah"]
        }

    ]
</script>

<main >


    <div class="bg-white text-primary mt-20 text-3xl font-bold">
        
        <div class="flex gap-2 items-center">
            <Link to="/splash/mood">
                <CaretDoubleLeft size={32} weight="bold" />
            </Link>
            <img src="/logo-text-2.png" alt="">
        </div>

        <p class="mt-5 ml-7">
            Yuk, kita cek bagaimana suasana hati mu sebelum kita mulai!
        </p>
    </div>
    <div class="grid grid-cols-3 gap-10 p-10 justify-center">

        {#each choice as c}
            <div class="border p-10 rounded-4xl relative" >
                <div class="mb-5 pr-15 relative">
                    <p class="absolute top-1 right-0 text-primary text-xs">
                        {choice.indexOf(c) + 1} / {choice.length}
                    </p>
                    {c.question}
                </div>

                <div class="flex flex-col gap-5">
                    {#each c.options as o}
                        <div class="flex gap-5 bg-[#D9D9D9] p-1 rounded-2xl px-4">
                            <label class="flex items-center gap-2">
                                <input type="radio" name={c.question} value={o}>
                                <p class="">
                                    {o}
                                </p>
                            </label>
                        </div>
                    {/each}

                </div>
            </div>
        {/each}

    </div>

        <div class="flex justify-end">
            <Link to="/splash/exercise" class="z-10 p-3 bg-primary text-white mt-20 rounded-4xl font-medium  px-15 hover:px-20 transition-all duration-300 hover:cursor-pointer">
                Mulai Tes
            </Link>
        </div>

</main>