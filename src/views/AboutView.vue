<template>
  <!-- Baggrundsbillede -->
  <div :style="backgroundStyle"></div>
  <div class="background-overlay"></div>

  <!-- Indhold ovenpå -->
  <div class="content-wrapper">
    <main class="grid-container">
      <h1 class="main-heading">Begivenheder</h1>

      <div v-for="kalenderItem in kalenderItems" :key="kalenderItem.id" class="card">
        <h2>{{ kalenderItem.title }}</h2>
        <p>{{ kalenderItem.description }}</p>
        <img :src="kalenderItem.image" alt="" @click="åbnPopup(kalenderItem)" />
        <div v-if="kalenderItem.link">
          <a :href="kalenderItem.link" target="_blank">Link</a>
        </div>
      </div>
    </main>

    <div v-if="visPopup" class="popupBoks" @click="lukPopup">
      <div class="popupIndhold" @click.stop>
        <button class="lukKnap" @click="lukPopup">✕</button>
        <img :src="valgtBegivenhed.image" alt="Udvidet billede" class="expanded-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import bgImage from '@/assets/BigBenBaggrund.png'

import image1 from '@/assets/karsten mathiasen.jpg'
import image2 from '@/assets/bamse 25.jpg'
import image3 from '@/assets/Sommer musik.jpg'
import image4 from '@/assets/thomas.jpg'
import image5 from '@/assets/Ole gas.jpg'
import image6 from '@/assets/rene september.jpg'
import image7 from '@/assets/bamse okstober.jpg'
import image8 from '@/assets/j dag plakat.jpg'
import image9 from '@/assets/Thomas jones.jpg'


const kalenderItems = ref([
  { id: 1, title: 'Karsten Mathiasen', description: 'D. 2. Maj 2025', image: image1 },
  { id: 2, title: 'Bamse Show', description: 'D. 25. Maj 2025', image: image2 },
  { id: 3, title: 'Sommer Musik', description: 'Hver Lørdag hele sommeren', image: image3 },
  { id: 4, title: 'Thomas Pedersen', description: 'D. 7. September 2025', image: image4 },
  { id: 5, title: 'Ole Gas', description: 'D. 26. September 2025', image: image5 },
  { id: 6, title: 'René Jacobsen synger Tommy', description: 'D. 26. September 2025', image: image6 },
  { id: 7, title: 'Bamse Show', description: 'D. 31. Oktober 2025', image: image7 },
  { id: 8, title: 'J-Dag på Big Ben', description: 'D. 7. November 2025', image: image8 },
  { id: 9, title: 'Thomas Jones', description: 'D. 28. November 2025', image: image9 },

])

const visPopup = ref(false)
const valgtBegivenhed = ref(null)

function åbnPopup(item) {
  valgtBegivenhed.value = item
  visPopup.value = true
}

function lukPopup() {
  visPopup.value = false
  valgtBegivenhed.value = null
}

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

<style scoped>
.content-wrapper {
  position: relative;
  z-index: 1;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  justify-items: center;
  padding: 10px 20px;
  margin: 20px 50px 40px 50px;
}

.card {
  background-color: #edd7becb;;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: transform 0.2s;
  max-width: 400px;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  border-radius: 10px;
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  display: block;
}

h2 {
  color: #412c22;
  font-size: 25px;
  margin-bottom: -10px;
  font-family: 'Markazi Text', serif;
  font-weight: 600;
}

p {
  color: #412c22;
  margin-bottom: 10px;
  font-size: 22px;
  font-family: 'Markazi Text', serif;
}

.popupBoks {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
  overflow-y: auto;
  margin-top: 80px;
}

.popupIndhold {
  width: 80vw;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  background-color: #EDD7BE;
  padding: 0;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.expanded-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.lukKnap {
  position: absolute;
  top: 20px;
  right: 30px;
  background: transparent;
  border: none;
  font-size: 28px;
  font-weight: bold;
  color: #ead4b8;
  cursor: pointer;
  z-index: 1;
  transition: transform 0.2s;
}

.lukKnap:hover {
  transform: scale(1.2);
  color: #412c22;
}

.main-heading {
  grid-column: 1 / -1;
  text-align: center;
  font-family: 'Vast Shadow', cursive;
  font-size: 50px;
  color: #EDD7BE;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  margin-bottom: -10px;
  margin-top: 25px;
  letter-spacing: -2px;
  transform: scaleY(1.5);
}

@media (max-width: 768px){
  .main-heading {
  
  font-size: 35px;
  
}
}
</style>
