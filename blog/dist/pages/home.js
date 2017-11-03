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
      navigationBarTitleText: '首页'
    }, _this.data = {
      src: '',
      height: '',
      width: '',
      text: ''
    }, _this.methods = {
      show: function show(e) {
        var self = this;
        var item = self.text;
        console.log(item);
        console.log(e.currentTarget.id);
        var i = e.currentTarget.id;
        console.log(item[i]);
        _wepy2.default.navigateTo({
          url: './firsthome?index=' + i
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
                      url: 'http://127.0.0.1:7001/home',
                      method: 'POST',
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
  }]);

  return Strategy;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Strategy , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiU3RyYXRlZ3kiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwidGV4dCIsIm1ldGhvZHMiLCJzaG93IiwiZSIsInNlbGYiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInJlcXVlc3QiLCJtZXRob2QiLCJzZXREYXRhIiwicGljIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsWUFBTTtBQUpELEssUUFNUEMsTyxHQUFVO0FBQ1JDLFVBRFEsZ0JBQ0hDLENBREcsRUFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtKLElBQWhCO0FBQ0FNLGdCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUosRUFBRUssYUFBRixDQUFnQkMsRUFBNUI7QUFDQSxZQUFJQyxJQUFJUCxFQUFFSyxhQUFGLENBQWdCQyxFQUF4QjtBQUNBSCxnQkFBUUMsR0FBUixDQUFZRixLQUFLSyxDQUFMLENBQVo7QUFDQSx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxzQ0FBMEJGO0FBRFosU0FBaEI7QUFHRDtBQVhPLEs7Ozs7OzZCQWFEO0FBQ1AsVUFBSU4sT0FBTyxJQUFYO0FBQ0EscUJBQUtTLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFgsZUFBS04sTUFBTCxHQUFjaUIsSUFBSUMsWUFBbEI7QUFDQVosZUFBS0wsS0FBTCxHQUFhZ0IsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZKO0FBQUEsOEVBQVMsaUJBQWVDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQWCx5QkFBS2UsUUFBTCxHQUFnQkosSUFBSUssUUFBSixDQUFhRCxRQUE3QjtBQUNBZix5QkFBS2lCLFNBQUwsR0FBaUJOLElBQUlLLFFBQUosQ0FBYUMsU0FBOUI7QUFGTztBQUFBLDJCQUdELGVBQUtDLE9BQUwsQ0FBYTtBQUNqQlYsMkJBQUssNEJBRFk7QUFFakJXLDhCQUFRLE1BRlM7QUFHakJULCtCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJYLDZCQUFLSixJQUFMLEdBQVllLElBQUluQixJQUFoQjtBQUNBUSw2QkFBS29CLE9BQUwsQ0FBYTtBQUNYeEIsZ0NBQU1lLElBQUluQjtBQURDLHlCQUFiO0FBR0FVLGdDQUFRQyxHQUFSLENBQVlILEtBQUtKLElBQWpCO0FBQ0FNLGdDQUFRQyxHQUFSLENBQVlRLEdBQVo7QUFDQVQsZ0NBQVFDLEdBQVIsQ0FBWUgsS0FBS0osSUFBTCxDQUFVLENBQVYsQ0FBWjtBQUNBTSxnQ0FBUUMsR0FBUixDQUFZSCxLQUFLSixJQUFMLENBQVUsQ0FBVixFQUFheUIsR0FBekI7QUFDRDtBQVpnQixxQkFBYixDQUhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSxPQUFqQjtBQW9CRDs7OztFQW5EbUMsZUFBS0MsSTs7a0JBQXRCakMsUSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyYXRlZ3kgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtSdcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIHRleHQ6ICcnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgc2hvdyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi50ZXh0XG4gICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmlkKVxuICAgICAgbGV0IGkgPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW1baV0pXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2ZpcnN0aG9tZT9pbmRleD0ke2l9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvaG9tZScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHRbMF0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHRbMF0ucGljKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=