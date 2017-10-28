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
      firstword: ['水果', '坚果', '服饰', '化妆品'],
      firstdisplay: ['../image/nuts.jpg', '../image/beauty.jpg'],
      firsttitle: ['三只松鼠坚果大礼包 活力橙 夏威夷果 巴旦木 蟹香瓜子仁儿', 'cache秋冬季新款服饰新品'],
      concent: null
    }, _this.methods = {
      next: function next() {
        var self = this;
        var item = self.content[e.currentTarget.id];
        _wepy2.default.navigateTo({
          url: './fruit?image=' + item.img + '&title=' + item.title
        });
      },
      fruit: function fruit(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        _wepy2.default.navigateTo({
          url: './fruit?image=' + item.img + '&title=' + item.title
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _content2.default;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaXJzdGljb25zIiwic2Vjb25kaWNvbnMiLCJmaXJzdHdvcmQiLCJmaXJzdGRpc3BsYXkiLCJmaXJzdHRpdGxlIiwiY29uY2VudCIsIm1ldGhvZHMiLCJuZXh0Iiwic2VsZiIsIml0ZW0iLCJjb250ZW50IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aXRsZSIsImZydWl0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxXQUFLLENBQ0gscUJBREcsRUFFSCxxQkFGRyxFQUdILG9CQUhHLEVBSUgsb0JBSkcsRUFLSCxvQkFMRyxDQUZBO0FBU0xDLGNBQVEsRUFUSDtBQVVMQyxhQUFPLEVBVkY7QUFXTEMsa0JBQVksQ0FDVixvQkFEVSxFQUVWLG1CQUZVLEVBR1Ysb0JBSFUsRUFJVixxQkFKVSxDQVhQO0FBaUJMQyxtQkFBYSxDQUNYLG9CQURXLEVBRVgsbUJBRlcsRUFHWCxvQkFIVyxFQUlYLHFCQUpXLENBakJSO0FBdUJMQyxpQkFBVyxDQUNULElBRFMsRUFFVCxJQUZTLEVBR1QsSUFIUyxFQUlULEtBSlMsQ0F2Qk47QUE2QkxDLG9CQUFjLENBQ1osbUJBRFksRUFFWixxQkFGWSxDQTdCVDtBQWlDTEMsa0JBQVksQ0FDViwrQkFEVSxFQUVWLGdCQUZVLENBakNQO0FBcUNMQyxlQUFTO0FBckNKLEssUUF1Q1BDLE8sR0FBVTtBQUNSQyxVQURRLGtCQUNEO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0MsWUFBSUMsT0FBT0QsS0FBS0UsT0FBTCxDQUFhQyxFQUFFQyxhQUFGLENBQWdCQyxFQUE3QixDQUFYO0FBQ0EsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsa0NBQXNCTixLQUFLWixHQUEzQixlQUF3Q1ksS0FBS087QUFEL0IsU0FBaEI7QUFHRCxPQVBPO0FBUVJDLFdBUlEsaUJBUUZOLENBUkUsRUFRQztBQUNQLFlBQUlILE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtFLE9BQUwsQ0FBYUMsRUFBRUMsYUFBRixDQUFnQkMsRUFBN0IsQ0FBWDtBQUNBLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGtDQUFzQk4sS0FBS1osR0FBM0IsZUFBd0NZLEtBQUtPO0FBRC9CLFNBQWhCO0FBR0Q7QUFkTyxLOzs7Ozs2QkFnQkQ7QUFDUCxVQUFJUixPQUFPLElBQVg7QUFDQUEsV0FBS0UsT0FBTDtBQUNBLHFCQUFLUSxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1haLGVBQUtWLE1BQUwsR0FBY3NCLElBQUlDLFlBQWxCO0FBQ0FiLGVBQUtULEtBQUwsR0FBYXFCLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXBFK0IsZUFBS0MsSTs7a0JBQWxCL0IsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdW50aWxzL2NvbnRlbnQuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/nqIvluo8nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGltZzogW1xuICAgICAgJy4uL2ltYWdlL2ZmaXJzdC5qcGcnLFxuICAgICAgJy4uL2ltYWdlL3NlY29uZC5qcGcnLFxuICAgICAgJy4uL2ltYWdlL3RoaXJkLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvZm9ydGguanBnJyxcbiAgICAgICcuLi9pbWFnZS9maWZ0aC5qcGcnXG4gICAgXSxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBmaXJzdGljb25zOiBbXG4gICAgICAnLi4vaW1hZ2UvZnJ1aXQuanBnJyxcbiAgICAgICcuLi9pbWFnZS9udXRzLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvY2xvdGguanBnJyxcbiAgICAgICcuLi9pbWFnZS9iZWF1dHkuanBnJ1xuICAgIF0sXG4gICAgc2Vjb25kaWNvbnM6IFtcbiAgICAgICcuLi9pbWFnZS9mcnVpdC5qcGcnLFxuICAgICAgJy4uL2ltYWdlL251dHMuanBnJyxcbiAgICAgICcuLi9pbWFnZS9jbG90aC5qcGcnLFxuICAgICAgJy4uL2ltYWdlL2JlYXV0eS5qcGcnXG4gICAgXSxcbiAgICBmaXJzdHdvcmQ6IFtcbiAgICAgICfmsLTmnpwnLFxuICAgICAgJ+WdmuaenCcsXG4gICAgICAn5pyN6aWwJyxcbiAgICAgICfljJblpoblk4EnXG4gICAgXSxcbiAgICBmaXJzdGRpc3BsYXk6IFtcbiAgICAgICcuLi9pbWFnZS9udXRzLmpwZycsXG4gICAgICAnLi4vaW1hZ2UvYmVhdXR5LmpwZydcbiAgICBdLFxuICAgIGZpcnN0dGl0bGU6IFtcbiAgICAgICfkuInlj6rmnb7pvKDlnZrmnpzlpKfnpLzljIUg5rS75Yqb5qmZIOWkj+WogeWkt+aenCDlt7Tml6bmnKgg6J+56aaZ55Oc5a2Q5LuB5YS/JyxcbiAgICAgICdjYWNoZeeni+WGrOWto+aWsOasvuacjemlsOaWsOWTgSdcbiAgICBdLFxuICAgIGNvbmNlbnQ6IG51bGxcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG5leHQoKSB7XG4gICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGl0ZW0gPSBzZWxmLmNvbnRlbnRbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9mcnVpdD9pbWFnZT0ke2l0ZW0uaW1nfSZ0aXRsZT0ke2l0ZW0udGl0bGV9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIGZydWl0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGl0ZW0gPSBzZWxmLmNvbnRlbnRbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9mcnVpdD9pbWFnZT0ke2l0ZW0uaW1nfSZ0aXRsZT0ke2l0ZW0udGl0bGV9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY29udGVudCA9IGNvbnRlbnRcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=