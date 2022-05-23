<template>
  <div>
    <section
      v-for="item in slidersBlocks"
      :key="item.index"
      class="project"
      style="overflow: hidden"
    >
      <div class="project__container">
        <div class="wrapper">
          <h2 class="project__title">{{ item.title }}</h2>
          <div class="line" style="width: 200px" />
          <p class="project__desription">
            {{ item.description }}
          </p>
        </div>
      </div>

      <div class="slider-container">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          navigation
          :pagination="{ clickable: true }"
          id="swiper-projects"
        >
          <SwiperSlide v-for="img in item.swipersImg" :key="img"
            ><img :src="`/assets/img/${img}`"
          /></SwiperSlide>
        </Swiper>
        <UIApplicationBtn style="padding: 16px 0" />
      </div>
    </section>
  </div>
</template>

<script>
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Navigation, Pagination, A11y],
    };
  },
  data() {
    return {
      slidersBlocks: [
        {
          title: "Разработка сайтов",
          description:
            "Мы проводим глубокий анализ каждого проекта. Используем комплексный подход к проектированию прототипов и программной разработке, учитывающий особенности сферы деятельности вашего бизнеса.",
          swipersImg: [
            "make-site/one.png",
            "make-site/two.png",
            "make-site/three.png",
            "make-site/four.png",
            "make-site/five.png",
          ],
        },
        {
          title: "Редизайн сайтов",
          description:
            "Мы перерабатываем новое визуальное оформление вашего веб-сайта, навигацию и его содержимое для повышения его производительности и новых клиентов.",
          swipersImg: [
            "redisign/one.png",
            "redisign/two.png",
            "redisign/three.png",
            "redisign/four.png",
          ],
        },
        {
          title: "Брэндинг",
          description:
            "Мы разрабатываем уникальную концепцию бренда вашей компании от логотипа до корпоративного стиля. Разрабатываем индивидуальный дизайн визиток, готовим материал к передачи в типографию. Разрабатываем дизайн упаковки товара.",
          swipersImg: [
            "brending/one.png",
            "brending/two.png",
            "brending/three.png",
            "brending/four.png",
            "brending/five.png",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#swiper-projects .swiper-button-prev {
  left: 20%;
}
#swiper-projects .swiper-button-next {
  right: 20%;
}
#swiper-projects .swiper-slide {
  margin: auto;
}
#swiper-projects img {
  max-height: 600px;
  width: auto;
  margin: auto;
}

@media screen and (max-width: 1280px) {
  #swiper-projects .swiper-button-prev {
    left: 10px;
  }
  #swiper-projects .swiper-button-next {
    right: 10px;
  }
}

@media screen and (max-width: 980px) {
  #swiper-projects .swiper-button-prev,
  #swiper-projects .swiper-button-next,
  #swiper-projects .swiper-pagination {
    display: none;
  }
  #swiper-projects img {
    max-width: 500px;
  }
  .project__container {
    padding: 12px 0;
  }
  .project__title {
    font-size: 28px;
    margin-bottom: 16px;
  }
  .project__desription {
    text-align: left;
    margin-top: 8px;
    padding: 0;
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  #swiper-projects img {
    max-width: 300px;
  }
}
</style>
