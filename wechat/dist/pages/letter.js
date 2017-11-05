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
      text: '',
      title: ''
    }, _this.methods = {
      inside: function inside(e) {
        var self = this;
        console.log(e.detail.value);
        self.essay = e.detail.value;
      },
      input: function input(e) {
        var self = this;
        console.log(e.detail.value);
        self.title = e.detail.value;
      },
      image: function image() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            self.img = res.tempFilePaths[0];
            self.setData({
              img: res.tempFilePaths[0]
            });
            if (self.img.length > 1) {
              _wepy2.default.showToast({
                title: '只能放1张哦',
                icon: 'success',
                duration: 1000
              });
            }
          }
        });
      },
      insert: function insert(e) {
        var self = this;
        console.log(self.title, 'title');
        console.log(self.essay, 'essay');
        _wepy2.default.getUserInfo({
          success: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self.nickName = res.userInfo.nickName;
                      self.avatarUrl = res.userInfo.avatarUrl;

                      if (!(self.nickName !== '' & self.title !== '' & self.essay !== '')) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 5;
                      return _wepy2.default.request({
                        url: 'http://127.0.0.1:7001/hearts/send',
                        method: 'POST',
                        data: {
                          wechat: self.nickName,
                          title: self.title,
                          img: self.img,
                          letter: self.essay
                        },
                        success: function success(res) {
                          self.text = res.data[0];
                          self.setData({
                            text: res.data[0]
                          });
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

                    case 5:
                      _context.next = 8;
                      break;

                    case 7:
                      _wepy2.default.showToast({
                        title: '请补充信息',
                        image: '../images/hint.png'
                      });

                    case 8:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5qcyJdLCJuYW1lcyI6WyJMZXR0ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWRkIiwiaW5zaWRlIiwiaW1nIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJ0ZXh0IiwidGl0bGUiLCJtZXRob2RzIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJlc3NheSIsImlucHV0IiwiaW1hZ2UiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiaW5zZXJ0IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ3ZWNoYXQiLCJsZXR0ZXIiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLFdBQUssbUJBSkE7QUFLTEMsY0FBUSxFQUxIO0FBTUxDLFdBQUssRUFOQTtBQU9MQyxnQkFBVSxFQVBMO0FBUUxDLGlCQUFXLEVBUk47QUFTTEMsWUFBTSxFQVREO0FBVUxDLGFBQU87QUFWRixLLFFBWVBDLE8sR0FBVTtBQUNSTixZQURRLGtCQUNETyxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsRUFB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QUE7QUFBQTtBQUFBLGFBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSxTQUFqQjtBQXdDRDtBQTVFTyxLOzs7Ozs2QkE4RUQ7QUFDUCxVQUFJUCxPQUFPLElBQVg7QUFDQSxxQkFBSzhCLGFBQUwsQ0FBbUI7QUFDakJsQixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hiLGVBQUtYLE1BQUwsR0FBY3dCLElBQUlrQixZQUFsQjtBQUNBL0IsZUFBS1YsS0FBTCxHQUFhdUIsSUFBSW1CLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXRHaUMsZUFBS0MsSTs7a0JBQXBCakQsTSIsImZpbGUiOiJsZXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgYWRkOiAnLi4vaW1hZ2VzL2FkZC5wbmcnLFxuICAgIGluc2lkZTogJycsXG4gICAgaW1nOiBbXSxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICB0aXRsZTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGluc2lkZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi5lc3NheSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbnB1dChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi50aXRsZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbWFnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgc2VsZi5pbWcgPSByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbWc6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoc2VsZi5pbWcubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WPquiDveaUvjHlvKDlk6YnLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGluc2VydChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudGl0bGUsICd0aXRsZScpXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmVzc2F5LCAnZXNzYXknKVxuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICBpZiAoc2VsZi5uaWNrTmFtZSAhPT0gJycgJiBzZWxmLnRpdGxlICE9PSAnJyAmIHNlbGYuZXNzYXkgIT09ICcnKSB7XG4gICAgICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvaGVhcnRzL3NlbmQnLFxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogc2VsZi50aXRsZSxcbiAgICAgICAgICAgICAgICBpbWc6IHNlbGYuaW1nLFxuICAgICAgICAgICAgICAgIGxldHRlcjogc2VsZi5lc3NheVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVswXVxuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVswXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfor7fooaXlhYXkv6Hmga8nLFxuICAgICAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9oaW50LnBuZydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19