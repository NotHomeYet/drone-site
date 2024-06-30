<script setup>
import SimplePricingCard from "@/components/cards/pricingCards/SimplePricingCard.vue";

import zone1 from "@/assets/img/drones/zone1.jpg";
import zone2 from "@/assets/img/drones/zone2.jpg";
</script>
<template>
  <section class="" id="pricing-soft-ui">
    <div class="bg-gradient-info position-relative mx-n3 overflow-hidden">
      <img src="@/assets/img/shapes/pattern-lines.svg" alt="pattern-lines"
        class="position-absolute start-0 top-md-0 w-100 opacity-6" />
      <div class="container pb-lg-8 pb-7 pt-5 postion-relative z-index-2 position-relative">
        <div class="row">
          <div class="col-md-7 mx-auto text-center">
            <h3 class="text-white">Simple Scheduling</h3>
            <p class="text-white">
              Schedule a pre-made session or contact us for more information, a free consultation, or to build a custom
              session.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-lg-n8 mt-n6">
      <div class="container">
        <div class="row mt-5">
          <SimplePricingCard title="Low Frills"
            description="Fast and precise: limited extras but gets the job done. Great for quick outdoor work, repeated multiple time-lapse for ongoing projects, quick surveying, external listings, etc."
            :price="{ currency: '$', amount: '149', charged: 'session' }" :action="{
              route: 'https://square.link/u/m2J5h2Fo',
              label: 'Schedule now',
              color: 'bg-gradient-dark',
              charged: 'session'
            }" :specifications="[
              'Exterior Only',
              '30m session time',
              '1-2m video',
              '5-10 photographs',
              'Limited photo / video postprocessing',
              'Travel time included (Red Zone)',
            ]" />
          <SimplePricingCard title="First Person (FPV)"
            description="User Focused: Extended First Person flythrough on a single target or site. Great for real estate listings, construction site tours, focused surveying, or for other video tours."
            :price="{ currency: '$', amount: '199', charged: 'session' }" :action="{
              route: 'https://square.link/u/7ss3iNRz',
              label: 'Schedule now',
              color: 'bg-gradient-dark',
              charged: 'session'
            }" :specifications="[
              'Extended First Person View (FPV) flythrough',
              'Interior only',
              '30m session time',
              '1-2m video',
              'Customized video postprocessing',
              'Travel time included (Red Zone)',
            ]" />

          <SimplePricingCard title="Standard Session" color="bg-gradient-dark"
            description="Most common package - includes everything you need for a typical listing. Great for a full interior and exterior, more detailed project or content work, custom post-processing, etc."
            :price="{ currency: '$', amount: '299', charged: 'session' }" :action="{
              route: 'https://square.link/u/0QxJIyHJ',
              label: 'Schedule now',
              color: 'btn-white',
              charged: 'session'
            }" :specifications="[
              'Interior or Exterior',
              '60m session time',
              '2-5m video',
              '10-20 photographs',
              'Customized photo / video postprocessing',
              'Travel time included (Red Zone)',
            ]" />

          <SimplePricingCard title="The Works"
            description="The best of everything! A standard session plus an extended FPV or highly customized post-processing. Great for large-scale sites, marketing, or custom content."
            :price="{ currency: '$', amount: '449', charged: 'session' }" :action="{
              route: 'https://square.link/u/k8dCKBMY',
              label: 'Schedule now',
              color: 'bg-gradient-dark'
            }" :specifications="[
              'Exteneded Interior or Exterior',
              '90m session time',
              '5m+ Video',
              'Optional First Person View (FPV) flythrough',
              '20+ photographs',
              'Highly customized photo / video postprocessing',
              'Travel time included (Red Zone)',
            ]" />
        </div>
      </div>
      <div class="bg-gradient-success position-relative mx-n3 overflow-hidden mt-2">
        <img src="@/assets/img/shapes/pattern-lines.svg" alt="pattern-lines"
          class="position-absolute start-0 top-md-0 w-100 opacity-6" />
        <div class="container pb-lg-8 pb-7 pt-5 postion-relative z-index-2 position-relative">
          <div class="row">
            <div class="col-md-7 mx-auto text-center">
              <h3 class="text-white">Local to Denver, CO</h3>
              <p class="text-white">
                Travel is included for sites between W Colfax Ave and Perry Park along the Front Range (Red Zone).
                Additional travel time can be added at checkout for sites in the Blue Zone between Lyons and Fountain
                (Blue Zone) or beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-lg-n8 mt-n6">
        <div class="col-md-6 mx-auto text-center mt-4">
          <div class="card-header p-0 position-relative">
            <img :src="zone1" alt="redzone travel" class="img-fluid border-radius-lg" />
          </div>
        </div>
        <div class="col-md-6 mx-auto text-center mt-4">
          <div class="card-header p-0 position-relative">
            <img :src="zone2" alt="bluezone travel travel" class="img-fluid border-radius-lg" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="text-center mt-2">
            <i class="fa fa-lock" aria-hidden="true"></i> Secured Payment by
            <b> Square </b> with: <br />
            <i class="fa fa-cc-paypal fa-2x me-1" aria-hidden="true"></i>
            <i class="fa fa-cc-visa fa-2x me-1" aria-hidden="true"></i>
            <i class="fa fa-cc-mastercard fa-2x mx-1" aria-hidden="true"></i>
            <i class="fa fa-cc-amex fa-2x me-1" aria-hidden="true"></i>
            <br />
            Also accepting cash, check, paypal, venmo, ect.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
