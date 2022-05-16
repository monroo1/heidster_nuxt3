<!--yes -->
<template>
  <section class="mobile-nav">
    <div class="mobile-nav__container">
      <div v-for="link in links" :key="link.id" class="mobile-nav__item">
        <NuxtLink :to="link.route" class="mobile-nav__link">
          <div class="mobile-nav__link-logo">
            <img
              :src="require(`~/assets/img/icons/${link.src}.svg`)"
              alt="img"
              class="mobile-nav__link-img"
            />
          </div>
          <div class="mobile-nav__link-text">
            {{ link.text }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, text: "Компания", route: "/", src: "home" },
        {
          id: 2,
          text: "Услуги",
          route: "/services",
          src: "services",
        },
        {
          id: 3,
          text: "Проекты",
          route: "/projects",
          src: "projects",
        },
        {
          id: 4,
          text: "Контакты",
          route: "/contacts",
          src: "contacts",
        },
      ],
    };
  },
};
</script>
