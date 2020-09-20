<template>
  <div>
    <Header />
    <nuxt />
      <Footer />
      <cursor-fx  color="gray" colorHover="black" force-custom-slot outside-size=30 inside-size="80"	/>

  </div>
</template>
<script>

export default {
   layout: 'index',
  components: {
  },
  data: () => ({
    countador: '0',

  }),

  
};
</script>