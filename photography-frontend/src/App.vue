<template>
  <div>
   <!-- Full-width banner image -->
    <div class="w-100">
     <img
        src="/logo.png"
        alt="FocusPoint Photography"
        class="img-fluid w-100"
        style="height: 300px; object-fit: cover;"
      />
   </div>


    <!-- Sticky Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand fw-bold" to="/">FocusPoint Photography</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/pricing">Pricing</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="container my-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// nothing needed here for now
</script>

<style>
/* Add anything custom here, but Bootstrap handles most styling */
</style>







