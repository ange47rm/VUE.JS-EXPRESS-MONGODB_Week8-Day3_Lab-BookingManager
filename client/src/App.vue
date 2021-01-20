<template>
  <div id="app">
    <h1> Hotel Booking Manager </h1>
    <booking-form/>
    <booking-grid/>

  </div>
</template>

<script>
import bookingForm from './components/bookingForm.vue';
import bookingGrid from './components/bookingGrid.vue';



export default {
  name: 'app',
  components: {
    'booking-form': bookingForm,
    'booking-grid': bookingGrid
    },
}
</script>



<style>

h1 {
  text-align: center;
  padding: 15px;
  font-size: 70px;
  color: white;
}

#app {
  padding: 50px;
  background-color: salmon;
  border-radius: 15px;
  font-family: 'Quicksand', sans-serif;

}

</style>
