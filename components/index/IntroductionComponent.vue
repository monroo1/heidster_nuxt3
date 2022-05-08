<template>
  <section class="introduction">
    <div class="introduction-title wrapper">
      <h1 class="introduction-title__title">{{ title }}</h1>
      <span class="introduction-title__subtitle">
        {{ subtitle }}
      </span>
      <p class="introduction-title__description">{{ description }}</p>
      <UIApplicationBtn style="justify-content: flex-start"
        >Оставить заявку</UIApplicationBtn
      >
    </div>

    <div class="introduction-description wrapper">
      <div
        class="introduction-description__card"
        v-for="card in introductionCards"
        :key="card.id"
      >
        <h2 class="introduction-description__card-title">
          <svg
            class="t997__checkmark"
            style="width: 20px; height: 20px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.70711 13.2071L15.2071 7.70711L13.7929 6.29289L9 11.0858L6.20711 8.29289L4.79289 9.70711L8.29289 13.2071L9 13.9142L9.70711 13.2071Z"
              fill="#141b69"
            />
          </svg>
          {{ card.title }}
        </h2>
        <p class="introduction-description__card-description">
          {{ card.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Heidster Studio",
      subtitle: "Консультируем, программируем, рисуем и творим",
      description: `
        Нужно создать уникальный дизайн?
        Хотите увеличить продажи или повысить положение сайта в сети?
        Обращайтесь – мы всегда рады помочь вам в решении ваших задач.
      `,
      introductionCards: [
        {
          title: "Разработка сайтов",
          description:
            "Мы проводим глубокий анализ каждого проекта. Используем комплексный подход к проектированию прототипов и программной разработке, учитывающий особенности сферы деятельности вашего бизнеса.",
        },
        {
          title: "Редизайн сайтов",
          description:
            "Мы перерабатываем новое визуальное оформление вашего веб-сайта, навигацию и его содержимое для повышения его производительности и новых клиентов.",
        },
        {
          title: "Брендинг компании",
          description:
            "Мы разрабатываем уникальную концепцию бренда вашей компании от логотипа до корпоративного стиля.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.introduction-title__description {
  max-width: 60%;
}
@media screen and (max-width: 960px) {
  .introduction-title__description {
    padding: 0;
    font-size: 14px;
    max-width: 100%;
  }
  .introduction-description {
    margin-top: 40px;
  }
  .introduction-description__card-title {
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 0;
  }
  .introduction-description__card-description {
    font-size: 14px;
  }
}
</style>
