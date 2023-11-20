<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";

// image
import bgi from "@/assets/img/altitude/camp/camp2.jpg";

// tooltip
import setTooltip from "@/assets/js/tooltip";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>
<template>
  <section class="py-lg-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card box-shadow-xl overflow-hidden mb-5">
            <div class="row">
              <div class="col-lg-5 position-relative bg-cover px-0" :style="{ backgroundImage: `url(${bgi})` }"
                loading="lazy">
                <div class="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                  <div class="mask bg-gradient-dark opacity-8"></div>
                  <div class="p-5 ps-sm-8 position-relative text-start my-auto z-index-2">
                    <h3 class="text-white">Contact Information</h3>
                    <p class="text-white opacity-8 mb-4">
                    Fill out the form and the team will get back to you within 24 hours.
                  </p>
                    <div class="d-flex p-2 text-white">
                    <div>
                      <i class="fas fa-phone text-sm"></i>
                    </div>
                      <div class="ps-3">
                        <!-- TODO check phone -->
                        <span class="text-sm opacity-8">(+1) 303 416 2945</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-envelope text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <!-- TODO check email -->
                        <span class="text-sm opacity-8">altitudedroneworks@gmail.com</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <!-- <div>
                            <i class="fas fa-map-marker-alt text-sm"></i>
                          </div> -->
                      <!-- <div class="ps-3">
                              TODO check address
                              <span class="text-sm opacity-8">PO Box TODO Parker, CO 80134</span>
                            </div> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <!-- TODO - needs to actually send on API -->
                <form id="contact-form" method="post" autocomplete="off">
                  <div class="card-body p-0 my-3">
                    <div class="card-header px-4 py-sm-5 py-3">
                      <h2>Say Hi!</h2>
                      <p>
                        Have questions or not sure where to start?
                      </p>
                      <p class="pb-3">
                        Contact us to schedule an aerial videography session, hold an initial free consultation, or for
                        any
                        other questions, comments, or concerns.
                      </p>
                    </div>
                    <div class="row  px-4">
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
                    <div class="row  px-4">
                      <div class="form-group mb-0 mt-md-0 mt-4">
                        <MaterialTextArea id="cx-notes" class="input-group-static mb-4" :rows="6"
                          placeholder="Add any questions, comments, or additional context that would be helpful in assisting you.">
                          Additional Notes
                        </MaterialTextArea>
                      </div>
                      <div class="col-md-12 text-center">
                        <MaterialButton variant="gradient" color="info" class="mt-3 mb-0">
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
</template>
