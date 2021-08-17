<template>
  <h2 class="h2 t-white" :class="{ sub: sub }">
    {{ text }}
    <span v-if="sub" class="t-b t-blue">{{ sub }}</span>
  </h2>
</template>

<script>
export default {
  props: ["text", "sub"],
};
</script>

<style lang="scss" scoped>
.sub {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  span {
    margin-top: 10px;
    max-width: 580px;
    width: 100%;
  }
}
</style>