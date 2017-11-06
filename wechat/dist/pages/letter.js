'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          success: function success(res) {
            self.nickName = res.userInfo.nickName;
            self.avatarUrl = res.userInfo.avatarUrl;
            if (self.nickName !== '' & self.title !== '' & self.essay !== '') {
              _wepy2.default.request({
                url: 'http://127.0.0.1:7001/hearts/send',
                method: 'POST',
                data: {
                  wechat: self.nickName,
                  title: self.title,
                  img: self.img,
                  letter: self.essay
                },
                success: function success(res) {
                  // self.text = res.data[0]
                  // self.setData({
                  //   text: res.data[0]
                  // })
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
            } else {
              _wepy2.default.showToast({
                title: '请补充信息',
                image: '../images/hint.png'
              });
            }
          }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5qcyJdLCJuYW1lcyI6WyJMZXR0ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWRkIiwiaW5zaWRlIiwiaW1nIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJ0ZXh0IiwidGl0bGUiLCJtZXRob2RzIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJlc3NheSIsImlucHV0IiwiaW1hZ2UiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiaW5zZXJ0IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ3ZWNoYXQiLCJsZXR0ZXIiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxXQUFLLG1CQUpBO0FBS0xDLGNBQVEsRUFMSDtBQU1MQyxXQUFLLEVBTkE7QUFPTEMsZ0JBQVUsRUFQTDtBQVFMQyxpQkFBVyxFQVJOO0FBU0xDLFlBQU0sRUFURDtBQVVMQyxhQUFPO0FBVkYsSyxRQVlQQyxPLEdBQVU7QUFDUk4sWUFEUSxrQkFDRE8sQ0FEQyxFQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlILEVBQUVJ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SUFBSW1CLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXRHaUMsZUFBS0MsSTs7a0JBQXBCakQsTSIsImZpbGUiOiJsZXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgYWRkOiAnLi4vaW1hZ2VzL2FkZC5wbmcnLFxuICAgIGluc2lkZTogJycsXG4gICAgaW1nOiBbXSxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICB0aXRsZTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGluc2lkZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi5lc3NheSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbnB1dChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi50aXRsZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbWFnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgc2VsZi5pbWcgPSByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbWc6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoc2VsZi5pbWcubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WPquiDveaUvjHlvKDlk6YnLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGluc2VydChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudGl0bGUsICd0aXRsZScpXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmVzc2F5LCAnZXNzYXknKVxuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6ICBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgICAgaWYgKHNlbGYubmlja05hbWUgIT09ICcnICYgc2VsZi50aXRsZSAhPT0gJycgJiBzZWxmLmVzc2F5ICE9PSAnJykge1xuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2hlYXJ0cy9zZW5kJyxcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHNlbGYudGl0bGUsXG4gICAgICAgICAgICAgICAgaW1nOiBzZWxmLmltZyxcbiAgICAgICAgICAgICAgICBsZXR0ZXI6IHNlbGYuZXNzYXlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VsZi50ZXh0ID0gcmVzLmRhdGFbMF1cbiAgICAgICAgICAgICAgICAvLyBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIC8vICAgdGV4dDogcmVzLmRhdGFbMF1cbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkOWKnycsXG4gICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn6K+36KGl5YWF5L+h5oGvJyxcbiAgICAgICAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvaGludC5wbmcnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==