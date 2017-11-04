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
      nickName: ''
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
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
                url: 'http://127.0.0.1:7001/two/missingupdate',
                method: 'POST',
                data: {
                  id: 4,
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

                  case 2:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGV4dCIsImhlaWdodCIsIndpZHRoIiwibmlja05hbWUiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJzZWxmIiwiTUUiLCJkZXRhaWwiLCJ2YWx1ZSIsIlRBIiwiZGF0ZSIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImlkIiwid2VjaGF0IiwiY29uc29sZSIsImxvZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaW1hZ2UiLCJtaXNzaW5nIiwibmF2aWdhdGVUbyIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGdCQUFVO0FBSkwsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLQyxFQUFMLEdBQVVGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRixFQUF6QjtBQUNBRCxhQUFLSSxFQUFMLEdBQVVMLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxFQUF6QjtBQUNBSixhQUFLSyxJQUFMLEdBQVlOLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRSxJQUEzQjtBQUNBLFlBQUlMLEtBQUtDLEVBQUwsS0FBWSxFQUFaLEdBQWlCRCxLQUFLSSxFQUFMLEtBQVksRUFBN0IsR0FBa0NKLEtBQUtLLElBQUwsS0FBYyxFQUFwRCxFQUF3RDtBQUN0RCx5QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxxQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUixtQkFBS0osUUFBTCxHQUFnQlksSUFBSUMsUUFBSixDQUFhYixRQUE3QjtBQUNBSSxtQkFBS1UsU0FBTCxHQUFpQkYsSUFBSUMsUUFBSixDQUFhQyxTQUE5QjtBQUNBLDZCQUFLQyxPQUFMLENBQWE7QUFDWEMscUJBQUsseUNBRE07QUFFWEMsd0JBQVEsTUFGRztBQUdYckIsc0JBQU07QUFDSnNCLHNCQUFJLENBREE7QUFFSlQsd0JBQU1OLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRSxJQUZqQjtBQUdKSixzQkFBSUYsRUFBRUcsTUFBRixDQUFTQyxLQUFULENBQWVGLEVBSGY7QUFJSkcsc0JBQUlMLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxFQUpmO0FBS0pXLDBCQUFRZixLQUFLSjtBQUxULGlCQUhLO0FBVVhXLHlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJRLDBCQUFRQyxHQUFSLENBQVlULEdBQVo7QUFDRDtBQVpVLGVBQWI7QUFjRDtBQWxCYyxXQUFqQjtBQW9CRCxTQXJCRCxNQXFCTztBQUNMLHlCQUFLVSxTQUFMLENBQWU7QUFDYkMsbUJBQU8sT0FETTtBQUViQyxtQkFBTztBQUZNLFdBQWY7QUFJRDtBQUNGLE9BakNPO0FBa0NSQyxhQWxDUSxxQkFrQ0U7QUFDUix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkVixlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQXRDTyxLOzs7Ozs2QkF3Q0Q7QUFDUCxVQUFJWixPQUFPLElBQVg7QUFDQSxxQkFBS3VCLGFBQUwsQ0FBbUI7QUFDakJoQixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hSLGVBQUtOLE1BQUwsR0FBY2MsSUFBSWdCLFlBQWxCO0FBQ0F4QixlQUFLTCxLQUFMLEdBQWFhLElBQUlpQixXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUEscUJBQUtuQixXQUFMLENBQWlCO0FBQ2ZDO0FBQUEsOEVBQVMsaUJBQWVDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQUix5QkFBS0osUUFBTCxHQUFnQlksSUFBSUMsUUFBSixDQUFhYixRQUE3QjtBQUNBSSx5QkFBS1UsU0FBTCxHQUFpQkYsSUFBSUMsUUFBSixDQUFhQyxTQUE5Qjs7QUFGTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFUOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRGUsT0FBakI7QUFNRDs7OztFQWhFK0IsZUFBS2dCLEk7O2tCQUFsQnJDLEkiLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e6quW/teaXpSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIG5pY2tOYW1lOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuTUUgPSBlLmRldGFpbC52YWx1ZS5NRVxuICAgICAgc2VsZi5UQSA9IGUuZGV0YWlsLnZhbHVlLlRBXG4gICAgICBzZWxmLmRhdGUgPSBlLmRldGFpbC52YWx1ZS5kYXRlXG4gICAgICBpZiAoc2VsZi5NRSAhPT0gJycgJiBzZWxmLlRBICE9PSAnJyAmIHNlbGYuZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZ3VwZGF0ZScsXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgZGF0ZTogZS5kZXRhaWwudmFsdWUuZGF0ZSxcbiAgICAgICAgICAgICAgICBNRTogZS5kZXRhaWwudmFsdWUuTUUsXG4gICAgICAgICAgICAgICAgVEE6IGUuZGV0YWlsLnZhbHVlLlRBLFxuICAgICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36KGl5YWF5L+h5oGvJyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9oaW50LnBuZydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG1pc3NpbmcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL21pc3NpbmcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==