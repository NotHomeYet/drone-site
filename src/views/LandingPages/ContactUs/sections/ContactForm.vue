<script>
import bgi from "@/assets/img/altitude/camp/camp2.jpg";

export default {
  data() {
    return {
      formData: {
        user: "",
        email: "",
        phone: "",
        details: "",
      },
      formSubmitted: false
    };
  },
  methods: {
    submitForm: function () {
      fetch(import.meta.env.VITE_APP_URL + "/api/v1/contact", {
        method: "POST",
        headers: {
          "x-api-key": import.meta.env.VITE_APP_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData)
      })
        .then(res => {
          console.log(res)
          this.formSubmitted = true
          this.formData = {
            user: "",
            email: "",
            phone: "",
            details: "",
          };
        });
    }
  },
};
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
                        <span class="text-sm opacity-8">(+1) 303 416 2945</span>
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="fas fa-envelope text-sm"></i>
                      </div>
                      <div class="ps-3">
                        <span class="text-sm opacity-8">altitudedroneworks@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <form id="contact-form" autocomplete="off" @submit.prevent="submitForm">
                  <div class="card-body p-0 my-3">
                    <div class="card-header px-4 py-sm-5 py-3">
                      <div>
                        <h2>Say Hi</h2>
                        <p>
                          Have questions or not sure where to start?<br />
                          Reach out to schedule an aerial videography session, hold an initial no-cost consultation, or
                          for any other questions, comments, or concerns.
                        </p>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label for="name"><span class="text-sm opacity-8">Name:</span></label><br />
                          <input type="text" class="input-group-static mx-2" id="name" v-model="formData.user" required>
                        </div>
                        <div class="col-md-6">
                          <label for="email"><span class="text-sm opacity-8">Email:</span></label><br />
                          <input type="email" class="input-group-static mx-2" id="email" v-model="formData.email"
                            required>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-8">
                          <label for="name"><span class="text-sm opacity-8">Phone Number:</span></label><br />
                          <input type="phone" class="input-group-static mx-2" id="phone" v-model="formData.phone"
                            required>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <label for="message"><span class="text-sm opacity-8">Details:</span></label><br />
                          <textarea id="message" rows="10" cols="65" class="input-group-static mx-2"
                            v-model="formData.details" required></textarea>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3 mt-4">
                          <button type="submit" class="btn btn-lg bg-gradient-info mb-0 ms-auto">Submit</button>
                        </div>
                        <div v-if="formSubmitted" class="pt-4">
                          <h4>Message Received!</h4>
                          <p>
                            Thanks for reaching out. We'll get back with you soon.
                          </p>
                        </div>
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
