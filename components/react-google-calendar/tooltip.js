"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("@emotion/react");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react2 = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _reactPopper = require("react-popper");

var _helper = require("./utils/helper");

var _place = _interopRequireDefault(require("./svg/place"));

var _subject = _interopRequireDefault(require("./svg/subject"));

var _calendarToday = _interopRequireDefault(require("./svg/calendarToday"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "p9r3d0",
  styles: "position:absolute;right:2px;top:-5px;opacity:0.5;font-size:24px;&:hover{cursor:pointer;opacity:0.9;}"
} : {
  name: "17coeau-Tooltip",
  styles: "position:absolute;right:2px;top:-5px;opacity:0.5;font-size:24px;&:hover{cursor:pointer;opacity:0.9;};label:Tooltip;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "qzmnd2",
  styles: "padding-right:10px"
} : {
  name: "17g6ek8-description",
  styles: "padding-right:10px;label:description;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "htidso",
  styles: "overflow-wrap:break-word;max-width:calc(100% - 28px)"
} : {
  name: "1x6msnn-description",
  styles: "overflow-wrap:break-word;max-width:calc(100% - 28px);label:description;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "1uk7isy",
  styles: "padding-right:10px;display:flex;align-items:center"
} : {
  name: "15q0fcl-location",
  styles: "padding-right:10px;display:flex;align-items:center;label:location;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "htidso",
  styles: "overflow-wrap:break-word;max-width:calc(100% - 28px)"
} : {
  name: "1w0vxb1-location",
  styles: "overflow-wrap:break-word;max-width:calc(100% - 28px);label:location;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref6 = process.env.NODE_ENV === "production" ? {
  name: "1uk7isy",
  styles: "padding-right:10px;display:flex;align-items:center"
} : {
  name: "6f8356-calendarName",
  styles: "padding-right:10px;display:flex;align-items:center;label:calendarName;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref8 = process.env.NODE_ENV === "production" ? {
  name: "bjn8wh",
  styles: "position:relative"
} : {
  name: "xfysr9-Tooltip",
  styles: "position:relative;label:Tooltip;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref9 = process.env.NODE_ENV === "production" ? {
  name: "5ar9vx",
  styles: "margin-top:0px;padding-top:18.675px"
} : {
  name: "1micmwc-Tooltip",
  styles: "margin-top:0px;padding-top:18.675px;label:Tooltip;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Tooltip = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Tooltip, _React$Component);

  var _super = _createSuper(Tooltip);

  function Tooltip(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Tooltip);
    _this = _super.call(this, props);
    var allDay = (0, _helper.isAllDay)(_this.props.startTime, _this.props.endTime);
    _this.state = {
      timeDisplay: Tooltip.getTimeDisplay(_this.props.startTime, _this.props.endTime, allDay),
      eventURL: (0, _helper.getCalendarURL)(_this.props.startTime, _this.props.endTime, _this.props.name, _this.props.description, _this.props.location, allDay)
    };
    return _this;
  }

  (0, _createClass2["default"])(Tooltip, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var description;

      if (this.props.description) {
        description = (0, _react.jsx)("div", {
          className: "details description"
        }, (0, _react.jsx)("div", {
          css: _ref2
        }, (0, _react.jsx)(_subject["default"], {
          fill: "currentColor"
        })), (0, _react.jsx)("div", {
          css: _ref3,
          onMouseDown: function onMouseDown(e) {
            if (e.target.nodeName == 'A') {
              e.preventDefault();
            }
          },
          dangerouslySetInnerHTML: {
            __html: this.props.description
          }
        }));
      } else {
        description = (0, _react.jsx)("div", null);
      }

      var location;

      if (this.props.location) {
        location = (0, _react.jsx)("div", {
          className: "details location"
        }, (0, _react.jsx)("div", {
          css: _ref4
        }, (0, _react.jsx)(_place["default"], {
          fill: "currentColor"
        })), (0, _react.jsx)("div", {
          css: _ref5
        }, this.props.location));
      } else {
        location = (0, _react.jsx)("div", null);
      }

      var calendarName;

      if (this.props.calendarName) {
        calendarName = (0, _react.jsx)("div", {
          className: "details calendarName"
        }, (0, _react.jsx)("div", {
          css: _ref6
        }, (0, _react.jsx)(_calendarToday["default"], {
          fill: "currentColor"
        })), (0, _react.jsx)("div", null, this.props.calendarName));
      } else {
        calendarName = (0, _react.jsx)("div", null);
      }

      return (0, _react.jsx)(_reactPopper.Popper, {
        modifiers: [{
          name: 'preventOverflow',
          options: {
            altAxis: true
          }
        }]
      }, function (_ref7) {
        var ref = _ref7.ref,
            style = _ref7.style,
            placement = _ref7.placement,
            arrowProps = _ref7.arrowProps;
        return (0, _react.jsx)("div", {
          className: "tooltip",
          ref: ref,
          style: style,
          "data-placement": placement,
          css: [/*#__PURE__*/(0, _react.css)("visibility:", _this2.props.showTooltip ? "visible" : "hidden", ";width:250px;background:#fff;text-align:left;padding:5px;border-radius:6px;color:#51565d;border:2px solid rgba(81, 86, 93, 0.1);position:absolute;z-index:1;" + (process.env.NODE_ENV === "production" ? "" : ";label:Tooltip;")), _this2.props.tooltipStyles, process.env.NODE_ENV === "production" ? "" : ";label:Tooltip;"]
        }, (0, _react.jsx)("div", {
          css: _ref8
        }, (0, _react.jsx)("div", {
          css: _ref,
          onClick: _this2.props.closeTooltip
        }, "\xD7"), (0, _react.jsx)("h2", {
          className: "tooltip-text",
          css: _ref9
        }, _this2.props.name), (0, _react.jsx)("p", {
          className: "display-linebreak"
        }, _this2.state.timeDisplay), description, location, calendarName, (0, _react.jsx)("a", {
          href: _this2.state.eventURL,
          target: "_blank",
          onMouseDown: function onMouseDown(e) {
            return e.preventDefault();
          },
          css: /*#__PURE__*/(0, _react.css)({
            fontSize: "13px",
            tabIndex: -1
          }, process.env.NODE_ENV === "production" ? "" : ";label:Tooltip;")
        }, "Copy to Calendar")));
      });
    }
  }], [{
    key: "getTimeDisplay",
    value: function getTimeDisplay(startTime, endTime, allDay) {
      if (allDay) {
        var endDate = (0, _momentTimezone["default"])(endTime).subtract(1, "day");

        if (endDate.isSame(startTime, "day")) {
          return startTime.format("dddd, MMMM Do");
        } else {
          return startTime.format("MMM Do, YYYY") + " - " + endDate.format("MMM Do, YYYY");
        }
      } else {
        if (endTime.isSame(startTime, "day")) {
          return startTime.format("dddd, MMMM Do") + "\n" + startTime.format("h:mma") + " - " + endTime.format("h:mma");
        } else {
          return startTime.format("MMM Do, YYYY, h:mma") + " -\n" + endTime.format("MMM Do, YYYY, h:mma");
        }
      }
    }
  }]);
  return Tooltip;
}(_react2["default"].Component);

exports["default"] = Tooltip;
Tooltip.propTypes = {
  showTooltip: _propTypes["default"].bool.isRequired,
  name: _propTypes["default"].string.isRequired,
  startTime: _propTypes["default"].instanceOf(_momentTimezone["default"]),
  endTime: _propTypes["default"].instanceOf(_momentTimezone["default"]),
  description: _propTypes["default"].string,
  location: _propTypes["default"].string,
  calendarName: _propTypes["default"].string,
  closeTooltip: _propTypes["default"].func.isRequired
};