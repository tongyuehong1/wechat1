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
      firstdisplay: ['../image/nuts.jpg', '../image/beauty.jpg'],
      firsttitle: ['三只松鼠坚果大礼包 活力橙 夏威夷果 巴旦木 蟹香瓜子仁儿', 'cache秋冬季新款服饰新品']
    }, _this.methods = {
      next: function next() {
        _wepy2.default.navigateTo({
          url: './next'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaXJzdGljb25zIiwic2Vjb25kaWNvbnMiLCJmaXJzdHdvcmQiLCJmaXJzdGRpc3BsYXkiLCJmaXJzdHRpdGxlIiwibWV0aG9kcyIsIm5leHQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFdBQUssQ0FDSCxxQkFERyxFQUVILHFCQUZHLEVBR0gsb0JBSEcsRUFJSCxvQkFKRyxFQUtILG9CQUxHLENBRkE7QUFTTEMsY0FBUSxFQVRIO0FBVUxDLGFBQU8sRUFWRjtBQVdMQyxrQkFBWSxDQUNWLG9CQURVLEVBRVYsbUJBRlUsRUFHVixvQkFIVSxFQUlWLHFCQUpVLENBWFA7QUFpQkxDLG1CQUFhLENBQ1gsb0JBRFcsRUFFWCxtQkFGVyxFQUdYLG9CQUhXLEVBSVgscUJBSlcsQ0FqQlI7QUF1QkxDLGlCQUFXLENBQ1QsSUFEUyxFQUVULElBRlMsRUFHVCxJQUhTLEVBSVQsS0FKUyxDQXZCTjtBQTZCTEMsb0JBQWMsQ0FDWixtQkFEWSxFQUVaLHFCQUZZLENBN0JUO0FBaUNMQyxrQkFBWSxDQUNWLCtCQURVLEVBRVYsZ0JBRlU7QUFqQ1AsSyxRQXNDUEMsTyxHQUFVO0FBQ1JDLFVBRFEsa0JBQ0Q7QUFDTCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQU9EO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS1gsTUFBTCxHQUFjYyxJQUFJQyxZQUFsQjtBQUNBSixlQUFLVixLQUFMLEdBQWFhLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXpEK0IsZUFBS0MsSTs7a0JBQWxCdkIsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP56iL5bqPJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBpbWc6IFtcbiAgICAgICcuLi9pbWFnZS9mZmlyc3QuanBnJyxcbiAgICAgICcuLi9pbWFnZS9zZWNvbmQuanBnJyxcbiAgICAgICcuLi9pbWFnZS90aGlyZC5qcGcnLFxuICAgICAgJy4uL2ltYWdlL2ZvcnRoLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvZmlmdGguanBnJ1xuICAgIF0sXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgZmlyc3RpY29uczogW1xuICAgICAgJy4uL2ltYWdlL2ZydWl0LmpwZycsXG4gICAgICAnLi4vaW1hZ2UvbnV0cy5qcGcnLFxuICAgICAgJy4uL2ltYWdlL2Nsb3RoLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvYmVhdXR5LmpwZydcbiAgICBdLFxuICAgIHNlY29uZGljb25zOiBbXG4gICAgICAnLi4vaW1hZ2UvZnJ1aXQuanBnJyxcbiAgICAgICcuLi9pbWFnZS9udXRzLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvY2xvdGguanBnJyxcbiAgICAgICcuLi9pbWFnZS9iZWF1dHkuanBnJ1xuICAgIF0sXG4gICAgZmlyc3R3b3JkOiBbXG4gICAgICAn5rC05p6cJyxcbiAgICAgICflnZrmnpwnLFxuICAgICAgJ+acjemlsCcsXG4gICAgICAn5YyW5aaG5ZOBJ1xuICAgIF0sXG4gICAgZmlyc3RkaXNwbGF5OiBbXG4gICAgICAnLi4vaW1hZ2UvbnV0cy5qcGcnLFxuICAgICAgJy4uL2ltYWdlL2JlYXV0eS5qcGcnXG4gICAgXSxcbiAgICBmaXJzdHRpdGxlOiBbXG4gICAgICAn5LiJ5Y+q5p2+6byg5Z2a5p6c5aSn56S85YyFIOa0u+WKm+apmSDlpI/lqIHlpLfmnpwg5be05pem5pyoIOifuemmmeeTnOWtkOS7geWEvycsXG4gICAgICAnY2FjaGXnp4vlhqzlraPmlrDmrL7mnI3ppbDmlrDlk4EnXG4gICAgXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbmV4dCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbmV4dCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=