const { clamp } = require('lodash')
/**
 * @summary Returns percentage of page scrolled
 * @name scrollPercentage
 * @method
 *
 * @description It uses the window and returns the percentage of page scrolled.
 * Should be used in the created() and destoryed() lifeside methods
 *
 *   created() {
 *    window.addEventListener('scroll', this.handleScroll)
 *  },
 *  destroyed() {
 *    window.removeEventListener('scroll', this.handleScroll)
 *  },
 *
 * @returns {Integer} percentage of page scrolled
 * @author: Stef Kors
 */
// const scrollPercentage = () => {
//   return (
//     ((document.documentElement.scrollTop + document.body.scrollTop) / // 570
//       (document.documentElement.scrollHeight - // 1299
//         document.documentElement.clientHeight)) * // 575
//     100
//   )
// }

/**
 * @summary Returns percentage of element scrolled
 * @name scrollPercentage
 * @method
 *
 * @description It uses the window and returns the percentage of element scrolled.
 * Should be used in the created() and destoryed() lifeside methods
 *
 *  created() {
 *    window.addEventListener('scroll', this.handleScroll)
 *  },
 *  destroyed() {
 *    window.removeEventListener('scroll', this.handleScroll)
 *  },
 *  
 * If no element provided the page will be used as default
 *  
 * @default page
 *
 * @returns {Integer} percentage
 * @author: Stef Kors, Victoria Douka-Doukopoulou
 */
const scrollPercentage = (selector) => {
  // Setup the element
  let element = document.querySelector(selector)

  // If the element doesn't exist or is not provided
  // the document will be used as reference
  if (!element) {
    element = document.documentElement
  }
  // Setup all variables for calculation
  const elementHeight = element.scrollHeight
  const elementTop = element.offsetTop
  const scrollPosition = document.documentElement.scrollTop

  // Calculate the percentage
  const percentage = (100 / elementHeight) * (scrollPosition - elementTop)
  return clamp(percentage, 0, 100)
}


/**
 * @summary Format object with JSON.stringify
 * @name format
 * @method
 * @returns {Object} Formatted object
 * @author: Stef Kors
 */
const format = object => {
  return JSON.stringify(object, null, 4)
}

export { scrollPercentage, format }

// const elementEnd = (heightOfElement + sizeOfElement)

// elementTop = 0
// elementHeight = 100
// scrollpostion = 60

// 100-30=70
// (0 +100) - 70 = 30

// const elementHeight = document.querySelector('.substrate').scrollHeight
// const elementTop = document.querySelector('.substrate').offsetTop
// const scrollPosition = document.documentElement.scrollTop

// const currentPosition = elementHeight - scrollPosition
// const scrollPercentage = (elementTop+elementHeight) - currentPosition

// elementTop / scrollpostion = 0
// elemnentTop+ elementHeight = 100
