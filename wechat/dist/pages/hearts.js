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

var Hearts = function (_wepy$page) {
  _inherits(Hearts, _wepy$page);

  function Hearts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hearts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hearts.__proto__ || Object.getPrototypeOf(Hearts)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      writecolor: 'black',
      sendcolor: 'gray',
      add: '../images/addletter.png',
      cat: '../images/cat.jpg',
      plant: '../images/plant.jpg',
      show: true,
      myessay: '',
      nickName: '',
      text: '',
      index: '',
      another: '',
      anotherone: '',
      height: 0,
      width: 0
    }, _this.methods = {
      write: function write() {
        var self = this;
        self.writecolor = 'black';
        self.sendcolor = 'gray';
        self.show = true;
      },
      receive: function receive() {
        var self = this;
        self.writecolor = 'gray';
        self.sendcolor = 'black';
        self.show = false;
      },
      letter: function letter() {
        _wepy2.default.navigateTo({
          url: './letter'
        });
      },
      second: function second(e) {
        var self = this;
        self.index = e.currentTarget.id;
        _wepy2.default.navigateTo({
          url: './second?index=' + self.index
        });
      },
      receiveletter: function receiveletter(e) {
        var self = this;
        self.index = e.currentTarget.id;
        _wepy2.default.navigateTo({
          url: './receiveletter?index=' + self.index + '&wechat=' + self.anotherone
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hearts, [{
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
            return _ref2.apply(this, arguments);
          }

          return success;
        }()
      });
      _wepy2.default.getUserInfo({
        success: function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(res) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    self.nickName = res.userInfo.nickName;
                    self.avatarUrl = res.userInfo.avatarUrl;
                    _context3.next = 4;
                    return _wepy2.default.request({
                      url: 'http://127.0.0.1:7001/hearts/selectanother',
                      method: 'POST',
                      data: {
                        wechat: self.nickName
                      },
                      success: function success(res) {
                        self.another = res.data;
                        self.setData({
                          another: res.data
                        });
                        self.anotherone = self.another[0].anthor;
                        _wepy2.default.getUserInfo({
                          success: function () {
                            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      self.nickName = res.userInfo.nickName;
                                      self.avatarUrl = res.userInfo.avatarUrl;
                                      _context2.next = 4;
                                      return _wepy2.default.request({
                                        url: 'http://127.0.0.1:7001/hearts/anotherlist',
                                        method: 'POST',
                                        data: {
                                          wechat: self.anotherone
                                        },
                                        success: function success(res) {
                                          self.receive = res.data;
                                          self.setData({
                                            receive: res.data
                                          });
                                        }
                                      });

                                    case 4:
                                    case 'end':
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2, this);
                            }));

                            function success(_x3) {
                              return _ref4.apply(this, arguments);
                            }

                            return success;
                          }()
                        });
                      }
                    });

                  case 4:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function success(_x2) {
            return _ref3.apply(this, arguments);
          }

          return success;
        }()
      });
    }
  }]);

  return Hearts;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Hearts , 'pages/hearts'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXJ0cy5qcyJdLCJuYW1lcyI6WyJIZWFydHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIndyaXRlY29sb3IiLCJzZW5kY29sb3IiLCJhZGQiLCJjYXQiLCJwbGFudCIsInNob3ciLCJteWVzc2F5Iiwibmlja05hbWUiLCJ0ZXh0IiwiaW5kZXgiLCJhbm90aGVyIiwiYW5vdGhlcm9uZSIsImhlaWdodCIsIndpZHRoIiwibWV0aG9kcyIsIndyaXRlIiwic2VsZiIsInJlY2VpdmUiLCJsZXR0ZXIiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2Vjb25kIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInJlY2VpdmVsZXR0ZXIiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInJlcXVlc3QiLCJtZXRob2QiLCJ3ZWNoYXQiLCJzZXREYXRhIiwiY29uc29sZSIsImxvZyIsImFudGhvciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxrQkFBWSxPQUZQO0FBR0xDLGlCQUFXLE1BSE47QUFJTEMsV0FBSyx5QkFKQTtBQUtMQyxXQUFLLG1CQUxBO0FBTUxDLGFBQU8scUJBTkY7QUFPTEMsWUFBTSxJQVBEO0FBUUxDLGVBQVMsRUFSSjtBQVNMQyxnQkFBVSxFQVRMO0FBVUxDLFlBQU0sRUFWRDtBQVdMQyxhQUFPLEVBWEY7QUFZTEMsZUFBUyxFQVpKO0FBYUxDLGtCQUFZLEVBYlA7QUFjTEMsY0FBUSxDQWRIO0FBZUxDLGFBQU87QUFmRixLLFFBaUJQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFD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SUFBSTlCO0FBREYseUJBQWI7QUFHQWtCLDZCQUFLTCxVQUFMLEdBQWtCSyxLQUFLTixPQUFMLENBQWEsQ0FBYixFQUFnQjhCLE1BQWxDO0FBQ0EsdUNBQUtULFdBQUwsQ0FBaUI7QUFDZko7QUFBQSxnR0FBUyxrQkFBZUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BaLDJDQUFLVCxRQUFMLEdBQWdCcUIsSUFBSUksUUFBSixDQUFhekIsUUFBN0I7QUFDQVMsMkNBQUtpQixTQUFMLEdBQWlCTCxJQUFJSSxRQUFKLENBQWFDLFNBQTlCO0FBRk87QUFBQSw2Q0FHRCxlQUFLQyxPQUFMLENBQWE7QUFDakJkLDZDQUFLLDBDQURZO0FBRWpCZSxnREFBUSxNQUZTO0FBR2pCckMsOENBQU07QUFDSnNDLGtEQUFRcEIsS0FBS0w7QUFEVCx5Q0FIVztBQU1qQmdCLGlEQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJaLCtDQUFLQyxPQUFMLEdBQWVXLElBQUk5QixJQUFuQjtBQUNBa0IsK0NBQUtxQixPQUFMLENBQWE7QUFDWHBCLHFEQUFTVyxJQUFJOUI7QUFERiwyQ0FBYjtBQUdEO0FBWGdCLHVDQUFiLENBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSx5QkFBakI7QUFtQkQ7QUEvQmdCLHFCQUFiLENBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURlLE9BQWpCO0FBdUNEOzs7O0VBekhpQyxlQUFLMkMsSTs7a0JBQXBCOUMsTSIsImZpbGUiOiJoZWFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFydHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgd3JpdGVjb2xvcjogJ2JsYWNrJyxcbiAgICBzZW5kY29sb3I6ICdncmF5JyxcbiAgICBhZGQ6ICcuLi9pbWFnZXMvYWRkbGV0dGVyLnBuZycsXG4gICAgY2F0OiAnLi4vaW1hZ2VzL2NhdC5qcGcnLFxuICAgIHBsYW50OiAnLi4vaW1hZ2VzL3BsYW50LmpwZycsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBteWVzc2F5OiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgdGV4dDogJycsXG4gICAgaW5kZXg6ICcnLFxuICAgIGFub3RoZXI6ICcnLFxuICAgIGFub3RoZXJvbmU6ICcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgd3JpdGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYud3JpdGVjb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuc2VuZGNvbG9yID0gJ2dyYXknXG4gICAgICBzZWxmLnNob3cgPSB0cnVlXG4gICAgfSxcbiAgICByZWNlaXZlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLndyaXRlY29sb3IgPSAnZ3JheSdcbiAgICAgIHNlbGYuc2VuZGNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5zaG93ID0gZmFsc2VcbiAgICB9LFxuICAgIGxldHRlcigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbGV0dGVyJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHNlY29uZChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vc2Vjb25kP2luZGV4PSR7c2VsZi5pbmRleH1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVjZWl2ZWxldHRlcihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vcmVjZWl2ZWxldHRlcj9pbmRleD0ke3NlbGYuaW5kZXh9JndlY2hhdD0ke3NlbGYuYW5vdGhlcm9uZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvbGlzdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvc2VsZWN0YW5vdGhlcicsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYuYW5vdGhlciA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICBhbm90aGVyOiByZXMuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlbGYuYW5vdGhlcm9uZSA9IHNlbGYuYW5vdGhlclswXS5hbnRob3JcbiAgICAgICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICBzdWNjZXNzOiBhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvYW5vdGhlcmxpc3QnLFxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5hbm90aGVyb25lXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVjZWl2ZSA9IHJlcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZTogcmVzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=