<script setup lang="ts">
import Contact from "./components/contact.vue";
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar.vue";
import Hero from "./components/hero.vue";
import Skills from "./components/skills.vue";
import Services from "./components/services.vue";
import Projects from "./components/projects.vue";
import Footer from "./components/footer.vue";

onMounted(() => {
  AOS.init({
    duration: 1800,
    offset: 100,
    disable: "mobile",
  });
});
</script>

<template>
  <div class="bg-gray-950">
    <Navbar />
    <Hero />
    <Skills />
    <Services />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>
</style>
