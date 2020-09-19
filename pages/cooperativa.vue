<template>

  <article class="cooperativa">   

    <section class="intro">
      <div>
      <span>{{ $t('detallCooperativa.seccio') }}</span>
      <h2>{{ $t('detallCooperativa.title') }}</h2>
      <div>
      <p>{{ $t('detallCooperativa.paragraf1') }}</p>
      <p>{{ $t('detallCooperativa.paragraf2') }}</p>
      <p>{{ $t('detallCooperativa.paragraf3') }}</p>
      </div>
      </div>
    </section>
    
    <section class="quisom">
      <div>
      <h2>{{ $t('detallCooperativa.quisom') }}</h2>
      <div class="quim">
        <h3>Quim Zudaire</h3>
        <h4>{{ $t('detallCooperativa.quim') }}</h4>
        <p><strong>Badalona, 1986</strong> 
        {{ $t('detallCooperativa.detallQuim') }}</p>
      </div>
        <div class="miquel">
        <h3>Miquel Cuartero</h3>
        <h4>{{ $t('detallCooperativa.miquel') }}</h4>
        <p><strong>Barcelona, 1986</strong> {{ $t('detallCooperativa.detallMiquel') }}</p>
      </div>
      </div>
    </section>
  </article>



</template>


<script>

</script>
