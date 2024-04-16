<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },

  
}
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style>
body,
html {
  height: 100%;

}

div h2 {
  font-size: calc(36px + 12 * (100vw / 1336));
  font-weight: 400;
  line-height: calc(40px + 15 * (100vw / 1336));

}

div p {
  font-weight: 400;
  font-size: calc(14px + 4 * (100vw / 1336));
  line-height: calc(18px + 9 * (100vw / 1336));
}

.instalment__container {
  max-width: 1300px;
  padding: 0px 20px;
  margin: 0 auto;
}

#app {
  position: relative;
  top: 0;
  left: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

footer ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

main {
  flex: 1 1 auto;
}

.service__content-title h4 {
  margin: 0;
  font-weight: 700;
  padding: 0px 0px 8px 0px;
  font-size: calc(18px + 2 * (100vw / 1336));
  border-bottom: 3px solid #8f332f;
}

@media (max-width: 950px) {

  html,
  body {
    overflow-x: hidden;
  }
}
</style>
