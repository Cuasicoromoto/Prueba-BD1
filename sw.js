self.addEventListener('install', (e) => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', (e) => {
  // Aquí se podría gestionar el cache para uso offline
});
