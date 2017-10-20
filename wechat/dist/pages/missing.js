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

var Missing = function (_wepy$page) {
  _inherits(Missing, _wepy$page);

  function Missing() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Missing);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Missing.__proto__ || Object.getPrototypeOf(Missing)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '纪念日'
    }, _this.data = {
      top: '../images/misstop.png',
      input: '',
      pinktree: '../images/pinktree.jpg',
      confession: '',
      date: '',
      female: '',
      male: '',
      text: '',
      height: '',
      width: ''
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        var self = this;
        self.confession = e.detail.value;

        _wepy2.default.getUserInfo({
          success: function success(res) {
            self.nickName = res.userInfo.nickName;
            self.avatarUrl = res.userInfo.avatarUrl;
            _wepy2.default.request({
              url: 'http://127.0.0.1:7001/two/missinginsert',
              method: 'POST',
              data: {
                date: e.detail.value.input,
                female: e.detail.value.female,
                male: e.detail.value.male,
                wechat: self.nickName
              },
              success: function success(res) {
                console.log(res);
              }
            });
          }
        });
      }
      // show() {
      //   wepy.navigateTo({
      //     url: './show'
      //   })
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Missing, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var self;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;

                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
                  }
                });
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
                                url: 'http://127.0.0.1:7001/two/missingselect',
                                method: 'POST',
                                data: {
                                  wechat: self.nickName
                                },
                                success: function success(res) {
                                  self.text = res.data[0];
                                  // self.date = res.data[0].date
                                  // self.female = res.data[0].female
                                  // self.male = res.data[0].male
                                  self.setData({
                                    text: res.data[0]
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
                      return _ref3.apply(this, arguments);
                    }

                    return success;
                  }()
                });
                this.$apply();

              case 4:
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

  return Missing;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Missing , 'pages/missing'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3NpbmcuanMiXSwibmFtZXMiOlsiTWlzc2luZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidG9wIiwiaW5wdXQiLCJwaW5rdHJlZSIsImNvbmZlc3Npb24iLCJkYXRlIiwiZmVtYWxlIiwibWFsZSIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJuaWNrTmFtZSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsIndlY2hhdCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInNldERhdGEiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLHVCQURBO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxnQkFBVSx3QkFITDtBQUlMQyxrQkFBWSxFQUpQO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxjQUFRLEVBTkg7QUFPTEMsWUFBTSxFQVBEO0FBUUxDLFlBQU0sRUFSRDtBQVNMQyxjQUFRLEVBVEg7QUFVTEMsYUFBTztBQVZGLEssUUFZUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0YsRUFBRUcsTUFBRixDQUFTQyxLQUEvQztBQUNBLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLZCxVQUFMLEdBQWtCUyxFQUFFRyxNQUFGLENBQVNDLEtBQTNCOztBQUVBLHVCQUFLRSxXQUFMLENBQWlCO0FBQ2ZDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGlCQUFLSSxRQUFMLEdBQWdCRCxJQUFJRSxRQUFKLENBQWFELFFBQTdCO0FBQ0FKLGlCQUFLTSxTQUFMLEdBQWlCSCxJQUFJRSxRQUFKLENBQWFDLFNBQTlCO0FBQ0EsMkJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxtQkFBSyx5Q0FETTtBQUVYQyxzQkFBUSxNQUZHO0FBR1gzQixvQkFBTTtBQUNKSyxzQkFBTVEsRUFBRUcsTUFBRixDQUFTQyxLQUFULENBQWVmLEtBRGpCO0FBRUpJLHdCQUFRTyxFQUFFRyxNQUFGLENBQVNDLEtBQVQsQ0FBZVgsTUFGbkI7QUFHSkMsc0JBQU1NLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxDQUFlVixJQUhqQjtBQUlKcUIsd0JBQVFWLEtBQUtJO0FBSlQsZUFISztBQVNYRix1QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUCx3QkFBUUMsR0FBUixDQUFZTSxHQUFaO0FBQ0Q7QUFYVSxhQUFiO0FBYUQ7QUFqQmMsU0FBakI7QUFtQkQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTlCUSxLOzs7Ozs7Ozs7Ozs7QUFpQ0pILG9CLEdBQU8sSTs7QUFDWCwrQkFBS1csYUFBTCxDQUFtQjtBQUNqQlQseUJBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgseUJBQUtULE1BQUwsR0FBY1ksSUFBSVMsWUFBbEI7QUFDQVoseUJBQUtSLEtBQUwsR0FBYVcsSUFBSVUsV0FBakI7QUFDRDtBQUpnQixpQkFBbkI7QUFNQSwrQkFBS1osV0FBTCxDQUFpQjtBQUNmQztBQUFBLHdGQUFTLGlCQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUEgsbUNBQUtJLFFBQUwsR0FBZ0JELElBQUlFLFFBQUosQ0FBYUQsUUFBN0I7QUFDQUosbUNBQUtNLFNBQUwsR0FBaUJILElBQUlFLFFBQUosQ0FBYUMsU0FBOUI7QUFGTztBQUFBLHFDQUdELGVBQUtDLE9BQUwsQ0FBYTtBQUNqQkMscUNBQUsseUNBRFk7QUFFakJDLHdDQUFRLE1BRlM7QUFHakIzQixzQ0FBTTtBQUNKNEIsMENBQVFWLEtBQUtJO0FBRFQsaUNBSFc7QUFNakJGLHlDQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHVDQUFLVixJQUFMLEdBQVlhLElBQUlyQixJQUFKLENBQVMsQ0FBVCxDQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0FrQix1Q0FBS2MsT0FBTCxDQUFhO0FBQ1h4QiwwQ0FBTWEsSUFBSXJCLElBQUosQ0FBUyxDQUFUO0FBREssbUNBQWI7QUFHQWMsMENBQVFDLEdBQVIsQ0FBWUcsS0FBS1YsSUFBakI7QUFDRDtBQWZnQiwrQkFBYixDQUhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFUOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRGUsaUJBQWpCO0FBdUJBLHFCQUFLeUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9FaUMsZUFBS0MsSTs7a0JBQXJCckMsTyIsImZpbGUiOiJtaXNzaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlzc2luZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57qq5b+15pelJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgdG9wOiAnLi4vaW1hZ2VzL21pc3N0b3AucG5nJyxcbiAgICBpbnB1dDogJycsXG4gICAgcGlua3RyZWU6ICcuLi9pbWFnZXMvcGlua3RyZWUuanBnJyxcbiAgICBjb25mZXNzaW9uOiAnJyxcbiAgICBkYXRlOiAnJyxcbiAgICBmZW1hbGU6ICcnLFxuICAgIG1hbGU6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29uZmVzc2lvbiA9IGUuZGV0YWlsLnZhbHVlXG5cbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZ2luc2VydCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZGF0ZTogZS5kZXRhaWwudmFsdWUuaW5wdXQsXG4gICAgICAgICAgICAgIGZlbWFsZTogZS5kZXRhaWwudmFsdWUuZmVtYWxlLFxuICAgICAgICAgICAgICBtYWxlOiBlLmRldGFpbC52YWx1ZS5tYWxlLFxuICAgICAgICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIHNob3coKSB7XG4gICAgLy8gICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICB1cmw6ICcuL3Nob3cnXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZ3NlbGVjdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhWzBdXG4gICAgICAgICAgICAvLyBzZWxmLmRhdGUgPSByZXMuZGF0YVswXS5kYXRlXG4gICAgICAgICAgICAvLyBzZWxmLmZlbWFsZSA9IHJlcy5kYXRhWzBdLmZlbWFsZVxuICAgICAgICAgICAgLy8gc2VsZi5tYWxlID0gcmVzLmRhdGFbMF0ubWFsZVxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=