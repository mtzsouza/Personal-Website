<script lang='ts'>
    import "../app.css";

    let menuOpen = false;
    let menuItems = false;

    const toggleMenu = () => {
      menuOpen = !menuOpen;
      if (menuOpen) {
        setTimeout(function(){
          menuItems = !menuItems;
        }, 180)
      } else {
        setTimeout(function(){
          menuItems = !menuItems;
        }, 100)
      }
    };

</script>
  
<div class="h-screen flex flex-col items-center 
            bg-gradient-to-br from-gray-900 via-gray-950 to-gray-950">
  <nav class="h-10 w-[85%] bg-blue-950 bg-opacity-30 z-20 my-4 px-8 sm:px-16 rounded-lg sm:h-12 sm:w-[92%]
          flex flex-col antialiased text-gray-100 transition-all duration-500"
          class:h-20={menuOpen}>
          <div class="w-full flex flex-row justify-between items-center antialiased">
            <h1 class="font-madi text-4xl sm:text-6xl cursor-pointer relative sm:right-6 sm:top-1">
              Matheus Souza
            </h1>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="sm:hidden text-xl opacity-70" on:click={toggleMenu}>
              <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
            </div>
            <div class="hidden sm:flex relative bottom-1.5 gap-24">
              <div class="navItem active">Home</div>
              <div class="navItem">Projects</div>
              <div class="navItem">Contact</div>
            </div>
          </div>
          <div class="sm:hidden py-3 w-full flex justify-around" class:hidden={!menuItems}>
            <div class="navItem active">Home</div>
            <div class="navItem">Projects</div>
            <div class="navItem">Contact</div>
          </div>
  </nav>
  <div class="h-[85%] w-[85%] sm:w-[92%] rounded-lg flex items-center justify-center bg-blue-950 bg-opacity-30">
    <slot />
  </div>
</div>