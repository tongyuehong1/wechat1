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

var Letter = function (_wepy$page) {
  _inherits(Letter, _wepy$page);

  function Letter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Letter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Letter.__proto__ || Object.getPrototypeOf(Letter)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      add: '../images/add.png',
      text: '',
      two: ''
    }, _this.methods = {
      letter: function letter() {
        _wepy2.default.navigateTo({
          url: './write'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Letter, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var self;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;

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
                                  self.text = res.data;
                                  self.setData({
                                    text: res.data
                                  });
                                  console.log(res);
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
                      return _ref3.apply(this, arguments);
                    }

                    return success;
                  }()
                });
                this.$apply();

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Letter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Letter , 'pages/letter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5qcyJdLCJuYW1lcyI6WyJMZXR0ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImFkZCIsInRleHQiLCJ0d28iLCJtZXRob2RzIiwibGV0dGVyIiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJuaWNrTmFtZSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsIm1ldGhvZCIsIndlY2hhdCIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFdBQUssbUJBRkE7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLFdBQUs7QUFKQSxLLFFBTVBDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs7Ozs7Ozs7QUFRSkMsb0IsR0FBTyxJOztBQUNYLCtCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDO0FBQUEsd0ZBQVMsaUJBQWVDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQSCxtQ0FBS0ksUUFBTCxHQUFnQkQsSUFBSUUsUUFBSixDQUFhRCxRQUE3QjtBQUNBSixtQ0FBS00sU0FBTCxHQUFpQkgsSUFBSUUsUUFBSixDQUFhQyxTQUE5QjtBQUZPO0FBQUEscUNBR0QsZUFBS0MsT0FBTCxDQUFhO0FBQ2pCUixxQ0FBSyxtQ0FEWTtBQUVqQlMsd0NBQVEsTUFGUztBQUdqQmpCLHNDQUFNO0FBQ0prQiwwQ0FBUVQsS0FBS0k7QUFEVCxpQ0FIVztBQU1qQkYseUNBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsdUNBQUtOLElBQUwsR0FBWVMsSUFBSVosSUFBaEI7QUFDQVMsdUNBQUtVLE9BQUwsQ0FBYTtBQUNYaEIsMENBQU1TLElBQUlaO0FBREMsbUNBQWI7QUFHQW9CLDBDQUFRQyxHQUFSLENBQVlULEdBQVo7QUFDRDtBQVpnQiwrQkFBYixDQUhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFUOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRGUsaUJBQWpCO0FBb0JBLHFCQUFLVSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkNnQyxlQUFLQyxJOztrQkFBcEIxQixNIiwiZmlsZSI6ImxldHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldHRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBhZGQ6ICcuLi9pbWFnZXMvYWRkLnBuZycsXG4gICAgdGV4dDogJycsXG4gICAgdHdvOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbGV0dGVyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi93cml0ZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvbGlzdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==