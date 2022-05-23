<template>
  <footer class="footer">
    <div class="footer-wrapper wrapper">
      <div class="footer-social">
        <router-link to="/" @click="scrollToTop">
          <img
            class="footer-social__logo"
            src="/assets/img/footer-logo.png"
            alt="Heidster Studio"
          />
        </router-link>
        <div class="footer-social__links">
          <a
            v-for="link in firstLogoBlock.socialLinks"
            :key="link.id"
            :href="link.href"
            class="footer-social__link"
            @click="scrollToTop"
          >
            <img :src="getImg(link)" />
          </a>
        </div>
        <p class="footer-copy">
          {{ firstLogoBlock.copyright }}
        </p>
      </div>
      <div v-for="block in blocks" :key="block.id" class="footer-menu">
        <h4 class="footer__title">
          {{ block.title }}
        </h4>
        <ul v-for="li in block.contains" :key="li.id" class="footer__ul">
          <li class="footer__li">
            <NuxtLink :to="li.link" @click="scrollToTop">
              {{ li.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          id: 1,
          title: "МЕНЮ",
          contains: [
            { id: 1, text: "Компания", link: "/" },
            { id: 2, text: "Услуги", link: "/services" },
            { id: 3, text: "Проекты", link: "/projects" },
            { id: 4, text: "Контакты", link: "/contacts" },
          ],
        },
        {
          id: 2,
          title: "УСЛУГИ",
          contains: [
            { id: 1, text: "Разработка сайтов", link: "/services" },
            { id: 2, text: "Редизайн сайтов", link: "/services" },
            { id: 3, text: "Брендинг", link: "/services" },
            { id: 4, text: "SEO и реклама", link: "/services" },
          ],
        },
        {
          id: 3,
          title: "СВЯЗЬ С НАМИ",
          contains: [
            {
              id: 1,
              text: "г. Ростов-на-Дону, ул. Металлургическая 102/2, 4 этаж, офис 406",
              link: "",
            },
            { id: 2, text: "e-mail: heidster.studio@gmail.com", link: "" },
            { id: 3, text: "тел.: +7 951 535 38 39", link: "" },
            { id: 4, text: "тел.: +7 950 858 25 11", link: "" },
          ],
        },
      ],
      firstLogoBlock: {
        socialLinks: [
          {
            id: 1,
            href: "#",
            img: "facebook",
          },
          {
            id: 2,
            href: "#",
            img: "vk",
          },
          {
            id: 3,
            href: "#",
            img: "inst",
          },
        ],
        copyright: "© 2021 Heidster Studio",
      },
    };
  },
  methods: {
    getImg(link) {
      return new URL(`/assets/img/icons/${link.img}.png`, import.meta.url).href;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.footer-social__link {
  width: 30px;
  height: 30px;
}
.footer__li > a {
  color: #141b69;
}
.footer__li > a:hover {
  color: #ff8833;
}
</style>
