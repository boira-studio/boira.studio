<template>
  <header class="default">
    <div class="slogan">
        <h2>{{ $t('homepage.subtitle') }} </h2>   
    </div>
    <LangSwitcher />
    <Menu />
    <Logo />
  </header>
</template>

<script>
import LangSwitcher from "~/components/LangSwitcher";
import Logo from "~/components/Logo";
import Menu from "~/components/Menu";

export default {
  components: {
    LangSwitcher,
    Logo,
    Menu
  },

};
</script>
