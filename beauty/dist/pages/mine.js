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

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      height: '',
      width: '',
      title: [{ icon: '../image/order.png', title: '我的订单' }, { icon: '../image/money.png', title: '待付款' }, { icon: '../image/deliver.png', title: '待发货' }, { icon: '../image/payment.png', title: '待收货' }, { icon: '../image/conversation.png', title: '待评价' }],
      nickName: '',
      avatarUrl: '',
      service: '../image/service.png'
    }, _this.methods = {
      change: function change(e) {
        console.log(e.currentTarget.dataset.index);
        switch (e.currentTarget.dataset.index) {
          case 0:
            _wepy2.default.navigateTo({
              url: './zero'
            });
            break;
          case 1:
            _wepy2.default.navigateTo({
              url: './first'
            });
            break;
          case 2:
            _wepy2.default.navigateTo({
              url: './second'
            });
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0aXRsZSIsImljb24iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInNlcnZpY2UiLCJtZXRob2RzIiwiY2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGFBQU8sQ0FDTCxFQUFDQyxNQUFNLG9CQUFQLEVBQTZCRCxPQUFPLE1BQXBDLEVBREssRUFFTCxFQUFDQyxNQUFNLG9CQUFQLEVBQTZCRCxPQUFPLEtBQXBDLEVBRkssRUFHTCxFQUFDQyxNQUFNLHNCQUFQLEVBQStCRCxPQUFPLEtBQXRDLEVBSEssRUFJTCxFQUFDQyxNQUFNLHNCQUFQLEVBQStCRCxPQUFPLEtBQXRDLEVBSkssRUFLTCxFQUFDQyxNQUFNLDJCQUFQLEVBQW9DRCxPQUFPLEtBQTNDLEVBTEssQ0FIRjtBQVVMRSxnQkFBVSxFQVZMO0FBV0xDLGlCQUFXLEVBWE47QUFZTEMsZUFBUztBQVpKLEssUUFjUEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLENBREMsRUFDRTtBQUNSQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBcEM7QUFDQSxnQkFBUUwsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQWhDO0FBQ0UsZUFBSyxDQUFMO0FBQ0UsMkJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUs7QUFEUyxhQUFoQjtBQUdBO0FBQ0YsZUFBSyxDQUFMO0FBQ0UsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUs7QUFEUyxhQUFoQjtBQUdBO0FBQ0YsZUFBSyxDQUFMO0FBQ0UsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUs7QUFEUyxhQUFoQjtBQUdBO0FBZko7QUFpQkQ7QUFwQk8sSzs7Ozs7NkJBc0JEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS2pCLE1BQUwsR0FBY29CLElBQUlDLFlBQWxCO0FBQ0FKLGVBQUtoQixLQUFMLEdBQWFtQixJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUEscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkosaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS2IsUUFBTCxHQUFnQmdCLElBQUlJLFFBQUosQ0FBYXBCLFFBQTdCO0FBQ0FhLGVBQUtaLFNBQUwsR0FBaUJlLElBQUlJLFFBQUosQ0FBYW5CLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBdEQrQixlQUFLb0IsSTs7a0JBQWxCN0IsSSIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgdGl0bGU6IFtcbiAgICAgIHtpY29uOiAnLi4vaW1hZ2Uvb3JkZXIucG5nJywgdGl0bGU6ICfmiJHnmoTorqLljZUnfSxcbiAgICAgIHtpY29uOiAnLi4vaW1hZ2UvbW9uZXkucG5nJywgdGl0bGU6ICflvoXku5jmrL4nfSxcbiAgICAgIHtpY29uOiAnLi4vaW1hZ2UvZGVsaXZlci5wbmcnLCB0aXRsZTogJ+W+heWPkei0pyd9LFxuICAgICAge2ljb246ICcuLi9pbWFnZS9wYXltZW50LnBuZycsIHRpdGxlOiAn5b6F5pS26LSnJ30sXG4gICAgICB7aWNvbjogJy4uL2ltYWdlL2NvbnZlcnNhdGlvbi5wbmcnLCB0aXRsZTogJ+W+heivhOS7tyd9XG4gICAgXSxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBzZXJ2aWNlOiAnLi4vaW1hZ2Uvc2VydmljZS5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2UoZSkge1xuICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG4gICAgICBzd2l0Y2ggKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnLi96ZXJvJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuL2ZpcnN0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuL3NlY29uZCdcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19