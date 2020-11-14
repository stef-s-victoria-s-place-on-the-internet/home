/**
 * @summary Format object with JSON.stringify
 * @name format
 * @method
 * @returns {Object} Formatted object
 * @author: Stef Kors
 */
export const formatJSON = (object) => {
  return JSON.stringify(object, null, 4);
};
