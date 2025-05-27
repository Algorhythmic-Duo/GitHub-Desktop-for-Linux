document.getElementById('dirs').addEventListener('click', () => {
  window.postMessage({
    type: 'select-dirs'
  })
})
