window.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.ticker__track')

  if (!tracks.length) return

  tracks.forEach((track) => {
    if (track.dataset.tickerReady) return
    track.dataset.tickerReady = 'true'

    track.innerHTML += track.innerHTML
  })
})
