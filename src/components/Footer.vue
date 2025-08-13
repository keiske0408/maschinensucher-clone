<script setup></script>

<template>
  <footer>
    <section class="footer-section-container">
      <div class="container-for-sections">
        <section class="footer-1">
          <div class="sponsor-title">
            <div>
              <p class="official-sponsors-title">
                Maschinensucher.de ist offizieller Sponsor von:
              </p>
            </div>
          </div>
          <div class="sponsors-container">
            <div class="sponsor-1">
              <a
                class="sponsor-1-name"
                href="https://company.maschinensucher.de/sponsoring/"
              >
                <img
                  class="EHF_finals_image_logo"
                  src="https://cdn.machineseeker.com/img/frontend/template/footer/sponsoring/ehf_men.svg?v=1742898169"
                  alt="EHF_finals_image_logo"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="2"></section>
        <section id="3"></section>
        <section id="4"></section>
        <section id="5"></section>
        <section id="6"></section>
      </div>
    </section>
  </footer>
</template>


<style scoped>
footer {
  height: 936.781px;
  width: 1860px;
}

.footer-1 {
  background-color: #515150;
  height: 10rem;
  padding: 24px 12px;
}

.sponsor-title {
  line-height: 29px;
  height: 40px;
  flex-wrap: wrap;
  margin: 0px -12px 8px -12px;
}

.sponsor-title div {
  padding: 0px 12px;
}

.official-sponsors-title {
  text-align: center;
  font-size: 1.2em;
  font-weight: 400;
  color: white;
}

.sponsors-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.sponsor-1 {
  display: flex;
  align-items: center;
}

.sponsor-1-name {
  padding: 0px 16px;
}

.EHF_finals_image_logo {
  width: 82px;
  height: 58px;
}
</style>