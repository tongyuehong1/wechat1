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

var Show = function (_wepy$page) {
  _inherits(Show, _wepy$page);

  function Show() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Show);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Show.__proto__ || Object.getPrototypeOf(Show)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '纪念日'
    }, _this.data = {
      text: '',
      height: '',
      width: '',
      nickName: '',
      id: 0,
      a: ''
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
        console.log('dates', self.date);
        console.log(self.ME);
        if (self.ME !== '' & self.TA !== '' & self.date !== '') {
          _wepy2.default.getUserInfo({
            success: function success(res) {
              self.nickName = res.userInfo.nickName;
              self.avatarUrl = res.userInfo.avatarUrl;
              _wepy2.default.request({
                url: 'http://127.0.0.1:7001/two/missingupdate',
                method: 'POST',
                data: {
                  id: self.id,
                  date: self.date,
                  ME: self.ME,
                  TA: self.TA,
                  wechat: self.nickName
                },
                success: function success(res) {
                  console.log(res);
                  _wepy2.default.showToast({
                    title: '成功',
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
          });
        } else {
          _wepy2.default.showToast({
            title: '请补充信息',
            image: '../images/hint.png'
          });
        }
      },
      missing: function missing() {
        _wepy2.default.navigateTo({
          url: './missing'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Show, [{
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
                      url: 'http://127.0.0.1:7001/two/missingselect',
                      method: 'POST',
                      data: {
                        wechat: self.nickName
                      },
                      success: function success(res) {
                        self.id = res.data[0].id;
                        self.setData({
                          id: res.data[0].id
                        });
                        console.log(res.data);
                        console.log(self.id);
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

  return Show;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Show , 'pages/edit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGV4dCIsImhlaWdodCIsIndpZHRoIiwibmlja05hbWUiLCJpZCIsImEiLCJtZXRob2RzIiwiZGF0ZSIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiTUUiLCJUQSIsInN1Ym1pdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsIndlY2hhdCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJpbWFnZSIsIm1pc3NpbmciLCJuYXZpZ2F0ZVRvIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGdCQUFVLEVBSkw7QUFLTEMsVUFBSSxDQUxDO0FBTUxDLFNBQUc7QUFORSxLLFFBUVBDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsRUFBRUksTUFBRixDQUFTQyxLQUFyQixFQUE0QixNQUE1QjtBQUNBSixhQUFLRixJQUFMLEdBQVlDLEVBQUVJLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQUxPO0FBTVJDLFFBTlEsY0FNTE4sQ0FOSyxFQU1GO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdC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LElBQUosQ0FBUyxDQUFULEVBQVlLLEVBQXRCO0FBQ0FLLDZCQUFLNkIsT0FBTCxDQUFhO0FBQ1hsQyw4QkFBSWUsSUFBSXBCLElBQUosQ0FBUyxDQUFULEVBQVlLO0FBREwseUJBQWI7QUFHQU0sZ0NBQVFDLEdBQVIsQ0FBWVEsSUFBSXBCLElBQWhCO0FBQ0FXLGdDQUFRQyxHQUFSLENBQVlGLEtBQUtMLEVBQWpCO0FBQ0Q7QUFiZ0IscUJBQWIsQ0FIQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFUOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRGUsT0FBakI7QUFxQkQ7Ozs7RUF6RytCLGVBQUttQyxJOztrQkFBbEIzQyxJIiwiZmlsZSI6ImVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnuqrlv7Xml6UnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0ZXh0OiAnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgaWQ6IDAsXG4gICAgYTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGRhdGUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSwgJ2RhdGUnKVxuICAgICAgc2VsZi5kYXRlID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIE1FKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUsICdNRScpXG4gICAgICBzZWxmLk1FID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIFRBKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUsICdUQScpXG4gICAgICBzZWxmLlRBID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHN1Ym1pdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKCdkYXRlcycsIHNlbGYuZGF0ZSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuTUUpXG4gICAgICBpZiAoc2VsZi5NRSAhPT0gJycgJiBzZWxmLlRBICE9PSAnJyAmIHNlbGYuZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZ3VwZGF0ZScsXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHNlbGYuaWQsXG4gICAgICAgICAgICAgICAgZGF0ZTogc2VsZi5kYXRlLFxuICAgICAgICAgICAgICAgIE1FOiBzZWxmLk1FLFxuICAgICAgICAgICAgICAgIFRBOiBzZWxmLlRBLFxuICAgICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fooaXlhYXkv6Hmga8nLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2hpbnQucG5nJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgbWlzc2luZygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbWlzc2luZydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogYXN5bmMgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3R3by9taXNzaW5nc2VsZWN0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VsZi5pZCA9IHJlcy5kYXRhWzBdLmlkXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICBpZDogcmVzLmRhdGFbMF0uaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==