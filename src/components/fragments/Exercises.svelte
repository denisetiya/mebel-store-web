<script>
    import CardLatest from "../patials/CardLatest.svelte";
    import CardMaterialOne from "../patials/CardMaterialOne.svelte";
    import CardMaterialTwo from "../patials/CardMaterialTwo.svelte";
    import CardMaterialThree from "../patials/CardMaterialThree.svelte";
    import CardMaterialFour from "../patials/CardMaterialFour.svelte";
</script>

<div class="flex mt-10 gap-10">
    <div>
        <div class="bg-primary text-white p-15 items-center rounded-4xl flex justify-between ">
        
            
            <div>
                <p class="font-bold text-4xl">
                    Let’s Solve and Evolve!
                </p>
                <p class="text-xl mt-5">
                    You learned 25% from all  <br> materials this weeks!
                </p>
                
            </div>
            <img src="/banner-exercise.svg" alt="" width="240">
        
        </div>
        
        <div class="flex gap-10 mt-10">
            <div class="grid grid-cols-2 gap-10">
                <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" link="/splash/mood"/>
                <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
                <CardMaterialTwo title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
                <CardMaterialTwo title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
                <CardMaterialThree title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
                <CardMaterialFour title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
            </div>
    </div>
    
    
</div>
    <div class="bg-primary text-white p-5 rounded-4xl flex flex-col gap-10">
        <p class="font-bold text-2xl">Recommended Exercises</p>
        <CardLatest title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
    </div>

</div>
