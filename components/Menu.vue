<template>
  <transition>
    <div class="burguer">
      <div v-bind:class="{ active: isNinja }" v-on:click="isNinja = !isNinja">
        <img v-bind:src="imageBar" class="bar" />
        <img v-bind:src="imageCreu" class="close" />
      </div>
      <nav class="menu" v-show="isNinja">
        <div>
          <ul>
            <li>
              <nuxt-link
                :to="localePath('studio')"
                @click.native="isNinja = !isNinja"
                >{{ $t("about") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('cooperativa')"
                @click.native="isNinja = !isNinja"
                >{{ $t("secciocooperativa") }}</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="localePath('projectes')"
                @click.native="isNinja = !isNinja"
                >{{ $t("seccioprojecte") }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    isNinja: false,
    imageBar: require("@/assets/image/menu.svg"),
    imageCreu: require("@/assets/image/creu.svg")
  }),
  methods: {
    alerta() {
      isNinja = !isNinja;
      
    }
  }
};
</script>
