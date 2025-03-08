<script lang="ts">
    import {
      List,
      User,
      HouseLine,
      ChartBarHorizontal,
      GearSix,
    } from "phosphor-svelte";

    
  
    import { navigate, Link } from "svelte-routing";
  
    let activeTabs: string = "home";
  
    function changeTabs(tab: string) {
      activeTabs = tab;
      navigate(`/${tab}`);
    }
  
  </script>
  
  <main class="bg-primary md:h-screen text-white fixed">
    <div class="flex flex-col h-full justify-between p-5">
      <section class="hover:animate-pulse transition-transform duration-300 ease-in-out transform hover:cursor-pointer">
        <Link to="/overview">
          <List size={32} weight="bold" />
        </Link>
      </section>
  
      <section class="flex flex-col gap-20">
        <button onclick={() => changeTabs("profile")} class="relative transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer">
          <User size={32} weight="fill" />
          {#if activeTabs == "profile"}
            <div
              class="bg-white w-[67px] h-[51px] absolute -left-2 top-0 rounded-l-2xl transition-transform duration-300 ease-in-out transform"
            ></div>
            <div class="absolute flex top-2 z-20 text-primary">
              <User size={32} weight="fill" />
            </div>
          {/if}
        </button>
  
        <button onclick={() => changeTabs("home")} class="relative transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer">
          <HouseLine size={32} weight="fill" class="" />
          {#if activeTabs == "home"}
            <div
              class="bg-white w-[67px] h-[51px] absolute -left-2 top-0 rounded-l-2xl transition-transform duration-300 ease-in-out transform"
            ></div>
            <div class="absolute flex top-2 z-20 text-primary">
              <HouseLine size={32} weight="fill" class="" />
            </div>
          {/if}
        </button>
  
        <button onclick={() => changeTabs("library")} class="relative transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer">
          <ChartBarHorizontal
            size={32}
            weight="fill"
            class="transform -rotate-90"
          />
          {#if activeTabs == "library"}
            <div
              class="bg-white w-[67px] h-[51px] absolute -left-2 top-0 rounded-l-2xl transition-transform duration-300 ease-in-out transform"
            ></div>
            <div class="absolute flex top-2 z-20 text-primary">
              <ChartBarHorizontal
                size={32}
                weight="fill"
                class="transform -rotate-90"
              />
            </div>
          {/if}
        </button>
      </section>
  
      <section class="hover:rotate-180 transition-transform duration-300 ease-in-out transform hover:cursor-pointer">
        <Link to="/settings">
          <GearSix size={32} weight="fill" />
        </Link>
      </section>
    </div>
  </main>
  