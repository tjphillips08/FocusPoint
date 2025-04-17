<template>
  <div class="text-light min-vh-100" style="background-color: #121212;">
    <!-- Fullscreen Logo Image -->
    <div class="logo-container">
      <img src="/logo.png" class="logo-image" alt="FocusPoint Photography" />
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg shadow-sm sticky-top">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <div></div>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery">Gallery</router-link>
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

    <!-- Main Content -->
    <main class="container my-5">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// nothing needed here for now
</script>

<style>
body {
  background-color: #121212;
  color: #f8f9fa;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

/* Logo */
.logo-container {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
}

.logo-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Navbar */
.navbar {
  background-color: #121212 !important;
}

.navbar,
.navbar .nav-link {
  color: #f8f9fa !important;
}

a.nav-link {
  color: #f8f9fa !important;
}

a.nav-link:hover {
  text-decoration: underline;
}

.navbar-nav {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

/* Hamburger menu custom icon */
.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  background-image: none !important;
  position: relative;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after,
.navbar-toggler-icon div {
  content: "";
  display: block;
  height: 2px;
  background-color: #ffffff;
  margin: 6px 0;
  width: 100%;
}

/* CTA Section (Bottom Section) */
.cta-section {
  background-color: #121212;
  color: #f8f9fa;
  padding: 3rem 1rem;
  border-top: 1px solid #333;
  border-radius: 0.5rem;
  margin: 0 1rem 2rem 1rem;
}

/* Custom Button */
.btn-custom {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-custom:hover {
  background-color: #2563eb;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-container {
    height: 50vh;
  }
}
</style>


















