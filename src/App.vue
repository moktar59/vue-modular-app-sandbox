<template>
  <div id="app">
    <div>
      <button
        v-for="entry in languages"
        :key="entry.title"
        @click="changeLocale(entry.language)"
      >
        {{ entry.title }}
      </button>
    </div>
    <br />
    <router-link :to="{ name: 'blog.list' }">Blog List</router-link> |
    <router-link :to="{ name: 'blog.form' }">Blog Form</router-link> |
    <router-link :to="{ name: 'user.list' }">User List</router-link> |
    <router-link :to="{ name: 'user.form' }">User Form</router-link> |
    <router-view></router-view>
  </div>
</template>

<script>
import i18n from "./modules/i18n";
export default {
  name: "App",
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "es", language: "es", title: "Español" },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
