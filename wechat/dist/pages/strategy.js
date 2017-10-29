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
      first: function first(e) {
        var self = this;
        var item = self.text;
        console.log(item);
        _wepy2.default.navigateTo({
          url: './firstessay?image=' + item.pic + '&essay=' + item.essay
        });
      },
      second: function second() {
        _wepy2.default.navigateTo({
          url: './secondessay'
        });
      },
      third: function third() {
        _wepy2.default.navigateTo({
          url: './thirdessay'
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
                        console.log(self.text);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmF0ZWd5LmpzIl0sIm5hbWVzIjpbIlN0cmF0ZWd5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0ZXh0IiwibWV0aG9kcyIsImUiLCJzZWxmIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGljIiwiZXNzYXkiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiZ2V0VXNlckluZm8iLCJuaWNrTmFtZSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsIm1ldGhvZCIsInNldERhdGEiLCJzdGFydFB1bGxEb3duUmVmcmVzaCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsS0FEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxhQUFPLDBCQUZGO0FBR0xDLGNBQVEsMkJBSEg7QUFJTEMsYUFBTyxxQkFKRjtBQUtMQyxjQUFRLEVBTEg7QUFNTEMsYUFBTyxFQU5GO0FBT0xDLFlBQU07QUFQRCxLLFFBU1BDLE8sR0FBVTtBQUNSTixXQURRLGlCQUNGTyxDQURFLEVBQ0M7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLSCxJQUFoQjtBQUNBSyxnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0EsdUJBQUtHLFVBQUwsQ0FBZ0I7QUFDZEMsdUNBQTJCSixLQUFLSyxHQUFoQyxlQUE2Q0wsS0FBS007QUFEcEMsU0FBaEI7QUFHRCxPQVJPO0FBU1JkLFlBVFEsb0JBU0M7QUFDUCx1QkFBS1csVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWJPO0FBY1JYLFdBZFEsbUJBY0E7QUFDTix1QkFBS1UsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQWxCTyxLOzs7Ozs2QkFvQkQ7QUFDUCxVQUFJTCxPQUFPLElBQVg7QUFDQSxxQkFBS1EsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYVixlQUFLTCxNQUFMLEdBQWNlLElBQUlDLFlBQWxCO0FBQ0FYLGVBQUtKLEtBQUwsR0FBYWMsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZKO0FBQUEsOEVBQVMsaUJBQWVDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQVix5QkFBS2MsUUFBTCxHQUFnQkosSUFBSUssUUFBSixDQUFhRCxRQUE3QjtBQUNBZCx5QkFBS2dCLFNBQUwsR0FBaUJOLElBQUlLLFFBQUosQ0FBYUMsU0FBOUI7QUFGTztBQUFBLDJCQUdELGVBQUtDLE9BQUwsQ0FBYTtBQUNqQlosMkJBQUssNkJBRFk7QUFFakJhLDhCQUFRLE1BRlM7QUFHakJULCtCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJWLDZCQUFLSCxJQUFMLEdBQVlhLElBQUlwQixJQUFoQjtBQUNBVSw2QkFBS21CLE9BQUwsQ0FBYTtBQUNYdEIsZ0NBQU1hLElBQUlwQjtBQURDLHlCQUFiO0FBR0FZLGdDQUFRQyxHQUFSLENBQVlILEtBQUtILElBQWpCO0FBQ0Q7QUFUZ0IscUJBQWIsQ0FIQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFUOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRGUsT0FBakI7QUFpQkQ7Ozt3Q0FDbUI7QUFDbEIscUJBQUt1QixvQkFBTDtBQUNBQyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUFqRW1DLGVBQUtDLEk7O2tCQUF0QnJDLFEiLCJmaWxlIjoic3RyYXRlZ3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJhdGVneSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6ICd0cnVlJ1xuICB9O1xuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgZmlyc3Q6ICcuLi9pbWFnZXMvZmlyc3Rlc3NheS5qcGcnLFxuICAgIHNlY29uZDogJy4uL2ltYWdlcy9zZWNvbmRlc3NheS5qcGcnLFxuICAgIHRoaXJkOiAnLi4vaW1hZ2VzL2ZpcnN0LmpwZycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgdGV4dDogJydcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBmaXJzdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi50ZXh0XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9maXJzdGVzc2F5P2ltYWdlPSR7aXRlbS5waWN9JmVzc2F5PSR7aXRlbS5lc3NheX1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2Vjb25kKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9zZWNvbmRlc3NheSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICB0aGlyZCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vdGhpcmRlc3NheSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogYXN5bmMgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2Vzc2F5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0YXJ0UHVsbERvd25SZWZyZXNoKClcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxNTAwKVxuICB9XG59XG4iXX0=