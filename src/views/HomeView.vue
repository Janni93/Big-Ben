<script setup>
import bgImage from '@/assets/bigbenbaggrund.png'
import heroVideo from '@/assets/herovideo.mp4'
import billede1 from '@/assets/thomasbigben.jpg'
import billede2 from '@/assets/bigbenude.jpg'
import billede3 from '@/assets/bigbenindendørs.jpg'
import galleri1 from '@/assets/mariaogsofie.jpg'
import galleri2 from '@/assets/madsbigbenlille.jpg'
import galleri3 from '@/assets/maria.jpg'
import tilbud1 from '@/assets/studierabat.jpg'
import tilbud2 from '@/assets/studierabat2.jpg'




const backgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: -2
}
</script>

<template>
  <div :style="backgroundStyle"></div>
  <div class="background-overlay"></div>

  <main class="content-wrapper">
    <div class="hero-video">
      <video muted autoplay loop playsinline>
        <source :src="heroVideo" type="video/mp4" />
      </video>
      <div class="video-overlay">
        <h1 class="mainheadline">BIG BEN</h1>
        <h1 class="subheadline">OLD ENGLISH PUB</h1>
        <p class="tagline">Mere end bare smag - en oplevelse du husker</p>
      </div>
    </div>

    <div class="info-section container">
      <img src="@/assets/happyhour.png" alt="happyhour" class="main-heading" />
      <div class="info-row">
        <div class="info-text-box">
          <h2>Velkommen til Big Ben</h2>
          <h3>- Vardes hyggeligste pub</h3>
          <p>Midt på Torvet i hjertet af Varde finder du Big Ben – en klassisk pub med charme. Hos os handler det om hygge, fællesskab og gode oplevelser. Vi lægger vægt på personlig betjening og en afslappet atmosfære, hvor alle føler sig velkomne, uanset om du er stamgæst eller ny i byen.</p>
          <p>Big Ben er ikke bare en pub – det er der, hvor de bedste minder starter.</p>
        </div>
        <div class="info-image">
          <img :src="billede1" alt="Pub billede 1" />
        </div>
      </div>

      <div class="info-row reverse">
        <div class="info-text-box">
          <h2>Begivenheder & Livemusik</h2>
          <p>Vi tilbyder et bredt udvalg af kolde fadøl, specialøl fra det lokale bryggeri Warwick, farverige cocktails, lækre drinks og god cafémad leveret fra naborestauranten. Hvad end du kommer for at slappe af efter arbejde, fejre noget med vennerne eller opleve en sjov aften med quiz eller live musik, så har Big Ben noget at byde på. Desuden tilbyder vi udendørsservering, så du kan nyde solen, mens ølen kommer til dig.</p>
          <p>Følg med på vores socialemedier og se hvad der sker!</p>
          <div class="social-buttons">
  <a
    href="https://www.facebook.com/bigbenpubvarde/?locale=fo_FO"
    target="_blank"
    rel="noopener"
    class="facebook-btn"
  >
    <i class="fab fa-facebook-f"></i>
    FACEBOOK
  </a>
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener"
    class="instagram-btn"
  >
    <i class="fab fa-instagram"></i>
    INSTAGRAM
  </a>
</div>
        </div>
        <div class="info-image">
          <img :src="billede2" alt="Pub billede 2" />
        </div>
      </div>
    </div>

<div class="info-section container">
      <div class="info-row">
        <div class="info-text-box">
          <h2>Faciliteter på Big Ben</h2>
          
          <p>Big Ben byder på to etager fyldt med hygge, underholdning og afslappet stemning. Uanset om du er til en stille øl med vennerne eller lidt venlig konkurrence, har vi faciliteterne klar.</p>
          <p>Der er 2 poolborde til hyggelige dueller.
          Bordfodbold til de hurtige kampe.
          To skærme til live sport og store øjeblikke.
          Der kan lånes terninger og spillekort.
          Der er 2 separate rygerum og gratis Wi-Fi, så du nemt kan være online.
          </p>
        </div>
        <div class="info-image">
          <img :src="billede3" alt="Pub billede 1" />
        </div>
      </div>
</div>

    <section class="image-gallery">
      <img :src="galleri1" alt="Galleri billede 1" />
      <img :src="galleri2" alt="Galleri billede 2" />
      <img :src="galleri3" alt="Galleri billede 3" />
    </section>

     <section class="tilbud">
      <img :src="tilbud1" alt="studierabat" />
      <img :src="tilbud2" alt="studierabat2" />
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap');


