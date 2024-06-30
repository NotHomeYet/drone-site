<script setup>

//image
import bg0 from "@/assets/img/altitude/landscape/lake.jpg";

</script>
<template>
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-35" :style="{ backgroundImage: `url(${bg0})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Asset Downloads
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <p>
        Your Assets Here!
      </p>
    </div>
  </header>
</template>
