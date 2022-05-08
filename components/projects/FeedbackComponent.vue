<template>
  <section class="feedback">
    <div class="feedback__container">
      <h2 class="feedback__title">{{ title }}</h2>
    </div>

    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      autoplay
      id="feedback-swiper"
    >
      <SwiperSlide v-for="slide in feedbackSlider.blocks" :key="slide.id"
        ><div class="swiper-slide">
          <div class="feedback__container">
            <div class="feedback__slide">
              <img
                :src="`/assets/img/${slide.img}.jpg`"
                alt="logo.jpg"
                class="feedback__slide-logo"
              />
              <div class="feedback__slide-container">
                <p class="feedback__review">
                  {{ slide.text }}
                </p>
                <p class="feedback__author">{{ slide.author }}</p>
                <p class="feedback__working">
                  {{ slide.authorPosition }}
                  <span class="feedback__working-span">{{
                    slide.authorCompany
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div></SwiperSlide
      >
    </Swiper>
  </section>
</template>

<script>
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Navigation, Pagination, A11y, Autoplay],
    };
  },
  data() {
    return {
      title: "Отзывы",
      feedbackSlider: {
        blocks: [
          {
            author: "Sarah Lewin",
            authorPosition: "Project manager in",
            authorCompany: "Pixels",
            text: "Все понравилось. Ребята из Heidster Studio выполнили работу по разработке сайта и логотипа быстро и в срок, четко по ТЗ. Все разговоры по делу, без лишней суеты. Ни разу не пожалел, что обратился к ним.",
            img: "profile-logo",
          },
          {
            author: "Samuel Willson",
            authorPosition: "Creative director in",
            authorCompany: "DD agency",
            text: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            img: "profile-logo",
          },
          {
            author: "Alex Larkins",
            authorPosition: "Founder of",
            authorCompany: "Pic Pen studio",
            text: "You can't connect the dots looking forward, you can only connect them looking backwards.",
            img: "profile-logo",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 1280px) {
  #feedback-swiper .swiper-button-prev,
  #feedback-swiper .swiper-button-next {
    display: none;
  }
}
@media screen and (max-width: 960px) {
  .feedback__title {
    font-size: 28px;
    margin-bottom: 30px;
  }
  .feedback__slide {
    flex-direction: column;
  }
  .feedback__slide-container {
    padding: 0;
  }
  .feedback__slide {
    padding: 0 24px;

    & > img {
      margin-bottom: 16px;
    }
  }
  .swiper-pagination {
    display: none;
  }
}
</style>
