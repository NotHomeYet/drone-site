<script setup>

// example components
import TransparentBlogCard from "../../../../components/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../components/cards/blogCards/BackgroundBlogCard.vue";

// Video Components
import VideoBackground from 'vue-responsive-video-background-player'
import over_head from "@/assets/img/altitude/camp/over-head.mp4";

//Vue Material Kit 2 components
import camp1 from "@/assets/img/altitude/camp/camp2.jpg";
import camp2 from "@/assets/img/altitude/camp/camp1.jpg";
import pano_1 from "@/assets/img/altitude/camp/pano1.jpg";
import pano_sphere from "@/assets/img/altitude/camp/pano_sphere.jpg";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Corporate Branding and Advertising</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-12 col-12 pb-4">
          <BackgroundBlogCard :image="camp2" title="Tell Your Story" action=""
            description="Each brand is distinct. Lets find a better angle on the narative unique to you." />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="camp1" title="Aerial Promotion" action=""
            description="Compelling aerial footage for visually stunning advertisements to enhance brand visibility." />
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="card-header p-0">
            <VideoBackground class="d-block blur-shadow-image img-fluid border-radius-lg" :src="over_head"
              style="height: 130px; max-height: 130px">
          </VideoBackground>
        </div>
        <div class="card-body px-0">
          <h5>Site and Facility Showcase</h5>
          <p>Showcase corporate sites, facilities, services, and more, offering compelling promotional materials and
            branding.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <img class="d-block blur-shadow-image img-fluid border-radius-lg pb-4" :src="pano_1" />
          <TransparentBlogCard :image="pano_sphere" title="Immersive Panoramas" action=""
            description="Stunning landscapes and dynamic scenes can capture the essence of a site with accuracy and artistry." />
        </div>
      </div>
      <!-- TODO fix me
                                                                        https://www.npmjs.com/package/@egjs/vue3-view360
                                                                        <div class="row">
                                                                        <div id="myPanoViewer">
                                                                          <PanoViewer :tag="'div'" :image="pano_sphere" />
                                                                        </div>
                                                                      </div> -->
    </div>
  </section>
</template>
