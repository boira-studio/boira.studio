<template>
  <article class="estudi">
    <section class="intro">
      <div>
        <span>{{ $t("detallEstudi.seccio") }}</span>
        <h2>{{ $t("detallEstudi.title") }}</h2>
        <div>
          <p>{{ $t("detallEstudi.paragraf1") }}</p>
          <p>{{ $t("detallEstudi.paragraf2") }}</p>
        </div>
      </div>
    </section>
    <section class="serveis">
      <h1>
        {{ $t("detallEstudi.seccio2") }}
      </h1>

      <div class="branding">
        <h3>{{ $t("detallEstudi.serveis[0].Title") }}</h3>
        <p>{{ $t("detallEstudi.serveis[0].paragraf") }}</p>
        <img src="../assets/image/svg/digital.svg" />
        <ul>
          <li>{{ $t("detallEstudi.serveis[0].concepte1") }}</li>
          <li>{{ $t("detallEstudi.serveis[0].concepte2") }}</li>
          <li>{{ $t("detallEstudi.serveis[0].concepte3") }}</li>
        </ul>
      </div>
      <div class="product">
        <h3>{{ $t("detallEstudi.serveis[1].Title") }}</h3>
        <p>{{ $t("detallEstudi.serveis[1].paragraf") }}</p>
        <img src="../assets/image/svg/producte.svg" />
        <ul>
          <li>{{ $t("detallEstudi.serveis[1].concepte1") }}</li>
          <li>{{ $t("detallEstudi.serveis[1].concepte2") }}</li>
          <li>{{ $t("detallEstudi.serveis[1].concepte3") }}</li>
        </ul>
      </div>
      <div class="digital">
        <h3>{{ $t("detallEstudi.serveis[2].Title") }}</h3>
        <p>{{ $t("detallEstudi.serveis[2].paragraf") }}</p>
        <img src="../assets/image/svg/estrategia.svg" />
        <ul>
          <li>{{ $t("detallEstudi.serveis[2].concepte1") }}</li>
          <li>{{ $t("detallEstudi.serveis[2].concepte2") }}</li>
          <li>{{ $t("detallEstudi.serveis[2].concepte3") }}</li>
        </ul>
      </div>
    </section>

    <section class="clients">
      <main>
        <h1>
          {{ $t("detallEstudi.clients") }}
        </h1>
        <p>
          {{ $t("detallEstudi.parragraf_clients") }}
        </p>
        <div class="logos">
          <div class="slider">
	<div class="slide-track">
		<div class="slide">
          <img src="../assets/image/clients/msf.svg" />
		</div>
		<div class="slide">
          <img src="../assets/image/clients/5w.svg" />
		</div>
		<div class="slide">
          <img src="../assets/image/clients/cidob.svg" />
		</div>
    		<div class="slide">
          <img src="../assets/image/clients/msf.svg" />
		</div>
		<div class="slide">
          <img src="../assets/image/clients/5w.svg" />
		</div>
		<div class="slide">
          <img src="../assets/image/clients/cidob.svg" />
		</div>


	</div>
</div>
  
        </div>
      </main>
    </section>
  </article>
</template>

<script></script>
