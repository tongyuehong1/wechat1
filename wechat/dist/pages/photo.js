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
      arr: '',
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
            console.log('res: ', res);
            var image = arr.concat(res.tempFilePaths);
            self.img = image;
            self.setData({
              img: image
            });
            // wepy.uploadFile({
            //   url: 'http://127.0.0.1:7001/two/photoinsert',
            //   filePath: self.img[0],
            //   name: 'file',
            //   success: function(res) {
            //     console.log(res)
            //     console.log(self.img)
            //   }
            // })
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
              console.log(res, 'aaaaaaaa');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLmpzIl0sIm5hbWVzIjpbIlBob3RvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWciLCJhcnIiLCJoZWlnaHQiLCJ3aWR0aCIsImNhbWVyYSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwidXBsb2FkIiwicGljIiwibWV0aG9kcyIsImltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsIndlY2hhdCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsV0FBSyxFQUZBO0FBR0xDLGNBQVEsRUFISDtBQUlMQyxhQUFPLEVBSkY7QUFLTEMsY0FBUSxzQkFMSDtBQU1MQyxnQkFBVSxFQU5MO0FBT0xDLGlCQUFXLEVBUE47QUFRTEMsY0FBUSxFQVJIO0FBU0xDLFdBQUs7QUFUQSxLLFFBV1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU8sQ0FEUSxFQUNMO0FBQ1ZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSztBQUdmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEc7QUFJZkMsaUJBSmUsbUJBSVBDLEdBSk8sRUFJRjtBQUNYLGdCQUFJaEIsTUFBTVUsS0FBS1gsR0FBZjtBQUNBa0Isb0JBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixHQUFyQjtBQUNBLGdCQUFJUCxRQUFRVCxJQUFJbUIsTUFBSixDQUFXSCxJQUFJSSxhQUFmLENBQVo7QUFDQVYsaUJBQUtYLEdBQUwsR0FBV1UsS0FBWDtBQUNBQyxpQkFBS1csT0FBTCxDQUFhO0FBQ1h0QixtQkFBS1U7QUFETSxhQUFiO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFyQmMsU0FBakI7QUF1QkQsT0ExQk87QUEyQlJILFlBM0JRLG9CQTJCQztBQUNQLFlBQUlJLE9BQU8sSUFBWDtBQUNBLHVCQUFLWSxPQUFMLENBQWE7QUFDWEMsZUFBSyx1Q0FETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1gxQixnQkFBTTtBQUNKMkIsb0JBQVFmLEtBQUtOLFFBRFQ7QUFFSkwsaUJBQUtXLEtBQUtYO0FBRk4sV0FISztBQU9YZ0IsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBVFUsU0FBYjtBQVdEO0FBeENPLEs7Ozs7OzZCQTBDRDtBQUNQLFVBQUlOLE9BQU8sSUFBWDtBQUNBLHFCQUFLZ0IsYUFBTCxDQUFtQjtBQUNqQlgsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTixlQUFLVCxNQUFMLEdBQWNlLElBQUlXLFlBQWxCO0FBQ0FqQixlQUFLUixLQUFMLEdBQWFjLElBQUlZLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmZCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTixlQUFLTixRQUFMLEdBQWdCWSxJQUFJYyxRQUFKLENBQWExQixRQUE3QjtBQUNBTSxlQUFLTCxTQUFMLEdBQWlCVyxJQUFJYyxRQUFKLENBQWF6QixTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OzZCQUNRO0FBQ1AsVUFBSUssT0FBTyxJQUFYO0FBQ0EscUJBQUttQixXQUFMLENBQWlCO0FBQ2ZkLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJOLGVBQUtOLFFBQUwsR0FBZ0JZLElBQUljLFFBQUosQ0FBYTFCLFFBQTdCO0FBQ0FNLGVBQUtMLFNBQUwsR0FBaUJXLElBQUljLFFBQUosQ0FBYXpCLFNBQTlCO0FBQ0EseUJBQUtpQixPQUFMLENBQWE7QUFDWEMsaUJBQUssdUNBRE07QUFFWEMsb0JBQVEsTUFGRztBQUdYMUIsa0JBQU07QUFDSjJCLHNCQUFRZixLQUFLTjtBQURULGFBSEs7QUFNWFcscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkMsc0JBQVFDLEdBQVIsQ0FBWUYsR0FBWixFQUFpQixVQUFqQjtBQUNBTixtQkFBS0gsR0FBTCxHQUFXUyxJQUFJbEIsSUFBZjtBQUNBWSxtQkFBS1csT0FBTCxDQUFhO0FBQ1hkLHFCQUFLUyxJQUFJbEI7QUFERSxlQUFiO0FBR0Q7QUFaVSxXQUFiO0FBY0Q7QUFsQmMsT0FBakI7QUFvQkQ7Ozs7RUE5RmdDLGVBQUtpQyxJOztrQkFBbkJwQyxLIiwiZmlsZSI6InBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8gaW1wb3J0IHVwbG9hZCBmcm9tICcuLi91bnRpbHMvdXBsb2FkLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvdG8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eFp+eJh+mbhidcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZzogW10sXG4gICAgYXJyOiAnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBjYW1lcmE6ICcuLi9pbWFnZXMvY2FtZXJhLnBuZycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgdXBsb2FkOiAnJyxcbiAgICBwaWM6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBpbWFnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA5LCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBsZXQgYXJyID0gc2VsZi5pbWdcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVzOiAnLCByZXMpXG4gICAgICAgICAgbGV0IGltYWdlID0gYXJyLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocylcbiAgICAgICAgICBzZWxmLmltZyA9IGltYWdlXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGltZzogaW1hZ2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgICAgLy8gICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvdHdvL3Bob3RvaW5zZXJ0JyxcbiAgICAgICAgICAvLyAgIGZpbGVQYXRoOiBzZWxmLmltZ1swXSxcbiAgICAgICAgICAvLyAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHNlbGYuaW1nKVxuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB1cGxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vcGhvdG9pbnNlcnQnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZSxcbiAgICAgICAgICBpbWc6IHNlbGYuaW1nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vcGhvdG9zZWxlY3QnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICdhYWFhYWFhYScpXG4gICAgICAgICAgICBzZWxmLnBpYyA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICBwaWM6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=