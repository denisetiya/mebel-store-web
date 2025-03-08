<script lang="ts">
    import All from "../components/fragments/All.svelte";
    import Materials from "../components/fragments/Materials.svelte";
    import Library from "../components/fragments/Library.svelte";
    import Exercises from "../components/fragments/Exercises.svelte";
    let activeTab : string = "All";
</script>

<main>
    <div class="flex gap-10 mt-20 ">
        <img src="/logo-text-2.png" alt="">
        <div class="flex-1">
            <input type="search" class="p-2 px-6 border-2 border-primary rounded-2xl focus:outline-primary w-full" placeholder="Search ...">
        </div>
    </div>

    <div class="mt-10">        
        <div class="flex justify-center gap-30 items-center">
            <button onclick={() => activeTab = "All"} class={`${activeTab == "All" ? "text-slate-500" : "text-primary"} font-bold text-xl hover:cursor-pointer`}>
                All
            </button>
        
            <button onclick={() => activeTab = "Materials"} class={`${activeTab == "Materials" ? "text-slate-500" : "text-primary"} font-bold text-xl hover:cursor-pointer`}>
                Materials
            </button>
        
            <button onclick={() => activeTab = "Exercises"} class={`${activeTab == "Exercises" ? "text-slate-500" : "text-primary"} font-bold text-xl hover:cursor-pointer`}>
                Exercises
            </button>
        
            <button onclick={() => activeTab = "Library"} class={`${activeTab == "Library" ? "text-slate-500" : "text-primary"} font-bold text-xl hover:cursor-pointer`}>
                Library
            </button>
        </div>
    </div>

    <div class="flex flex-col justify-center items-center">
        {#if activeTab == "All"}
            <All />
        {:else if activeTab == "Materials"}
            <Materials />
        {:else if activeTab == "Exercises"}
            <Exercises />
        {:else if activeTab == "Library"}
            <Library />
        {/if}
    </div>


</main>