window.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.ticker__track')
  if (!tracks.length) return

  tracks.forEach((track) => {
    if (track.dataset.tickerReady) return
    track.dataset.tickerReady = 'true'

    const wrap = track.parentElement

    const clone = track.cloneNode(true)
    clone.setAttribute('aria-hidden', 'true')
    wrap.appendChild(clone)

    requestAnimationFrame(() => {
      wrap.classList.add('animate')
    })
  })
})
