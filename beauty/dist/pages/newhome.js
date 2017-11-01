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

var Zero = function (_wepy$page) {
  _inherits(Zero, _wepy$page);

  function Zero() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Zero);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Zero.__proto__ || Object.getPrototypeOf(Zero)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小商城'
    }, _this.data = {
      height: '',
      width: '',
      title: ['精选优品', '年轻风尚', '休闲零食', '美妆个护', '家清家居', '国际尖货'],
      wordcolor: 'gray'
    }, _this.methods = {
      title: function title(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        console.log(e);
        console.log(index);
        // self.wordcolor[index] = 'black'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Zero, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Zero;
}(_wepy2.default.page);

exports.default = Zero;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2hvbWUuanMiXSwibmFtZXMiOlsiWmVybyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0aXRsZSIsIndvcmRjb2xvciIsIm1ldGhvZHMiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGFBQU8sQ0FDTCxNQURLLEVBRUwsTUFGSyxFQUdMLE1BSEssRUFJTCxNQUpLLEVBS0wsTUFMSyxFQU1MLE1BTkssQ0FIRjtBQVdMQyxpQkFBVztBQVhOLEssUUFhUEMsTyxHQUFVO0FBQ1JGLFdBRFEsaUJBQ0ZHLENBREUsRUFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUFwQztBQUNBRyxnQkFBUUMsR0FBUixDQUFZTixDQUFaO0FBQ0FLLGdCQUFRQyxHQUFSLENBQVlKLEtBQVo7QUFDQTtBQUNEO0FBUE8sSzs7Ozs7NkJBU0Q7QUFDUCxVQUFJRCxPQUFPLElBQVg7QUFDQSxxQkFBS00sYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUixlQUFLTixNQUFMLEdBQWNjLElBQUlDLFlBQWxCO0FBQ0FULGVBQUtMLEtBQUwsR0FBYWEsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBbEMrQixlQUFLQyxJOztrQkFBbEJyQixJIiwiZmlsZSI6Im5ld2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaZXJvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/llYbln44nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICB0aXRsZTogW1xuICAgICAgJ+eyvumAieS8mOWTgScsXG4gICAgICAn5bm06L276aOO5bCaJyxcbiAgICAgICfkvJHpl7Lpm7bpo58nLFxuICAgICAgJ+e+juWmhuS4quaKpCcsXG4gICAgICAn5a625riF5a625bGFJyxcbiAgICAgICflm73pmYXlsJbotKcnXG4gICAgXSxcbiAgICB3b3JkY29sb3I6ICdncmF5J1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGl0bGUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgLy8gc2VsZi53b3JkY29sb3JbaW5kZXhdID0gJ2JsYWNrJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19