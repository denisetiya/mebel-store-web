<script>
    
    import menuList from "../data/MenuList";
    import helpMenu from "../data/HelpMenu";

</script>


<main class="px-[54px]">
    <div class="flex gap-50 w-full justify-center p-10">
        
        <div>
            <p class="font-medium mb-5">Mebel Store</p>
    
            <p class="text-gray-500 text-sm max-w-[285px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
        </div>
    
        <div class="flex flex-col gap-7">
            <p class="mb-5 text-gray-500">Link Menu</p>
            {#each menuList as menu}
                <a
                    href={menu.url}
                    class="hover:cursor-pointer hover hover:text-[#B88E2F] transition-colors duration-300"
                    >{menu.name}</a
                >
            {/each}
        </div>
    
        <div class="flex flex-col gap-7">
            <p class="mb-5 text-gray-500">Help Menu</p>
            {#each helpMenu as menu}
                <a
                    href={menu.url}
                    class="hover:cursor-pointer hover hover:text-[#B88E2F] transition-colors duration-300"
                    >{menu.name}</a
                >
            {/each}
        </div>

        <div>
            <p class="mb-5 text-gray-500 focus:outline-none">News letter</p>

            
            <div class="flex gap-2">
                <input type="text" class="border-b-2">
                <button>Subscribe</button>
            </div>

        </div>
    
    </div>
    <div class=" border-t-2 border-gray-300 w-full p-5">
        2025 Mebel Store. All Rights Reserved
    </div>
    
</main>