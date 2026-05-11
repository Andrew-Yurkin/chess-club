export class DynamicAdapt {
  constructor(type) {
    this.type = type
  }

  init() {
    this.objects = []
    this.daClassname = '_dynamic_adapt_'
    this.nodes = [...document.querySelectorAll('[data-da]')]

    this.nodes.forEach((node) => {
      const data = node.dataset.da.trim()
      const dataArray = data.split(',')
      const object = {}
      object.element = node
      object.parent = node.parentNode
      object.destination = document.querySelector(dataArray[0].trim())
      object.breakpoint = dataArray[2] ? dataArray[2].trim() : '767'
      object.place = dataArray[1] ? dataArray[1].trim() : 'last'
      object.index = this.indexInParent(object.parent, object.element)
      this.objects.push(object)
    })

    this.arraySort(this.objects)

    this.mediaQueries = this.objects
      .map(({ breakpoint }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)
      .filter((item, index, self) => self.indexOf(item) === index)

    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(',')
      const matchMedia = window.matchMedia(mediaSplit[0])
      const mediaBreakpoint = mediaSplit[1]

      const objectsFilter = this.objects.filter(
        ({ breakpoint }) => breakpoint === mediaBreakpoint,
      )

      matchMedia.addListener(() => {
        this.mediaHandler(matchMedia, objectsFilter)
      })

      this.mediaHandler(matchMedia, objectsFilter)
    })
  }

  mediaHandler(matchMedia, objects) {
    if (matchMedia.matches) {
      objects.forEach((object) =>
        this.moveTo(object.place, object.element, object.destination),
      )
    } else {
      objects.forEach((object) => {
        if (object.element.classList.contains(this.daClassname)) {
          this.moveBack(object.parent, object.element, object.index)
        }
      })
    }
  }

  moveTo(place, element, destination) {
    element.classList.add(this.daClassname)
    if (place === 'last' || place >= destination.children.length) {
      destination.append(element)
      return
    }
    if (place === 'first') {
      destination.prepend(element)
      return
    }
    destination.children[place].before(element)
  }

  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname)
    if (parent.children[index] !== undefined) {
      parent.children[index].before(element)
    } else {
      parent.append(element)
    }
  }

  indexInParent(parent, element) {
    return [...parent.children].indexOf(element)
  }

  arraySort(arr) {
    if (this.type === 'min') {
      arr.sort((a, b) => a.breakpoint - b.breakpoint)
    } else {
      arr.sort((a, b) => b.breakpoint - a.breakpoint)
    }
  }
}

export default DynamicAdapt
