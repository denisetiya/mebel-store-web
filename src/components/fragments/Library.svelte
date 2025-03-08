<script>
    import CardLibraryOne from "../patials/CardLibraryOne.svelte";
    import CardLibraryTwo from "../patials/CardLibraryTwo.svelte";
    import CardLibraryThree from "../patials/CardLibraryThree.svelte";

</script>


<div>

    <div class="bg-primary text-white p-20 rounded-4xl flex justify-between mt-10">
    
        <div>
            <p class="font-bold text-6xl">
                Explore the world of <br>geometry with GeoLibrary!
            </p>
            <p class="text-xl mt-10">
                Unlocking the Knowledge of Geometry
            </p>
        </div>
    
        <img src="/bg-library.png" alt="" width="340">
            
    </div>
    
    <div class="mt-10 flex gap-10">
        <CardLibraryOne title="Sejarah Bentuk dan Ruang yang Mengubah Dunia" rating={4}  url="/"/>
        <CardLibraryTwo title="Sejarah Bentuk dan Ruang yang Mengubah Dunia" rating={4}  url="/"/>
        <CardLibraryThree title="Sejarah Bentuk dan Ruang yang Mengubah Dunia" rating={4}  url="/"/>
    </div>
</div>