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
      upload: ''
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
            _wepy2.default.uploadFile({
              url: 'http://127.0.0.1:7001/two/photoinsert',
              filePath: self.img[0],
              name: 'file',
              success: function success(res) {
                console.log(res);
                console.log(self.img);
              }
            });
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
      // self.upload = require('./../../untils/upload.js')
    }
  }]);

  return Photo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Photo , 'pages/photo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLmpzIl0sIm5hbWVzIjpbIlBob3RvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWciLCJhcnIiLCJoZWlnaHQiLCJ3aWR0aCIsImNhbWVyYSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwidXBsb2FkIiwibWV0aG9kcyIsImltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwidXBsb2FkRmlsZSIsInVybCIsImZpbGVQYXRoIiwibmFtZSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsV0FBSyxFQUZBO0FBR0xDLGNBQVEsRUFISDtBQUlMQyxhQUFPLEVBSkY7QUFLTEMsY0FBUSxzQkFMSDtBQU1MQyxnQkFBVSxFQU5MO0FBT0xDLGlCQUFXLEVBUE47QUFRTEMsY0FBUTtBQVJILEssUUFVUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQSx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxDQURRLEVBQ0w7QUFDVkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLO0FBR2ZDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRztBQUlmQyxpQkFKZSxtQkFJUEMsR0FKTyxFQUlGO0FBQ1gsZ0JBQUlmLE1BQU1TLEtBQUtWLEdBQWY7QUFDQWlCLG9CQUFRQyxHQUFSLENBQVksT0FBWixFQUFxQkYsR0FBckI7QUFDQSxnQkFBSVAsUUFBUVIsSUFBSWtCLE1BQUosQ0FBV0gsSUFBSUksYUFBZixDQUFaO0FBQ0FWLGlCQUFLVixHQUFMLEdBQVdTLEtBQVg7QUFDQUMsaUJBQUtXLE9BQUwsQ0FBYTtBQUNYckIsbUJBQUtTO0FBRE0sYUFBYjtBQUdBLDJCQUFLYSxVQUFMLENBQWdCO0FBQ2RDLG1CQUFLLHVDQURTO0FBRWRDLHdCQUFVZCxLQUFLVixHQUFMLENBQVMsQ0FBVCxDQUZJO0FBR2R5QixvQkFBTSxNQUhRO0FBSWRWLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJDLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWVIsS0FBS1YsR0FBakI7QUFDRDtBQVBhLGFBQWhCO0FBU0Q7QUFyQmMsU0FBakI7QUF1QkQ7QUExQk8sSzs7Ozs7NkJBNEJEO0FBQ1AsVUFBSVUsT0FBTyxJQUFYO0FBQ0EscUJBQUtnQixhQUFMLENBQW1CO0FBQ2pCWCxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hOLGVBQUtSLE1BQUwsR0FBY2MsSUFBSVcsWUFBbEI7QUFDQWpCLGVBQUtQLEtBQUwsR0FBYWEsSUFBSVksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZkLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJOLGVBQUtMLFFBQUwsR0FBZ0JXLElBQUljLFFBQUosQ0FBYXpCLFFBQTdCO0FBQ0FLLGVBQUtKLFNBQUwsR0FBaUJVLElBQUljLFFBQUosQ0FBYXhCLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1BO0FBQ0Q7Ozs7RUF6RGdDLGVBQUt5QixJOztrQkFBbkJuQyxLIiwiZmlsZSI6InBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8gaW1wb3J0IHVwbG9hZCBmcm9tICcuLi91bnRpbHMvdXBsb2FkLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvdG8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eFp+eJh+mbhidcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZzogW10sXG4gICAgYXJyOiAnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBjYW1lcmE6ICcuLi9pbWFnZXMvY2FtZXJhLnBuZycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgdXBsb2FkOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaW1hZ2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogOSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgbGV0IGFyciA9IHNlbGYuaW1nXG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlczogJywgcmVzKVxuICAgICAgICAgIGxldCBpbWFnZSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgc2VsZi5pbWcgPSBpbWFnZVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbWc6IGltYWdlXG4gICAgICAgICAgfSlcbiAgICAgICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3R3by9waG90b2luc2VydCcsXG4gICAgICAgICAgICBmaWxlUGF0aDogc2VsZi5pbWdbMF0sXG4gICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmltZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gICAgLy8gc2VsZi51cGxvYWQgPSByZXF1aXJlKCcuLi8uLi91bnRpbHMvdXBsb2FkLmpzJylcbiAgfVxufVxuIl19