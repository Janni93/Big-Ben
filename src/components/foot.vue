<template>
  <footer>
    <div class="footer-wrapper">

      <!-- Kontakt -->
      <div class="footer">
        <h2>KONTAKT</h2>
        <p>Torvet 8</p>
        <p>6800 Varde</p>
        <p>+45 75221600</p>
        <p>big-ben@live.dk</p>
        <p>CVR-nr: 17787403</p>
      </div>

      <!-- Booking (flyttet op) -->
      <div class="footer-booking">
        <h2>BOOKING</h2>
        <p>Kontakt os for bordreservation</p>
        <p>+45 75221600</p>
        <p>big-ben@live.dk</p>
      </div>

      <!-- Links (flyttet ned) -->
      <div class="footer-links">
        <h2>SE MERE</h2>
        <RouterLink to="/">Forside</RouterLink>
        <RouterLink to="/about">Begivenheder</RouterLink>
        <RouterLink to="/menukort">Menukort</RouterLink>
      </div>

      <!-- Åbningstider -->
      <div class="footer-hours">
        <h2>ÅBNINGSTIDER</h2>
        <ul class="opening-hours">
          <li><span>Mandag – Onsdag</span><span>10:00 – 24:00</span></li>
          <li><span>Torsdag</span><span>10:00 – 02:00</span></li>
          <li><span>Fredag – Lørdag</span><span>10:00 – 05:00</span></li>
          <li><span>Søndag</span><span>10:00 – 20:00</span></li>
        </ul>
      </div>

    </div>
  </footer>
</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&display=swap');

.footer-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px 40px;
  background-color: #412c22;
  color: #EDD7BE;
  font-family: 'Markazi Text', serif;
  opacity: 0.95;
  box-shadow: 0 -2px 2px #EDD7BE;
}

.footer, .footer-links, .footer-booking, .footer-hours {
  flex: 1 1 22%;
  display: flex;
  flex-direction: column;
}

.footer-wrapper p,
.footer-wrapper a,
.footer-wrapper li {
  line-height: 0.8;
  margin: 3px 0;
  font-size: 20px;
}

h2 {
  margin-bottom: 0px;
  font-size: 17px;
  color: #EDD7BE;
  font-family: 'Vast Shadow', cursive;
  letter-spacing: -2px;
  transform: scaleY(1.5);
  margin-bottom: 10px;
}


.footer-links a {
  text-decoration: none;
  color: #EDD7BE;
  font-weight: 500;
  transition: 0.3s;
}

.footer-links a:hover {
  color: white;
}

.opening-hours {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.opening-hours li {
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 0 5px 0;
}

.opening-hours span:first-child {
  position: relative;
  padding-right: 10px;
}

.opening-hours span:last-child {
  position: relative;
  z-index: 1;
  background-color: #412c22; 
  padding-left: 8px;
}

.opening-hours li::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
  z-index: 0;
}

@media (max-width: 768px) {
  .footer-wrapper {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    text-align: left;

  }

  .footer,
  .footer-links,
  .footer-booking,
  .footer-hours {
    flex: 1 1 45%;
    min-width: 200px;
    box-sizing: border-box;
    align-items: flex-start;
  }


  .footer-links a {
    display: inline;
  }

  .opening-hours li {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding-bottom: 5px;
  }

  .opening-hours li::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 80%;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
    z-index: 0;
  }

  .opening-hours span:first-child {
    position: relative;
    padding-right: 10px;
    z-index: 1;
    background-color: #412c22;
  }

  .opening-hours span:last-child {
    position: relative;
    z-index: 2;
    background-color: #412c22;
  }

  h2 {
    font-size: 12px;
  }

  .footer-wrapper p,
  .footer-wrapper a,
  .footer-wrapper li {
    font-size: 14px;
  }
}

</style>
