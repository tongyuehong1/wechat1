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

// import upload from '../untils/upload.js'
var Photo = function (_wepy$page) {
  _inherits(Photo, _wepy$page);

  function Photo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Photo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Photo.__proto__ || Object.getPrototypeOf(Photo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '照片集'
    }, _this.data = {
      img: [],
      arr: [],
      height: '',
      width: '',
      camera: '../images/camera.png',
      nickName: '',
      avatarUrl: '',
      upload: '',
      pic: ''
    }, _this.methods = {
      image: function image() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var arr = self.img;
            var image = arr.concat(res.tempFilePaths);
            self.img = image;
            self.setData({
              img: image
            });
            console.log(self.img, 'aaa');
          }
        });
      },
      upload: function upload() {
        var self = this;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/two/photoinsert',
          method: 'POST',
          data: {
            wechat: self.nickName,
            img: self.img
          },
          success: function success(res) {
            console.log(res);
          }
        });
      },
      preview: function preview() {
        console.log(self.img);
        _wepy2.default.previewImage({
          current: '', // 当前显示图片的http链接
          urls: self.img // 需要预览的图片http链接列表
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Photo, [{
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
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
          _wepy2.default.request({
            url: 'http://127.0.0.1:7001/two/photoselect',
            method: 'POST',
            data: {
              wechat: self.nickName
            },
            success: function success(res) {
              self.pic = res.data;
              self.setData({
                pic: res.data
              });
            }
          });
        }
      });
    }
  }]);

  return Photo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Photo , 'pages/photo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLmpzIl0sIm5hbWVzIjpbIlBob3RvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWciLCJhcnIiLCJoZWlnaHQiLCJ3aWR0aCIsImNhbWVyYSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwidXBsb2FkIiwicGljIiwibWV0aG9kcyIsImltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsIndlY2hhdCIsInByZXZpZXciLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsV0FBSyxFQUZBO0FBR0xDLGNBQVEsRUFISDtBQUlMQyxhQUFPLEVBSkY7QUFLTEMsY0FBUSxzQkFMSDtBQU1MQyxnQkFBVSxFQU5MO0FBT0xDLGlCQUFXLEVBUE47QUFRTEMsY0FBUSxFQVJIO0FBU0xDLFdBQUs7QUFUQSxLLFFBV1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU8sQ0FEUSxFQUNMO0FBQ1ZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSztBQUdmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEc7QUFJZkMsaUJBSmUsbUJBSVBDLEdBSk8sRUFJRjtBQUNYLGdCQUFJaEIsTUFBTVUsS0FBS1gsR0FBZjtBQUNBLGdCQUFJVSxRQUFRVCxJQUFJaUIsTUFBSixDQUFXRCxJQUFJRSxhQUFmLENBQVo7QUFDQVIsaUJBQUtYLEdBQUwsR0FBV1UsS0FBWDtBQUNBQyxpQkFBS1MsT0FBTCxDQUFhO0FBQ1hwQixtQkFBS1U7QUFETSxhQUFiO0FBR0FXLG9CQUFRQyxHQUFSLENBQVlYLEtBQUtYLEdBQWpCLEVBQXNCLEtBQXRCO0FBQ0Q7QUFaYyxTQUFqQjtBQWNELE9BakJPO0FBa0JSTyxZQWxCUSxvQkFrQkM7QUFDUCxZQUFJSSxPQUFPLElBQVg7QUFDQSx1QkFBS1ksT0FBTCxDQUFhO0FBQ1hDLGVBQUssdUNBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYMUIsZ0JBQU07QUFDSjJCLG9CQUFRZixLQUFLTixRQURUO0FBRUpMLGlCQUFLVyxLQUFLWDtBQUZOLFdBSEs7QUFPWGdCLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJJLG9CQUFRQyxHQUFSLENBQVlMLEdBQVo7QUFDRDtBQVRVLFNBQWI7QUFXRCxPQS9CTztBQWdDUlUsYUFoQ1EscUJBZ0NFO0FBQ1JOLGdCQUFRQyxHQUFSLENBQVlYLEtBQUtYLEdBQWpCO0FBQ0EsdUJBQUs0QixZQUFMLENBQWtCO0FBQ2hCQyxtQkFBUyxFQURPLEVBQ0g7QUFDYkMsZ0JBQU1uQixLQUFLWCxHQUZLLENBRUQ7QUFGQyxTQUFsQjtBQUlEO0FBdENPLEs7Ozs7OzZCQXdDRDtBQUNQLFVBQUlXLE9BQU8sSUFBWDtBQUNBLHFCQUFLb0IsYUFBTCxDQUFtQjtBQUNqQmYsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTixlQUFLVCxNQUFMLEdBQWNlLElBQUllLFlBQWxCO0FBQ0FyQixlQUFLUixLQUFMLEdBQWFjLElBQUlnQixXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUEscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZmxCLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJOLGVBQUtOLFFBQUwsR0FBZ0JZLElBQUlrQixRQUFKLENBQWE5QixRQUE3QjtBQUNBTSxlQUFLTCxTQUFMLEdBQWlCVyxJQUFJa0IsUUFBSixDQUFhN0IsU0FBOUI7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs2QkFDUTtBQUNQLFVBQUlLLE9BQU8sSUFBWDtBQUNBLHFCQUFLdUIsV0FBTCxDQUFpQjtBQUNmbEIsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQk4sZUFBS04sUUFBTCxHQUFnQlksSUFBSWtCLFFBQUosQ0FBYTlCLFFBQTdCO0FBQ0FNLGVBQUtMLFNBQUwsR0FBaUJXLElBQUlrQixRQUFKLENBQWE3QixTQUE5QjtBQUNBLHlCQUFLaUIsT0FBTCxDQUFhO0FBQ1hDLGlCQUFLLHVDQURNO0FBRVhDLG9CQUFRLE1BRkc7QUFHWDFCLGtCQUFNO0FBQ0oyQixzQkFBUWYsS0FBS047QUFEVCxhQUhLO0FBTVhXLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJOLG1CQUFLSCxHQUFMLEdBQVdTLElBQUlsQixJQUFmO0FBQ0FZLG1CQUFLUyxPQUFMLENBQWE7QUFDWFoscUJBQUtTLElBQUlsQjtBQURFLGVBQWI7QUFHRDtBQVhVLFdBQWI7QUFhRDtBQWpCYyxPQUFqQjtBQW1CRDs7OztFQTNGZ0MsZUFBS3FDLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoicGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyBpbXBvcnQgdXBsb2FkIGZyb20gJy4uL3VudGlscy91cGxvYWQuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaG90byBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54Wn54mH6ZuGJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaW1nOiBbXSxcbiAgICBhcnI6IFtdLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGNhbWVyYTogJy4uL2ltYWdlcy9jYW1lcmEucG5nJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICB1cGxvYWQ6ICcnLFxuICAgIHBpYzogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGltYWdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDksIC8vIOm7mOiupDlcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGxldCBhcnIgPSBzZWxmLmltZ1xuICAgICAgICAgIGxldCBpbWFnZSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgc2VsZi5pbWcgPSBpbWFnZVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbWc6IGltYWdlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmltZywgJ2FhYScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB1cGxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vcGhvdG9pbnNlcnQnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZSxcbiAgICAgICAgICBpbWc6IHNlbGYuaW1nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZXZpZXcoKSB7XG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmltZylcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgY3VycmVudDogJycsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgICAgdXJsczogc2VsZi5pbWcgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vcGhvdG9zZWxlY3QnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBzZWxmLnBpYyA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICBwaWM6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=