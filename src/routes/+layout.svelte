<script lang='ts'>
  import "../app.css";
  import { fade } from "svelte/transition"

  export let data;

  $: currentPage = data.url;

  let menuOpen = false;
  let menuItems = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      setTimeout(function(){
        menuItems = !menuItems;
      }, 200)
    } else {
      setTimeout(function(){
        menuItems = !menuItems;
      }, 100)
    }
  };

</script>
  
<div class="h-screen flex flex-col items-center 
            bg-gradient-to-br from-gray-900 via-gray-950 to-gray-950 overflow-hidden">
  <nav class="h-10 w-[85%] bg-blue-950 bg-opacity-30 z-20 my-4 px-8 sm:px-16 rounded-lg sm:h-12 sm:w-[92%]
          flex flex-col antialiased text-gray-100 transition-all duration-500" class:h-20={menuOpen}>
          <div class="w-full flex flex-row justify-between items-center antialiased">
            <a href="/" class="font-madi text-4xl sm:text-6xl cursor-pointer relative sm:right-6 sm:top-1 lg:left-12">
              Matheus Souza
            </a>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="sm:hidden text-xl opacity-80" on:click={toggleMenu}>
              <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
            </div>
            <!-- Desktop menu items -->
            <div class="hidden sm:flex relative bottom-1.5 gap-24">
              <a href="/" class="navItem" class:active={currentPage == '/'}>About</a>
              <a href="/stack" class="navItem" class:active={currentPage == '/stack'}>Tech Stack</a>
              <a href="/projects" class="navItem" class:active={currentPage == '/projects'}>Projects</a>
            </div>
          </div>
          <!-- Mobile menu items -->
          <div class="sm:hidden py-3 w-full flex justify-around" class:hidden={!menuItems}>
            <a href="/" class="navItem" class:active={currentPage == '/'}>About</a>
            <a href="/stack" class="navItem" class:active={currentPage == '/stack'}>Tech Stack</a>
            <a href="/projects" class="navItem" class:active={currentPage == '/projects'}>Projects</a>
          </div>
  </nav>
  <main class="h-[85%] w-[85%] sm:w-[92%] rounded-lg flex items-center justify-center bg-blue-950 bg-opacity-30 relative overflow-auto">
        {#key currentPage}
          <div class="h-full w-full flex items-center justify-center absolute"
          in:fade={{ duration: 700, delay: 350}} out:fade={{ duration: 350 }}>
            <slot/>
          </div>
        {/key}
  </main>
</div>