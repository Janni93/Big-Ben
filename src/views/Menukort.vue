<template>
  <div class="background"></div>

  <div class="menukort-page">
    <div class="menu-box">
      <h2>Mad med smag og sjæl</h2>
      <p class="menu-info">Hos Big Ben serverer vi ikke bare drikkevarer – vi sørger også for, at du ikke går sulten hjem. I samarbejde med naborestauranten Gl. Daws tilbyder vi lækker pubmad, der passer perfekt til stemningen og en god øl i hånden.

        Uanset om du er til en saftig burger, sprøde snacks eller klassiske favoritter, har vi noget, der mætter og glæder. </p>

        <div class="menu-row">
        <img :src="menu1" alt="Menukort side 1" class="sidebillede" />
        <img :src="menu2" alt="Menukort side 2" class="sidebillede" />
      </div>
    </div>

    <div class="menu-box">
      <h2 class="drikkevarer-heading">Skål for hyggen</h2>
      <p class="menu-info">Hos Big Ben tilbyder vi et bredt udvalg af drikkevarer – lige fra den belgiske specialøl Grimbergen til en lækker iskaffe med karamel. Vi er stolte af vores samarbejde med det lokale bryggeri Warwick, hvis øl du naturligvis også finder på kortet.

        Men hos os handler drikkevarer ikke kun om smag – det handler om oplevelsen. Derfor har vi skabt en hyggelig og afslappet atmosfære, hvor du kan nyde dine favoritter i godt selskab med venner, familie eller kollegaer.</p>
      <div class="menu-row drinks-column">
        <img :src="drinks1" alt="Menukort side 3" class="drinks-img" />
        <img :src="drinks2" alt="Menukort side 4" class="drinks-img" />
      </div>
    </div>

    <div class="menu-box">
      <h2 class="drikkevarer-heading">Tjek vores cocktailkort</h2>
      <p class="menu-info">Her finder du et udvalg af klassiske favoritter og farverige overraskelser, der passer perfekt til både hyggelige stunder og festlige aftener.

        Uanset om du er til det søde, det friske eller det stærke, står vores bartendere klar til at mixe noget, der rammer præcis din smag. Alle cocktails serveres med kærlighed – og et glimt i øjet.</p>
      <div class="menu-row drinks-column">
        <img :src="cocktail" alt="Menukort side 5" class="drinks-img" />
        <h2 class="drikkevarer-heading">Skål og velbekomme</h2>
        <h3 class="drikkevarer-heading">- det er cocktail o'clock på Big Ben!</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import menu1 from '@/assets/menukortbb.jpg'
import menu2 from '@/assets/menukortbb2.jpg'
import drinks1 from '@/assets/drikkevarer.jpg'
import drinks2 from '@/assets/drikkevarer2.jpg'
import cocktail from '@/assets/cocktail.jpg'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap');

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/BigBenBaggrund.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.menukort-page {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 10px;
  z-index: 1;
  position: relative;
  color: #412c22;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.menu-box {
  background-color: #edd7becb;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menukort-page h2 {
  text-align: center;
  font-family: 'Vast Shadow', cursive;
  font-size: 35px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 20px;
  letter-spacing: -2px;
  transform: scaleY(1.5);
  color: #412c22;
  padding-top: 20px;
}

.menukort-page h3 {
  text-align: center;
  font-family: 'Vast Shadow', cursive;
  font-size: 25px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  margin-bottom: 40px;
  margin-top: -30px;
  letter-spacing: -2px;
  transform: scaleY(1.5);
  color: #412c22;

}
.menu-info {
  text-align: center;
  font-size: 20px;
  font-family: 'Markazi Text', serif;
  color: #412c22;
  margin-top: auto;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 20px;
  max-width: 100%;
  padding: 0;
  line-height: 1;
}

.drikkevarer-heading {
  margin-top: 20px;
  text-align: center;
  font-family: 'Vast Shadow', cursive;
  font-size: 40px;
  color: #412c22;
  transform: scaleY(1.5);
  letter-spacing: -2px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.menu-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.drinks-column {
  grid-template-columns: 1fr;
}

.sidebillede,
.drinks-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .menukort-page h2 {
    font-size: 22px;
     line-height: 1.1;
  }

  .menukort-page h3 {
    font-size: 18px;
     line-height: 1.1;
  }

  .menu-info {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .menu-row {
    grid-template-columns: 1fr;
  }

  .drikkevarer-heading {
    font-size: 26px;
  }
}
</style>