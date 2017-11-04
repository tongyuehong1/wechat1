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
      letterid: ''
    }, _this.methods = {
      delete: function _delete() {
        var self = this;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/hearts/list',
          method: 'POST',
          data: {
            wechat: self.wechat
          },
          success: function success(res) {
            self.text = res.data[self.index];
            self.setData({
              text: res.data[self.index]
            });
            self.letterid = self.text.id;
            console.log(self.letterid, 'id');
            _wepy2.default.request({
              url: 'http://127.0.0.1:7001/hearts/delete',
              method: 'POST',
              data: {
                id: self.letterid
              },
              success: function success(res) {}
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

                self.index = data.index;
                self.wechat = data.wechat;
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
                                  wechat: self.wechat
                                },
                                success: function success(res) {
                                  self.text = res.data[self.index];
                                  self.setData({
                                    text: res.data[self.index]
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(List , 'pages/receiveletter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpdmVsZXR0ZXIuanMiXSwibmFtZXMiOlsiTGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwic2Vjb25kIiwicGljIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbmRleCIsImxldHRlcmlkIiwibWV0aG9kcyIsImRlbGV0ZSIsInNlbGYiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwid2VjaGF0Iiwic3VjY2VzcyIsInJlcyIsInRleHQiLCJzZXREYXRhIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckluZm8iLCJuaWNrTmFtZSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxXQUFLLG1CQUhBO0FBSUxDLGNBQVEsRUFKSDtBQUtMQyxhQUFPLEVBTEY7QUFNTEMsYUFBTyxDQU5GO0FBT0xDLGdCQUFVO0FBUEwsSyxRQVNQQyxPLEdBQVU7QUFDUkMsWUFEUSxxQkFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyxtQ0FETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hiLGdCQUFNO0FBQ0pjLG9CQUFRSixLQUFLSTtBQURULFdBSEs7QUFNWEMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQk4saUJBQUtPLElBQUwsR0FBWUQsSUFBSWhCLElBQUosQ0FBU1UsS0FBS0osS0FBZCxDQUFaO0FBQ0FJLGlCQUFLUSxPQUFMLENBQWE7QUFDWEQsb0JBQU1ELElBQUloQixJQUFKLENBQVNVLEtBQUtKLEtBQWQ7QUFESyxhQUFiO0FBR0FJLGlCQUFLSCxRQUFMLEdBQWdCRyxLQUFLTyxJQUFMLENBQVVFLEVBQTFCO0FBQ0FDLG9CQUFRQyxHQUFSLENBQVlYLEtBQUtILFFBQWpCLEVBQTJCLElBQTNCO0FBQ0EsMkJBQUtJLE9BQUwsQ0FBYTtBQUNYQyxtQkFBSyxxQ0FETTtBQUVYQyxzQkFBUSxNQUZHO0FBR1hiLG9CQUFNO0FBQ0ptQixvQkFBSVQsS0FBS0g7QUFETCxlQUhLO0FBTVhRLHVCQUFTLGlCQUFTQyxHQUFULEVBQWMsQ0FDdEI7QUFQVSxhQUFiO0FBU0Q7QUF0QlUsU0FBYjtBQXdCRDtBQTNCTyxLOzs7Ozs7NEZBNkJHaEIsSTs7Ozs7O0FBQ1BVLG9CLEdBQU8sSTs7QUFDWEEscUJBQUtKLEtBQUwsR0FBYU4sS0FBS00sS0FBbEI7QUFDQUkscUJBQUtJLE1BQUwsR0FBY2QsS0FBS2MsTUFBbkI7QUFDQSwrQkFBS1EsV0FBTCxDQUFpQjtBQUNmUDtBQUFBLHdGQUFTLGlCQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUE4sbUNBQUthLFFBQUwsR0FBZ0JQLElBQUlRLFFBQUosQ0FBYUQsUUFBN0I7QUFDQWIsbUNBQUtlLFNBQUwsR0FBaUJULElBQUlRLFFBQUosQ0FBYUMsU0FBOUI7QUFGTztBQUFBLHFDQUdELGVBQUtkLE9BQUwsQ0FBYTtBQUNqQkMscUNBQUssbUNBRFk7QUFFakJDLHdDQUFRLE1BRlM7QUFHakJiLHNDQUFNO0FBQ0pjLDBDQUFRSixLQUFLSTtBQURULGlDQUhXO0FBTWpCQyx5Q0FBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTix1Q0FBS08sSUFBTCxHQUFZRCxJQUFJaEIsSUFBSixDQUFTVSxLQUFLSixLQUFkLENBQVo7QUFDQUksdUNBQUtRLE9BQUwsQ0FBYTtBQUNYRCwwQ0FBTUQsSUFBSWhCLElBQUosQ0FBU1UsS0FBS0osS0FBZDtBQURLLG1DQUFiO0FBR0Q7QUFYZ0IsK0JBQWIsQ0FIQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURlLGlCQUFqQjtBQW1CQSwrQkFBS29CLGFBQUwsQ0FBbUI7QUFDakJYLHlCQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hOLHlCQUFLTixNQUFMLEdBQWNZLElBQUlXLFlBQWxCO0FBQ0FqQix5QkFBS0wsS0FBTCxHQUFhVyxJQUFJWSxXQUFqQjtBQUNEO0FBSmdCLGlCQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpFOEIsZUFBS0MsSTs7a0JBQWxCaEMsSSIsImZpbGUiOiJyZWNlaXZlbGV0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBzZWNvbmQ6ICcnLFxuICAgIHBpYzogJy4uL2ltYWdlcy9jYXQuanBnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBpbmRleDogMCxcbiAgICBsZXR0ZXJpZDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2hlYXJ0cy9saXN0JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB3ZWNoYXQ6IHNlbGYud2VjaGF0XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhW3NlbGYuaW5kZXhdXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhW3NlbGYuaW5kZXhdXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZWxmLmxldHRlcmlkID0gc2VsZi50ZXh0LmlkXG4gICAgICAgICAgY29uc29sZS5sb2coc2VsZi5sZXR0ZXJpZCwgJ2lkJylcbiAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2hlYXJ0cy9kZWxldGUnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGlkOiBzZWxmLmxldHRlcmlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmluZGV4ID0gZGF0YS5pbmRleFxuICAgIHNlbGYud2VjaGF0ID0gZGF0YS53ZWNoYXRcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvbGlzdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLndlY2hhdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVtzZWxmLmluZGV4XVxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFbc2VsZi5pbmRleF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19