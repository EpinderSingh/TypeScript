/// <reference types="@types/google-maps" />

// import { User } from './components/User';
// import { Company } from './components/Company';

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
