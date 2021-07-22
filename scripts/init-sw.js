if (navigator.serviceWorker) {
  window.addEventListener('load', () => (
    navigator.serviceWorker.register('/sw.js')
  ));
}
