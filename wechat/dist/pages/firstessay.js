'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Firstessay = function (_wepy$page) {
  _inherits(Firstessay, _wepy$page);

  function Firstessay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Firstessay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Firstessay.__proto__ || Object.getPrototypeOf(Firstessay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '致橡树'
    }, _this.data = {
      text: '',
      first: '../images/firstessay.jpg',
      height: '',
      width: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Firstessay, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      self.title = data.essay;
      self.img = data.image;
    }
  }]);

  return Firstessay;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Firstessay , 'pages/firstessay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0ZXNzYXkuanMiXSwibmFtZXMiOlsiRmlyc3Rlc3NheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGV4dCIsImZpcnN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ0aXRsZSIsImVzc2F5IiwiaW1nIiwiaW1hZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGFBQU8sMEJBRkY7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVSxFOzs7OzsyQkFFSEwsSSxFQUFNO0FBQ1gsVUFBSU0sT0FBTyxJQUFYO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS0gsTUFBTCxHQUFjTSxJQUFJQyxZQUFsQjtBQUNBSixlQUFLRixLQUFMLEdBQWFLLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQUwsV0FBS00sS0FBTCxHQUFhWixLQUFLYSxLQUFsQjtBQUNBUCxXQUFLUSxHQUFMLEdBQVdkLEtBQUtlLEtBQWhCO0FBQ0Q7Ozs7RUF0QnFDLGVBQUtDLEk7O2tCQUF4Qm5CLFUiLCJmaWxlIjoiZmlyc3Rlc3NheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpcnN0ZXNzYXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iHtOapoeagkSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIGZpcnN0OiAnLi4vaW1hZ2VzL2ZpcnN0ZXNzYXkuanBnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHNlbGYudGl0bGUgPSBkYXRhLmVzc2F5XG4gICAgc2VsZi5pbWcgPSBkYXRhLmltYWdlXG4gIH1cbn1cbiJdfQ==