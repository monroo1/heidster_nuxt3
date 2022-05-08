<template>
  <main>
    <IndexIntroductionComponent />
    <IndexBenefitsComponent />
    <IndexArgumentsComponent />
    <IndexClientsComponent />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Главная",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
