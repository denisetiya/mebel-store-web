<script>
    import CardLatest from "../patials/CardLatest.svelte";
    import CardMaterialOne from "../patials/CardMaterialOne.svelte";
    import CardMaterialTwo from "../patials/CardMaterialTwo.svelte";
    import CardMaterialThree from "../patials/CardMaterialThree.svelte";
    import CardMaterialFour from "../patials/CardMaterialFour.svelte";
</script>

<div class="flex mt-10 gap-10">
    <div>
        <div class="bg-primary text-white p-20 rounded-4xl flex justify-between ">
        
            <img src="/bg-banner-1.png" alt="" width="240">
        
            <div>
                <p class="font-bold text-4xl">
                    Understanding <br> Transformations in Geometry
                </p>
                <p class="text-xl mt-5">
                    Unlocking the Wonders of Geometry
                </p>
                <button class="bg-[#DEDEDE] text-primary font-semibold text-2xl px-15 py-2 rounded-4xl mt-10"> 
                    View
                </button>
            </div>
        
        </div>
        
        <div class="flex gap-10 mt-10">
            <div class="grid grid-cols-2 gap-10">
                <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
                <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
                <CardMaterialTwo title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
                <CardMaterialTwo title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
                <CardMaterialThree title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
                <CardMaterialFour title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
            </div>
    </div>
    
    
</div>
    <div class="bg-primary text-white p-5 rounded-4xl flex flex-col gap-10">
        <p class="font-bold text-2xl">Recommended Materials</p>
        <CardLatest title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
    </div>

</div>
