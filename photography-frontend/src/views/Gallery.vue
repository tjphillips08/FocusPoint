<template>
    <div class="container my-5">
      <h2 class="text-center mb-4">Our Gallery</h2>
      
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <!-- Gallery card items go here -->
        <div class="col" v-for="(image, index) in images" :key="index">
          <div class="card">
            <img :src="image.src" :alt="image.alt" class="card-img-top" />
            <div class="card-body">
              <p class="card-text text-center">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Array of images for the gallery
  const images = [
    {
      src: "stock1.jpeg", 
      alt: "Image 1", 
      description: "Beautiful landscape"
    },
    {
      src: "stock2.jpeg", 
      alt: "Image 2", 
      description: "Urban street view"
    },
    {
      src: "stock3.jpeg", 
      alt: "Image 3", 
      description: "Nature close-up"
    },
    {
      src: "stock4.jpeg", 
      alt: "Image 4", 
      description: "Portrait photography"
    },
    // Add more images as needed
  ];
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
  
  .card-body {
    background-color: #121212;
    color: #f8f9fa;
  }
  </style>
  