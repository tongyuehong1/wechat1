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
      ME: '',
      TA: '',
      text: '',
      height: '',
      width: '',
      nickName: ''
    }, _this.methods = {
      date: function date(e) {
        var self = this;
        console.log(e.detail.value, 'date');
        self.date = e.detail.value;
      },
      ME: function ME(e) {
        var self = this;
        console.log(e.detail.value, 'ME');
        self.ME = e.detail.value;
      },
      TA: function TA(e) {
        var self = this;
        console.log(e.detail.value, 'TA');
        self.TA = e.detail.value;
      },
      submit: function submit(e) {
        var self = this;
        if (self.ME !== '' & self.TA !== '' & self.date !== '') {
          _wepy2.default.getUserInfo({
            success: function success(res) {
              self.nickName = res.userInfo.nickName;
              self.avatarUrl = res.userInfo.avatarUrl;
              _wepy2.default.request({
                url: 'http://127.0.0.1:7001/two/missinginsert',
                method: 'POST',
                data: {
                  date: self.date,
                  ME: self.ME,
                  TA: self.TA,
                  wechat: self.nickName
                },
                success: function success(res) {
                  console.log(res);
                }
              });
            }
          });
        } else {
          _wepy2.default.showToast({
            title: '请补充信息',
            image: '../images/hint.png'
          });
        }
      },
      edit: function edit() {
        _wepy2.default.navigateTo({
          url: './edit'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Missing, [{
    key: 'onShow',
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
                                  self.setData({
                                    text: res.data[0]
                                  });
                                  console.log(res.data);
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

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Missing;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Missing , 'pages/missing'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3NpbmcuanMiXSwibmFtZXMiOlsiTWlzc2luZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidG9wIiwiaW5wdXQiLCJwaW5rdHJlZSIsImNvbmZlc3Npb24iLCJkYXRlIiwiTUUiLCJUQSIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm5pY2tOYW1lIiwibWV0aG9kcyIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwic3VibWl0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwid2VjaGF0Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpbWFnZSIsImVkaXQiLCJuYXZpZ2F0ZVRvIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwic2V0RGF0YSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssdUJBREE7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGdCQUFVLHdCQUhMO0FBSUxDLGtCQUFZLEVBSlA7QUFLTEMsWUFBTSxFQUxEO0FBTUxDLFVBQUksRUFOQztBQU9MQyxVQUFJLEVBUEM7QUFRTEMsWUFBTSxFQVJEO0FBU0xDLGNBQVEsRUFUSDtBQVVMQyxhQUFPLEVBVkY7QUFXTEMsZ0JBQVU7QUFYTCxLLFFBYVBDLE8sR0FBVTtBQUNSUCxVQURRLGdCQUNIUSxDQURHLEVBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsRUFBRUksTUFBRixDQUFTQyxLQUFyQixFQUE0QixNQUE1QjtBQUNBSixhQUFLVCxJQUFMLEdBQVlRLEVBQUVJ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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSxpQkFBakI7QUFxQkEscUJBQUs4QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakdpQyxlQUFLQyxJOztrQkFBckIxQyxPIiwiZmlsZSI6Im1pc3NpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW5nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnuqrlv7Xml6UnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0b3A6ICcuLi9pbWFnZXMvbWlzc3RvcC5wbmcnLFxuICAgIGlucHV0OiAnJyxcbiAgICBwaW5rdHJlZTogJy4uL2ltYWdlcy9waW5rdHJlZS5qcGcnLFxuICAgIGNvbmZlc3Npb246ICcnLFxuICAgIGRhdGU6ICcnLFxuICAgIE1FOiAnJyxcbiAgICBUQTogJycsXG4gICAgdGV4dDogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgbmlja05hbWU6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBkYXRlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUsICdkYXRlJylcbiAgICAgIHNlbGYuZGF0ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBNRShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlLCAnTUUnKVxuICAgICAgc2VsZi5NRSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBUQShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlLCAnVEEnKVxuICAgICAgc2VsZi5UQSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBzdWJtaXQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5NRSAhPT0gJycgJiBzZWxmLlRBICE9PSAnJyAmIHNlbGYuZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZ2luc2VydCcsXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogc2VsZi5kYXRlLFxuICAgICAgICAgICAgICAgIE1FOiBzZWxmLk1FLFxuICAgICAgICAgICAgICAgIFRBOiBzZWxmLlRBLFxuICAgICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36KGl5YWF5L+h5oGvJyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9oaW50LnBuZydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGVkaXQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2VkaXQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZ3NlbGVjdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhWzBdXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVswXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19