.content-wrapper {
  position: relative;
  z-index: 1;
  overflow-x: hidden;
}

.hero-video {
  position: relative;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  border-bottom: 2px solid #edd7becb;
}

.hero-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: contrast(1.1) saturate(1.1);
 
}

.video-overlay {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #EDD7BE;
  font-family: 'Vast Shadow', cursive;
  text-align: center;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

}

.video-overlay .mainheadline {
  font-size: 60px;
  margin: 0;
  line-height: 1;
    letter-spacing: 0.5px;
}

.video-overlay .subheadline {
  font-size: 38px;
  margin: -5px 0 0 0;
  line-height: 1;
    letter-spacing: 0.5px;
}

.video-overlay .tagline {
  font-size: 25px;
  font-family: 'Markazi Text', serif;
  font-style: italic;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  margin-top: 0;
  letter-spacing: 0.5px;
}
.main-heading{
  opacity: 80%;
}
.info-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 60px auto;
  padding: 0 20px;
  max-width: 1200px;
}

.info-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  align-items: stretch; 
}

.info-row.reverse {
  flex-direction: row-reverse;
}

.info-text-box {
  flex: 1 1 400px;
  background-color: #edd7becb;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.4);
  color: #412c22;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-text-box h2 {
  font-family: 'Vast Shadow', cursive;
  font-size: 22px;
  transform: scaleY(1.5);
  margin-bottom: 20px;
  text-align: left;
  line-height: 1;
}
.info-text-box h3 {
  font-family: 'Vast Shadow', cursive;
  font-size: 18px;
  transform: scaleY(1.5);
  margin-bottom: 20px;
  margin-top: -10px;
  text-align: left;
}

.info-text-box p {
  font-size: 18px;
  margin-bottom: 15px;
  font-family: 'Markazi Text', serif;
  line-height: 1.3;
}

.info-image {
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.info-image img:hover {
  transform: scale(1.03);
}


.social-buttons {
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}

.social-buttons a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 20px;
  font-family: 'Vast Shadow', cursive;
  font-size: 13px;
  text-decoration: none;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  letter-spacing: -2px;
  transform: scaleY(1.5);
  text-align: center;
  white-space: nowrap;
  color: #EDD7BE;
}

.social-buttons .facebook-btn,
.social-buttons .instagram-btn {
  background-color: #470101;
}

.social-buttons .facebook-btn:hover,
.social-buttons .instagram-btn:hover {
  background-color: #5d3f31;
  transform: scale(1.05, 1.6);
}

.social-buttons i {
  font-size: 14px;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 100%;
  margin: 60px auto;
  padding: 20px;
  background-color: #edd7becb;

}

.image-gallery img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.image-gallery img:hover {
  transform: scale(1.03);
}

.tilbud {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* To kolonner */
  gap: 20px;
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
}

.tilbud img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  object-fit: cover;
  transition: transform 0.3s ease;
  justify-self: center;
}


.tilbud img:hover {
  transform: scale(1.03);
}


@media (max-width: 768px) {

  .info-section {
  margin-bottom: -20px;
}
  .hero-video {
    height: 45vh;
  }

  .video-overlay .mainheadline {
    font-size: 25px;
  }

  .video-overlay .subheadline {
    font-size: 15px;
  }

  .video-overlay .tagline {
    font-size: 10px;
    padding: 0 10px;
    text-align: center;
  }

  .info-row {
    flex-direction: column !important;
  }

  .info-text-box {
    text-align: left;
  }

  .info-text-box h2 {
  font-size: 14px;
    letter-spacing: -0.5px;
}
.info-text-box h3 {
  font-size: 12px;
   letter-spacing: -0.5px;
}

.info-text-box p {
  font-size: 18px;
   }

   .info-image {
 margin-bottom: -40px;
 margin-top: -30px;
}
.social-buttons a {
  padding: 4px 10px;
  font-size: 10px;
  letter-spacing: -0.5px;
  font-size: 9px;
}

  .image-gallery {
    grid-template-columns: 1fr;
  }

  .tilbud {
    grid-template-columns: 1fr; 
    margin-top: -30px;
  }
}
</style>
