<template>
  <div id='bookings'>
      <booking v-for='(booking, index) in bookings' :key='index' :booking='booking'></booking>
  </div>
</template>

<script>
import booking from './booking.vue'
import bookingService from '@/services/bookingService.js'
import {eventBus} from '../main.js'

export default {
    name: 'booking-grid',

    data (){
        return{
            bookings: []
        };
    },

    mounted(){
            this.getBookings()

        eventBus.$on('booking-added', (booking) => {
            this.bookings.push(booking)
        })
        eventBus.$on('booking-deleted', (id) => {
            let index = this.bookings.findIndex(booking => booking._id === id)
            this.bookings.splice (index, 1)
        })
    },

    methods: {
            getBookings(){
                bookingService.getBookings()
                .then(bookings => this.bookings = bookings);
            }
        },

    components: {
        'booking': booking
    }
}

</script>

<style>

#bookings {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>