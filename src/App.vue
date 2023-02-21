<template>
  <header>
    <Headermobile class="lg:hidden" />
    <Header class="hidden lg:flex" />
  </header>

  <RouterView />
  <footer>
    <Footer />
  </footer>
</template>

<script>

import Header from "./components/Header.vue";
import Headermobile from "./components/Headermobile.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Headermobile, Header, Footer },
};
</script>