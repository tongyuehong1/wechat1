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
      navigationBarTitleText: '回忆集'
    }, _this.data = {
      height: '',
      width: '',
      text: '',
      id: 0
    }, _this.methods = {
      memory: function memory() {
        _wepy2.default.navigateTo({
          url: './memory'
        });
      },
      show: function show(e) {
        var self = this;
        self.id = e.currentTarget.id;
        _wepy2.default.navigateTo({
          url: './readmemory?id=' + self.id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
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
                      url: 'http://127.0.0.1:7001/memory/select',
                      method: 'POST',
                      data: {
                        wechat: self.nickName
                      },
                      success: function success(res) {
                        self.text = res.data;
                        self.setData({
                          text: res.data
                        });
                        console.log(res, 'aaaaa');
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

  return Cart;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Cart , 'pages/showmemory'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dtZW1vcnkuanMiXSwibmFtZXMiOlsiQ2FydCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0ZXh0IiwiaWQiLCJtZXRob2RzIiwibWVtb3J5IiwibmF2aWdhdGVUbyIsInVybCIsInNob3ciLCJlIiwic2VsZiIsImN1cnJlbnRUYXJnZXQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiZ2V0VXNlckluZm8iLCJuaWNrTmFtZSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsIm1ldGhvZCIsIndlY2hhdCIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsVUFBSTtBQUpDLEssUUFNUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFVBTlEsZ0JBTUhDLENBTkcsRUFNQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLUCxFQUFMLEdBQVVNLEVBQUVFLGFBQUYsQ0FBZ0JSLEVBQTFCO0FBQ0EsdUJBQUtHLFVBQUwsQ0FBZ0I7QUFDZEMsb0NBQXdCRyxLQUFLUDtBQURmLFNBQWhCO0FBR0Q7QUFaTyxLOzs7Ozs2QkFjRDtBQUNQLFVBQUlPLE9BQU8sSUFBWDtBQUNBLHFCQUFLRSxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hKLGVBQUtWLE1BQUwsR0FBY2MsSUFBSUMsWUFBbEI7QUFDQUwsZUFBS1QsS0FBTCxHQUFhYSxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs2QkFDUTtBQUNQLFVBQUlOLE9BQU8sSUFBWDtBQUNBLHFCQUFLTyxXQUFMLENBQWlCO0FBQ2ZKO0FBQUEsOEVBQVMsaUJBQWVDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQSix5QkFBS1EsUUFBTCxHQUFnQkosSUFBSUssUUFBSixDQUFhRCxRQUE3QjtBQUNBUix5QkFBS1UsU0FBTCxHQUFpQk4sSUFBSUssUUFBSixDQUFhQyxTQUE5QjtBQUZPO0FBQUEsMkJBR0QsZUFBS0MsT0FBTCxDQUFhO0FBQ2pCZCwyQkFBSyxxQ0FEWTtBQUVqQmUsOEJBQVEsTUFGUztBQUdqQnZCLDRCQUFNO0FBQ0p3QixnQ0FBUWIsS0FBS1E7QUFEVCx1QkFIVztBQU1qQkwsK0JBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkosNkJBQUtSLElBQUwsR0FBWVksSUFBSWYsSUFBaEI7QUFDQVcsNkJBQUtjLE9BQUwsQ0FBYTtBQUNYdEIsZ0NBQU1ZLElBQUlmO0FBREMseUJBQWI7QUFHQTBCLGdDQUFRQyxHQUFSLENBQVlaLEdBQVosRUFBaUIsT0FBakI7QUFDRDtBQVpnQixxQkFBYixDQUhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSxPQUFqQjtBQW9CRDs7OztFQXZEK0IsZUFBS2EsSTs7a0JBQWxCL0IsSSIsImZpbGUiOiJzaG93bWVtb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zue5b+G6ZuGJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgdGV4dDogJycsXG4gICAgaWQ6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG1lbW9yeSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbWVtb3J5J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHNob3coZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmlkID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL3JlYWRtZW1vcnk/aWQ9JHtzZWxmLmlkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9tZW1vcnkvc2VsZWN0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLCAnYWFhYWEnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=