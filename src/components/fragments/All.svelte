<script lang="ts">
    
    import CardLatest from "../patials/CardLatest.svelte";
    import CardMaterialOne from "../patials/CardMaterialOne.svelte";
    import CardMaterialTwo from "../patials/CardMaterialTwo.svelte";
    import CardMaterialThree from "../patials/CardMaterialThree.svelte";
    import CardMaterialFour from "../patials/CardMaterialFour.svelte";

</script>

<div class="bg-primary text-white p-20 rounded-4xl flex justify-between mt-10">

    <div>
        <p class="font-bold text-6xl">
            Explore the world of <br>
            geometry with Geoducation!
        </p>
        <p class="text-xl mt-10">
            Unlocking the Knowledge of Geometry
        </p>
    </div>

    <img src="/bg-banner-1.png" alt="" width="340">

</div>

<div class="flex gap-10 mt-10">
    <div class="grid grid-cols-2 gap-10">
        <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
        <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
        <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
        <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
        <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
        <CardMaterialOne title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
    </div>

    <div class="bg-primary text-white p-5 rounded-4xl flex flex-col gap-10">
        <p class="font-bold text-2xl">Latest Learned</p>
        <CardLatest title="Two Dimensional Shape" thumbnail="/card-thumnail.svg" type="Material" />
    </div>

</div>
