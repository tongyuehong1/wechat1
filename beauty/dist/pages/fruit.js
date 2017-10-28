'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fruit = function (_wepy$page) {
  _inherits(Fruit, _wepy$page);

  function Fruit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fruit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fruit.__proto__ || Object.getPrototypeOf(Fruit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的订单'
    }, _this.data = {
      height: 0,
      width: 0,
      title: '',
      img: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fruit, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title;
      self.img = data.image.split(','); // 将用逗号隔开的字符串转换为数组
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Fruit;
}(_wepy2.default.page);

exports.default = Fruit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZydWl0LmpzIl0sIm5hbWVzIjpbIkZydWl0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsInRpdGxlIiwiaW1nIiwibWV0aG9kcyIsInNlbGYiLCJpbWFnZSIsInNwbGl0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxXQUFLO0FBSkEsSyxRQU1QQyxPLEdBQVUsRTs7Ozs7MkJBRUhMLEksRUFBTTtBQUNYLFVBQUlNLE9BQU8sSUFBWDtBQUNBQSxXQUFLSCxLQUFMLEdBQWFILEtBQUtHLEtBQWxCO0FBQ0FHLFdBQUtGLEdBQUwsR0FBV0osS0FBS08sS0FBTCxDQUFXQyxLQUFYLENBQWlCLEdBQWpCLENBQVgsQ0FIVyxDQUdzQjtBQUNqQyxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTCxlQUFLTCxNQUFMLEdBQWNVLElBQUlDLFlBQWxCO0FBQ0FOLGVBQUtKLEtBQUwsR0FBYVMsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBdEJnQyxlQUFLQyxJOztrQkFBbkJqQixLIiwiZmlsZSI6ImZydWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJ1aXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICB0aXRsZTogJycsXG4gICAgaW1nOiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIHNlbGYuaW1nID0gZGF0YS5pbWFnZS5zcGxpdCgnLCcpIC8vIOWwhueUqOmAl+WPt+malOW8gOeahOWtl+espuS4sui9rOaNouS4uuaVsOe7hFxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==