"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("@emotion/react");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react2 = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _tooltip = _interopRequireDefault(require("./tooltip"));

var _helper = require("./utils/helper");

var _reactPopper = require("react-popper");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "f3vz0n",
  styles: "font-weight:500"
} : {
  name: "jc1ljl-MultiEvent",
  styles: "font-weight:500;label:MultiEvent;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var MultiEvent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MultiEvent, _React$Component);

  var _super = _createSuper(MultiEvent);

  function MultiEvent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MultiEvent);
    _this = _super.call(this, props);
    _this.state = {
      startTime: (0, _momentTimezone["default"])(_this.props.startTime),
      endTime: (0, _momentTimezone["default"])(_this.props.endTime),
      color: _this.props.color,
      darkColor: (0, _helper.pSBC)(-0.35, _this.props.color),
      showTooltip: false
    };
    _this.state.allDay = (0, _helper.isAllDay)(_this.state.startTime, _this.state.endTime);
    _this.toggleTooltip = _this.toggleTooltip.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeTooltip = _this.closeTooltip.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MultiEvent, [{
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

      var leftArrow = /*#__PURE__*/(0, _react.css)("margin-left:8px;border-top-left-radius:0px;border-bottom-left-radius:0px;&:before{content:\"\";position:absolute;left:0;bottom:0;width:0;height:0;border-right:8px solid ", this.state.color, ";border-top:13px solid transparent;border-bottom:13px solid transparent;}&:hover::before{cursor:pointer;border-right-color:", this.state.darkColor, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;"));
      var rightArrow = /*#__PURE__*/(0, _react.css)("margin-right:8px;border-top-right-radius:0px;border-bottom-right-radius:0px;&:after{content:\"\";position:absolute;right:0;bottom:0;width:0;height:0;border-left:8px solid ", this.state.color, ";border-top:13px solid transparent;border-bottom:13px solid transparent;}&:hover::after{cursor:pointer;border-left-color:", this.state.darkColor, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;"));
      return (0, _react.jsx)("div", {
        className: "event",
        tabIndex: "0",
        onBlur: this.closeTooltip,
        css: /*#__PURE__*/(0, _react.css)("width:", 'calc(' + this.props.length + '00% + ' + (this.props.length - 1) + 'px)', ";&:focus{outline:none;}position:relative;" + (process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;"))
      }, (0, _react.jsx)(_reactPopper.Manager, null, (0, _react.jsx)(_reactPopper.Reference, null, function (_ref) {
        var ref = _ref.ref;
        return (0, _react.jsx)("div", {
          css: [/*#__PURE__*/(0, _react.css)("width:", 'calc(100% - ' + 8 * (_this2.props.arrowLeft + _this2.props.arrowRight) + 'px)', ";border-radius:3px;background:", _this2.state.color, ";&:hover{background:", _this2.state.darkColor, ";}", _this2.props.arrowLeft && leftArrow, " ", _this2.props.arrowRight && rightArrow, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;")), _this2.props.multiEventStyles, process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;"],
          onClick: _this2.toggleTooltip,
          ref: ref
        }, (0, _react.jsx)("div", {
          className: "event-text",
          css: /*#__PURE__*/(0, _react.css)({
            padding: '3px 0px',
            color: 'white',
            marginLeft: _this2.props.arrowLeft ? '2px' : '5px',
            marginRight: _this2.props.arrowRight ? '0px' : '5px',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            textAlign: 'left',
            '&:hover': {
              cursor: 'pointer'
            }
          }, process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;")
        }, _this2.state.allDay ? "" : _this2.state.startTime.format("h:mma "), (0, _react.jsx)("span", {
          css: _ref2
        }, _this2.props.name)));
      }), (0, _react.jsx)(_tooltip["default"], {
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
  return MultiEvent;
}(_react2["default"].Component);

exports["default"] = MultiEvent;
MultiEvent.propTypes = {
  name: _propTypes["default"].string.isRequired,
  startTime: _propTypes["default"].instanceOf(_momentTimezone["default"]).isRequired,
  endTime: _propTypes["default"].instanceOf(_momentTimezone["default"]).isRequired,
  length: _propTypes["default"].number,
  description: _propTypes["default"].string,
  location: _propTypes["default"].string,
  calendarName: _propTypes["default"].string,
  tooltipStyles: _propTypes["default"].oneOfType([_propTypes["default"].object, /*#__PURE__*/_propTypes["default"].instanceOf(_react.css, process.env.NODE_ENV === "production" ? "" : ";label:tooltipStyles;")]),
  multiEventStyles: _propTypes["default"].oneOfType([_propTypes["default"].object, /*#__PURE__*/_propTypes["default"].instanceOf(_react.css, process.env.NODE_ENV === "production" ? "" : ";label:multiEventStyles;")]),
  color: _propTypes["default"].string,
  arrowLeft: _propTypes["default"].bool,
  arrowRight: _propTypes["default"].bool
};
MultiEvent.defaultProps = {
  color: '#4786ff',
  length: 1,
  arrowLeft: false,
  arrowRight: false
};