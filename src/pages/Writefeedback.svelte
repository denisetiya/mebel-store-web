
<script lang="ts">


    import {Star, CaretDoubleLeft} from "phosphor-svelte"
    import { Link } from "svelte-routing";

    let name : string = "Alya";
    let rating : number = 5;
    let comment : string = "Aku suka bagaimana materi disusun secara sistematis, mulai dari konsep dasar hingga topik yang lebih kompleks. Ditambah dengan animasi dan simulasi interaktif, aku merasa belajar geometri menjadi lebih hidup. Fitur-fitur seperti ini sangat membantu dalam memahami konsep-konsep abstrak yang seringkali sulit dimengerti hanya dengan teks."

</script>



<main class="bg-primary w-screen h-screen p-20 relative">

    <img src="/geometri.svg" alt="" class="absolute top-0 right-0 z-10">
    <img src="/geometri.svg" alt="" class="absolute top-0 left-0 z-10">
    


    <div class="flex justify-between mt-10 z-10 relative">
        <p class="font-bold text-3xl text-white flex gap-4 items-center">
            <Link to="/overview"> 
                <CaretDoubleLeft size={32} weight="bold" class="text-white" />
            </Link>
            Write Your Feedback
        </p>
        <button class="bg-white text-primary px-10 py-2 rounded-2xl hover:scale-110 hover:cursor-pointer transition-transform duration-300">
            Send
        </button>
    </div>

    <div class="bg-white p-10 rounded-4xl mt-20 z-20">
        <div class="bg-[#FFF9F2] w-full p-8 rounded-4xl shadow-2xl">
            <div>
                <p>
                    {name}
                </p>
            </div>

            <div>
                <textarea name="comment" id="" class="p-2 px-6 border-2 border-primary rounded-2xl focus:outline-primary w-ful h-[500px] w-full my-5" placeholder="Write Your Feedback"></textarea>
            </div>

            <div class="flex justify-between">
                
                <div class="flex gap-2">
                    {#each Array.from({ length: 5 }) as _, i}
                        <Star 
                            size={16} 
                            weight="fill" 
                            class={rating > i ? "text-yellow-500" : "text-slate-400"} 
                            onclick={() => rating = i + 1}
                        />
                    {/each}
                </div>
                <button class="bg-primary text-white px-10 py-2 rounded-2xl hover:scale-110 hover:cursor-pointer transition-transform duration-300">
                    Send
                </button>
            </div>
        </div>
    </div>


</main>