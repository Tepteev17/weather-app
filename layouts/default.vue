<template>
  <div>
    <Navbar />
    <main>
      <div class="">
        <nuxt />
      </div>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  middleware:['auth'],
  components: {
    Navbar,
  },
};
</script>
<style></style>
