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
const scrollPercentage = () => {
  return ((document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight)) *
    100
}

export { scrollPercentage }
