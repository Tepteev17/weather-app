<template>
    <div>
      <Navbar />
      <main class="py-4">
        <div class="">
          <nuxt/>
        </div>
      </main>
    </div>
  </template>
  <script>
  import Navbar from "@/components/navbar-weather-location";
  export default {
    components: {
      Navbar
    },
  };
  </script>
  <style></style>