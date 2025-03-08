<script lang="ts">
    export let title: string = "";
    export let url: string = "";
    export let rating: number = 0;

    import { Star } from "phosphor-svelte";
    import { Link } from "svelte-routing";
</script>

<div class=" flex w-[256px] shadow-2xl rounded-4xl">
    <div class="bg-[#FFEAEA] w-20 rounded-l-2xl border border-slate-300">
    
    </div>

    <div class="flex flex-col p-5 gap-5 py-5 bg-[#FF725E] rounded-r-2xl">
        <div class="font-semibold text-white">
            {title}
        </div>
    
        <div class="flex gap-4 mb-10 ">
            {#if rating}
                {#each Array.from({ length: Math.floor(rating) }) as _}
                    <Star size={16} weight="fill" class="text-white" />
                {/each}
            {/if}
        </div>
    
        <Link to={url} class="bg-[#F5EDE5] text-[#573F3A] px-10 py-2 rounded-2xl w-30 hover:scale-110 transition-transform duration-300">
            View
        </Link>
    </div>


</div>
