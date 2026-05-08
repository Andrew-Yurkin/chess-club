window.addEventListener('load', () => {
  const track = document.querySelector('.ticker__track')
  if (!track) return

  if (track.dataset.ready) return
  track.dataset.ready = 'true'

  track.innerHTML += track.innerHTML

  requestAnimationFrame(() => {
    track.classList.add('animate')
  })
})
