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

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小程序'
    }, _this.data = {
      src: '',
      img: ['../image/ffirst.jpg', '../image/second.jpg', '../image/third.jpg', '../image/forth.jpg', '../image/fifth.jpg'],
      height: '',
      width: '',
      firsticons: ['../image/fruit.jpg', '../image/nuts.jpg', '../image/cloth.jpg', '../image/beauty.jpg'],
      secondicons: ['../image/fruit.jpg', '../image/nuts.jpg', '../image/cloth.jpg', '../image/beauty.jpg'],
      firstword: ['水果', '坚果', '服饰', '化妆品'],
      firstdisplay: ['../image/nuts.jpg', '../image/beauty.jpg']
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
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

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaXJzdGljb25zIiwic2Vjb25kaWNvbnMiLCJmaXJzdHdvcmQiLCJmaXJzdGRpc3BsYXkiLCJtZXRob2RzIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFdBQUssQ0FDSCxxQkFERyxFQUVILHFCQUZHLEVBR0gsb0JBSEcsRUFJSCxvQkFKRyxFQUtILG9CQUxHLENBRkE7QUFTTEMsY0FBUSxFQVRIO0FBVUxDLGFBQU8sRUFWRjtBQVdMQyxrQkFBWSxDQUNWLG9CQURVLEVBRVYsbUJBRlUsRUFHVixvQkFIVSxFQUlWLHFCQUpVLENBWFA7QUFpQkxDLG1CQUFhLENBQ1gsb0JBRFcsRUFFWCxtQkFGVyxFQUdYLG9CQUhXLEVBSVgscUJBSlcsQ0FqQlI7QUF1QkxDLGlCQUFXLENBQ1QsSUFEUyxFQUVULElBRlMsRUFHVCxJQUhTLEVBSVQsS0FKUyxDQXZCTjtBQTZCTEMsb0JBQWMsQ0FDWixtQkFEWSxFQUVaLHFCQUZZO0FBN0JULEssUUFrQ1BDLE8sR0FBVSxFOzs7Ozs2QkFFRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtQLE1BQUwsR0FBY1UsSUFBSUMsWUFBbEI7QUFDQUosZUFBS04sS0FBTCxHQUFhUyxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFoRCtCLGVBQUtDLEk7O2tCQUFsQm5CLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+eoi+W6jydcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaW1nOiBbXG4gICAgICAnLi4vaW1hZ2UvZmZpcnN0LmpwZycsXG4gICAgICAnLi4vaW1hZ2Uvc2Vjb25kLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvdGhpcmQuanBnJyxcbiAgICAgICcuLi9pbWFnZS9mb3J0aC5qcGcnLFxuICAgICAgJy4uL2ltYWdlL2ZpZnRoLmpwZydcbiAgICBdLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGZpcnN0aWNvbnM6IFtcbiAgICAgICcuLi9pbWFnZS9mcnVpdC5qcGcnLFxuICAgICAgJy4uL2ltYWdlL251dHMuanBnJyxcbiAgICAgICcuLi9pbWFnZS9jbG90aC5qcGcnLFxuICAgICAgJy4uL2ltYWdlL2JlYXV0eS5qcGcnXG4gICAgXSxcbiAgICBzZWNvbmRpY29uczogW1xuICAgICAgJy4uL2ltYWdlL2ZydWl0LmpwZycsXG4gICAgICAnLi4vaW1hZ2UvbnV0cy5qcGcnLFxuICAgICAgJy4uL2ltYWdlL2Nsb3RoLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvYmVhdXR5LmpwZydcbiAgICBdLFxuICAgIGZpcnN0d29yZDogW1xuICAgICAgJ+awtOaenCcsXG4gICAgICAn5Z2a5p6cJyxcbiAgICAgICfmnI3ppbAnLFxuICAgICAgJ+WMluWmhuWTgSdcbiAgICBdLFxuICAgIGZpcnN0ZGlzcGxheTogW1xuICAgICAgJy4uL2ltYWdlL251dHMuanBnJyxcbiAgICAgICcuLi9pbWFnZS9iZWF1dHkuanBnJ1xuICAgIF1cbiAgfVxuICBtZXRob2RzID0ge1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=