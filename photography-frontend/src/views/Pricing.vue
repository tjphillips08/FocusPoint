<template>
    <div class="container my-5">
      <h2 class="text-center mb-4">Photography Packages</h2>
      <div class="row">
        <div class="col-md-4" v-for="(packageItem, index) in packages" :key="index">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ packageItem.name }}</h5>
              <p class="card-text">{{ packageItem.description }}</p>
              <p><strong>${{ packageItem.price }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        packages: [
          { name: "Basic", description: "30-minute session, 10 edited photos", price: 100 },
          { name: "Standard", description: "1-hour session, 25 edited photos", price: 200 },
          { name: "Premium", description: "2-hour session, 50 edited photos", price: 350 },
        ],
      };
    },
  };
  </script>
  