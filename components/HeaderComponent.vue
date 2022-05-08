<template>
  <header class="header">
    <div class="header-nav">
      <NuxtLink to="/" class="header-nav__logo">
        <img src="~/assets/img/header-logo.png" />
      </NuxtLink>
      <div class="header-nav__navbar">
        <NuxtLink
          v-for="link in links"
          :key="link.id"
          :to="link.route"
          class="header-nav__link"
        >
          {{ link.text }}
        </NuxtLink>
        <a href="mailto:heidster.studio@gmail.com" class="header-nav__mail">
          {{ email.text }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, text: "Компания", route: "/" },
        { id: 2, text: "Услуги", route: "/services" },
        { id: 3, text: "Проекты", route: "/projects" },
        { id: 4, text: "Контакты", route: "/contacts" },
      ],
      email: { text: "heidster.studio@gmail.com" },
    };
  },
};
</script>
