<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Contact Us</h2>
    <form @submit.prevent="submitContact" class="col-md-6 mx-auto">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input v-model="form.name" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="form.email" type="email" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Package</label>
        <select v-model="form.package" class="form-select" required>
          <option disabled value="">Select a package</option>
          <option>Basic</option>
          <option>Standard</option>
          <option>Premium</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea v-model="form.message" class="form-control" rows="4" placeholder="Let us know what you're looking for..."></textarea>
      </div>

      <button type="submit" class="btn btn-primary w-100">Send Message</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        package: '',
        message: '',
      },
    }
  },
  methods: {
    async submitContact() {
      try {
        await axios.post('http://localhost:5000/contact', this.form)
        alert('Thanks for reaching out! We’ll contact you shortly.')
        this.form = { name: '', email: '', package: '', message: '' }
      } catch (err) {
        console.error(err)
        alert('Something went wrong. Please try again.')
      }
    },
  },
}
</script>

  