"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCalendarAPI = loadCalendarAPI;
exports.getEventsList = getEventsList;

/** Loads google calendar api
 * @param {string} apiKey api key for google's calendar api
 * @return {Promise} resolves when api is successfully loaded and rejects when an error occurs
 */
function loadCalendarAPI(apiKey) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);

    script.onload = function () {
      gapi.load("client", function () {
        gapi.client.init({
          apiKey: apiKey
        }).then(function () {
          gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest").then(function () {
            return resolve("GAPI client successfully loaded for API");
          }, function (err) {
            return reject(err);
          });
        });
      });
    };
  });
}
/** query calendar API for events
 * @param {string} calendarId id of the calendar, looks like s9ajkhr604dfrmvm7185lesou0@group.calendar.google.com
 * @param {number} [maxResults=1000] maximum number of events returned, can be up to 2500, currently doesn't support more events
 * @returns {Object} see https://developers.google.com/calendar/v3/reference/events/list for shape of response object
 */


function getEventsList(calendarId) {
  var maxResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  return gapi.client.calendar.events.list({
    calendarId: calendarId,
    maxResults: maxResults
  });
}