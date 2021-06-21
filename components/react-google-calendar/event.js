"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _react2 = require("@emotion/react");

var _fiberManualRecord = _interopRequireDefault(require("./svg/fiberManualRecord"));

var _tooltip = _interopRequireDefault(require("./tooltip"));

var _reactPopper = require("react-popper");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "18i2ql3",
  styles: "@media (max-width: 599px){display:none;}"
} : {
  name: "190p05k-Event",
  styles: "@media (max-width: 599px){display:none;};label:Event;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "obigwj",
  styles: "border-radius:3px;width:100%;&:hover{cursor:pointer;background:rgba(81, 86, 93, 0.1);}"
} : {
  name: "17undz0-Event",
  styles: "border-radius:3px;width:100%;&:hover{cursor:pointer;background:rgba(81, 86, 93, 0.1);};label:Event;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "urwrh8",
  styles: "position:relative;&:focus{outline:none;}"
} : {
  name: "xrcpmh-Event",
  styles: "position:relative;&:focus{outline:none;};label:Event;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "f3vz0n",
  styles: "font-weight:500"
} : {
  name: "7rb84a-Event",
  styles: "font-weight:500;label:Event;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Event = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Event, _React$Component);

  var _super = _createSuper(Event);

  function Event(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Event);
    _this = _super.call(this, props);
    _this.state = {
      startTime: (0, _momentTimezone["default"])(_this.props.startTime),
      endTime: (0, _momentTimezone["default"])(_this.props.endTime),
      showTooltip: false
    };
    _this.toggleTooltip = _this.toggleTooltip.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeTooltip = _this.closeTooltip.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Event, [{
    key: "closeTooltip",
    value: function closeTooltip() {
      this.setState({
        showTooltip: false
      });
    }
  }, {
    key: "toggleTooltip",
    value: function toggleTooltip() {
      this.setState({
        showTooltip: !this.state.showTooltip
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (0, _react2.jsx)(_reactPopper.Manager, null, (0, _react2.jsx)("div", {
        className: "event",
        tabIndex: "0",
        onBlur: this.closeTooltip,
        css: _ref3
      }, (0, _react2.jsx)(_reactPopper.Reference, null, function (_ref4) {
        var ref = _ref4.ref;
        return (0, _react2.jsx)("div", {
          css: [_ref2, _this2.props.eventStyles, process.env.NODE_ENV === "production" ? "" : ";label:Event;"],
          onClick: _this2.toggleTooltip,
          ref: ref
        }, (0, _react2.jsx)("div", {
          className: "event-text",
          css: ["color:#51565d;padding:3px 0px 3px 20px;margin-right:5px;overflow-x:hidden;white-space:nowrap;position:relative;text-align:left;", _this2.props.eventTextStyles, process.env.NODE_ENV === "production" ? "" : ";label:Event;"]
        }, (0, _react2.jsx)("span", {
          css: [{
            position: "absolute",
            top: "5px",
            left: "2px",
            color: _this2.props.color,
            height: "15px",
            width: "15px"
          }, _this2.props.eventCircleStyles, process.env.NODE_ENV === "production" ? "" : ";label:Event;"]
        }, (0, _react2.jsx)(_fiberManualRecord["default"], {
          fill: "currentColor",
          fontSize: "inherit",
          width: "100%"
        })), (0, _react2.jsx)("span", {
          css: _ref
        }, _this2.state.startTime.format("h:mma ")), (0, _react2.jsx)("span", {
          css: _ref5
        }, _this2.props.name)));
      }), (0, _react2.jsx)(_tooltip["default"], {
        name: this.props.name,
        startTime: (0, _momentTimezone["default"])(this.props.startTime),
        endTime: (0, _momentTimezone["default"])(this.props.endTime),
        description: this.props.description,
        location: this.props.location,
        tooltipStyles: this.props.tooltipStyles,
        showTooltip: this.state.showTooltip,
        closeTooltip: this.closeTooltip,
        calendarName: this.props.calendarName
      })));
    }
  }]);
  return Event;
}(_react["default"].Component);

exports["default"] = Event;
Event.propTypes = {
  name: _propTypes["default"].string.isRequired,
  startTime: _propTypes["default"].instanceOf(_momentTimezone["default"]).isRequired,
  endTime: _propTypes["default"].instanceOf(_momentTimezone["default"]).isRequired,
  description: _propTypes["default"].string,
  location: _propTypes["default"].string,
  eventStyles: _propTypes["default"].oneOfType([_propTypes["default"].object, /*#__PURE__*/_propTypes["default"].instanceOf(_react2.css, process.env.NODE_ENV === "production" ? "" : ";label:eventStyles;")]),
  eventCircleStyles: _propTypes["default"].oneOfType([_propTypes["default"].object, /*#__PURE__*/_propTypes["default"].instanceOf(_react2.css, process.env.NODE_ENV === "production" ? "" : ";label:eventCircleStyles;")]),
  eventTextStyles: _propTypes["default"].oneOfType([_propTypes["default"].object, /*#__PURE__*/_propTypes["default"].instanceOf(_react2.css, process.env.NODE_ENV === "production" ? "" : ";label:eventTextStyles;")]),
  tooltipStyles: _propTypes["default"].oneOfType([_propTypes["default"].object, /*#__PURE__*/_propTypes["default"].instanceOf(_react2.css, process.env.NODE_ENV === "production" ? "" : ";label:tooltipStyles;")]),
  calendarName: _propTypes["default"].string,
  color: _propTypes["default"].string
};
Event.defaultProps = {
  color: '#4786ff'
};