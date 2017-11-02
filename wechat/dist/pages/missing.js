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
      formSubmit: function formSubmit(e) {
        console.log(e.detail.value);
        var self = this;
        self.ME = e.detail.value.ME;
        self.TA = e.detail.value.TA;
        self.date = e.detail.value.date;
        if (self.ME !== '' & self.TA !== '' & self.date !== '') {
          _wepy2.default.getUserInfo({
            success: function success(res) {
              self.nickName = res.userInfo.nickName;
              self.avatarUrl = res.userInfo.avatarUrl;
              _wepy2.default.request({
                url: 'http://127.0.0.1:7001/two/missinginsert',
                method: 'POST',
                data: {
                  date: e.detail.value.date,
                  ME: e.detail.value.ME,
                  TA: e.detail.value.TA,
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

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Missing;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Missing , 'pages/missing'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3NpbmcuanMiXSwibmFtZXMiOlsiTWlzc2luZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidG9wIiwiaW5wdXQiLCJwaW5rdHJlZSIsImNvbmZlc3Npb24iLCJkYXRlIiwiTUUiLCJUQSIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm5pY2tOYW1lIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsIndlY2hhdCIsInNob3dUb2FzdCIsInRpdGxlIiwiaW1hZ2UiLCJlZGl0IiwibmF2aWdhdGVUbyIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInNldERhdGEiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLHVCQURBO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxnQkFBVSx3QkFITDtBQUlMQyxrQkFBWSxFQUpQO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxVQUFJLEVBTkM7QUFPTEMsVUFBSSxFQVBDO0FBUUxDLFlBQU0sRUFSRDtBQVNMQyxjQUFRLEVBVEg7QUFVTEMsYUFBTyxFQVZGO0FBV0xDLGdCQUFVO0FBWEwsSyxRQWFQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFGLENBQVNDLEtBQXJCO0FBQ0EsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtiLEVBQUwsR0FBVVEsRUFBRUcsTUFBRixD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eSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pc3NpbmcgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e6quW/teaXpSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHRvcDogJy4uL2ltYWdlcy9taXNzdG9wLnBuZycsXG4gICAgaW5wdXQ6ICcnLFxuICAgIHBpbmt0cmVlOiAnLi4vaW1hZ2VzL3Bpbmt0cmVlLmpwZycsXG4gICAgY29uZmVzc2lvbjogJycsXG4gICAgZGF0ZTogJycsXG4gICAgTUU6ICcnLFxuICAgIFRBOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBuaWNrTmFtZTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuTUUgPSBlLmRldGFpbC52YWx1ZS5NRVxuICAgICAgc2VsZi5UQSA9IGUuZGV0YWlsLnZhbHVlLlRBXG4gICAgICBzZWxmLmRhdGUgPSBlLmRldGFpbC52YWx1ZS5kYXRlXG4gICAgICBpZiAoc2VsZi5NRSAhPT0gJycgJiBzZWxmLlRBICE9PSAnJyAmIHNlbGYuZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZ2luc2VydCcsXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogZS5kZXRhaWwudmFsdWUuZGF0ZSxcbiAgICAgICAgICAgICAgICBNRTogZS5kZXRhaWwudmFsdWUuTUUsXG4gICAgICAgICAgICAgICAgVEE6IGUuZGV0YWlsLnZhbHVlLlRBLFxuICAgICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36KGl5YWF5L+h5oGvJyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9oaW50LnBuZydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGVkaXQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2VkaXQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZ3NlbGVjdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhWzBdXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVswXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19