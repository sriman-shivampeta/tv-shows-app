<template>
  <div class="dashboard">
    <div v-for="shows in showsList" :key="shows.id">
      {{ shows }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["showsList"])
  }
};
</script>
