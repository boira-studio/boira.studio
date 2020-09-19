<template>
  <ul class="lang-switcher">
    <li v-for="(locale, i) in showLocales" :key="i">
      <nuxt-link :to="switchLocalePath(locale.code)">
      {{ locale.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LangSwitcher",
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      );
    }
  }
};
</script>
