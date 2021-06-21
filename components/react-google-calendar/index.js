"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _rrule = require("rrule");

var _event = _interopRequireDefault(require("./event"));

var _multiEvent = _interopRequireDefault(require("./multiEvent"));

var _helper = require("./utils/helper");

var _googleCalendarAPI = require("./utils/googleCalendarAPI");

var _react2 = require("@emotion/react");

var _gud = _interopRequireDefault(require("gud"));

var _languages = require("./languages");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1hrdiqt",
  styles: "font-size:14px;text-decoration:none;color:inherit;&:hover{text-decoration:underline;}"
} : {
  name: "d0cexe-Calendar",
  styles: "font-size:14px;text-decoration:none;color:inherit;&:hover{text-decoration:underline;};label:Calendar;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "p20sj1",
  styles: "vertical-align:top;margin-left:3px;margin-right:3px"
} : {
  name: "s71wyw-Calendar",
  styles: "vertical-align:top;margin-left:3px;margin-right:3px;label:Calendar;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "7l8byf",
  styles: "font-size:14px;padding-left:5px;text-align:left"
} : {
  name: "155wnvz-Calendar",
  styles: "font-size:14px;padding-left:5px;text-align:left;label:Calendar;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "sgs7ru",
  styles: "padding-right:6px"
} : {
  name: "csro95-Calendar",
  styles: "padding-right:6px;label:Calendar;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "sgs7ru",
  styles: "padding-right:6px"
} : {
  name: "csro95-Calendar",
  styles: "padding-right:6px;label:Calendar;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Calendar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Calendar);
    _this = _super.call(this, props);
    _this.state = {
      monthNames: (0, _toConsumableArray2["default"])(_languages.Languages.EN.MONTHS),
      days: (0, _toConsumableArray2["default"])(_languages.Languages.EN.DAYS),
      today: (0, _momentTimezone["default"])(),
      current: (0, _momentTimezone["default"])().startOf("month").utc(true),
      //current position on calendar (first day of month)
      calendars: [],
      events: [],
      //all day or multi day events
      singleEvents: [],
      //single day events
      userTimezone: _momentTimezone["default"].tz.guess(),
      showFooter: props.showFooter
    };
    _this.lastMonth = _this.lastMonth.bind((0, _assertThisInitialized2["default"])(_this));
    _this.nextMonth = _this.nextMonth.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Calendar, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var lang, res, _iterator, _step, calendar, _res, events;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (Boolean(this.props.language) && _languages.availableLanguages.includes(this.props.language.toUpperCase())) {
                  // try to change langue
                  try {
                    lang = this.props.language.toUpperCase();
                    this.setState({
                      monthNames: (0, _toConsumableArray2["default"])(_languages.Languages[lang].MONTHS),
                      days: (0, _toConsumableArray2["default"])(_languages.Languages[lang].DAYS)
                    });
                  } catch (err) {
                    console.error("Error choosing a new language", err);
                  }
                } //init and load google calendar api


                _context.prev = 1;
                _context.next = 4;
                return (0, _googleCalendarAPI.loadCalendarAPI)(this.props.apiKey);

              case 4:
                res = _context.sent;
                console.log(res);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.error("Error loading GAPI client for API", _context.t0);

              case 11:
                //Get events from all calendars
                _iterator = _createForOfIteratorHelper(this.props.calendars);
                _context.prev = 12;

                _iterator.s();

              case 14:
                if ((_step = _iterator.n()).done) {
                  _context.next = 29;
                  break;
                }

                calendar = _step.value;
                _context.prev = 16;
                _context.next = 19;
                return (0, _googleCalendarAPI.getEventsList)(calendar.calendarId);

              case 19:
                _res = _context.sent;
                //process events
                events = this.processEvents(_res.result.items, _res.result.summary, calendar.color); //set state with calculated values

                this.setState({
                  "events": [].concat((0, _toConsumableArray2["default"])(this.state.events), (0, _toConsumableArray2["default"])(events[0])),
                  "singleEvents": [].concat((0, _toConsumableArray2["default"])(this.state.singleEvents), (0, _toConsumableArray2["default"])(events[1]))
                });
                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t1 = _context["catch"](16);
                console.error("Error getting events", _context.t1);

              case 27:
                _context.next = 14;
                break;

              case 29:
                _context.next = 34;
                break;

              case 31:
                _context.prev = 31;
                _context.t2 = _context["catch"](12);

                _iterator.e(_context.t2);

              case 34:
                _context.prev = 34;

                _iterator.f();

                return _context.finish(34);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8], [12, 31, 34, 37], [16, 24]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() //get easy to work with events and singleEvents from response

  }, {
    key: "processEvents",
    value: function processEvents(items, calendarName, color) {
      var singleEvents = [];
      var events = [];
      var changed = [];
      var cancelled = [];
      items.forEach(function (event) {
        if (event.originalStartTime) {
          //cancelled or changed events
          if (event.status == "cancelled") {
            //cancelled events
            cancelled.push({
              recurringEventId: event.recurringEventId,
              originalStartTime: event.originalStartTime.dateTime ? (0, _momentTimezone["default"])(event.originalStartTime.dateTime) : _momentTimezone["default"].parseZone(event.originalStartTime.date)
            });
          } else if (event.status == "confirmed") {
            //changed events
            changed.push({
              recurringEventId: event.recurringEventId,
              name: event.summary,
              description: event.description,
              location: event.location,
              originalStartTime: event.originalStartTime.dateTime ? (0, _momentTimezone["default"])(event.originalStartTime.dateTime) : _momentTimezone["default"].parseZone(event.originalStartTime.date),
              newStartTime: event.start.dateTime ? (0, _momentTimezone["default"])(event.start.dateTime) : _momentTimezone["default"].parseZone(event.start.date),
              newEndTime: event.end.dateTime ? (0, _momentTimezone["default"])(event.end.dateTime) : _momentTimezone["default"].parseZone(event.end.date)
            });
          } else {
            console.log("Not categorized: ", event);
          }
        } else if (event.status == "confirmed") {
          //normal events
          var newEvent = {
            id: event.id,
            name: event.summary,
            startTime: event.start.dateTime ? (0, _momentTimezone["default"])(event.start.dateTime) : _momentTimezone["default"].parseZone(event.start.date),
            endTime: event.end.dateTime ? (0, _momentTimezone["default"])(event.end.dateTime) : _momentTimezone["default"].parseZone(event.end.date),
            description: event.description,
            location: event.location,
            recurrence: event.recurrence,
            changedEvents: [],
            cancelledEvents: [],
            calendarName: calendarName,
            color: color
          };

          if ((0, _helper.isMultiEvent)(newEvent.startTime, newEvent.endTime)) {
            events.push(newEvent);
          } else {
            singleEvents.push(newEvent);
          }
        } else {
          console.log("Not categorized: ", event);
        }
      }); //add changed events and cancelled events to corresponding event object

      events.forEach(function (event, idx, arr) {
        if (event.recurrence) {
          //push changed events
          changed.filter(function (change) {
            return change.recurringEventId == event.id;
          }).forEach(function (change) {
            arr[idx].changedEvents.push(change);
          }); //push cancelled events

          cancelled.filter(function (cancel) {
            return cancel.recurringEventId == event.id;
          }).forEach(function (cancel) {
            arr[idx].cancelledEvents.push(cancel.originalStartTime);
          });
        }
      });
      singleEvents.forEach(function (event, idx, arr) {
        if (event.recurrence) {
          //push changed events
          changed.filter(function (change) {
            return change.recurringEventId == event.id;
          }).forEach(function (change) {
            arr[idx].changedEvents.push(change);
          }); //push cancelled events

          cancelled.filter(function (cancel) {
            return cancel.recurringEventId == event.id;
          }).forEach(function (cancel) {
            arr[idx].cancelledEvents.push(cancel.originalStartTime);
          });
        }
      });
      return [events, singleEvents];
    } //sets current month to previous month

  }, {
    key: "lastMonth",
    value: function lastMonth() {
      this.setState({
        current: this.state.current.subtract(1, "months")
      });
    } //sets current month to following month

  }, {
    key: "nextMonth",
    value: function nextMonth() {
      this.setState({
        current: this.state.current.add(1, "months")
      });
    }
  }, {
    key: "clearEvents",
    value: function clearEvents() {
      for (var i = 1; i <= this.state.current.daysInMonth(); i++) {
        var node = document.getElementById("day-" + i);

        while (node.lastElementChild) {
          node.removeChild(node.lastElementChild);
        }
      }
    } //renders the day of week names

  }, {
    key: "renderDays",
    value: function renderDays() {
      var _this2 = this;

      return this.state.days.map(function (x, i) {
        return (0, _react2.jsx)("div", {
          className: "day-name",
          key: "day-of-week-" + i,
          css: ["border-color:LightGray;", (0, _get2["default"])(_this2.props.styles, 'day', {}), process.env.NODE_ENV === "production" ? "" : ";label:Calendar;"]
        }, x);
      });
    } //renders the blocks for the days of each month

  }, {
    key: "renderDates",
    value: function renderDates(eventsEachDay) {
      var _this3 = this;

      var days = (0, _toConsumableArray2["default"])(Array(this.state.current.daysInMonth() + 1).keys()).slice(1); // create array from 1 to number of days in month

      var dayOfWeek = this.state.current.day(); //get day of week of first day in the month

      var padDays = ((-this.state.current.daysInMonth() - this.state.current.day()) % 7 + 7) % 7; //number of days to fill out the last row    

      return [(0, _toConsumableArray2["default"])(Array(dayOfWeek)).map(function (x, i) {
        return (0, _react2.jsx)("div", {
          className: "day",
          key: "empty-day-" + i,
          css: (0, _get2["default"])(_this3.props.styles, 'day', {})
        });
      }), days.map(function (x) {
        if (x == _this3.state.today.date() && _this3.state.current.isSame(_this3.state.today, "month")) {
          return (0, _react2.jsx)("div", {
            className: "day",
            key: "day-" + x,
            css: [(0, _get2["default"])(_this3.props.styles, 'day', {}), (0, _get2["default"])(_this3.props.styles, 'today', {}), process.env.NODE_ENV === "production" ? "" : ";label:Calendar;"]
          }, (0, _react2.jsx)("span", {
            css: _ref4
          }, x), (0, _react2.jsx)("div", {
            className: "innerDay",
            id: "day-" + x
          }, eventsEachDay[x - 1]));
        } else {
          return (0, _react2.jsx)("div", {
            className: "day",
            key: "day-" + x,
            css: (0, _get2["default"])(_this3.props.styles, 'day', {})
          }, (0, _react2.jsx)("span", {
            css: _ref5
          }, x), (0, _react2.jsx)("div", {
            className: "innerDay",
            id: "day-" + x
          }, eventsEachDay[x - 1]));
        }
      }), (0, _toConsumableArray2["default"])(Array(padDays)).map(function (x, i) {
        return (0, _react2.jsx)("div", {
          className: "day",
          key: "empty-day-2-" + i,
          css: (0, _get2["default"])(_this3.props.styles, 'day', {})
        });
      })];
    } //get array of arrays of length days in month containing the events in each day

  }, {
    key: "getRenderEvents",
    value: function getRenderEvents(events, singleEvents) {
      var _this4 = this;

      var eventsEachDay = (0, _toConsumableArray2["default"])(Array(this.state.current.daysInMonth())).map(function (e) {
        return [];
      }); //create array of empty arrays of length daysInMonth

      events.forEach(function (event) {
        if (event.recurrence) {
          var duration = _momentTimezone["default"].duration(event.endTime.diff(event.startTime));

          var dates = Calendar.getDatesFromRRule(event.recurrence[0], event.startTime, (0, _momentTimezone["default"])(_this4.state.current).subtract(duration), (0, _momentTimezone["default"])(_this4.state.current).add(1, "month")); //render recurrences

          dates.forEach(function (date) {
            //don't render if it is cancelled
            if (event.cancelledEvents.some(function (cancelledMoment) {
              return cancelledMoment.isSame(date, "day");
            })) {
              return;
            }

            var props; //update information if event has changed

            var changedEvent = event.changedEvents.find(function (changedEvent) {
              return changedEvent.originalStartTime.isSame(date, "day");
            });

            if (changedEvent) {
              props = {
                name: changedEvent.name,
                startTime: changedEvent.newStartTime,
                endTime: changedEvent.newEndTime,
                description: changedEvent.description,
                location: changedEvent.location,
                calendarName: event.calendarName,
                color: event.color
              };
            } else {
              var eventStart = _momentTimezone["default"].utc(date); //since rrule works with utc times


              var eventEnd = (0, _momentTimezone["default"])(eventStart).add(duration);
              props = {
                name: event.name,
                startTime: eventStart,
                endTime: eventEnd,
                description: event.description,
                location: event.location,
                calendarName: event.calendarName,
                color: event.color
              };
            }

            _this4.drawMultiEvent(eventsEachDay, props);
          });
        } else {
          //render event
          //check if event is in range
          if ((event.startTime.month() != _this4.state.current.month() || event.startTime.year() != _this4.state.current.year()) && event.endTime.month() != _this4.state.current.month() || event.endTime.year() != _this4.state.current.year()) {
            return;
          }

          _this4.drawMultiEvent(eventsEachDay, event);
        }
      });
      var eventProps = {
        tooltipStyles: (0, _get2["default"])(this.props.styles, 'tooltip', {}),
        //gets this.props.styles.tooltip if exists, else empty object
        eventStyles: (0, _get2["default"])(this.props.styles, 'event', {}),
        eventCircleStyles: (0, _get2["default"])(this.props.styles, 'eventCircle', {}),
        eventTextStyles: (0, _get2["default"])(this.props.styles, 'eventText', {})
      };
      singleEvents.forEach(function (event) {
        if (event.recurrence) {
          var duration = _momentTimezone["default"].duration(event.endTime.diff(event.startTime)); //get recurrences using RRule


          var dates = Calendar.getDatesFromRRule(event.recurrence[0], event.startTime, (0, _momentTimezone["default"])(_this4.state.current), (0, _momentTimezone["default"])(_this4.state.current).add(1, "month")); //render recurrences

          dates.forEach(function (date) {
            //check if it is in cancelled
            if (event.cancelledEvents.some(function (cancelledMoment) {
              return cancelledMoment.isSame(date, "day");
            })) {
              return;
            } //if event has changed


            var changedEvent = event.changedEvents.find(function (changedEvent) {
              return changedEvent.originalStartTime.isSame(date, "day");
            });

            if (changedEvent) {
              var props = {
                name: changedEvent.name,
                startTime: changedEvent.newStartTime,
                endTime: changedEvent.newEndTime,
                description: changedEvent.description,
                location: changedEvent.location,
                calendarName: event.calendarName,
                color: event.color
              };
            } else {
              var eventStart = _momentTimezone["default"].utc(date); //avoid bad timezone conversions


              var eventEnd = (0, _momentTimezone["default"])(eventStart).add(duration);
              var props = {
                name: event.name,
                startTime: eventStart,
                endTime: eventEnd,
                description: event.description,
                location: event.location,
                calendarName: event.calendarName,
                color: event.color
              };
            }

            _this4.renderSingleEvent(eventsEachDay, (0, _momentTimezone["default"])(props.startTime).date(), _objectSpread(_objectSpread({}, props), eventProps));
          });
        } else {
          //check if event is in current month
          if (event.startTime.month() != _this4.state.current.month() || event.startTime.year() != _this4.state.current.year()) {
            return;
          }

          _this4.renderSingleEvent(eventsEachDay, (0, _momentTimezone["default"])(event.startTime).date(), _objectSpread(_objectSpread({}, event), eventProps));
        }
      });
      return eventsEachDay;
    } //TODO: refactor
    //decides how to render events

  }, {
    key: "drawMultiEvent",
    value: function drawMultiEvent(eventsEachDay, props) {
      var startDrawDate;
      var blockLength = 1;
      var curDate;
      var endDate;
      var arrowLeft = false;
      var arrowRight = false;

      if (props.endTime.isSame((0, _momentTimezone["default"])(props.endTime).startOf("day"), "second")) {
        endDate = (0, _momentTimezone["default"])(props.endTime).utc(true).subtract(1, "day");
      } else {
        endDate = (0, _momentTimezone["default"])(props.endTime).utc(true);
      }

      if ((0, _momentTimezone["default"])(props.startTime).utc(true).isBefore(this.state.current)) {
        if (this.props.showArrow) {
          arrowLeft = true;
        }

        startDrawDate = 1;
        curDate = (0, _momentTimezone["default"])(this.state.current).utc(true);
      } else {
        startDrawDate = props.startTime.date();
        curDate = (0, _momentTimezone["default"])(props.startTime).utc(true);
      }

      while (curDate.isSameOrBefore(endDate, "day")) {
        if (curDate.date() == this.state.current.daysInMonth() && !endDate.isSame(this.state.current, 'month')) {
          if (this.props.showArrow) {
            arrowRight = true;
          } //draw then quit


          this.renderMultiEventBlock(eventsEachDay, startDrawDate, blockLength, props, arrowLeft, arrowRight);
          break;
        }

        if (curDate.date() == this.state.current.daysInMonth() || curDate.isSame(endDate, "day")) {
          //draw then quit
          this.renderMultiEventBlock(eventsEachDay, startDrawDate, blockLength, props, arrowLeft, arrowRight);
          break;
        }

        if (curDate.day() == 6) {
          //draw then reset
          this.renderMultiEventBlock(eventsEachDay, startDrawDate, blockLength, props, arrowLeft, arrowRight);
          startDrawDate = (0, _momentTimezone["default"])(curDate).add(1, "day").date();
          blockLength = 0;
          arrowLeft = false;
          arrowRight = false;
        }

        blockLength++;
        curDate.add(1, "day");
      }
    } //TODO: refactor this too?
    //handles rendering and proper stacking of individual blocks 

  }, {
    key: "renderMultiEventBlock",
    value: function renderMultiEventBlock(eventsEachDay, startDate, length, props, arrowLeft, arrowRight) {
      var multiEventProps = {
        tooltipStyles: (0, _get2["default"])(this.props.styles, 'tooltip', {}),
        //gets this.props.styles.tooltip if exists, else empty object
        multiEventStyles: (0, _get2["default"])(this.props.styles, 'multiEvent', {})
      };
      var maxBlocks = 0;
      var closedSlots = []; //keep track of rows that the event can't be inserted into

      for (var i = 0; i < length; i++) {
        var dayEvents = eventsEachDay[startDate - 1 + i];

        if (dayEvents.length > maxBlocks) {
          maxBlocks = dayEvents.length;
        } //address rows that are not the last element in closedSlots


        for (var j = 0; j < maxBlocks; j++) {
          if (j > dayEvents.length) {
            break;
          } else if (closedSlots.includes(j)) {
            continue;
          }

          if (dayEvents[j].props.className.includes("isEvent")) {
            closedSlots.push(j);
          }
        }
      }

      var chosenRow;

      for (var _i = 0; _i <= maxBlocks; _i++) {
        if (!closedSlots.includes(_i)) {
          chosenRow = _i;
          break;
        }
      } //fill in placeholders


      for (var _i2 = 0; _i2 < length; _i2++) {
        //placeholders
        while (eventsEachDay[startDate - 1 + _i2].length <= chosenRow) {
          eventsEachDay[startDate - 1 + _i2].push((0, _react2.jsx)("div", {
            className: "event below placeholder",
            key: "placeholder-".concat((0, _gud["default"])())
          }));
        } //rest of event that is under the main banner


        eventsEachDay[startDate - 1 + _i2][chosenRow] = (0, _react2.jsx)("div", {
          className: "isEvent event below",
          key: "filler-".concat((0, _gud["default"])())
        });
      } //render event


      eventsEachDay[startDate - 1][chosenRow] = (0, _react2.jsx)("div", {
        className: "isEvent",
        key: "multi-event-".concat(chosenRow)
      }, (0, _react2.jsx)(_multiEvent["default"], (0, _extends2["default"])({}, props, multiEventProps, {
        length: length,
        arrowLeft: arrowLeft,
        arrowRight: arrowRight,
        key: "multi-event-".concat((0, _gud["default"])())
      })));
    } //attempts to render in a placeholder then at the end

  }, {
    key: "renderSingleEvent",
    value: function renderSingleEvent(eventsEachDay, date, props) {
      var foundEmpty = false;
      var nodes = eventsEachDay[date - 1];

      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].props.className.includes("event") && !nodes[i].props.className.includes("isEvent")) {
          //target only placeholders
          nodes[i] = (0, _react2.jsx)("div", {
            className: "isEvent",
            key: "single-event-".concat((0, _gud["default"])())
          }, (0, _react2.jsx)(_event["default"], (0, _extends2["default"])({}, props, {
            key: "single-event-".concat((0, _gud["default"])())
          })));
          foundEmpty = true;
          break;
        }
      }

      if (!foundEmpty) {
        eventsEachDay[date - 1].push((0, _react2.jsx)("div", {
          className: "isEvent",
          key: "single-event-".concat((0, _gud["default"])())
        }, (0, _react2.jsx)(_event["default"], (0, _extends2["default"])({}, props, {
          key: "single-event-".concat((0, _gud["default"])())
        }))));
      }
    } //get dates based on rrule string between dates

  }, {
    key: "render",
    value: function render() {
      var eventsEachDay = this.getRenderEvents(this.state.events, this.state.singleEvents);
      return (0, _react2.jsx)("div", {
        className: "calendar",
        css: ["font-size:18px;border:1px solid;min-width:300px;position:relative;border-color:LightGray;color:#51565d;", (0, _get2["default"])(this.props.styles, 'calendar', {}), process.env.NODE_ENV === "production" ? "" : ";label:Calendar;"]
      }, (0, _react2.jsx)("div", {
        className: "calendar-header"
      }, (0, _react2.jsx)("div", {
        className: "calendar-navigate unselectable",
        onClick: this.lastMonth
      }, "\u276E"), (0, _react2.jsx)("div", null, (0, _react2.jsx)("h2", {
        className: "calendar-title"
      }, this.state.monthNames[this.state.current.month()] + " " + this.state.current.year())), (0, _react2.jsx)("div", {
        className: "calendar-navigate unselectable",
        onClick: this.nextMonth
      }, "\u276F")), (0, _react2.jsx)("div", {
        className: "calendar-body"
      }, this.renderDays(), this.renderDates(eventsEachDay)), this.state.showFooter && (0, _react2.jsx)("div", {
        className: "calendar-footer"
      }, (0, _react2.jsx)("div", {
        css: _ref3
      }, "All times shown your timezone (", (0, _momentTimezone["default"])().tz(this.state.userTimezone).format("z"), ")"), (0, _react2.jsx)("div", {
        css: _ref2
      }, (0, _react2.jsx)("a", {
        href: "https://calendar.google.com/calendar/r?cid=" + this.props.calendarId,
        target: "_blank",
        css: _ref
      }, "+ Add Calendar"))));
    }
  }], [{
    key: "getDatesFromRRule",
    value: function getDatesFromRRule(str, eventStart, betweenStart, betweenEnd) {
      //get recurrences using RRule
      var rstr = "DTSTART:".concat((0, _momentTimezone["default"])(eventStart).utc(true).format('YYYYMMDDTHHmmss'), "Z\n").concat(str);
      var rruleSet = (0, _rrule.rrulestr)(rstr, {
        forceset: true
      }); //get dates

      var begin = (0, _momentTimezone["default"])(betweenStart).utc(true).toDate();
      var end = (0, _momentTimezone["default"])(betweenEnd).utc(true).toDate();
      var dates = rruleSet.between(begin, end);
      return dates;
    }
  }]);
  return Calendar;
}(_react["default"].Component);

exports["default"] = Calendar;
Calendar.propTypes = {
  calendars: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    calendarId: _propTypes["default"].string.isRequired,
    color: _propTypes["default"].string
  })).isRequired,
  apiKey: _propTypes["default"].string.isRequired,
  showFooter: _propTypes["default"].bool.isRequired,
  showArrow: _propTypes["default"].bool,
  styles: _propTypes["default"].object,
  language: _propTypes["default"].string
};
Calendar.defaultProps = {
  showArrow: true,
  showFooter: true
};