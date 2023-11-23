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
            <span class="badge bg-gradient-dark mb-2">Pricing</span>
            <h3 class="text-white">Let's Take to the Sky</h3>
            <p class="text-white">
              Select from one of the pre-made session options or build your own custom order. Contact us for more
              information or to schedule a free consultation for a custom job.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-lg-n8 mt-n6">
      <div class="container">
        <div class="row mt-5">
          <SimplePricingCard title="No Frills" description="Fast session: no extras but gets the job done."
            :price="{ currency: '$', amount: '149', charged: 'session' }" :action="{
              route: 'https://square.link/u/m2J5h2Fo',
              label: 'Buy now',
              color: 'bg-gradient-dark',
              charged: 'session'
            }" :specifications="[
  'Up to 10 photos / 1m of edited video',
  'Exterior only',
  '30m session time',
  'Photo / video postprocessing',
  'Travel time included (Red Zone*)',
]" />
          <SimplePricingCard title="FPV Only" description="Fast session: Extended First Person flythrough only."
            :price="{ currency: '$', amount: '199', charged: 'session' }" :action="{
              route: 'https://square.link/u/7ss3iNRz',
              label: 'Buy now',
              color: 'bg-gradient-dark',
              charged: 'session'
            }" :specifications="[
  'Extended First Person View (FPV) flythrough',
  'Interior only',
  '30m session time',
  'Video postprocessing',
  'Travel time included (Red Zone*)',
]" />

          <SimplePricingCard title="Standard" description="Includes everything you need for a typical listing."
            :price="{ currency: '$', amount: '299', charged: 'session' }" :action="{
              route: 'https://square.link/u/0QxJIyHJ',
              label: 'Buy now',
              color: 'bg-gradient-dark',
              charged: 'session'
            }" :specifications="[
  'Up to 25 photos / 5m of edited video',
  'Introductory (short) First Person View (FPV) flythrough',
  'Interior or exterior',
  '1h session time',
  'Photo / video postprocessing',
  'Travel time included (Red Zone*)',
]" />

          <SimplePricingCard color="bg-gradient-dark" title="The Works"
            description="Capture the best of everything all in one place."
            :price="{ currency: '$', amount: '449', charged: 'session' }" :action="{
              route: 'https://square.link/u/k8dCKBMY',
              label: 'Buy now',
              color: 'btn-white'
            }" :specifications="[
  'Unlimited photos or videos',
  'Extended First Person View (FPV) flythrough',
  'Interior or exterior',
  'Extended flight durations',
  '1.5h session time',
  'Enhanced photo / video postprocessing',
  'Travel time included (Red Zone*)',
]" />
        <!-- 
          <SimplePricingCard title="Custom / Hourly" description="Hire by the hour, custom work or longer events."
            :price="{ currency: '$', amount: '149', charged: 'hour' }" :action="{
              route:
                'https://square.link/u/v2xLyEl6',
              label: 'Buy now',
              color: 'bg-gradient-dark',
            }" :specifications="[
  'Flat, clear rate',
                  'Events or corporate promotional',
                  'Build the perfect session',
                  'Custom contract and invoicing',
                  'Optional photo / video postprocessing',
                  'Travel time included (Red Zone*)',
                ]" /> -->
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="text-center mt-5">
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
      <div class="row">
        <div class="col-md-8 mx-auto text-center mt-4">
          <h4>* Travel Time</h4>
          <p><i class="material-icons text-gradient text-info text-3x1">directions_car</i> We are local to
            South Denver, CO. Travel is complementary for sites between W Colfax Ave and Perry Park (Red Zone) along the
            Front Range.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mx-auto text-center mt-4">
          <div class="card-header p-0 position-relative">
            <img :src="zone1" :alt="title" class="img-fluid border-radius-lg" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 mx-auto text-center mt-4">
          <h4>Further Out?</h4>
          <p><i class="material-icons text-gradient text-info text-3x1">public</i> Additional travel time can be added at
            checkout - anything beyond 1.5h from Denver will need to contact us to
            build their a custom order.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mx-auto text-center mt-4">
          <div class="card-header p-0 position-relative">
            <img :src="zone2" :alt="title" class="img-fluid border-radius-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
