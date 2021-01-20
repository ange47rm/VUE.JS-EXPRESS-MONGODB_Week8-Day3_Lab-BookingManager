<template>
  <div class='booking-card'>
      
      <h4>{{booking.name}}</h4>
      <p>{{booking.email}}</p>
      <p>{{booking.status}}</p>

    <button v-on:click='deleteBooking'>Delete</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import bookingService from '@/services/bookingService.js'

export default {
    name: 'booking',
    props: ['booking'],
    methods: {
        deleteBooking(){
            bookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        }
    }
}
</script>


<style>

h4 {
    font-size: 20px;
}

.booking-card {
    background-color: white;
    border-radius: 15px;
    padding: 15px;
    margin: 5px;
    text-align: center;
}

input {
    font-family: 'Quicksand', sans-serif;
}

button {
    font-family: 'Quicksand', sans-serif;
}

</style>