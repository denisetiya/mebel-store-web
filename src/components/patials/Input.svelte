<script lang="ts">

    export let type : string = "text";
    export let placeholder : string = "";
    export let id : string = "";
    export let name : string = "";

</script>


<div class="flex gap-2 flex-col ">
    <input id={id} type={type} placeholder={placeholder} name={name} class="p-2 px-6 border-2 border-primary rounded-2xl focus:outline-primary w-full">
</div>