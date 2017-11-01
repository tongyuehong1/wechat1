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

var Strategy = function (_wepy$page) {
  _inherits(Strategy, _wepy$page);

  function Strategy() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Strategy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Strategy.__proto__ || Object.getPrototypeOf(Strategy)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书',
      enablePullDownRefresh: 'true'
    }, _this.data = {
      src: '',
      first: '../images/firstessay.jpg',
      second: '../images/secondessay.jpg',
      third: '../images/first.jpg',
      height: '',
      width: '',
      text: ''
    }, _this.methods = {
      show: function show(e) {
        var self = this;
        var item = self.text;
        console.log(item);
        console.log(e.currentTarget.dataset.index);
        var i = e.currentTarget.dataset.index;
        console.log(item[i]);
        _wepy2.default.navigateTo({
          url: './firstessay?index=' + i
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Strategy, [{
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
        success: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    self.nickName = res.userInfo.nickName;
                    self.avatarUrl = res.userInfo.avatarUrl;
                    _context.next = 4;
                    return _wepy2.default.request({
                      url: 'http://127.0.0.1:7001/essay',
                      success: function success(res) {
                        self.text = res.data;
                        self.setData({
                          text: res.data
                        });
                        console.log(self.text);
                        console.log(res);
                        console.log(self.text[0]);
                        console.log(self.text[0].pic);
                      }
                    });

                  case 4:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function success(_x) {
            return _ref2.apply(this, arguments);
          }

          return success;
        }()
      });
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.startPullDownRefresh();
      setTimeout(function () {
        _wepy2.default.stopPullDownRefresh();
      }, 1500);
    }
  }]);

  return Strategy;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Strategy , 'pages/strategy'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmF0ZWd5LmpzIl0sIm5hbWVzIjpbIlN0cmF0ZWd5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0ZXh0IiwibWV0aG9kcyIsInNob3ciLCJlIiwic2VsZiIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInJlcXVlc3QiLCJzZXREYXRhIiwicGljIiwic3RhcnRQdWxsRG93blJlZnJlc2giLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsYUFBTywwQkFGRjtBQUdMQyxjQUFRLDJCQUhIO0FBSUxDLGFBQU8scUJBSkY7QUFLTEMsY0FBUSxFQUxIO0FBTUxDLGFBQU8sRUFORjtBQU9MQyxZQUFNO0FBUEQsSyxRQVNQQyxPLEdBQVU7QUFDUkMsVUFEUSxnQkFDSEMsQ0FERyxFQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS0osSUFBaEI7QUFDQU0sZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSixFQUFFSyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBcEM7QUFDQSxZQUFJQyxJQUFJUixFQUFFSyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBaEM7QUFDQUosZ0JBQVFDLEdBQVIsQ0FBWUYsS0FBS00sQ0FBTCxDQUFaO0FBQ0EsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsdUNBQTJCRjtBQURiLFNBQWhCO0FBR0Q7QUFYTyxLOzs7Ozs2QkFhRDtBQUNQLFVBQUlQLE9BQU8sSUFBWDtBQUNBLHFCQUFLVSxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1haLGVBQUtOLE1BQUwsR0FBY2tCLElBQUlDLFlBQWxCO0FBQ0FiLGVBQUtMLEtBQUwsR0FBYWlCLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmSjtBQUFBLDhFQUFTLGlCQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUFoseUJBQUtnQixRQUFMLEdBQWdCSixJQUFJSyxRQUFKLENBQWFELFFBQTdCO0FBQ0FoQix5QkFBS2tCLFNBQUwsR0FBaUJOLElBQUlLLFFBQUosQ0FBYUMsU0FBOUI7QUFGTztBQUFBLDJCQUdELGVBQUtDLE9BQUwsQ0FBYTtBQUNqQlYsMkJBQUssNkJBRFk7QUFFakJFLCtCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJaLDZCQUFLSixJQUFMLEdBQVlnQixJQUFJdkIsSUFBaEI7QUFDQVcsNkJBQUtvQixPQUFMLENBQWE7QUFDWHhCLGdDQUFNZ0IsSUFBSXZCO0FBREMseUJBQWI7QUFHQWEsZ0NBQVFDLEdBQVIsQ0FBWUgsS0FBS0osSUFBakI7QUFDQU0sZ0NBQVFDLEdBQVIsQ0FBWVMsR0FBWjtBQUNBVixnQ0FBUUMsR0FBUixDQUFZSCxLQUFLSixJQUFMLENBQVUsQ0FBVixDQUFaO0FBQ0FNLGdDQUFRQyxHQUFSLENBQVlILEtBQUtKLElBQUwsQ0FBVSxDQUFWLEVBQWF5QixHQUF6QjtBQUNEO0FBWGdCLHFCQUFiLENBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURlLE9BQWpCO0FBbUJEOzs7d0NBQ21CO0FBQ2xCLHFCQUFLQyxvQkFBTDtBQUNBQyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUE1RG1DLGVBQUtDLEk7O2tCQUF0QnhDLFEiLCJmaWxlIjoic3RyYXRlZ3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJhdGVneSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6ICd0cnVlJ1xuICB9O1xuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgZmlyc3Q6ICcuLi9pbWFnZXMvZmlyc3Rlc3NheS5qcGcnLFxuICAgIHNlY29uZDogJy4uL2ltYWdlcy9zZWNvbmRlc3NheS5qcGcnLFxuICAgIHRoaXJkOiAnLi4vaW1hZ2VzL2ZpcnN0LmpwZycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgdGV4dDogJydcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBzaG93KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGl0ZW0gPSBzZWxmLnRleHRcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleClcbiAgICAgIGxldCBpID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW1baV0pXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2ZpcnN0ZXNzYXk/aW5kZXg9JHtpfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogYXN5bmMgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2Vzc2F5JyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dFswXSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dFswXS5waWMpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgd2VweS5zdGFydFB1bGxEb3duUmVmcmVzaCgpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTUwMClcbiAgfVxufVxuIl19