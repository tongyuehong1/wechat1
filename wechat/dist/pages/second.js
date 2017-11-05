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

var List = function (_wepy$page) {
  _inherits(List, _wepy$page);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      second: '',
      pic: '../images/cat.jpg',
      height: '',
      width: '',
      index: 0,
      id: 0
    }, _this.methods = {
      delete: function _delete() {
        var self = this;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/hearts/delete',
          method: 'POST',
          data: {
            id: self.id
          },
          success: function success(res) {
            _wepy2.default.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 2000,
              success: function success() {
                _wepy2.default.navigateBack({
                  delta: 1
                });
              }
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var self;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;

                console.log(data.index, 'aaaaaaaaaaa');
                self.index = data.index;
                _wepy2.default.getUserInfo({
                  success: function () {
                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              self.nickName = res.userInfo.nickName;
                              self.avatarUrl = res.userInfo.avatarUrl;
                              _context.next = 4;
                              return _wepy2.default.request({
                                url: 'http://127.0.0.1:7001/hearts/list',
                                method: 'POST',
                                data: {
                                  wechat: self.nickName
                                },
                                success: function success(res) {
                                  self.text = res.data[self.index];
                                  self.setData({
                                    text: res.data[self.index]
                                  });
                                  self.id = res.data[self.index].id;
                                  self.setData({
                                    id: res.data[self.index].id
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

                    function success(_x2) {
                      return _ref3.apply(this, arguments);
                    }

                    return success;
                  }()
                });
                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
                  }
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return List;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(List , 'pages/second'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZC5qcyJdLCJuYW1lcyI6WyJMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJzZWNvbmQiLCJwaWMiLCJoZWlnaHQiLCJ3aWR0aCIsImluZGV4IiwiaWQiLCJtZXRob2RzIiwiZGVsZXRlIiwic2VsZiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VySW5mbyIsIm5pY2tOYW1lIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJ3ZWNoYXQiLCJ0ZXh0Iiwic2V0RGF0YSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsV0FBSyxtQkFIQTtBQUlMQyxjQUFRLEVBSkg7QUFLTEMsYUFBTyxFQUxGO0FBTUxDLGFBQU8sQ0FORjtBQU9MQyxVQUFJO0FBUEMsSyxRQVNQQyxPLEdBQVU7QUFDUkMsWUFEUSxxQkFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyxxQ0FETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hiLGdCQUFNO0FBQ0pPLGdCQUFJRyxLQUFLSDtBQURMLFdBSEs7QUFNWE8sbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHFCQUFPLE1BRE07QUFFYkMsb0JBQU0sU0FGTztBQUdiQyx3QkFBVSxJQUhHO0FBSWJMLHVCQUFTLG1CQUFXO0FBQ2xCLCtCQUFLTSxZQUFMLENBQWtCO0FBQ2hCQyx5QkFBTztBQURTLGlCQUFsQjtBQUdEO0FBUlksYUFBZjtBQVVEO0FBakJVLFNBQWI7QUFtQkQ7QUF0Qk8sSzs7Ozs7OzRGQXdCR3JCLEk7Ozs7OztBQUNQVSxvQixHQUFPLEk7O0FBQ1hZLHdCQUFRQyxHQUFSLENBQVl2QixLQUFLTSxLQUFqQixFQUF3QixhQUF4QjtBQUNBSSxxQkFBS0osS0FBTCxHQUFhTixLQUFLTSxLQUFsQjtBQUNBLCtCQUFLa0IsV0FBTCxDQUFpQjtBQUNmVjtBQUFBLHdGQUFTLGlCQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUEwsbUNBQUtlLFFBQUwsR0FBZ0JWLElBQUlXLFFBQUosQ0FBYUQsUUFBN0I7QUFDQWYsbUNBQUtpQixTQUFMLEdBQWlCWixJQUFJVyxRQUFKLENBQWFDLFNBQTlCO0FBRk87QUFBQSxxQ0FHRCxlQUFLaEIsT0FBTCxDQUFhO0FBQ2pCQyxxQ0FBSyxtQ0FEWTtBQUVqQkMsd0NBQVEsTUFGUztBQUdqQmIsc0NBQU07QUFDSjRCLDBDQUFRbEIsS0FBS2U7QUFEVCxpQ0FIVztBQU1qQlgseUNBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkwsdUNBQUttQixJQUFMLEdBQVlkLElBQUlmLElBQUosQ0FBU1UsS0FBS0osS0FBZCxDQUFaO0FBQ0FJLHVDQUFLb0IsT0FBTCxDQUFhO0FBQ1hELDBDQUFNZCxJQUFJZixJQUFKLENBQVNVLEtBQUtKLEtBQWQ7QUFESyxtQ0FBYjtBQUdBSSx1Q0FBS0gsRUFBTCxHQUFVUSxJQUFJZixJQUFKLENBQVNVLEtBQUtKLEtBQWQsRUFBcUJDLEVBQS9CO0FBQ0FHLHVDQUFLb0IsT0FBTCxDQUFhO0FBQ1h2Qix3Q0FBSVEsSUFBSWYsSUFBSixDQUFTVSxLQUFLSixLQUFkLEVBQXFCQztBQURkLG1DQUFiO0FBR0Q7QUFmZ0IsK0JBQWIsQ0FIQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURlLGlCQUFqQjtBQXVCQSwrQkFBS3dCLGFBQUwsQ0FBbUI7QUFDakJqQix5QkFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTCx5QkFBS04sTUFBTCxHQUFjVyxJQUFJaUIsWUFBbEI7QUFDQXRCLHlCQUFLTCxLQUFMLEdBQWFVLElBQUlrQixXQUFqQjtBQUNEO0FBSmdCLGlCQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhFOEIsZUFBS0MsSTs7a0JBQWxCckMsSSIsImZpbGUiOiJzZWNvbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/mg4XkuaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHNlY29uZDogJycsXG4gICAgcGljOiAnLi4vaW1hZ2VzL2NhdC5qcGcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGluZGV4OiAwLFxuICAgIGlkOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBkZWxldGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvZGVsZXRlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogc2VsZi5pZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WIoOmZpOaIkOWKnycsXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKGRhdGEuaW5kZXgsICdhYWFhYWFhYWFhYScpXG4gICAgc2VsZi5pbmRleCA9IGRhdGEuaW5kZXhcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvbGlzdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhW3NlbGYuaW5kZXhdXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVtzZWxmLmluZGV4XVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlbGYuaWQgPSByZXMuZGF0YVtzZWxmLmluZGV4XS5pZFxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgaWQ6IHJlcy5kYXRhW3NlbGYuaW5kZXhdLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==