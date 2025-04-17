<template>
    <div class="home container py-5 text-light" style="background-color: #121212;">
      <!-- About Section -->
      <section class="mb-5">
        <h2 class="text-center mb-4">About Me</h2>
        <p class="lead text-center">
          Hi! I'm [Your Name], a professional photographer based in [Your Location], passionate about capturing authentic and timeless moments. With over [X years] of experience in portrait, wedding, and event photography, I bring creativity, patience, and precision to every shoot.
        </p>
        <p class="text-center">
          Whether you're looking for a polished headshot, romantic engagement session, or vibrant event coverage, I’m committed to delivering high-quality images that reflect your story and style. My goal is to help you feel comfortable and confident in front of the camera, so you can focus on being yourself.
        </p>
      </section>
  
      <!-- Why Choose Me Section -->
      <section class="row text-center mb-5">
        <div class="col-md-4 mb-4">
          <div class="shadow-sm p-4 h-100 border border-secondary rounded">
            <i class="bi bi-camera2 fs-1 text-primary mb-3"></i>
            <h5>Experienced & Professional</h5>
            <p>I bring years of hands-on experience in diverse photography styles, ensuring every shot is intentional and beautifully composed.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="shadow-sm p-4 h-100 border border-secondary rounded">
            <i class="bi bi-images fs-1 text-success mb-3"></i>
            <h5>Custom Photo Packages</h5>
            <p>Flexible packages tailored to your specific needs—whether it's a quick session or a full-day event.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="shadow-sm p-4 h-100 border border-secondary rounded">
            <i class="bi bi-emoji-smile fs-1 text-warning mb-3"></i>
            <h5>Client-Focused Approach</h5>
            <p>I make sure you're comfortable, heard, and completely satisfied with the final images.</p>
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section class="text-center py-5 px-3 cta-section">
        <h4 class="mb-3">Let’s Create Something Beautiful</h4>
        <p class="mb-4">Ready to capture your special moments? Reach out and let’s chat about your vision.</p>
        <router-link to="/contact" class="btn btn-custom">Get in Touch</router-link>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  }
  </script>
  
  <style scoped>
  .home h2 {
    font-weight: 600;
  }
  
  i {
    display: block;
  }
  
  /* CTA Section Styling */
  .cta-section {
    background-color: #121212;
    color: #f8f9fa;
    border-top: 1px solid #333;
    border-radius: 0.5rem;
    margin-top: 2rem;
  }
  
  /* Button Styling */
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
  </style>
  

  
  