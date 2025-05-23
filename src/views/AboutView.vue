<template>
  <div class="page-wrapper">

    <div class="background"></div>
    <div class="background-overlay"></div>

 
    <div class="content-wrapper">
      <main class="grid-container">
        <img src="@/assets/begivenhedskilt.png" alt="Begivenheder" class="main-heading" />

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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import image1 from '@/assets/karstenmathiasen.jpg'
import image2 from '@/assets/bamse25.jpg'
import image3 from '@/assets/sommermusik.jpg'
import image4 from '@/assets/thomas.jpg'
import image5 from '@/assets/olegas.jpg'
import image6 from '@/assets/reneseptember.jpg'
import image7 from '@/assets/bamseokstober.jpg'
import image8 from '@/assets/jdagplakat.jpg'
import image9 from '@/assets/thomasjones.jpg'
import image10 from '@/assets/mandagstræf.jpg'

const kalenderItems = ref([
  { id: 9, title: 'Mandagstræf', description: 'Hver mandag fra Maj - September', image: image10 },
  { id: 1, title: 'Karsten Mathiasen', description: 'Fredag D. 2. Maj 2025', image: image1 },
  { id: 2, title: 'Bamse Show', description: 'Fredag D. 25. Maj 2025', image: image2 },
  { id: 3, title: 'Sommer Musik', description: 'Hver Lørdag fra Maj - September', image: image3 },
  { id: 4, title: 'Thomas Pedersen', description: 'Fredag D. 7. September 2025', image: image4 },
  { id: 5, title: 'Ole Gas', description: 'Fredag D. 26. September 2025', image: image5 },
  { id: 6, title: 'René Jacobsen synger Tommy', description: 'Fredag D. 26. September 2025', image: image6 },
  { id: 7, title: 'Bamse Show', description: 'Fredag D. 31. Oktober 2025', image: image7 },
  { id: 8, title: 'J-Dag på Big Ben', description: 'Fredag D. 7. November 2025', image: image8 },
  { id: 9, title: 'Thomas Jones', description: 'Fredag D. 28. November 2025', image: image9 },
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
</script>

<style scoped> 
.page-wrapper {
  position: relative;
  min-height: 100vh;
}
.main-heading{
opacity: 80%;}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/BigBenBaggrund.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(65, 44, 34, 0.4);
  z-index: -1;
}

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
  margin: 20px auto 40px auto;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

.card {
  background-color: #edd7becb;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: transform 0.2s;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  display: block;
  margin: 0 auto;
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
  margin-top: 0px;
}

.popupIndhold {
  width: 80vw;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  background-color: #edd7becb;
  padding: 0;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
}

.expanded-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.lukKnap {
  position: absolute;
  top: 25px;
  right: 27px;
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
  justify-self: center;
  max-width: 50%;
  height: auto;
  margin-bottom: 0;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .grid-container {
    margin: 30 auto;
    padding: 10px;
    justify-items: center;
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .card {
    margin: 0 auto;
    width: 100%;
    max-width: 350px;
  }

  .main-heading {
    max-width: 95%;
    margin: 20px auto;
    margin-bottom: -0px;
  }
}

</style>