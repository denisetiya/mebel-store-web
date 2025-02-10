<script lang="ts">
  
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Navbar from "./components/widget/Navbar.svelte";

</script>

<Router>
  {#if globalThis.location.pathname !== '/auth'}
    <Navbar />
  {/if}

  <Route path="/" component={Home} />

</Router>
