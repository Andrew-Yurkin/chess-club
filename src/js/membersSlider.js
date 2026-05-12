function initMembersSlider() {
  const slider = document.querySelector('.members__slider')
  const track = document.querySelector('.members__track')
  const btnPrev = document.querySelector('.members__btn--prev')
  const btnNext = document.querySelector('.members__btn--next')
  const counterCurrent = document.querySelector('.members__current')
  const counterTotal = document.querySelector('.members__total')
  const cards = track.querySelectorAll('.member-card')

  if (!slider || !track || !btnPrev || !btnNext || !cards) return

  let slides = Array.from(track.children)
  const originalSlidesCount = slides.length

  if (counterTotal) counterTotal.textContent = String(originalSlidesCount)

  function getVisibleCount() {
    if (window.innerWidth <= 600) return 1
    if (window.innerWidth <= 1024) return 2
    return 3
  }

  let visible = getVisibleCount()
  let index = visible
  let autoplayTimer = null
  let isPointerDown = false
  let isAnimating = false

  function getSlideWidth() {
    const firstSlide = track.children[0]
    if (!firstSlide) return 0

    const gap = 20

    return firstSlide.getBoundingClientRect().width + gap
  }

  function setPosition(withTransition = true) {
    if (!withTransition) track.style.transition = 'none'

    const slideWidth = getSlideWidth()
    track.style.transform = `translateX(-${index * slideWidth}px)`

    if (!withTransition) {
      track.offsetHeight
      track.style.transition = ''
    }

    updateCounter()
  }

  function updateCounter() {
    if (!counterCurrent) return

    let firstRealIndex = index - visible

    while (firstRealIndex < 0) firstRealIndex += originalSlidesCount
    while (firstRealIndex >= originalSlidesCount) firstRealIndex -= originalSlidesCount

    let lastVisibleIndex = firstRealIndex + visible

    if (lastVisibleIndex > originalSlidesCount) {
      lastVisibleIndex = originalSlidesCount
    }

    counterCurrent.textContent = String(lastVisibleIndex)
  }

  function createClones() {
    const currentSlides = Array.from(track.children)

    const firstClones = currentSlides.slice(0, visible)
    const lastClones = currentSlides.slice(-visible)

    firstClones.forEach((el) => {
      const clone = el.cloneNode(true)
      clone.dataset.clone = 'true'
      track.appendChild(clone)
    })

    lastClones.forEach((el) => {
      const clone = el.cloneNode(true)
      clone.dataset.clone = 'true'
      track.prepend(clone)
    })

    slides = Array.from(track.children)
  }

  function removeClones() {
    const clones = track.querySelectorAll('[data-clone="true"]')
    clones.forEach((clone) => clone.remove())
  }

  function moveTo(dir) {
    if (isAnimating) return

    isAnimating = true
    index += dir * visible
    setPosition(true)
  }

  function handleInfinite() {
    const slidesAll = track.children.length
    const maxIndex = slidesAll - visible * 2

    if (index > maxIndex) {
      index = visible
      setPosition(false)
    }

    if (index < visible) {
      index = maxIndex
      setPosition(false)
    }
  }

  function startAutoplay() {
    stopAutoplay()
    autoplayTimer = setInterval(() => moveTo(1), 4000)
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer)
  }

  slider.addEventListener('mouseenter', stopAutoplay)
  slider.addEventListener('mouseleave', startAutoplay)

  btnNext.addEventListener('click', () => moveTo(1))
  btnPrev.addEventListener('click', () => moveTo(-1))

  track.addEventListener('transitionend', () => {
    handleInfinite()
    isAnimating = false
  })

  let resizeTimer = null

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)

    resizeTimer = setTimeout(() => {
      const newVisible = getVisibleCount()
      if (newVisible === visible) return

      let firstRealIndex = index - visible

      while (firstRealIndex < 0) firstRealIndex += originalSlidesCount
      while (firstRealIndex >= originalSlidesCount) firstRealIndex -= originalSlidesCount

      stopAutoplay()
      removeClones()

      visible = newVisible
      createClones()

      index = visible + firstRealIndex

      setPosition(false)
      startAutoplay()
    }, 250)
  })

  function attachButtonsHoverPause() {
    if (btnPrev) {
      btnPrev.addEventListener('mouseenter', stopAutoplay)
      btnPrev.addEventListener('mouseleave', startAutoplay)
    }

    if (btnNext) {
      btnNext.addEventListener('mouseenter', stopAutoplay)
      btnNext.addEventListener('mouseleave', startAutoplay)
    }
  }

  function attachHoldListeners() {
    cards.forEach((card) => {
      // мышка
      card.addEventListener('mousedown', () => {
        isPointerDown = true
        stopAutoplay()
      })

      card.addEventListener('mouseup', () => {
        isPointerDown = false
        startAutoplay()
      })

      card.addEventListener('mouseleave', () => {
        if (!isPointerDown) return
        isPointerDown = false
        startAutoplay()
      })

      // тач
      card.addEventListener(
        'touchstart',
        () => {
          isPointerDown = true
          stopAutoplay()
        },
        { passive: true },
      )

      card.addEventListener('touchend', () => {
        isPointerDown = false
        startAutoplay()
      })

      card.addEventListener('touchcancel', () => {
        isPointerDown = false
        startAutoplay()
      })
    })
  }

  createClones()
  setPosition(false)
  startAutoplay()
  attachButtonsHoverPause()
  attachHoldListeners()
}

export default initMembersSlider
