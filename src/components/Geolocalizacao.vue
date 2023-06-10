<template>
    <div id="map"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        // Inicializa o mapa
        const map = L.map('map').setView([0, 0], 13);
  
        // Adiciona um provedor de mapa (por exemplo, o OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; OpenStreetMap contributors',
          maxZoom: 18,
        }).addTo(map);
  
        // Obtém a geolocalização do usuário
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
  
            // Adiciona um marcador na posição do usuário
            L.marker([latitude, longitude]).addTo(map);
            
            // Move o mapa para a posição do usuário
            map.setView([latitude, longitude], 13);
          });
        }
      },
    },
  };
  </script>
  
  <style>
  #map {
    height: 400px;
  }
  </style>
  