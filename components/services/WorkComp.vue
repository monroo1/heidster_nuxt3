<template>
  <section class="work">
    <div class="work__container wrapper">
      <h2 class="work__title">{{ title }}</h2>

      <div class="work__content">
        <div class="work__line">
          <span
            class="work__line-item"
            v-for="number in workLineNumber"
            :key="number"
            >{{ number }}</span
          >
        </div>

        <div class="work__items-container">
          <div class="work__item" v-for="card in workLineCards" :key="card.id">
            <h3 class="work__subtitle">{{ card.title }}</h3>
            <p class="work__description">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Как мы работаем",
      workLineNumber: ["1", "2", "3", "4"],
      workLineCards: [
        {
          title: "Заявка",
          text: "Вы оставляете заявку на нашем сайте, по e-mail или по телефону",
        },
        {
          title: "Утверждение ТЗ",
          text: "Вы заполняете бриф. Мы проводим анализ информации, утверждаем сроки и стоимость",
        },
        {
          title: "Заключение договора",
          text: "Юридически закрепляем все договоренности между нами",
        },
        {
          title: "Релиз проекта",
          text: "Вы становитесь владельцем современного, функционального веб-ресурса. способного оставить позади ваших конкурентов",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.work__line-item:not(:last-child) {
  margin-right: 23%;
}
.work__content {
  display: flex;
  flex-direction: column;
}
.work__line {
  display: flex;
}
.work__line::after {
  position: absolute;
  height: 2px;
  right: 17.5%;
  left: 0;
  background-color: #141b69;
  content: "";
  top: 50%;
}

@media screen and (max-width: 1200px) {
  .work__line-item {
    margin-right: 20% !important;
  }
  .work__line::after {
    right: 22%;
  }
}

@media screen and (max-width: 960px) {
  .work {
    padding: 24px 0;
  }
  .work__title {
    font-size: 28px;
  }
  .work__subtitle {
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 7%;
  }
  .work__description {
    margin-top: 0;
    font-size: 12px;
  }
  .work__line::after {
    position: absolute;
    top: 0;
    width: 2px;
    height: 80%;
    left: 50%;
    content: "";
  }
  .work__line-item {
    margin-right: 0 !important;
    padding: 8px 15px;
    margin-bottom: 75px;
  }
  .work__content {
    flex-direction: row;
    align-items: flex-start;
    & > .work__line {
      display: flex;
      flex-direction: column;
      width: 20%;
      margin: 0;
      margin-top: 20px;
      max-height: 100%;
      height: 100%;
      align-items: center;
    }
    & .work__items-container {
      flex-direction: column;
      width: 80%;

      & .work__item {
        max-width: 100% !important;
      }
    }
  }
}
</style>
