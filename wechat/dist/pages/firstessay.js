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
      width: '',
      essay: '',
      pic: '',
      index: '',
      show: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Firstessay, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
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
                self.index = data.index;
                // console.log(self.index)
                _wepy2.default.getUserInfo({
                  success: function success(res) {
                    self.nickName = res.userInfo.nickName;
                    self.avatarUrl = res.userInfo.avatarUrl;
                  }
                });
                _context.next = 6;
                return _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/essay',
                  // method: 'POST',
                  success: function success(res) {
                    self.text = res.data;
                    self.setData({
                      text: res.data
                    });
                    console.log(self.text[self.index]);
                    self.show = self.text[self.index];
                    self.setData({
                      show: self.text[self.index]
                    });
                    console.log(self.show, 'show');
                    console.log(self.show.pic, 'show.pic');
                  }
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Firstessay;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Firstessay , 'pages/firstessay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0ZXNzYXkuanMiXSwibmFtZXMiOlsiRmlyc3Rlc3NheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGV4dCIsImZpcnN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJlc3NheSIsInBpYyIsImluZGV4Iiwic2hvdyIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInJlcXVlc3QiLCJ1cmwiLCJzZXREYXRhIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxhQUFPLDBCQUZGO0FBR0xDLGNBQVEsRUFISDtBQUlMQyxhQUFPLEVBSkY7QUFLTEMsYUFBTyxFQUxGO0FBTUxDLFdBQUssRUFOQTtBQU9MQyxhQUFPLEVBUEY7QUFRTEMsWUFBTTtBQVJELEssUUFVUEMsTyxHQUFVLEU7Ozs7OzsyRkFFR1QsSTs7Ozs7O0FBQ1BVLG9CLEdBQU8sSTs7QUFDWCwrQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMseUJBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgseUJBQUtQLE1BQUwsR0FBY1UsSUFBSUMsWUFBbEI7QUFDQUoseUJBQUtOLEtBQUwsR0FBYVMsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixpQkFBbkI7QUFNQUwscUJBQUtILEtBQUwsR0FBYVAsS0FBS08sS0FBbEI7QUFDQTtBQUNBLCtCQUFLUyxXQUFMLENBQWlCO0FBQ2ZKLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHlCQUFLTyxRQUFMLEdBQWdCSixJQUFJSyxRQUFKLENBQWFELFFBQTdCO0FBQ0FQLHlCQUFLUyxTQUFMLEdBQWlCTixJQUFJSyxRQUFKLENBQWFDLFNBQTlCO0FBQ0Q7QUFKYyxpQkFBakI7O3VCQU1NLGVBQUtDLE9BQUwsQ0FBYTtBQUNqQkMsdUJBQUssNkJBRFk7QUFFakI7QUFDQVQsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgseUJBQUtULElBQUwsR0FBWVksSUFBSWIsSUFBaEI7QUFDQVUseUJBQUtZLE9BQUwsQ0FBYTtBQUNYckIsNEJBQU1ZLElBQUliO0FBREMscUJBQWI7QUFHQXVCLDRCQUFRQyxHQUFSLENBQVlkLEtBQUtULElBQUwsQ0FBVVMsS0FBS0gsS0FBZixDQUFaO0FBQ0FHLHlCQUFLRixJQUFMLEdBQVlFLEtBQUtULElBQUwsQ0FBVVMsS0FBS0gsS0FBZixDQUFaO0FBQ0FHLHlCQUFLWSxPQUFMLENBQWE7QUFDWGQsNEJBQU1FLEtBQUtULElBQUwsQ0FBVVMsS0FBS0gsS0FBZjtBQURLLHFCQUFiO0FBR0FnQiw0QkFBUUMsR0FBUixDQUFZZCxLQUFLRixJQUFqQixFQUF1QixNQUF2QjtBQUNBZSw0QkFBUUMsR0FBUixDQUFZZCxLQUFLRixJQUFMLENBQVVGLEdBQXRCLEVBQTJCLFVBQTNCO0FBQ0Q7QUFmZ0IsaUJBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhDOEIsZUFBS21CLEk7O2tCQUF4QjVCLFUiLCJmaWxlIjoiZmlyc3Rlc3NheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpcnN0ZXNzYXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iHtOapoeagkSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIGZpcnN0OiAnLi4vaW1hZ2VzL2ZpcnN0ZXNzYXkuanBnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBlc3NheTogJycsXG4gICAgcGljOiAnJyxcbiAgICBpbmRleDogJycsXG4gICAgc2hvdzogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICB9XG4gIGFzeW5jIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICBzZWxmLmluZGV4ID0gZGF0YS5pbmRleFxuICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuaW5kZXgpXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZXNzYXknLFxuICAgICAgLy8gbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHRbc2VsZi5pbmRleF0pXG4gICAgICAgIHNlbGYuc2hvdyA9IHNlbGYudGV4dFtzZWxmLmluZGV4XVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIHNob3c6IHNlbGYudGV4dFtzZWxmLmluZGV4XVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnNob3csICdzaG93JylcbiAgICAgICAgY29uc29sZS5sb2coc2VsZi5zaG93LnBpYywgJ3Nob3cucGljJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=