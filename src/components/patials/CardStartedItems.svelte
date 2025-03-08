<script lang="ts">
    import { Link } from "svelte-routing";


    export let title : string = "";
    export let link : string = "";

</script>

<div class="bg-white text-primary p-5 rounded-4xl  max-w-[356px] border border-primary flex">

    <div class="flex flex-col justify-center">
        <p class="font-bold text-2xl">
            {title}
        </p>

        <Link to={link} class="bg-primary text-white px-10 py-2 rounded-2xl mt-5 w-[120px]">
            View
        </Link>
    </div>

    <img src="/bg-library.png" alt="" width="200" height="200">
</div>