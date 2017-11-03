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
      navigationBarTitleText: '随笔'
    }, _this.data = {
      text: '',
      height: '',
      width: '',
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
                _wepy2.default.getUserInfo({
                  success: function success(res) {
                    self.nickName = res.userInfo.nickName;
                    self.avatarUrl = res.userInfo.avatarUrl;
                  }
                });
                _context.next = 6;
                return _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/home',
                  method: 'POST',
                  success: function success(res) {
                    self.text = res.data;
                    self.setData({
                      text: res.data
                    });
                    self.show = self.text[self.index];
                    self.setData({
                      show: self.text[self.index]
                    });
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Firstessay , 'pages/firsthome'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0aG9tZS5qcyJdLCJuYW1lcyI6WyJGaXJzdGVzc2F5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJpbmRleCIsInNob3ciLCJtZXRob2RzIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJnZXRVc2VySW5mbyIsIm5pY2tOYW1lIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGFBQU8sRUFKRjtBQUtMQyxZQUFNO0FBTEQsSyxRQU9QQyxPLEdBQVUsRTs7Ozs7OzJGQUVHTixJOzs7Ozs7QUFDUE8sb0IsR0FBTyxJOztBQUNYLCtCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyx5QkFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCx5QkFBS0wsTUFBTCxHQUFjUSxJQUFJQyxZQUFsQjtBQUNBSix5QkFBS0osS0FBTCxHQUFhTyxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLGlCQUFuQjtBQU1BTCxxQkFBS0gsS0FBTCxHQUFhSixLQUFLSSxLQUFsQjtBQUNBLCtCQUFLUyxXQUFMLENBQWlCO0FBQ2ZKLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHlCQUFLTyxRQUFMLEdBQWdCSixJQUFJSyxRQUFKLENBQWFELFFBQTdCO0FBQ0FQLHlCQUFLUyxTQUFMLEdBQWlCTixJQUFJSyxRQUFKLENBQWFDLFNBQTlCO0FBQ0Q7QUFKYyxpQkFBakI7O3VCQU1NLGVBQUtDLE9BQUwsQ0FBYTtBQUNqQkMsdUJBQUssNEJBRFk7QUFFakJDLDBCQUFRLE1BRlM7QUFHakJWLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHlCQUFLTixJQUFMLEdBQVlTLElBQUlWLElBQWhCO0FBQ0FPLHlCQUFLYSxPQUFMLENBQWE7QUFDWG5CLDRCQUFNUyxJQUFJVjtBQURDLHFCQUFiO0FBR0FPLHlCQUFLRixJQUFMLEdBQVlFLEtBQUtOLElBQUwsQ0FBVU0sS0FBS0gsS0FBZixDQUFaO0FBQ0FHLHlCQUFLYSxPQUFMLENBQWE7QUFDWGYsNEJBQU1FLEtBQUtOLElBQUwsQ0FBVU0sS0FBS0gsS0FBZjtBQURLLHFCQUFiO0FBR0Q7QUFaZ0IsaUJBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTVCOEIsZUFBS2lCLEk7O2tCQUF4QnhCLFUiLCJmaWxlIjoiZmlyc3Rob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3Rlc3NheSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZqP56yUJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgdGV4dDogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgaW5kZXg6ICcnLFxuICAgIHNob3c6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBhc3luYyBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgc2VsZi5pbmRleCA9IGRhdGEuaW5kZXhcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9ob21lJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgdGV4dDogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgc2VsZi5zaG93ID0gc2VsZi50ZXh0W3NlbGYuaW5kZXhdXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgc2hvdzogc2VsZi50ZXh0W3NlbGYuaW5kZXhdXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19