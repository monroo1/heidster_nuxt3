<template>
  <main>
    <ServicesComponent />
    <ServicesPriceComponent />
    <ServicesWorkComp />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Услуги",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
