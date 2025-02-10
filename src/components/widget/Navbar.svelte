<script lang="ts">
  import logo from "../../assets/logo.png";
  import iconList from "../data/IconMenu";
  import menuList from "../data/MenuList";



</script>

<main class="flex justify-between items-center px-[54px] py-[33px] fixed top-0 w-full bg-white/30 z-50 backdrop-blur-sm">
  <div class="flex gap-2 items-center">
    <img src={logo} alt="logo" />
    <p class="font-semibold text-3xl">Mabel Store</p>
  </div>
  <div class="flex gap-10 font-medium">
    {#each menuList as menu}
      <a
        href={menu.url}
        class="hover:cursor-pointer hover hover:text-[#B88E2F] transition-colors duration-300"
        >{menu.name}</a
      >
    {/each}
  </div>
  <div class="flex gap-10 items-center">
    {#each iconList as Icon}
      <div
        class="hover:cursor-pointer hover hover:text-[#B88E2F] transition-colors duration-300"
      >
      <a href={Icon.url}>
          <Icon.logo size={32} />
      </a>
      </div>
    {/each}
  </div>
</main>
