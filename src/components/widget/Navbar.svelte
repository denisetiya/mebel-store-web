<script lang="ts">
    import logo from "../../assets/logo.png"
    import { ListHeart, User, MagnifyingGlass,ShoppingCart } from "phosphor-svelte";

    const menuList = [
        {
            name: 'Home',
            url : '/'
        }, {
            name : 'shop',
            url : '/shop'
        }, {
            name : 'About',
            url : '/about'
        }, {
            name : 'Contact',
            url : '/contact'
        }, {
            name : 'Cart',
            url : '/cart'
        }, {
            name : 'wishlist',
            url : '/wishlist'
        }
    ]

    const iconList = [
        User,
        MagnifyingGlass,
        ListHeart,
        ShoppingCart
    ]



</script>


<main class="flex justify-between items-center px-[54px] py-[33px]">
    <div class="flex gap-2 items-center">
        <img src={logo} alt="logo"  />
        <p class="font-semibold text-3xl">Mabel Store</p>
    </div>
    <div class="flex gap-10 font-medium">
        {#each menuList as menu}
            <a href={menu.url} class="hover:cursor-pointer hover hover:text-[#B88E2F] transition-colors duration-300 " >{menu.name}</a>
        {/each}
    </div>
    <div class="flex gap-10 items-center">
        {#each iconList as Icon}
        <div class="hover:cursor-pointer hover hover:text-[#B88E2F] transition-colors duration-300">
            <Icon size={32} />
        </div>
        {/each}
    </div>
</main>