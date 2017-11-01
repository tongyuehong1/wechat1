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
      firstcolor: '#f4f5f7',
      secondcolor: '#f4f5f7',
      thirdcolor: '#f4f5f7',
      forthcolor: '#f4f5f7',
      fifthcolor: '#f4f5f7',
      sixthcolor: '#f4f5f7',
      search: '../image/search.png',
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
          url: './fruit?image=' + item.photo + '&title=' + item.title + '&price=' + item.price + '&num=' + item.num
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiZmlyc3Rjb2xvciIsInNlY29uZGNvbG9yIiwidGhpcmRjb2xvciIsImZvcnRoY29sb3IiLCJmaWZ0aGNvbG9yIiwic2l4dGhjb2xvciIsInNlYXJjaCIsImltZyIsImhlaWdodCIsIndpZHRoIiwiZmlyc3RpY29ucyIsInNlY29uZGljb25zIiwiZGlzcGxheSIsInBob3RvIiwidGl0bGUiLCJjb250ZW50IiwiZmlyc3R3b3JkIiwibWV0aG9kcyIsIm5leHQiLCJlIiwic2VsZiIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwcmljZSIsIm51bSIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsa0JBQVksU0FGUDtBQUdMQyxtQkFBYSxTQUhSO0FBSUxDLGtCQUFZLFNBSlA7QUFLTEMsa0JBQVksU0FMUDtBQU1MQyxrQkFBWSxTQU5QO0FBT0xDLGtCQUFZLFNBUFA7QUFRTEMsY0FBUSxxQkFSSDtBQVNMQyxXQUFLLENBQ0gscUJBREcsRUFFSCxxQkFGRyxFQUdILG9CQUhHLEVBSUgsb0JBSkcsRUFLSCxvQkFMRyxDQVRBO0FBZ0JMQyxjQUFRLEVBaEJIO0FBaUJMQyxhQUFPLEVBakJGO0FBa0JMQyxrQkFBWSxDQUNWLG9CQURVLEVBRVYsbUJBRlUsRUFHVixvQkFIVSxFQUlWLHFCQUpVLENBbEJQO0FBd0JMQyxtQkFBYSxDQUNYLG9CQURXLEVBRVgsbUJBRlcsRUFHWCxvQkFIVyxFQUlYLHFCQUpXLENBeEJSO0FBOEJMQyxlQUFTLENBQ1AsRUFBQ0MsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxJQUF2RixFQURPLEVBRVAsRUFBQ0QsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxLQUF2RixFQUZPLEVBR1AsRUFBQ0QsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxLQUF2RixFQUhPLEVBSVAsRUFBQ0QsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxLQUF2RixFQUpPLENBOUJKO0FBb0NMQyxlQUFTLElBcENKO0FBcUNMQyxpQkFBVyxDQUNULElBRFMsRUFFVCxJQUZTLEVBR1QsSUFIUyxFQUlULEtBSlM7QUFyQ04sSyxRQTRDUEMsTyxHQUFVO0FBQ1JDLFVBRFEsZ0JBQ0hDLENBREcsRUFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtMLE9BQUwsQ0FBYUksRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXJDLENBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWVAsQ0FBWjtBQUNBLHVCQUFLUSxVQUFMLENBQWdCO0FBQ2RDLGtDQUFzQlAsS0FBS1IsS0FBM0IsZUFBMENRLEtBQUtQLEtBQS9DLGVBQThETyxLQUFLUSxLQUFuRSxhQUFnRlIsS0FBS1M7QUFEdkUsU0FBaEI7QUFHRDtBQVJPLEs7Ozs7OzZCQVVEO0FBQ1AsVUFBSVYsT0FBTyxJQUFYO0FBQ0FBLFdBQUtMLE9BQUw7QUFDQVUsY0FBUUMsR0FBUixDQUFZTixLQUFLTCxPQUFqQjtBQUNBLHFCQUFLZ0IsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYYixlQUFLWixNQUFMLEdBQWN5QixJQUFJQyxZQUFsQjtBQUNBZCxlQUFLWCxLQUFMLEdBQWF3QixJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFwRStCLGVBQUtDLEk7O2tCQUFsQnpDLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgY29udGVudCBmcm9tICcuLi91bnRpbHMvY29udGVudC5qcydcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+eoi+W6jydcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNyYzogJycsXG4gICAgICBmaXJzdGNvbG9yOiAnI2Y0ZjVmNycsXG4gICAgICBzZWNvbmRjb2xvcjogJyNmNGY1ZjcnLFxuICAgICAgdGhpcmRjb2xvcjogJyNmNGY1ZjcnLFxuICAgICAgZm9ydGhjb2xvcjogJyNmNGY1ZjcnLFxuICAgICAgZmlmdGhjb2xvcjogJyNmNGY1ZjcnLFxuICAgICAgc2l4dGhjb2xvcjogJyNmNGY1ZjcnLFxuICAgICAgc2VhcmNoOiAnLi4vaW1hZ2Uvc2VhcmNoLnBuZycsXG4gICAgICBpbWc6IFtcbiAgICAgICAgJy4uL2ltYWdlL2ZmaXJzdC5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2Uvc2Vjb25kLmpwZycsXG4gICAgICAgICcuLi9pbWFnZS90aGlyZC5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2UvZm9ydGguanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL2ZpZnRoLmpwZydcbiAgICAgIF0sXG4gICAgICBoZWlnaHQ6ICcnLFxuICAgICAgd2lkdGg6ICcnLFxuICAgICAgZmlyc3RpY29uczogW1xuICAgICAgICAnLi4vaW1hZ2UvZnJ1aXQuanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL251dHMuanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL2Nsb3RoLmpwZycsXG4gICAgICAgICcuLi9pbWFnZS9iZWF1dHkuanBnJ1xuICAgICAgXSxcbiAgICAgIHNlY29uZGljb25zOiBbXG4gICAgICAgICcuLi9pbWFnZS9mcnVpdC5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2UvbnV0cy5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2UvY2xvdGguanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL2JlYXV0eS5qcGcnXG4gICAgICBdLFxuICAgICAgZGlzcGxheTogW1xuICAgICAgICB7cGhvdG86ICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT04NTAxMTk3OTMsNDI0OTc1MDc1NiZmbT0yNyZncD0wLmpwZycsIHRpdGxlOiAn5rC05p6cJ30sXG4gICAgICAgIHtwaG90bzogJ2h0dHA6Ly9pbWc1LmltZ3RuLmJkaW1nLmNvbS9pdC91PTQxMjAyNzAxNjIsNTE2MDk1MjMxJmZtPTI3JmdwPTAuanBnJywgdGl0bGU6ICfmsLTmnpwyJ30sXG4gICAgICAgIHtwaG90bzogJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTEyMDc5MTI1ODAsNjM0ODg3Mjc1JmZtPTI3JmdwPTAuanBnJywgdGl0bGU6ICfmsLTmnpwzJ30sXG4gICAgICAgIHtwaG90bzogJ2h0dHA6Ly9pbWc1LmltZ3RuLmJkaW1nLmNvbS9pdC91PTIyMjkwOTk3NDksNjExNTUwNDAyJmZtPTI3JmdwPTAuanBnJywgdGl0bGU6ICfmsLTmnpw0J31cbiAgICAgIF0sXG4gICAgICBjb250ZW50OiBudWxsLFxuICAgICAgZmlyc3R3b3JkOiBbXG4gICAgICAgICfmsLTmnpwnLFxuICAgICAgICAn5Z2a5p6cJyxcbiAgICAgICAgJ+acjemlsCcsXG4gICAgICAgICfljJblpoblk4EnXG4gICAgICBdXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBuZXh0KGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBpdGVtID0gc2VsZi5jb250ZW50W2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC4vZnJ1aXQ/aW1hZ2U9JHtpdGVtLnBob3RvfSZ0aXRsZT0ke2l0ZW0udGl0bGV9JnByaWNlPSR7aXRlbS5wcmljZX0mbnVtPSR7aXRlbS5udW19YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29udGVudCA9IGNvbnRlbnRcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY29udGVudClcbiAgICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19