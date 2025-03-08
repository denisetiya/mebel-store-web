<script lang="ts">
    import {Route, useLocation} from 'svelte-routing'
    import Sidebar from './components/widget/Sidebar.svelte';
    import Footer from './components/widget/Footer.svelte';
    import Splash from './components/fragments/Splash.svelte';
    import Auth from './pages/Auth.svelte';
    import Home from './pages/Home.svelte';
    import Profile from './pages/Profile.svelte';
    import Settings from './pages/Settings.svelte';
    import Overview from './pages/Overview.svelte';
    import Feedback from './pages/Feedback.svelte';
    import Writefeedback from './pages/Writefeedback.svelte';
    import LibraryPage from './pages/LibraryPage.svelte';
    import SplashExercise from './components/fragments/SplashExercise.svelte';
    import SplashMoodTes from './components/fragments/SplashMoodTes.svelte';
    import SplashExerciseDifficulty from './components/fragments/SplashExerciseDifficulty.svelte';
    import MoodTes from './pages/MoodTes.svelte';
    import Exercise from './pages/Exercise.svelte';

    const location = useLocation();
    
    $: currentPath = $location.pathname;
    const noSidebarAndFooterPaths = ['/auth', '/', '/feedback', '/writefeedback', '/splash/exercise', '/splash/mood', '/splash/difficulty'];
    $: showSidebarAndFooter = !noSidebarAndFooterPaths.includes(currentPath);
    
</script>

<div class="flex w-[100%]">
    {#if showSidebarAndFooter}
      <Sidebar />
    {/if} 
    <div class={showSidebarAndFooter ? 'w-[100%] px-60' : ''}>
        <!-- <img src="/bg-auth.png" alt="" class="top-0 left-20 z-[-1] h-full fixed opacity-50">  -->
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Splash} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />       
        <Route path="/overview" component={Overview} />
        <Route path="/library" component={LibraryPage} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/writefeedback" component={Writefeedback} />
        <Route path="/splash/exercise" component={SplashExercise} />
        <Route path="/splash/difficulty" component={SplashExerciseDifficulty} />
        <Route path="/splash/mood" component={SplashMoodTes} />
        <Route path="/moodtes" component={MoodTes} />
        <Route path="/exercise" component={Exercise} />
    </div>


      {#if showSidebarAndFooter}
        <Footer />
      {/if}
</div>