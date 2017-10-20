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

var Memory = function (_wepy$page) {
  _inherits(Memory, _wepy$page);

  function Memory() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Memory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Memory.__proto__ || Object.getPrototypeOf(Memory)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '回忆集'
    }, _this.data = {
      src: '',
      height: '',
      width: '',
      add: '../images/add.png',
      img: [],
      arr: ''
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
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Memory, [{
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

  return Memory;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Memory , 'pages/memory'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbW9yeS5qcyJdLCJuYW1lcyI6WyJNZW1vcnkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWRkIiwiaW1nIiwiYXJyIiwibWV0aG9kcyIsImltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsV0FBSyxtQkFKQTtBQUtMQyxXQUFLLEVBTEE7QUFNTEMsV0FBSztBQU5BLEssUUFRUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQSx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxDQURRLEVBQ0w7QUFDVkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLLEVBRXVCO0FBQ3RDQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEcsRUFHa0I7QUFDakNDLGlCQUplLG1CQUlQQyxHQUpPLEVBSUY7QUFDWCxnQkFBSVQsTUFBTUcsS0FBS0osR0FBZjtBQUNBLGdCQUFJRyxRQUFRRixJQUFJVSxNQUFKLENBQVdELElBQUlFLGFBQWYsQ0FBWjtBQUNBUixpQkFBS0osR0FBTCxHQUFXRyxLQUFYO0FBQ0FDLGlCQUFLUyxPQUFMLENBQWE7QUFDWGIsbUJBQUtHO0FBRE0sYUFBYjtBQUdEO0FBWGMsU0FBakI7QUFhRDtBQWhCTyxLOzs7Ozs2QkFrQkQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS1UsYUFBTCxDQUFtQjtBQUNqQkwsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTixlQUFLUCxNQUFMLEdBQWNhLElBQUlLLFlBQWxCO0FBQ0FYLGVBQUtOLEtBQUwsR0FBYVksSUFBSU0sV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBdENpQyxlQUFLQyxJOztrQkFBcEJ6QixNIiwiZmlsZSI6Im1lbW9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbW9yeSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zue5b+G6ZuGJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBhZGQ6ICcuLi9pbWFnZXMvYWRkLnBuZycsXG4gICAgaW1nOiBbXSxcbiAgICBhcnI6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBpbWFnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA5LCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGxldCBhcnIgPSBzZWxmLmltZ1xuICAgICAgICAgIGxldCBpbWFnZSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgc2VsZi5pbWcgPSBpbWFnZVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbWc6IGltYWdlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==