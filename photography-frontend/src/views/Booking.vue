<template>
    <div class="container my-5">
      <h2 class="text-center mb-4">Book a Session</h2>
      <form @submit.prevent="submitBooking" class="col-md-6 mx-auto">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input v-model="form.name" type="text" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="form.email" type="email" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label class="form-label">Date</label>
          <input v-model="form.date" type="date" class="form-control" required />
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
  
        <button type="submit" class="btn btn-primary">Book Now</button>
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
          date: '',
          package: '',
        },
      }
    },
    methods: {
      async submitBooking() {
        try {
          await axios.post('http://localhost:5000/book', this.form)
          alert('Booking submitted successfully!')
          this.form = { name: '', email: '', date: '', package: '' }
        } catch (err) {
          console.error(err)
          alert('Something went wrong.')
        }
      },
    },
  }
  </script>
  