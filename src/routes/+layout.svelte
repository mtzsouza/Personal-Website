<script lang='ts'>
    import "../app.css";
</script>
  
<div class="min-h-screen h-screen flex flex-col items-center bg-gradient-to-br overdflow-hidden
          from-gray-900 via-gray-950 to-gray-950">
  <nav class="h-16 w-[85%] bg-gray-800 z-20 my-4 px-8 sm:px-16 rounded-lg sm:h-12 sm:w-[92%]
          flex justify-between items-center antialiased text-gray-100 ">
          <div>
            <h1 class="font-madi text-4xl sm:text-6xl cursor-pointer relative sm:right-6 sm:top-1.5">
              Matheus Souza
            </h1>
          </div>
          <div class="sm:hidden text-xl opacity-70">
            <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
          </div>
          <div class="hidden sm:flex justify-items-start gap-24">
            <div class="navItem">Story</div>
            <div class="navItem">Projects</div>
            <div class="navItem">Contact</div>
          </div>
  </nav>
  <div class="h-full w-full flex items-center justify-center">
    <slot />
  </div>
</div>