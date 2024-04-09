<template>
    <div>
      <Navbar />
      <main>
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