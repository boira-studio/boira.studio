<template>
  <div class="projectes">
    <Header />
    <nuxt />
    <Footer parametre="negre" />
      <cursor-fx  color="gray" colorHover="black" force-custom-slot outside-size=30 inside-size="80"	/>

  </div>
</template>

<script>
import LangSwitcher from "~/components/LangSwitcher";
import Logo from "~/components/Logo";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';


export default {
  
  components: {
    LangSwitcher,
    Logo,
    Header,
    Footer,
    'cursor-fx': CursorFx,

  },
    data: () => ({
    isNinja: false,
    
  }
  
  
  ),
      

};
 const boira = {
        lerps: {
            dot: 1,
            circle: 0.58,
            custom: 0.23,
        },
        scale: {
            ratio: 0.88,
            min: 0.75,
            max: 1,
        },
        opacity: 0.9,
    };
</script>
