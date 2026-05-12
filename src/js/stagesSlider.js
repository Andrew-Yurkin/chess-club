const GAP = 16

function initStagesSlider() {
  const track = document.querySelector('.stages-slider__track')
  const slides = document.querySelectorAll('.stages-slide')
  const btnPrev = document.querySelector('.stages-slider__btn--prev')
  const btnNext = document.querySelector('.stages-slider__btn--next')
  const dots = document.querySelectorAll('.stages-slider__dot')

  if (!track || !slides.length) return

  let index = 0
  const lastIndex = slides.length - 1
  let resizeRAF = null

  function getSlideWidth() {
    return slides[0].getBoundingClientRect().width
  }

  function updateSlider() {
    const slideWidth = getSlideWidth()
    const offset = (slideWidth + GAP) * index
    track.style.transform = `translateX(-${offset}px)`

    dots.forEach((dot) => dot.classList.remove('is-active'))
    dots[index]?.classList.add('is-active')

    btnPrev.disabled = index === 0
    btnNext.disabled = index === lastIndex
  }

  function next() {
    if (index < lastIndex) {
      index++
      updateSlider()
    }
  }

  function prev() {
    if (index > 0) {
      index--
      updateSlider()
    }
  }

  btnNext?.addEventListener('click', next)
  btnPrev?.addEventListener('click', prev)

  // ⭐ ГЛАВНОЕ ИСПРАВЛЕНИЕ — реакция на resize
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeRAF)
    resizeRAF = requestAnimationFrame(updateSlider)
  })

  updateSlider()
}

export default initStagesSlider
