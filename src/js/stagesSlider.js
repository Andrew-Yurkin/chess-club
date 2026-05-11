function initStagesSlider() {
  const track = document.querySelector('.stages-slider__track')
  const slides = document.querySelectorAll('.stages-slide')
  const btnPrev = document.querySelector('.stages-slider__btn--prev')
  const btnNext = document.querySelector('.stages-slider__btn--next')
  const dots = document.querySelectorAll('.stages-slider__dot')

  let index = 0
  const lastIndex = slides.length - 1

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`

    dots.forEach((dot) => dot.classList.remove('is-active'))
    dots[index].classList.add('is-active')

    btnPrev.disabled = index === 0
    btnNext.disabled = index === lastIndex
  }

  btnNext.addEventListener('click', () => {
    if (index < lastIndex) {
      index++
      updateSlider()
    }
  })

  btnPrev.addEventListener('click', () => {
    if (index > 0) {
      index--
      updateSlider()
    }
  })

  updateSlider()
}

export default initStagesSlider
