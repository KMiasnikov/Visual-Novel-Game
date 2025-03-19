// Preload script to expose specific Node.js APIs to the renderer process
window.addEventListener('DOMContentLoaded', () => {
  // Expose any required Node.js APIs here if needed
  // For example, you could expose the ability to save/load game progress
  
  const body = document.querySelector('body');
  if (body) {
    body.classList.add('electron-app');
  }
  
  console.log('Preload script has loaded successfully');
});