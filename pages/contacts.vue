<template>
  <main>
    <ContactsComponent />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Контакты",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
