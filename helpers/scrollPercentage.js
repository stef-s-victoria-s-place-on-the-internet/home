const { clamp } = require('lodash');

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
export const scrollPercentage = (selector) => {
  // Setup the element
  let element = document.querySelector(selector);

  // If the element doesn't exist or is not provided
  // the document will be used as reference
  if (!element) {
    element = document.documentElement;
  }
  // Setup all variables for calculation
  const elementHeight = element.scrollHeight;
  const elementTop = element.offsetTop;
  const scrollPosition = document.documentElement.scrollTop;

  // Calculate the percentage
  const percentage = (100 / elementHeight) * (scrollPosition - elementTop);
  return clamp(percentage, 0, 100);
};
