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
      img: []
    }, _this.methods = {
      inside: function inside(e) {
        var self = this;
        console.log(e.detail.value);
        self.inside = e.detail.value;
      },
      set: function set() {
        var self = this;
        try {
          _wepy2.default.setStorage({
            key: 'third',
            data: self.inside
          });
        } catch (e) {
          console.log(e);
        }
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
      insert: function insert() {
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
                          self.text = res.data[0];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5qcyJdLCJuYW1lcyI6WyJMZXR0ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWRkIiwiaW5zaWRlIiwiaW1nIiwibWV0aG9kcyIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwic2V0Iiwic2V0U3RvcmFnZSIsImtleSIsImltYWdlIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJhcnIiLCJjb25jYXQiLCJ0ZW1wRmlsZVBhdGhzIiwic2V0RGF0YSIsImluc2VydCIsImdldFVzZXJJbmZvIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ3ZWNoYXQiLCJ0ZXh0IiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsV0FBSyxtQkFKQTtBQUtMQyxjQUFRLEVBTEg7QUFNTEMsV0FBSztBQU5BLEssUUFRUEMsTyxHQUFVO0FBQ1JGLFlBRFEsa0JBQ0RHLENBREMsRUFDRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSCxFQUFFSSxNQUFGLENBQVNDLEtBQXJCO0FBQ0FKLGFBQUtKLE1BQUwsR0FBY0csRUFBRUksTUFBRixDQUFTQyxLQUF2QjtBQUNELE9BTE87QUFNUkMsU0FOUSxpQkFNRjtBQUNKLFlBQUlMLE9BQU8sSUFBWDtBQUNBLFlBQUk7QUFDRix5QkFBS00sVUFBTCxDQUFnQjtBQUNkQyxpQkFBSyxPQURTO0FBRWRoQixrQkFBTVMsS0FBS0o7QUFGRyxXQUFoQjtBQUlELFNBTEQsQ0FLRSxPQUFPRyxDQUFQLEVBQVU7QUFDVkUsa0JBQVFDLEdBQVIsQ0FBWUgsQ0FBWjtBQUNEO0FBQ0YsT0FoQk87QUFpQlJTLFdBakJRLG1CQWlCQTtBQUNOLFlBQUlSLE9BQU8sSUFBWDtBQUNBLHVCQUFLUyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFEsRUFDTDtBQUNWQyxvQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRkssRUFFdUI7QUFDdENDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRyxFQUdrQjtBQUNqQ0MsaUJBSmUsbUJBSVBDLEdBSk8sRUFJRjtBQUNYLGdCQUFJQyxNQUFNZixLQUFLSCxHQUFmO0FBQ0EsZ0JBQUlXLFFBQVFPLElBQUlDLE1BQUosQ0FBV0YsSUFBSUcsYUFBZixDQUFaO0FBQ0FqQixpQkFBS0gsR0FBTCxHQUFXVyxLQUFYO0FBQ0FSLGlCQUFLa0IsT0FBTCxDQUFhO0FBQ1hyQixtQkFBS1c7QUFETSxhQUFiO0FBR0Q7QUFYYyxTQUFqQjtBQWFELE9BaENPO0FBaUNSVyxZQWpDUSxvQkFpQ0M7QUFDUCx1QkFBS0MsV0FBTCxDQUFpQjtBQUNqQlA7QUFBQSxnRkFBUyxpQkFBZUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BkLDJCQUFLcUIsUUFBTCxHQUFnQlAsSUFBSVEsUUFBSixDQUFhRCxRQUE3QjtBQUNBckIsMkJBQUt1QixTQUFMLEdBQWlCVCxJQUFJUSxRQUFKLENBQWFDLFNBQTlCO0FBRk87QUFBQSw2QkFHRCxlQUFLQyxPQUFMLENBQWE7QUFDakJDLDZCQUFLLHlDQURZO0FBRWpCQyxnQ0FBUSxNQUZTO0FBR2pCbkMsOEJBQU07QUFDSm9DLGtDQUFRM0IsS0FBS3FCO0FBRFQseUJBSFc7QUFNakJSLGlDQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJkLCtCQUFLNEIsSUFBTCxHQUFZZCxJQUFJdkIsSUFBSixDQUFTLENBQVQsQ0FBWjtBQUNBUywrQkFBS2tCLE9BQUwsQ0FBYTtBQUNYVSxrQ0FBTWQsSUFBSXZCLElBQUosQ0FBUyxDQUFUO0FBREssMkJBQWI7QUFHQVUsa0NBQVFDLEdBQVIsQ0FBWUYsS0FBSzRCLElBQWpCO0FBQ0Q7QUFaZ0IsdUJBQWIsQ0FIQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFUOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRGlCLFNBQWpCO0FBb0JEO0FBdERPLEs7Ozs7OzZCQXdERDtBQUNQLFVBQUk1QixPQUFPLElBQVg7QUFDQSxxQkFBSzZCLGFBQUwsQ0FBbUI7QUFDakJoQixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hkLGVBQUtQLE1BQUwsR0FBY3FCLElBQUlnQixZQUFsQjtBQUNBOUIsZUFBS04sS0FBTCxHQUFhb0IsSUFBSWlCLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQTVFaUMsZUFBS0MsSTs7a0JBQXBCNUMsTSIsImZpbGUiOiJsZXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgYWRkOiAnLi4vaW1hZ2VzL2FkZC5wbmcnLFxuICAgIGluc2lkZTogJycsXG4gICAgaW1nOiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaW5zaWRlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICBzZWxmLmluc2lkZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBzZXQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4gICAgICAgICAga2V5OiAndGhpcmQnLFxuICAgICAgICAgIGRhdGE6IHNlbGYuaW5zaWRlXG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBpbWFnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA5LCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGxldCBhcnIgPSBzZWxmLmltZ1xuICAgICAgICAgIGxldCBpbWFnZSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgc2VsZi5pbWcgPSBpbWFnZVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbWc6IGltYWdlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGluc2VydCgpIHtcbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogYXN5bmMgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3R3by9taXNzaW5nc2VsZWN0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFbMF1cbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhWzBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi50ZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19