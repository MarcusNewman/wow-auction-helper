/**
 * Sets the locale for the request, if no locale is defined, it will either use en_GB or the users browser locale if possible
 * @param {*} request 
 */

module.exports.getLocale = (request) => {
    // req.headers["accept-language"]
  return request.query.locale ?request.query.locale : 'en_GB';
};