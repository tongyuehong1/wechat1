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
      camera: '../images/camera.png'
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
              success: function success(res) {
                console.log(res);
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
    }
  }]);

  return Photo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Photo , 'pages/photo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLmpzIl0sIm5hbWVzIjpbIlBob3RvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWciLCJhcnIiLCJoZWlnaHQiLCJ3aWR0aCIsImNhbWVyYSIsIm1ldGhvZHMiLCJpbWFnZSIsInNlbGYiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwidXBsb2FkRmlsZSIsInVybCIsImZpbGVQYXRoIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFdBQUssRUFGQTtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsYUFBTyxFQUpGO0FBS0xDLGNBQVE7QUFMSCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU8sQ0FEUSxFQUNMO0FBQ1ZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSyxFQUV1QjtBQUN0Q0Msc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHLEVBR2tCO0FBQ2pDQyxpQkFKZSxtQkFJUEMsR0FKTyxFQUlGO0FBQ1gsZ0JBQUlaLE1BQU1NLEtBQUtQLEdBQWY7QUFDQSxnQkFBSU0sUUFBUUwsSUFBSWEsTUFBSixDQUFXRCxJQUFJRSxhQUFmLENBQVo7QUFDQVIsaUJBQUtQLEdBQUwsR0FBV00sS0FBWDtBQUNBQyxpQkFBS1MsT0FBTCxDQUFhO0FBQ1hoQixtQkFBS007QUFETSxhQUFiO0FBR0EsMkJBQUtXLFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUssdUNBRFM7QUFFZEMsd0JBQVVaLEtBQUtQLEdBQUwsQ0FBUyxDQUFULENBRkk7QUFHZG9CLG9CQUFNLEtBSFE7QUFJZFIsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlEsd0JBQVFDLEdBQVIsQ0FBWVQsR0FBWjtBQUNEO0FBTmEsYUFBaEI7QUFRRDtBQW5CYyxTQUFqQjtBQXFCRDtBQXhCTyxLOzs7Ozs2QkEwQkQ7QUFDUCxVQUFJTixPQUFPLElBQVg7QUFDQSxxQkFBS2dCLGFBQUwsQ0FBbUI7QUFDakJYLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWE4sZUFBS0wsTUFBTCxHQUFjVyxJQUFJVyxZQUFsQjtBQUNBakIsZUFBS0osS0FBTCxHQUFhVSxJQUFJWSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUE3Q2dDLGVBQUtDLEk7O2tCQUFuQjlCLEsiLCJmaWxlIjoicGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaG90byBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54Wn54mH6ZuGJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaW1nOiBbXSxcbiAgICBhcnI6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGNhbWVyYTogJy4uL2ltYWdlcy9jYW1lcmEucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaW1hZ2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogOSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBsZXQgYXJyID0gc2VsZi5pbWdcbiAgICAgICAgICBsZXQgaW1hZ2UgPSBhcnIuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKVxuICAgICAgICAgIHNlbGYuaW1nID0gaW1hZ2VcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgaW1nOiBpbWFnZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vcGhvdG9pbnNlcnQnLFxuICAgICAgICAgICAgZmlsZVBhdGg6IHNlbGYuaW1nWzBdLFxuICAgICAgICAgICAgbmFtZTogJ2ltZycsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=