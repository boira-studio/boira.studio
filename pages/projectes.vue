<template>
  <article class="projectes">
    <section class="intro">
        <div>
        <span data-cursor-hover>{{ $t("detallProjectes.seccio") }}</span>
        <h2>{{ $t("detallProjectes.title") }}</h2>
        <div>
        <p>{{ $t('detallProjectes.paragraf') }}</p>
        </div>
      </div>
    </section>

    <section class="treballs">
      <ul>
          <li v-for="(projecte, index) in $t('projectes')" :key="index">
           <nuxt-link :to="localePath('projectes/kamaleonik')"> 
         
         <hgroup>
            <h5 ><strong>{{ projecte.client }}</strong> — {{ projecte.descripcion }} — <span>{{ projecte.any }}</span></h5>
          <h2>{{ projecte.nombre }}</h2>
         </hgroup>
          <img :src="projecte.hover">
           </nuxt-link>
      </li>
      </ul>

    </section>
  </article>
</template>


<script>

export default {
   layout: 'projectes',
  components: {
  },
  computed: {
    projecte(){
      //return this.projectes.find(projecte => projecte.id == this.id)
    },
  }
  
};
</script>
