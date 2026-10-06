<script setup lang="ts">
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-brand text-left">
        <h3>CatCursosVue</h3>
        <img src="https://cdn3.emoji.gg/emojis/919819-sillycat.gif" alt="home" style="width: 30%" />
        <p>Aprende, comparte y disfruta cada curso.</p>
      </div>

      <div class="footer-section text-left">
        <h3><RouterLink to="/contacto">Contacto</RouterLink></h3>
        <a href="mailto:CatCursosVue@gmail.com"><strong>Email:</strong> CatCursosVue@gmail.com</a>
        <a href="tel:+529999567890"><strong>Teléfono:</strong> 999-956-7890</a>
        <a href="https://wa.me/9999567890"><strong>WhatsApp:</strong> 999-956-7890</a>
      </div>
      
      <div class="footer-section text-left">
        <h3>Más</h3>
        <a href="/nosotros"><p>Sobre nosotros</p></a>
        <a href="/privacidad"><p>Aviso de Privacidad</p></a>
        <a href="/terminos"><p>Términos y condiciones</p></a>
      </div>
    </div>

    <div class="footer-bottom">
      <a href="https://www.facebook.com">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/250px-Facebook_f_logo_%282019%29.svg.png" alt="face" style="width: 3%" />
      </a>
      <a href="https://www.instagram.com">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1280px-Instagram_logo_2022.svg.png" alt="insta" style="width: 3%; padding-left: 3%" />
      </a>
      <a href="https://www.linkedin.com">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png" alt="in" style="width: 3%; padding-left: 3%" />
      </a>
      <a href="https://www.tiktok.com">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/3840px-Tiktok_icon.svg.png" alt="tiktok" style="width: 3%; padding-left: 3%" />
      </a>
      <a href="https://www.youtube.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="yt" style="width: 3%; padding-left: 3%" />
      </a>
      <a href="https://www.youtube.com">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/3840px-WhatsApp.svg.png" alt="whatsapp" style="width: 3%; padding-left: 3%" />
      </a>

      <p>2026 - CatCursosVue. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: auto;
  padding: 2rem clamp(1.25rem, 5vw, 3.5rem) 1rem;
  color: #222140;
  background: #4f67ee;
  text-align: left;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 2rem;
  max-width: 1126px;
  margin: 0 auto;
}

.brand-name {
  color: inherit;
  font-size: 1.35rem;
  font-weight: 700;
  text-decoration: none;
}

.footer-brand p {
  margin-top: 0.5rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.45rem;
}

.footer-section h2 {
  margin: 0 0 0.25rem;
  color: inherit;
  font-size: 1rem;
  font-weight: 700;
}

.footer-section a {
  color: inherit;
  text-decoration: none;
}

.footer-section a:hover,
.brand-name:hover {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.site-footer a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
  border-radius: 2px;
}

.footer-bottom {
  max-width: 1126px;
  margin: 1.5rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid rgb(63 33 64 / 25%);
  font-size: 0.85rem;
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem 1rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}
</style>
