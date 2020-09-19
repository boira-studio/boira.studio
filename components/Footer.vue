<template>
    <footer :class="parametre">
        <figure>
             <img src="~/assets/image/boirafooter.png"/> 
        </figure>
      <main>
      <span>{{ $t('footer.Titolcontacta') }}</span>
      <h2>
        {{ $t('footer.contacta') }}
      </h2>
        <div>
            <p>{{ $t('footer.paragraf1') }}</p>
            <div class="contacta">
                <ul>
                    <li><a href="mailto:info@boira.studio">info@boira.studio</a></li>
                    <li><a href="">667 54 51 81</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Linkedin</a></li>

                </ul>
            </div>
        </div>
      </main>
      <div class="copyright">
          Copyright © Boira.studio 2020. All rights reserved.
      </div>
    </footer>
</template>



<script>
export default {
  props: {
    parametre: String,
  }
}
</script>