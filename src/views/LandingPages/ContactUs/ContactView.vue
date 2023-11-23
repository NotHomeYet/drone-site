<script setup>
import { onMounted } from "vue";

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";

//image
import bgi from "@/assets/img/altitude/camp/camp2.jpg";

// sections
import ContactForm from "./sections/ContactForm.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <div class="mx-auto body-container">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div
              class="col-12 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                :style="{
                  backgroundImage: `url(${bgi})`,
                  backgroundSize: 'cover',
                }" loading="lazy"></div>
            </div>
            <div class="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <DefaultFooter />
</template>
