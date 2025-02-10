<script lang="ts">
  
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Navbar from "./components/widget/Navbar.svelte";
  import Footer from "./components/widget/Footer.svelte";

</script>

<Router>
  {#if globalThis.location.pathname !== '/auth'}
    <Navbar />
  {/if}

  <Route path="/" component={Home} />


  {#if globalThis.location.pathname !== '/auth'}
  <Footer />
  {/if}

</Router>
