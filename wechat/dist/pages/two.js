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

var Two = function (_wepy$page) {
  _inherits(Two, _wepy$page);

  function Two() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Two);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Two.__proto__ || Object.getPrototypeOf(Two)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      nickName: '',
      avatarUrl: '',
      point: '../images/point.png',
      height: '',
      width: '',
      showmodel: false,
      input: '',
      anotherlength: '',
      another: ''
      // cancel: '../images/cancel.png'
    }, _this.methods = {
      missing: function missing() {
        _wepy2.default.navigateTo({
          url: './missing'
        });
      },
      photo: function photo() {
        _wepy2.default.navigateTo({
          url: './photo'
        });
      },
      memory: function memory() {
        _wepy2.default.navigateTo({
          url: './showmemory'
        });
      },
      TA: function TA() {
        var self = this;
        self.showmodel = true;
      },
      input: function input(e) {
        var self = this;
        self.input = e.detail.value;
      },
      cancel: function cancel() {
        var self = this;
        self.showmodel = false;
      },
      verify: function verify() {
        var self = this;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/temporaryinsert',
          data: {
            wechat: self.nickName,
            anthor: self.input
          },
          method: 'POST',
          success: function success(res) {}
        });
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/temporaryselect',
          data: {
            wechat: self.input
          },
          method: 'POST',
          success: function success(res) {
            self.anotherlength = res.data.length;
            self.setData({
              anotherlength: res.data.length
            });
            console.log(self.anotherlength);
            if (self.anotherlength === 0) {
              _wepy2.default.showModal({
                title: '提示',
                content: '他还没有使用奥',
                showCancel: false
              });
            } else {
              _wepy2.default.request({
                url: 'http://127.0.0.1:7001/temporaryselect',
                data: {
                  wechat: self.input
                },
                method: 'POST',
                success: function success(res) {
                  self.another = res.data[0].anthor;
                  self.setData({
                    another: res.data[0].anthor
                  });
                  if (self.another === '') {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '他还没有添加你奥',
                      showCancel: false
                    });
                  } else {
                    if (self.another === self.nickName) {
                      _wepy2.default.showModal({
                        title: '成功',
                        content: '添加成功',
                        showCancel: false
                      });
                    } else {
                      _wepy2.default.showModal({
                        title: '提示',
                        content: '对方添加的不是你',
                        showCancel: false
                      });
                    }
                  }
                }
              });
            }
            _wepy2.default.request({
              url: 'http://127.0.0.1:7001/user',
              data: {
                wechat: self.nickName,
                anthor: self.input
              },
              method: 'POST',
              success: function success(res) {
                console.log(self.input, 'input');
              }
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Two, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
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

              case 3:
                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
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

  return Two;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Two , 'pages/two'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by5qcyJdLCJuYW1lcyI6WyJUd28iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwicG9pbnQiLCJoZWlnaHQiLCJ3aWR0aCIsInNob3dtb2RlbCIsImlucHV0IiwiYW5vdGhlcmxlbmd0aCIsImFub3RoZXIiLCJtZXRob2RzIiwibWlzc2luZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwaG90byIsIm1lbW9yeSIsIlRBIiwic2VsZiIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNhbmNlbCIsInZlcmlmeSIsInJlcXVlc3QiLCJ3ZWNoYXQiLCJhbnRob3IiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwibGVuZ3RoIiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGlCQUFXLEVBSE47QUFJTEMsYUFBTyxxQkFKRjtBQUtMQyxjQUFRLEVBTEg7QUFNTEMsYUFBTyxFQU5GO0FBT0xDLGlCQUFXLEtBUE47QUFRTEMsYUFBTyxFQVJGO0FBU0xDLHFCQUFlLEVBVFY7QUFVTEMsZUFBUztBQUNUO0FBWEssSyxRQWFQQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsV0FOUSxtQkFNQTtBQUNOLHVCQUFL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LHNCQUFRLE1BTkc7QUFPWEMsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkcsd0JBQVFDLEdBQVIsQ0FBWWYsS0FBS1YsS0FBakIsRUFBd0IsT0FBeEI7QUFDRDtBQVRVLGFBQWI7QUFXRDtBQWpFVSxTQUFiO0FBbUVEO0FBM0dPLEs7Ozs7Ozs7Ozs7OztBQThHSlUsb0IsR0FBTyxJOzt1QkFDTCxlQUFLb0IsV0FBTCxDQUFpQjtBQUNyQlYsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlgseUJBQUtoQixRQUFMLEdBQWdCMkIsSUFBSVUsUUFBSixDQUFhckMsUUFBN0I7QUFDQWdCLHlCQUFLZixTQUFMLEdBQWlCMEIsSUFBSVUsUUFBSixDQUFhcEMsU0FBOUI7QUFDQWUseUJBQUthLE9BQUwsQ0FBYTtBQUNYN0IsZ0NBQVUyQixJQUFJVSxRQUFKLENBQWFyQyxRQURaO0FBRVhDLGlDQUFXMEIsSUFBSVUsUUFBSixDQUFhcEM7QUFGYixxQkFBYjtBQUlEO0FBUm9CLGlCQUFqQixDOzs7QUFVTiwrQkFBS3FDLGFBQUwsQ0FBbUI7QUFDakJaLHlCQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hYLHlCQUFLYixNQUFMLEdBQWN3QixJQUFJWSxZQUFsQjtBQUNBdkIseUJBQUtaLEtBQUwsR0FBYXVCLElBQUlhLFdBQWpCO0FBQ0Q7QUFKZ0IsaUJBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUk2QixlQUFLQyxJOztrQkFBakI5QyxHIiwiZmlsZSI6InR3by5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3byBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBwb2ludDogJy4uL2ltYWdlcy9wb2ludC5wbmcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIHNob3dtb2RlbDogZmFsc2UsXG4gICAgaW5wdXQ6ICcnLFxuICAgIGFub3RoZXJsZW5ndGg6ICcnLFxuICAgIGFub3RoZXI6ICcnXG4gICAgLy8gY2FuY2VsOiAnLi4vaW1hZ2VzL2NhbmNlbC5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBtaXNzaW5nKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9taXNzaW5nJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBob3RvKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9waG90bydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBtZW1vcnkoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3Nob3dtZW1vcnknXG4gICAgICB9KVxuICAgIH0sXG4gICAgVEEoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2hvd21vZGVsID0gdHJ1ZVxuICAgIH0sXG4gICAgaW5wdXQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmlucHV0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGNhbmNlbCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zaG93bW9kZWwgPSBmYWxzZVxuICAgIH0sXG4gICAgdmVyaWZ5KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvdGVtcG9yYXJ5aW5zZXJ0JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZSxcbiAgICAgICAgICBhbnRob3I6IHNlbGYuaW5wdXRcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3RlbXBvcmFyeXNlbGVjdCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB3ZWNoYXQ6IHNlbGYuaW5wdXRcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYuYW5vdGhlcmxlbmd0aCA9IHJlcy5kYXRhLmxlbmd0aFxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBhbm90aGVybGVuZ3RoOiByZXMuZGF0YS5sZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuYW5vdGhlcmxlbmd0aClcbiAgICAgICAgICBpZiAoc2VsZi5hbm90aGVybGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+S7lui/mOayoeacieS9v+eUqOWlpScsXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvdGVtcG9yYXJ5c2VsZWN0JyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5pbnB1dFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hbm90aGVyID0gcmVzLmRhdGFbMF0uYW50aG9yXG4gICAgICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgIGFub3RoZXI6IHJlcy5kYXRhWzBdLmFudGhvclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYW5vdGhlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5LuW6L+Y5rKh5pyJ5re75Yqg5L2g5aWlJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmFub3RoZXIgPT09IHNlbGYubmlja05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5re75Yqg5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5a+55pa55re75Yqg55qE5LiN5piv5L2gJyxcbiAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS91c2VyJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lLFxuICAgICAgICAgICAgICBhbnRob3I6IHNlbGYuaW5wdXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmlucHV0LCAnaW5wdXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIG5pY2tOYW1lOiByZXMudXNlckluZm8ubmlja05hbWUsXG4gICAgICAgICAgYXZhdGFyVXJsOiByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=