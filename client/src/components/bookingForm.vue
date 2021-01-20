<template lang='html'>
        <form id='form' v-on:submit.prevent='addBooking'>
            <label for='name'>Name:</label>
            <input type='text' id='name' v-model='name'></input>
            <br>
            <label for='email'>Email:</label>
            <input type='text' id='email' v-model='email'></input>
            <br>
            <label for='status'>Client status:</label>
                <select name='status' id='status' v-model='status'>
                    <option value='notCheckedIn' selected="selected">Client has not checked in</option>
                    <option value='checkedIn'>Client has checked in</option>
                    <option value='checkedOut'>Client has checked out</option>
                </select>
                <br>
            <input type="submit" value='Add New Booking'/>
        </form>
</template>

<script>
import bookingService from '@/services/bookingService.js'
import { eventBus } from '@/main.js'

export default {
    name: 'booking-form',
    data(){
        return{
            name: null,
            email: null,
            status: null
        }
    },
    methods: {
        addBooking(){
            const booking = {
                name: this.name,
                email: this.email,
                status: this.status
            }    
        bookingService.postBooking(booking)
        .then (res => eventBus.$emit ('booking-added', res))
        }
    }


}
</script>

<style>

#form {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 40px;
    font-weight: bolder;
    font-size: 20px;
    color: white
}

</style>