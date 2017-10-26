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
      second: '../images/secondessay.jpg',
      height: '',
      width: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Firstessay, [{
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
                      url: 'http://127.0.0.1:7001/essaysecond',
                      method: 'POST',
                      // data: {
                      //   id: 1
                      // },
                      success: function success(res) {
                        self.text = res.data[0].essay;
                        self.setData({
                          text: res.data[0].essay
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
  }]);

  return Firstessay;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Firstessay , 'pages/secondessay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZGVzc2F5LmpzIl0sIm5hbWVzIjpbIkZpcnN0ZXNzYXkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRleHQiLCJzZWNvbmQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJlc3NheSIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGNBQVEsMkJBRkg7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVSxFOzs7Ozs2QkFFRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtILE1BQUwsR0FBY00sSUFBSUMsWUFBbEI7QUFDQUosZUFBS0YsS0FBTCxHQUFhSyxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUEscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZko7QUFBQSw4RUFBUyxpQkFBZUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BILHlCQUFLTyxRQUFMLEdBQWdCSixJQUFJSyxRQUFKLENBQWFELFFBQTdCO0FBQ0FQLHlCQUFLUyxTQUFMLEdBQWlCTixJQUFJSyxRQUFKLENBQWFDLFNBQTlCO0FBRk87QUFBQSwyQkFHRCxlQUFLQyxPQUFMLENBQWE7QUFDakJDLDJCQUFLLG1DQURZO0FBRWpCQyw4QkFBUSxNQUZTO0FBR2pCO0FBQ0E7QUFDQTtBQUNBViwrQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCw2QkFBS0wsSUFBTCxHQUFZUSxJQUFJVCxJQUFKLENBQVMsQ0FBVCxFQUFZbUIsS0FBeEI7QUFDQWIsNkJBQUtjLE9BQUwsQ0FBYTtBQUNYbkIsZ0NBQU1RLElBQUlULElBQUosQ0FBUyxDQUFULEVBQVltQjtBQURQLHlCQUFiO0FBR0FFLGdDQUFRQyxHQUFSLENBQVloQixLQUFLTCxJQUFqQjtBQUNEO0FBWmdCLHFCQUFiLENBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURlLE9BQWpCO0FBb0JEOzs7O0VBeENxQyxlQUFLc0IsSTs7a0JBQXhCMUIsVSIsImZpbGUiOiJzZWNvbmRlc3NheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpcnN0ZXNzYXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iHtOapoeagkSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIHNlY29uZDogJy4uL2ltYWdlcy9zZWNvbmRlc3NheS5qcGcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9lc3NheXNlY29uZCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgIC8vICAgaWQ6IDFcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFbMF0uZXNzYXlcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhWzBdLmVzc2F5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=