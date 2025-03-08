<script lang="ts">
    import { Link } from "svelte-routing";
    import { CaretDoubleLeft } from "phosphor-svelte";

    let numberQuestion : number = 10

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

<main>

        <div class="flex justify-between mt-10 items-center align-middle ">
            <div class="flex items-center">
                <Link to="/home">
                    <CaretDoubleLeft size={32} weight="bold" class="text-primary ml-10" />
                </Link>
                <img src="/logo-text-2.png" alt="" class="mt-1"  >
            </div>
            <p class="font-semibold text-2xl text-primary flex gap-4 items-center mt-2">
                Exercise
            </p>
        </div>

        <div class="px-10 bg-[#EBFFF1] font-semibold max-w-30 shadow-2xl border border-slate-300 py-3 rounded-xl mt-10">
            Easy
        </div>

        <div class="flex justify-center items-center flex-col">
            <p class="font-bold text-2xl text-white bg-primary rounded-t-3xl px-20 py-5 ">
                Bangun Datar
            </p>
            <div class="bg-primary rounded-3xl text-white p-10 w-full h-full flex gap-10">

                <div class="flex flex-col">

                    <div class="bg-white text-primary p-5 rounded-4xl grid grid-cols-3 gap-3 w-70">

                        {#each Array(numberQuestion) as _}
                            <div class="bg-slate-300 w-15 h-15 rounded-xl">

                            </div>
                        {/each}

                    </div>

                    <img src="/bg-exercise-list.svg" alt="" width="300" >
                </div>

                <div class="flex flex-col gap-10">

                    <div class="bg-white text-primary p-10 text-justify rounded-4xl text-2xl">
                        Sebuah persegi panjang memiliki panjang 16 cm dan lebar 12 cm. Di dalamnya dibuat sebuah lingkaran dengan diameter maksimum yang bisa dimuat. Berapakah sisa area persegi panjang yang tidak tertutup lingkaran?
                    </div>

                    <div class="bg-white text-primary p-5 rounded-4xl">
                        
           
                        {#each choice[0].options as c, i}
                            <div class="flex mt-4 bg-white shadow border-slate-300 border p-3 rounded-2xl px-4">
                                <label class="flex items-center gap-2">
                                    <input type="radio" name={choice[0].question} value={c} id={`option-${i}`}>
                                    <p class="">
                                        {c}
                                    </p>
                                </label>
                            </div>
                        {/each}

                    </div>
        
                    <div class="flex justify-end">
                        <button class="bg-white px-5 py-2 rounded-2xl text-primary hover:px-6 transition-all duration-300 hover:cursor-pointer ">
                            Selanjutnya
                        </button>
                    </div>
                </div>

            </div>

        </div>

</main>