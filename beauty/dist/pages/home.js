'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _content = require('./../untils/content.js');

var _content2 = _interopRequireDefault(_content);

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
      display: [{ photo: 'http://img1.imgtn.bdimg.com/it/u=850119793,4249750756&fm=27&gp=0.jpg', title: '水果' }, { photo: 'http://img5.imgtn.bdimg.com/it/u=4120270162,516095231&fm=27&gp=0.jpg', title: '水果2' }, { photo: 'http://img1.imgtn.bdimg.com/it/u=1207912580,634887275&fm=27&gp=0.jpg', title: '水果3' }, { photo: 'http://img5.imgtn.bdimg.com/it/u=2229099749,611550402&fm=27&gp=0.jpg', title: '水果4' }],
      content: null,
      firstword: ['水果', '坚果', '服饰', '化妆品']
    }, _this.methods = {
      next: function next(e) {
        var self = this;
        var item = self.content[e.currentTarget.dataset.index];
        console.log(e);
        _wepy2.default.navigateTo({
          url: './fruit?image=' + item.photo + '&title=' + item.title + '&price=' + item.price
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _content2.default;
      console.log(self.content);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaXJzdGljb25zIiwic2Vjb25kaWNvbnMiLCJkaXNwbGF5IiwicGhvdG8iLCJ0aXRsZSIsImNvbnRlbnQiLCJmaXJzdHdvcmQiLCJtZXRob2RzIiwibmV4dCIsImUiLCJzZWxmIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGVUbyIsInVybCIsInByaWNlIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxXQUFLLENBQ0gscUJBREcsRUFFSCxxQkFGRyxFQUdILG9CQUhHLEVBSUgsb0JBSkcsRUFLSCxvQkFMRyxDQUZBO0FBU0xDLGNBQVEsRUFUSDtBQVVMQyxhQUFPLEVBVkY7QUFXTEMsa0JBQVksQ0FDVixvQkFEVSxFQUVWLG1CQUZVLEVBR1Ysb0JBSFUsRUFJVixxQkFKVSxDQVhQO0FBaUJMQyxtQkFBYSxDQUNYLG9CQURXLEVBRVgsbUJBRlcsRUFHWCxvQkFIVyxFQUlYLHFCQUpXLENBakJSO0FBdUJMQyxlQUFTLENBQ1AsRUFBQ0MsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxJQUF2RixFQURPLEVBRVAsRUFBQ0QsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxLQUF2RixFQUZPLEVBR1AsRUFBQ0QsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxLQUF2RixFQUhPLEVBSVAsRUFBQ0QsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxLQUF2RixFQUpPLENBdkJKO0FBNkJMQyxlQUFTLElBN0JKO0FBOEJMQyxpQkFBVyxDQUNULElBRFMsRUFFVCxJQUZTLEVBR1QsSUFIUyxFQUlULEtBSlM7QUE5Qk4sSyxRQXFDUEMsTyxHQUFVO0FBQ1JDLFVBRFEsZ0JBQ0hDLENBREcsRUFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtMLE9BQUwsQ0FBYUksRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXJDLENBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWVAsQ0FBWjtBQUNBLHVCQUFLUSxVQUFMLENBQWdCO0FBQ2RDLGtDQUFzQlAsS0FBS1IsS0FBM0IsZUFBMENRLEtBQUtQLEtBQS9DLGVBQThETyxLQUFLUTtBQURyRCxTQUFoQjtBQUdEO0FBUk8sSzs7Ozs7NkJBVUQ7QUFDUCxVQUFJVCxPQUFPLElBQVg7QUFDQUEsV0FBS0wsT0FBTDtBQUNBVSxjQUFRQyxHQUFSLENBQVlOLEtBQUtMLE9BQWpCO0FBQ0EscUJBQUtlLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFosZUFBS1osTUFBTCxHQUFjd0IsSUFBSUMsWUFBbEI7QUFDQWIsZUFBS1gsS0FBTCxHQUFhdUIsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBN0QrQixlQUFLQyxJOztrQkFBbEJqQyxJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdW50aWxzL2NvbnRlbnQuanMnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/nqIvluo8nXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzcmM6ICcnLFxuICAgICAgaW1nOiBbXG4gICAgICAgICcuLi9pbWFnZS9mZmlyc3QuanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL3NlY29uZC5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2UvdGhpcmQuanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL2ZvcnRoLmpwZycsXG4gICAgICAgICcuLi9pbWFnZS9maWZ0aC5qcGcnXG4gICAgICBdLFxuICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgIHdpZHRoOiAnJyxcbiAgICAgIGZpcnN0aWNvbnM6IFtcbiAgICAgICAgJy4uL2ltYWdlL2ZydWl0LmpwZycsXG4gICAgICAgICcuLi9pbWFnZS9udXRzLmpwZycsXG4gICAgICAgICcuLi9pbWFnZS9jbG90aC5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2UvYmVhdXR5LmpwZydcbiAgICAgIF0sXG4gICAgICBzZWNvbmRpY29uczogW1xuICAgICAgICAnLi4vaW1hZ2UvZnJ1aXQuanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL251dHMuanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL2Nsb3RoLmpwZycsXG4gICAgICAgICcuLi9pbWFnZS9iZWF1dHkuanBnJ1xuICAgICAgXSxcbiAgICAgIGRpc3BsYXk6IFtcbiAgICAgICAge3Bob3RvOiAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9ODUwMTE5NzkzLDQyNDk3NTA3NTYmZm09MjcmZ3A9MC5qcGcnLCB0aXRsZTogJ+awtOaenCd9LFxuICAgICAgICB7cGhvdG86ICdodHRwOi8vaW1nNS5pbWd0bi5iZGltZy5jb20vaXQvdT00MTIwMjcwMTYyLDUxNjA5NTIzMSZmbT0yNyZncD0wLmpwZycsIHRpdGxlOiAn5rC05p6cMid9LFxuICAgICAgICB7cGhvdG86ICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT0xMjA3OTEyNTgwLDYzNDg4NzI3NSZmbT0yNyZncD0wLmpwZycsIHRpdGxlOiAn5rC05p6cMyd9LFxuICAgICAgICB7cGhvdG86ICdodHRwOi8vaW1nNS5pbWd0bi5iZGltZy5jb20vaXQvdT0yMjI5MDk5NzQ5LDYxMTU1MDQwMiZmbT0yNyZncD0wLmpwZycsIHRpdGxlOiAn5rC05p6cNCd9XG4gICAgICBdLFxuICAgICAgY29udGVudDogbnVsbCxcbiAgICAgIGZpcnN0d29yZDogW1xuICAgICAgICAn5rC05p6cJyxcbiAgICAgICAgJ+WdmuaenCcsXG4gICAgICAgICfmnI3ppbAnLFxuICAgICAgICAn5YyW5aaG5ZOBJ1xuICAgICAgXVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgbmV4dChlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgaXRlbSA9IHNlbGYuY29udGVudFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF1cbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAuL2ZydWl0P2ltYWdlPSR7aXRlbS5waG90b30mdGl0bGU9JHtpdGVtLnRpdGxlfSZwcmljZT0ke2l0ZW0ucHJpY2V9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29udGVudCA9IGNvbnRlbnRcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY29udGVudClcbiAgICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19