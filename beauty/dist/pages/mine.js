'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      },
      set: function set() {
        _wepy2.default.navigateTo({
          url: './set'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;

                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
                  }
                });
                _context.next = 4;
                return _wepy2.default.getUserInfo({
                  success: function success(res) {
                    self.nickName = res.userInfo.nickName;
                    self.avatarUrl = res.userInfo.avatarUrl;
                    self.setData({
                      nickName: res.userInfo.nickName,
                      avatarUrl: res.userInfo.avatarUrl
                    });
                  }
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0aXRsZSIsImljb24iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInNlcnZpY2UiLCJtZXRob2RzIiwiY2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwibmF2aWdhdGVUbyIsInVybCIsInNldCIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGFBQU8sQ0FDTCxFQUFDQyxNQUFNLG9CQUFQLEVBQTZCRCxPQUFPLE1BQXBDLEVBREssRUFFTCxFQUFDQyxNQUFNLG9CQUFQLEVBQTZCRCxPQUFPLEtBQXBDLEVBRkssRUFHTCxFQUFDQyxNQUFNLHNCQUFQLEVBQStCRCxPQUFPLEtBQXRDLEVBSEssRUFJTCxFQUFDQyxNQUFNLHNCQUFQLEVBQStCRCxPQUFPLEtBQXRDLEVBSkssRUFLTCxFQUFDQyxNQUFNLDJCQUFQLEVBQW9DRCxPQUFPLEtBQTNDLEVBTEssQ0FIRjtBQVVMRSxnQkFBVSxFQVZMO0FBV0xDLGlCQUFXLEVBWE47QUFZTEMsZUFBUztBQVpKLEssUUFjUEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLENBREMsRUFDRTtBQUNSQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBcEM7QUFDQSxnQkFBUUwsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQWhDO0FBQ0UsZUFBSyxDQUFMO0FBQ0UsMkJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUs7QUFEUyxhQUFoQjtBQUdBO0FBQ0YsZUFBSyxDQUFMO0FBQ0UsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUs7QUFEUyxhQUFoQjtBQUdBO0FBQ0YsZUFBSyxDQUFMO0FBQ0UsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUs7QUFEUyxhQUFoQjtBQUdBO0FBZko7QUFpQkQsT0FwQk87QUFxQlJDLFNBckJRLGlCQXFCRjtBQUNKLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBekJPLEs7Ozs7Ozs7Ozs7OztBQTRCSkUsb0IsR0FBTyxJOztBQUNYLCtCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyx5QkFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCx5QkFBS2xCLE1BQUwsR0FBY3FCLElBQUlDLFlBQWxCO0FBQ0FKLHlCQUFLakIsS0FBTCxHQUFhb0IsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixpQkFBbkI7O3VCQU1NLGVBQUtDLFdBQUwsQ0FBaUI7QUFDckJKLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHlCQUFLZCxRQUFMLEdBQWdCaUIsSUFBSUksUUFBSixDQUFhckIsUUFBN0I7QUFDQWMseUJBQUtiLFNBQUwsR0FBaUJnQixJQUFJSSxRQUFKLENBQWFwQixTQUE5QjtBQUNBYSx5QkFBS1EsT0FBTCxDQUFhO0FBQ1h0QixnQ0FBVWlCLElBQUlJLFFBQUosQ0FBYXJCLFFBRFo7QUFFWEMsaUNBQVdnQixJQUFJSSxRQUFKLENBQWFwQjtBQUZiLHFCQUFiO0FBSUQ7QUFSb0IsaUJBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyRHdCLGVBQUtzQixJOztrQkFBbEIvQixJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICB0aXRsZTogW1xuICAgICAge2ljb246ICcuLi9pbWFnZS9vcmRlci5wbmcnLCB0aXRsZTogJ+aIkeeahOiuouWNlSd9LFxuICAgICAge2ljb246ICcuLi9pbWFnZS9tb25leS5wbmcnLCB0aXRsZTogJ+W+heS7mOasvid9LFxuICAgICAge2ljb246ICcuLi9pbWFnZS9kZWxpdmVyLnBuZycsIHRpdGxlOiAn5b6F5Y+R6LSnJ30sXG4gICAgICB7aWNvbjogJy4uL2ltYWdlL3BheW1lbnQucG5nJywgdGl0bGU6ICflvoXmlLbotKcnfSxcbiAgICAgIHtpY29uOiAnLi4vaW1hZ2UvY29udmVyc2F0aW9uLnBuZycsIHRpdGxlOiAn5b6F6K+E5Lu3J31cbiAgICBdLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIHNlcnZpY2U6ICcuLi9pbWFnZS9zZXJ2aWNlLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNoYW5nZShlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleClcbiAgICAgIHN3aXRjaCAoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuL3plcm8nXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy4vZmlyc3QnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy4vc2Vjb25kJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vc2V0J1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgYXdhaXQgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBuaWNrTmFtZTogcmVzLnVzZXJJbmZvLm5pY2tOYW1lLFxuICAgICAgICAgIGF2YXRhclVybDogcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==