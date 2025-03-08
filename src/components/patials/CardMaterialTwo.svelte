<script lang="ts">

    export let title : string = "";
    export let thumbnail : string = "";
    export let type : string = "";
</script>


<div class="bg-[#DDD2C8] text-[#573F3A] p-5 rounded-4xl  max-w-[456px] border border-primary flex gap-10 relative">
    <div class="z-10">
        <p class="absolute top-0 left-5 text-[#573F3A] p-2">{type}</p>
        <img src="{thumbnail}" alt="" width="260" height="178" class="mt-3">
    </div>

    <div class="flex flex-col mb-15">
        <p class="font-bold text-2xl">
            {title}
        </p>

        <button class="bg-[#F5EDE5] text-[#573F3A] px-10 py-2 rounded-2xl absolute bottom-5 right-3 z-10">
            View
        </button>
    </div>
    <div class="bg-[#897F76] h-[75px] w-full absolute right-0 bottom-0 rounded-b-4xl ">
    
    </div>
</div>