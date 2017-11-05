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
        // let self = this
        // let item = self.text
        var i = e.currentTarget.dataset.index;
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
                      method: 'POST',
                      success: function success(res) {
                        self.text = res.data;
                        self.setData({
                          text: res.data
                        });
                        console.log(res, 'res');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmF0ZWd5LmpzIl0sIm5hbWVzIjpbIlN0cmF0ZWd5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0ZXh0IiwibWV0aG9kcyIsInNob3ciLCJlIiwiaSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJnZXRVc2VySW5mbyIsIm5pY2tOYW1lIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJyZXF1ZXN0IiwibWV0aG9kIiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFB1bGxEb3duUmVmcmVzaCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsS0FEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxhQUFPLDBCQUZGO0FBR0xDLGNBQVEsMkJBSEg7QUFJTEMsYUFBTyxxQkFKRjtBQUtMQyxjQUFRLEVBTEg7QUFNTEMsYUFBTyxFQU5GO0FBT0xDLFlBQU07QUFQRCxLLFFBU1BDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTjtBQUNBO0FBQ0EsWUFBSUMsSUFBSUQsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQWhDO0FBQ0EsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsdUNBQTJCTDtBQURiLFNBQWhCO0FBR0Q7QUFSTyxLOzs7Ozs2QkFVRDtBQUNQLFVBQUlNLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtaLE1BQUwsR0FBY2UsSUFBSUMsWUFBbEI7QUFDQUosZUFBS1gsS0FBTCxHQUFhYyxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUEscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZko7QUFBQSw4RUFBUyxpQkFBZUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BILHlCQUFLTyxRQUFMLEdBQWdCSixJQUFJSyxRQUFKLENBQWFELFFBQTdCO0FBQ0FQLHlCQUFLUyxTQUFMLEdBQWlCTixJQUFJSyxRQUFKLENBQWFDLFNBQTlCO0FBRk87QUFBQSwyQkFHRCxlQUFLQyxPQUFMLENBQWE7QUFDakJYLDJCQUFLLDZCQURZO0FBRWpCWSw4QkFBUSxNQUZTO0FBR2pCVCwrQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCw2QkFBS1YsSUFBTCxHQUFZYSxJQUFJcEIsSUFBaEI7QUFDQWlCLDZCQUFLWSxPQUFMLENBQWE7QUFDWHRCLGdDQUFNYSxJQUFJcEI7QUFEQyx5QkFBYjtBQUdBOEIsZ0NBQVFDLEdBQVIsQ0FBWVgsR0FBWixFQUFpQixLQUFqQjtBQUNEO0FBVGdCLHFCQUFiLENBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURlLE9BQWpCO0FBaUJEOzs7d0NBQ21CO0FBQ2xCLHFCQUFLWSxvQkFBTDtBQUNBQyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUF2RG1DLGVBQUtDLEk7O2tCQUF0QnZDLFEiLCJmaWxlIjoic3RyYXRlZ3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJhdGVneSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6ICd0cnVlJ1xuICB9O1xuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgZmlyc3Q6ICcuLi9pbWFnZXMvZmlyc3Rlc3NheS5qcGcnLFxuICAgIHNlY29uZDogJy4uL2ltYWdlcy9zZWNvbmRlc3NheS5qcGcnLFxuICAgIHRoaXJkOiAnLi4vaW1hZ2VzL2ZpcnN0LmpwZycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgdGV4dDogJydcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBzaG93KGUpIHtcbiAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gbGV0IGl0ZW0gPSBzZWxmLnRleHRcbiAgICAgIGxldCBpID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vZmlyc3Rlc3NheT9pbmRleD0ke2l9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZXNzYXknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLCAncmVzJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0YXJ0UHVsbERvd25SZWZyZXNoKClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxNTAwKVxuICB9XG59XG4iXX0=