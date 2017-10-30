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

var Cart = function (_wepy$page) {
  _inherits(Cart, _wepy$page);

  function Cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小程序'
    }, _this.data = {
      thing: [],
      height: '',
      width: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cart, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      self.thing = _wepy2.default.getStorageSync('thing');
      console.log(self.thing);
      self.setData({
        thing: _wepy2.default.getStorageSync('thing')
      });
      // console.log(self.thing[0].title)
    }
  }]);

  return Cart;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Cart , 'pages/cart'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiQ2FydCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGhpbmciLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxhQUFPO0FBSEYsSyxRQUtQQyxPLEdBQVUsRTs7Ozs7NkJBRUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCxlQUFLSCxNQUFMLEdBQWNNLElBQUlDLFlBQWxCO0FBQ0FKLGVBQUtGLEtBQUwsR0FBYUssSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BTCxXQUFLSixLQUFMLEdBQWEsZUFBS1UsY0FBTCxDQUFvQixPQUFwQixDQUFiO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWVIsS0FBS0osS0FBakI7QUFDQUksV0FBS1MsT0FBTCxDQUFhO0FBQ1hiLGVBQU8sZUFBS1UsY0FBTCxDQUFvQixPQUFwQjtBQURJLE9BQWI7QUFHQTtBQUNEOzs7O0VBekIrQixlQUFLSSxJOztrQkFBbEJsQixJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/nqIvluo8nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0aGluZzogW10sXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHNlbGYudGhpbmcgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd0aGluZycpXG4gICAgY29uc29sZS5sb2coc2VsZi50aGluZylcbiAgICBzZWxmLnNldERhdGEoe1xuICAgICAgdGhpbmc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3RoaW5nJylcbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKHNlbGYudGhpbmdbMF0udGl0bGUpXG4gIH1cbn1cbiJdfQ==