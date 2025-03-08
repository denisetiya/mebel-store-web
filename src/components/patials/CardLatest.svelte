<script lang="ts">

    export let title : string = "";
    export let thumbnail : string = "";
    export let type : string = "";
</script>


<div class="">
    <p class="text-white ml-2 mb-1">
        { type}
    </p>
    <div class="flex bg-white p-5 rounded-4xl w-[300px]" >
        <div class="flex flex-col gap-5">
            <p class="font-bold text-xl text-primary">
                {title}
            </p>
    
            <button class="bg-primary text-white px-1 py-1 text-sm rounded-2xl">
                View
            </button>
        </div>
    
        <img src="{thumbnail}" alt="" width="130" height="88" class="mt-3">
    </div>
</div>