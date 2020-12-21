<template>
  <div class="all-shows-by genre">
    {{ genre }}
  </div>
</template>

<script>
export default {
  name: "AllShowsByGenres",
  props: {
    genre: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>
