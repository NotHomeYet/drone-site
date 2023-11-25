<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../components/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../components/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/altitude/landscape/lake.jpg";

//dep
import Typed from "typed.js";

//sections
import Information from "./Sections/AboutInformation.vue";
import AboutTeam from "./Sections/AboutTeam.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: false,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar :action="{
    route: 'javascript:;',
    label: 'Buy Now',
    color: 'btn-white',
  }" transparent />
  <div class="mx-auto body-container">
    <header class="bg-gradient-dark">
      <div class="page-header min-vh-65" :style="{ backgroundImage: `url(${bg0})` }">
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center mx-auto my-auto">
              <h1 class="text-white">
                About <span class="text-white" id="typed"></span>
              </h1>
              <div id="typed-strings">
                <h1>the Aerial Pros</h1>
                <h1>the Denver Locals</h1>
                <h1>the UAV Alchemists</h1>
                <h1>Us</h1>
              </div>
              <p class="lead mb-4 text-white opacity-8">
                Altitude Droneworks - serving the greater Denver CO metro area and the surrounding
                front range, looking to delight our customers with professional expertise, quality work,
                timely value, and a little altitude.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
      <Information />
      <AboutTeam />
    </div>
  </div>
  <DefaultFooter />
</template>
