<template>
  <main>
    <ProjectsComponent />
    <ProjectsFeedbackComponent />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Проекты",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
