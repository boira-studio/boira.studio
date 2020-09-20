<template>

  <div>
      <cursor-fx  color="gray" colorHover="black" force-custom-slot outside-size=30 inside-size="80"	/>

  <HeaderHome />
    <nuxt />
  <Footer parametre="blanc"/>
  </div>
</template>

<script>
import LangSwitcher from "~/components/LangSwitcher";
import Logo from "~/components/Logo";
import HeaderHome from "~/components/TheHeaderHome";
import Footer from "~/components/Footer";
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';


export default {
  
  components: {
    LangSwitcher,
    Logo,
    HeaderHome,
    Footer,
        'cursor-fx': CursorFx,

  },
    data: () => ({
    isNinja: false,
  }
  
  
  ),
};
</script>
