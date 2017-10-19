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
      text: ''
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

  return Missing;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Missing , 'pages/missing'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3NpbmcuanMiXSwibmFtZXMiOlsiTWlzc2luZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidG9wIiwiaW5wdXQiLCJwaW5rdHJlZSIsImNvbmZlc3Npb24iLCJkYXRlIiwiZmVtYWxlIiwibWFsZSIsInRleHQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ3ZWNoYXQiLCJzZXREYXRhIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyx1QkFEQTtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsZ0JBQVUsd0JBSEw7QUFJTEMsa0JBQVksRUFKUDtBQUtMQyxZQUFNLEVBTEQ7QUFNTEMsY0FBUSxFQU5IO0FBT0xDLFlBQU0sRUFQRDtBQVFMQyxZQUFNO0FBUkQsSyxRQVVQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaQyxnQkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDRixFQUFFRyxNQUFGLENBQVNDLEtBQS9DO0FBQ0EsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtaLFVBQUwsR0FBa0JPLEVBQUVHLE1BQUYsQ0FBU0MsS0FBM0I7O0FBRUEsdUJBQUtFLFdBQUwsQ0FBaUI7QUFDZkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsaUJBQUtJLFFBQUwsR0FBZ0JELElBQUlFLFFBQUosQ0FBYUQsUUFBN0I7QUFDQUosaUJBQUtNLFNBQUwsR0FBaUJILElBQUlFLFFBQUosQ0FBYUMsU0FBOUI7QUFDQSwyQkFBS0MsT0FBTCxDQUFhO0FBQ1hDLG1CQUFLLHlDQURNO0FBRVhDLHNCQUFRLE1BRkc7QUFHWHpCLG9CQUFNO0FBQ0pLLHNCQUFNTSxFQUFFRyxNQUFGLENBQVNDLEtBQVQsQ0FBZWIsS0FEakI7QUFFSkksd0JBQVFLLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxDQUFlVCxNQUZuQjtBQUdKQyxzQkFBTUksRUFBRUcsTUFBRixDQUFTQyxLQUFULENBQWVSLElBSGpCO0FBSUptQix3QkFBUVYsS0FBS0k7QUFKVCxlQUhLO0FBU1hGLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJQLHdCQUFRQyxHQUFSLENBQVlNLEdBQVo7QUFDRDtBQVhVLGFBQWI7QUFhRDtBQWpCYyxTQUFqQjtBQW1CRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBOUJRLEs7Ozs7Ozs7Ozs7OztBQWlDSkgsb0IsR0FBTyxJOztBQUNYLCtCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDO0FBQUEsd0ZBQVMsaUJBQWVDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQSCxtQ0FBS0ksUUFBTCxHQUFnQkQsSUFBSUUsUUFBSixDQUFhRCxRQUE3QjtBQUNBSixtQ0FBS00sU0FBTCxHQUFpQkgsSUFBSUUsUUFBSixDQUFhQyxTQUE5QjtBQUZPO0FBQUEscUNBR0QsZUFBS0MsT0FBTCxDQUFhO0FBQ2pCQyxxQ0FBSyx5Q0FEWTtBQUVqQkMsd0NBQVEsTUFGUztBQUdqQnpCLHNDQUFNO0FBQ0owQiwwQ0FBUVYsS0FBS0k7QUFEVCxpQ0FIVztBQU1qQkYseUNBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsdUNBQUtSLElBQUwsR0FBWVcsSUFBSW5CLElBQUosQ0FBUyxDQUFULENBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQWdCLHVDQUFLVyxPQUFMLENBQWE7QUFDWG5CLDBDQUFNVyxJQUFJbkIsSUFBSixDQUFTLENBQVQ7QUFESyxtQ0FBYjtBQUdBWSwwQ0FBUUMsR0FBUixDQUFZRyxLQUFLUixJQUFqQjtBQUNEO0FBZmdCLCtCQUFiLENBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSxpQkFBakI7QUF1QkEscUJBQUtvQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkVpQyxlQUFLQyxJOztrQkFBckJoQyxPIiwiZmlsZSI6Im1pc3NpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW5nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnuqrlv7Xml6UnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0b3A6ICcuLi9pbWFnZXMvbWlzc3RvcC5wbmcnLFxuICAgIGlucHV0OiAnJyxcbiAgICBwaW5rdHJlZTogJy4uL2ltYWdlcy9waW5rdHJlZS5qcGcnLFxuICAgIGNvbmZlc3Npb246ICcnLFxuICAgIGRhdGU6ICcnLFxuICAgIGZlbWFsZTogJycsXG4gICAgbWFsZTogJycsXG4gICAgdGV4dDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb25mZXNzaW9uID0gZS5kZXRhaWwudmFsdWVcblxuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3R3by9taXNzaW5naW5zZXJ0JyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBkYXRlOiBlLmRldGFpbC52YWx1ZS5pbnB1dCxcbiAgICAgICAgICAgICAgZmVtYWxlOiBlLmRldGFpbC52YWx1ZS5mZW1hbGUsXG4gICAgICAgICAgICAgIG1hbGU6IGUuZGV0YWlsLnZhbHVlLm1hbGUsXG4gICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8gc2hvdygpIHtcbiAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogJy4vc2hvdydcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZ3NlbGVjdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhWzBdXG4gICAgICAgICAgICAvLyBzZWxmLmRhdGUgPSByZXMuZGF0YVswXS5kYXRlXG4gICAgICAgICAgICAvLyBzZWxmLmZlbWFsZSA9IHJlcy5kYXRhWzBdLmZlbWFsZVxuICAgICAgICAgICAgLy8gc2VsZi5tYWxlID0gcmVzLmRhdGFbMF0ubWFsZVxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=