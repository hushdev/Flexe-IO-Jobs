<template>
  <div class="bg-dark">
    <transition name="fade">
      <app-loader v-if="!loaded"/>
    </transition>
    <app-header />
    <app-map />
    <app-about />
    <app-advantages />
    <app-on-touch />
    <app-reviews />
    <app-career />
    <app-how-to />
    <app-faq />
  </div>
</template>

<script>
import AppLoader from "@/components/AppLoader";

import AppHeader from "@/components/sections/AppHeader";
import AppMap from "@/components/sections/AppMap";
import AppAbout from "@/components/sections/AppAbout";
import AppAdvantages from "@/components/sections/AppAdvantages";
import AppOnTouch from "@/components/sections/AppOnTouch";
import AppReviews from "@/components/sections/AppReviews";
import AppCareer from "@/components/sections/AppCareer";
import AppHowTo from "@/components/sections/AppHowTo";
import AppFaq from "@/components/sections/AppFaq";

export default {
  components: {
    AppLoader,
    AppHeader,
    AppMap,
    AppAbout,
    AppAdvantages,
    AppOnTouch,
    AppReviews,
    AppCareer,
    AppHowTo,
    AppFaq,
  },
  data: () => ({
    loaded: false,
  }),
  mounted() {
    document.onreadystatechange = () => {
      setTimeout(() => {
        this.loaded = true;
      }, 500);
    };
  },
};
</script>


<style lang="scss">
.dropdown-enter,
.dropdown-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.dropdown-enter-to,
.dropdown-leave {
  opacity: 1;
  transform: scaleY(1);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s ease-out;
  transform-origin: top center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>