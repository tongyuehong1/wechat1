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
      height: '',
      width: '',
      add: '../images/add.png',
      inside: '',
      img: [],
      nickName: '',
      avatarUrl: '',
      text: ''
    }, _this.methods = {
      inside: function inside(e) {
        var self = this;
        console.log(e.detail.value);
        self.inside = e.detail.value;
      },
      image: function image() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            var arr = self.img;
            var image = arr.concat(res.tempFilePaths);
            self.img = image;
            self.setData({
              img: image
            });
          }
        });
      },
      insert: function insert(e) {
        var self = this;
        // self.inside = e.detail.value
        // console.log(self.inside)
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
                        url: 'http://127.0.0.1:7001/hearts/send',
                        method: 'POST',
                        data: {
                          wechat: self.nickName,
                          letter: self.inside
                        },
                        success: function success(res) {
                          self.text = res.data[0];
                          self.setData({
                            text: res.data[0]
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Letter, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Letter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Letter , 'pages/letter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5qcyJdLCJuYW1lcyI6WyJMZXR0ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWRkIiwiaW5zaWRlIiwiaW1nIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJ0ZXh0IiwibWV0aG9kcyIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiaW1hZ2UiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImFyciIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwiaW5zZXJ0IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ3ZWNoYXQiLCJsZXR0ZXIiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxXQUFLLG1CQUpBO0FBS0xDLGNBQVEsRUFMSDtBQU1MQyxXQUFLLEVBTkE7QUFPTEMsZ0JBQVUsRUFQTDtBQVFMQyxpQkFBVyxFQVJOO0FBU0xDLFlBQU07QUFURCxLLFFBV1BDLE8sR0FBVTtBQUNSTCxZQURRLGtCQUNETSxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsRUFBRUksTUFBRixDQUFTQyxLQUFyQjtBQUNBSixhQUFLUCxNQUFMLEdBQWNNLEVBQUVJLE1BQUYsQ0FBU0MsS0FBdkI7QUFDRCxPQUxPO0FBTVJDLFdBTlEsbUJBTUE7QUFDTixZQUFJTCxPQUFPLElBQVg7QUFDQSx1QkFBS00sV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxDQURRLEVBQ0w7QUFDVkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLLEVBRXVCO0FBQ3RDQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEcsRUFHa0I7QUFDakNDLGlCQUplLG1CQUlQQyxHQUpPLEVBSUY7QUFDWCxnQkFBSUMsTUFBTVosS0FBS04sR0FBZjtBQUNBLGdCQUFJVyxRQUFRTyxJQUFJQyxNQUFKLENBQVdGLElBQUlHLGFBQWYsQ0FBWjtBQUNBZCxpQkFBS04sR0FBTCxHQUFXVyxLQUFYO0FBQ0FMLGlCQUFLZSxPQUFMLENBQWE7QUFDWHJCLG1CQUFLVztBQURNLGFBQWI7QUFHRDtBQVhjLFNBQWpCO0FBYUQsT0FyQk87QUFzQlJXLFlBdEJRLGtCQXNCRGpCLENBdEJDLEVBc0JFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0E7QUFDQTtBQUNBLHVCQUFLaUIsV0FBTCxDQUFpQjtBQUNmUDtBQUFBLGdGQUFTLGlCQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUFgsMkJBQUtMLFFBQUwsR0FBZ0JnQixJQUFJTyxRQUFKLENBQWF2QixRQUE3QjtBQUNBSywyQkFBS0osU0FBTCxHQUFpQmUsSUFBSU8sUUFBSixDQUFhdEIsU0FBOUI7QUFGTztBQUFBLDZCQUdELGVBQUt1QixPQUFMLENBQWE7QUFDakJDLDZCQUFLLG1DQURZO0FBRWpCQyxnQ0FBUSxNQUZTO0FBR2pCakMsOEJBQU07QUFDSmtDLGtDQUFRdEIsS0FBS0wsUUFEVDtBQUVKNEIsa0NBQVF2QixLQUFLUDtBQUZULHlCQUhXO0FBT2pCaUIsaUNBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlgsK0JBQUtILElBQUwsR0FBWWMsSUFBSXZCLElBQUosQ0FBUyxDQUFULENBQVo7QUFDQVksK0JBQUtlLE9BQUwsQ0FBYTtBQUNYbEIsa0NBQU1jLElBQUl2QixJQUFKLENBQVMsQ0FBVDtBQURLLDJCQUFiO0FBR0FhLGtDQUFRQyxHQUFSLENBQVlTLEdBQVo7QUFDRDtBQWJnQix1QkFBYixDQUhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSxTQUFqQjtBQXFCRDtBQS9DTyxLOzs7Ozs2QkFpREQ7QUFDUCxVQUFJWCxPQUFPLElBQVg7QUFDQSxxQkFBS3dCLGFBQUwsQ0FBbUI7QUFDakJkLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFgsZUFBS1YsTUFBTCxHQUFjcUIsSUFBSWMsWUFBbEI7QUFDQXpCLGVBQUtULEtBQUwsR0FBYW9CLElBQUllLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXhFaUMsZUFBS0MsSTs7a0JBQXBCMUMsTSIsImZpbGUiOiJsZXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgYWRkOiAnLi4vaW1hZ2VzL2FkZC5wbmcnLFxuICAgIGluc2lkZTogJycsXG4gICAgaW1nOiBbXSxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICB0ZXh0OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaW5zaWRlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICBzZWxmLmluc2lkZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbWFnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA5LCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGxldCBhcnIgPSBzZWxmLmltZ1xuICAgICAgICAgIGxldCBpbWFnZSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgc2VsZi5pbWcgPSBpbWFnZVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbWc6IGltYWdlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGluc2VydChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIC8vIHNlbGYuaW5zaWRlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuaW5zaWRlKVxuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2hlYXJ0cy9zZW5kJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWUsXG4gICAgICAgICAgICAgIGxldHRlcjogc2VsZi5pbnNpZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFbMF1cbiAgICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVswXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==