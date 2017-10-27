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
      avatarUrl: ''
    }, _this.methods = {
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
            _wepy2.default.uploadFile({
              url: 'http://127.0.0.1:7001/two/photoinsert',
              filePath: self.img[0],
              name: 'img',
              // data: {
              //   wechat: self.nickName
              // },
              success: function success(res) {
                console.log(res);
              }
            });
          }
        });
      }
      // upload() {
      //   wepy.uploadFile({
      //     url: 'http://127.0.0.1:7001/two/photoinsert',
      //     filePath: self.img[0],
      //     name: 'img',
      //     success: function(res) {
      //       console.log(res)
      //     }
      //   })
      // }

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
  }]);

  return Photo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Photo , 'pages/photo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLmpzIl0sIm5hbWVzIjpbIlBob3RvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWciLCJhcnIiLCJoZWlnaHQiLCJ3aWR0aCIsImNhbWVyYSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwibWV0aG9kcyIsImltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJ1cGxvYWRGaWxlIiwidXJsIiwiZmlsZVBhdGgiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFdBQUssRUFGQTtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsYUFBTyxFQUpGO0FBS0xDLGNBQVEsc0JBTEg7QUFNTEMsZ0JBQVUsRUFOTDtBQU9MQyxpQkFBVztBQVBOLEssUUFTUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQSx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxDQURRLEVBQ0w7QUFDVkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLLEVBRXVCO0FBQ3RDQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEcsRUFHa0I7QUFDakNDLGlCQUplLG1CQUlQQyxHQUpPLEVBSUY7QUFDWCxnQkFBSWQsTUFBTVEsS0FBS1QsR0FBZjtBQUNBLGdCQUFJUSxRQUFRUCxJQUFJZSxNQUFKLENBQVdELElBQUlFLGFBQWYsQ0FBWjtBQUNBUixpQkFBS1QsR0FBTCxHQUFXUSxLQUFYO0FBQ0FDLGlCQUFLUyxPQUFMLENBQWE7QUFDWGxCLG1CQUFLUTtBQURNLGFBQWI7QUFHQSwyQkFBS1csVUFBTCxDQUFnQjtBQUNkQyxtQkFBSyx1Q0FEUztBQUVkQyx3QkFBVVosS0FBS1QsR0FBTCxDQUFTLENBQVQsQ0FGSTtBQUdkc0Isb0JBQU0sS0FIUTtBQUlkO0FBQ0E7QUFDQTtBQUNBUix1QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUSx3QkFBUUMsR0FBUixDQUFZVCxHQUFaO0FBQ0Q7QUFUYSxhQUFoQjtBQVdEO0FBdEJjLFNBQWpCO0FBd0JEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBckNRLEs7Ozs7OzZCQXVDRDtBQUNQLFVBQUlOLE9BQU8sSUFBWDtBQUNBLHFCQUFLZ0IsYUFBTCxDQUFtQjtBQUNqQlgsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTixlQUFLUCxNQUFMLEdBQWNhLElBQUlXLFlBQWxCO0FBQ0FqQixlQUFLTixLQUFMLEdBQWFZLElBQUlZLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmZCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTixlQUFLSixRQUFMLEdBQWdCVSxJQUFJYyxRQUFKLENBQWF4QixRQUE3QjtBQUNBSSxlQUFLSCxTQUFMLEdBQWlCUyxJQUFJYyxRQUFKLENBQWF2QixTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQWxFZ0MsZUFBS3dCLEk7O2tCQUFuQmxDLEsiLCJmaWxlIjoicGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaG90byBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54Wn54mH6ZuGJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaW1nOiBbXSxcbiAgICBhcnI6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGNhbWVyYTogJy4uL2ltYWdlcy9jYW1lcmEucG5nJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaW1hZ2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogOSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBsZXQgYXJyID0gc2VsZi5pbWdcbiAgICAgICAgICBsZXQgaW1hZ2UgPSBhcnIuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKVxuICAgICAgICAgIHNlbGYuaW1nID0gaW1hZ2VcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgaW1nOiBpbWFnZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vcGhvdG9pbnNlcnQnLFxuICAgICAgICAgICAgZmlsZVBhdGg6IHNlbGYuaW1nWzBdLFxuICAgICAgICAgICAgbmFtZTogJ2ltZycsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8gdXBsb2FkKCkge1xuICAgIC8vICAgd2VweS51cGxvYWRGaWxlKHtcbiAgICAvLyAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3R3by9waG90b2luc2VydCcsXG4gICAgLy8gICAgIGZpbGVQYXRoOiBzZWxmLmltZ1swXSxcbiAgICAvLyAgICAgbmFtZTogJ2ltZycsXG4gICAgLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=