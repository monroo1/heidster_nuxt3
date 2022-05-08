<template>
  <section class="services">
    <h2 class="services__title">
      {{ titlePage }}
    </h2>
    <p class="services__title-description">
      {{ decrPage }}
    </p>
    <div class="services__container wrapper">
      <div v-for="item in services" :key="item.id" class="services__item">
        <img
          class="services__item-logo"
          :src="`/assets/img/services/${item.img}.png`"
          alt="img"
        />
        <div class="services__item-container">
          <h3 class="services__item-title">
            {{ item.title }}
          </h3>
          <p class="services__item-description">
            {{ item.text }}
          </p>
          <button class="services__item-btn">
            {{ item.btn }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titlePage: "Наши услуги для вас",
      decrPage: `Мы предоставляем широкий список услуг по разработке и редизайну сайтов,
      поисковой оптимизации, созданию бренда и фирменного стиля, а также
      продвижению вашей компании в соц.сетях`,
      services: [
        {
          id: 1,
          img: "website",
          title: "Разработка сайтов",
          text: "Правильно разработанный сайт дает вашей компании возможность приобрести узнаваемость, эффективно развивать свои новые бизнес-идеи и выйти на новый уровень.",
          btn: "Подробнее",
        },
        {
          id: 2,
          img: "redesign",
          title: "Аудит и редизайн",
          text: "Современный и привлекательный дизайн веб-ресурса благоприятно влияет на повышение продаж и позиций сайта в Яндексе и Google. Поэтому обновление сайта нужно проводить каждые 2-3 года.",
          btn: "Подробнее",
        },
        {
          id: 3,
          img: "brending",
          title: "Брендинги ребрендинг",
          text: "Комплекс услуг по разработке названия, фирменного стиля, оформлению упаковки и рекламной продукции. Укрепление интереса потребителей, возвращение их доверия к бренду.",
          btn: "Подробнее",
        },
        {
          id: 4,
          img: "advertising",
          title: "Продвижение и реклама",
          text: "Поисковая оптимизация - надежный способ раскрутки сайта, повышения позиций в выдаче Яндекс и Google по целевым запросам. Разработка стратегии продвижения в соц.сетях и таргет.",
          btn: "Подробнее",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.services__item-logo {
  width: 200px;
  height: 250px;
}

@media screen and (max-width: 960px) {
  .services__item {
    flex-direction: column;
  }
  .services__item-logo {
    width: 100%;
    height: auto;
  }
  .services__item-container {
    width: calc(100% - 20px);
  }
  .services {
    padding-top: 0;
  }
  .services__title {
    font-size: 28px;
  }
  .services__title-description {
    font-size: 16px;
    padding: 0 32px;
    margin: 0;
  }
}
</style>
