<template>
  <main>
    <section class="contacts">
      <h2 class="contacts__title">
        {{ title }}
      </h2>
      <p class="contacts__title-description wrapper">
        {{ subtitle }}
      </p>
      <div class="contacts__container wrapper">
        <ul class="contacts__list">
          <li v-for="li in ulContacts" :key="li.id" class="contacts__list-item">
            {{ li.content }}
          </li>
        </ul>

        <form class="contacts__form">
          <input
            class="contacts__form-input"
            type="email"
            placeholder="Ваш E-mail"
          />
          <input
            class="contacts__form-input"
            type="text"
            placeholder="Ваше имя"
          />
          <textarea
            class="contacts__form-input"
            placeholder="Текст отзыва"
            rows="450"
          />
          <button class="contacts__form-btn">Отправить</button>
        </form>
      </div>
    </section>
    <section class="contacts-map"></section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Контакты",
      subtitle:
        "Свяжитесь с нами любым удобным способом для вас, мы будем рады сотрудничеству",
      ulContacts: [
        { id: 1, content: "+7 (951) 535 38 39" },
        { id: 2, content: "+7 (950) 858 25 11" },
        { id: 3, content: "heidster.studio@gmail.com" },
        {
          id: 4,
          content:
            "г. Ростов-на-Дону, ул. Металлургическая 102/2, 4 этаж, офис 406",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contacts__form-btn {
  cursor: pointer;
}
.contacts__title-description {
  text-align: center;
}
@media screen and (max-width: 960px) {
  .contacts {
    padding-top: 0;
    padding-bottom: 40px;
  }
  .contacts__title {
    font-size: 28px;
  }
  .contacts__title-description {
    text-align: center;
    font-size: 16px;
  }
  .contacts__container {
    flex-direction: column;
    align-items: center;
    margin-top: 16px;

    & > ul {
      width: 100%;
    }
    & > form {
      width: 100%;
    }
  }
  .contacts__form-input {
    max-width: 100%;
    width: auto;
  }
  .contacts__list-item {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
