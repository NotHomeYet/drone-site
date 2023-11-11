<script setup>
// example components
import DefaultInfoCard from "../../../../components/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../components/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="public" title="Denver Local"
              description="Based in South Denver, reaching the larger denver metro area and the Front Range" />
            <DefaultInfoCard color="info" icon="payments" title="Payments functionality" description="TODO" />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard color="info" icon="apps" title="Prebuilt components" description="TODO" />
            <DefaultInfoCard color="info" icon="3p" title="Improved platform" description="TODO" />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Get insights on Search"
            description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards." />
        </div>
      </div>
    </div>
  </section>
</template>
