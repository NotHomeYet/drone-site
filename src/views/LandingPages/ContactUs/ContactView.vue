<script setup>
import { onMounted } from "vue";

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";

//image
import image from "@/assets/img/altitude/landscape/camp2.jpg";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSelect from "@/components/MaterialSelect.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

// TODO - fix this page
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <div class="mx-auto" style="max-width: 1920px;">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div
              class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                :style="{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                }" loading="lazy"></div>
            </div>
            <div class="mt-8 col-xl-5 col-md-12 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div class="bg-gradient-success shadow-success border-radius-lg p-3">
                    <h3 class="text-white text-success mb-0">Contact us</h3>
                  </div>
                </div>
                <div class="card-body">
                  <p>
                    Have questions or not sure where to start?
                  </p>
                  <p class="pb-3">
                    Contact us to schedule an aerial videography session, hold an initial free consultation, or for any
                    other questions, comments, or concerns.
                  </p>
                  <form id="contact-form" method="post" autocomplete="off">
                    <div class="card-body p-0 my-3">
                      <div class="row">
                        <div class="col-md-6">
                          <MaterialInput id="cx-name" class="input-group-static mb-4" type="text" label="Full Name"
                            placeholder="Full Name" />
                        </div>
                        <div class="col-md-6 ps-md-2">
                          <MaterialInput id="cx-email" class="input-group-static mb-4" type="email" label="Email"
                            placeholder="hello@creative-tim.com" />
                        </div>
                        <div class="col-md-6 ps-md-2">
                          <MaterialInput id="cx-phone" class="input-group-static mb-4" type="phone" label="Phone Number"
                            placeholder="###-###-####" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 ps-md-2 pb-3">
                          <MaterialSelect id="cx-reason" class="input-group-static" type="select" label="Contact Reason"
                            :options="['Schedule Session', 'Initial Free Consultation', 'Regulatory Information', 'Come Fly With Us', 'Other']" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group mb-0 mt-md-0 mt-4">
                          <MaterialTextArea id="cx-notes" class="input-group-static mb-4" :rows="6"
                            placeholder="Add any questions, comments, or additional context that would be helpful in assisting you.">
                            Additional Notes
                          </MaterialTextArea>
                        </div>
                        <div class="col-md-12 text-center">
                          <MaterialButton variant="gradient" color="success" class="mt-3 mb-0">
                            Send Message
                          </MaterialButton>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <DefaultFooter />
</template>
