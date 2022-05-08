<template>
  <section class="clients">
    <div class="clients__container wrapper">
      <h2 class="clients__title">{{ title }}</h2>
      <p class="clients__description">
        {{ subtitle }}
      </p>
    </div>
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      autoplay
      id="clients-swiper"
    >
      <SwiperSlide v-for="img in slides" :key="img.id"
        ><img :src="`/assets/img/clients/${img}.png`"
      /></SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Navigation, A11y, Autoplay],
    };
  },
  data() {
    return {
      title: "Наши клиенты",
      subtitle: "Компании, которые доверились нам и остались довольны.",
      slides: ["enegro", "eskinvest", "enegro"],
    };
  },
};
</script>

<style lang="scss">
.swiper-slide {
  display: flex;
  justify-content: center;
  & > img {
    max-height: 100px;
    text-align: center;
  }
}
@media screen and (max-width: 960px) {
  #clients-swiper .swiper-button-prev,
  #clients-swiper .swiper-button-next {
    display: none;
  }
  .clients {
    padding: 30px 0;
  }
  .clients__container {
    margin-bottom: 0;
  }
  .clients__title {
    font-size: 28px;
    text-align: center;

    margin-bottom: 0;
  }
  .clients__description {
    font-size: 16px;
  }
}
</style>
