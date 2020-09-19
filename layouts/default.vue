<template>
  <div>
    <Header />
    <nuxt />
      <Footer />
      <cursor-fx color="red" colorHover="green"/>

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
</script>


<!--

    import { CursorFx } from '@luxdamore/vue-cursor-fx';
    import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

    // Or in a .vue file
    export default {
        components: {
            'cursor-fx': CursorFx,
        },
    };

-->