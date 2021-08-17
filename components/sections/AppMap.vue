<template>
  <div class="map">
    <div class="map-wrap">
      <img src="img/map.png" alt="Карта наших сотрудников" />
    </div>
    <div class="container border"></div>
  </div>
</template>

<style lang="scss" scoped>
.map {
  position: relative;
  margin: -130px auto;
  .map-wrap {
    min-width: 1000px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}

@media (max-width: 1000px) {
  .map {
    margin: 0 auto;
    overflow-x: scroll;
  }
}
</style>