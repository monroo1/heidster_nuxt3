<template>
  <section class="arguments">
    <h2 class="arguments__title wrapper">
      {{ title }}
    </h2>
    <div class="argumnets__container wrapper">
      <div class="arguments__items">
        <article
          v-for="item in contents"
          :key="item.id"
          class="arguments__item"
        >
          <img :src="`/assets/img/${item.icons}.svg`" class="arguments__item-img">
          <h3 class="arguments__item-title">
            {{ item.title }}
          </h3>
          <p class="arguments__item-description">
            {{ item.text }}
          </p>
        </article>
      </div>
      <img src="~/assets/img/arguments.svg" class="arguments__img">
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'Почему именно мы?',
      contents: [
        {
          id: 1,
          title: 'Конфиденциальность',
          icons: 'arguments-item',
          text: 'Мы гарантируем сохранность вашей корпоративной информации от третьих лиц во время работы над проектом и после нее. Мы доверяем нашим клиентам, чтобы они доверяли нам.'
        },
        {
          id: 2,
          title: 'Ответственность',
          icons: 'arguments-item',
          text: 'Мы понимаем важность каждого проекта. Наши сайты не только привлекательны внешне, но и удобны для пользователей и владельцев.'
        },
        {
          id: 3,
          title: 'Гибкость',
          icons: 'arguments-item',
          text: 'Гибкая и поэтапная разработка, которая экономит ваше время и деньги.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @media screen and (max-width: 960px){
    .arguments {
      padding: 30px 0;
    }
    .arguments__title {
      margin-bottom: 20px;
      font-size: 28px;
    }
    .arguments__item-img {
      width: 35px;
      height: 35px;
    }
    .arguments__item {
      padding-left: 40px;
    }
    .arguments__item-title {
      font-size: 18px;
    }
    .arguments__item-description {
      font-size: 14px;
      margin-top: 0;
    }
  }
</style>