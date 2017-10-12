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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '陪你度过漫长岁月'
    }, _this.data = {
      images: {
        book: '../images/book.png',
        hearts: '../images/hearts.png',
        two: '../images/two.png'
      }
    }, _this.methods = {
      book: function book() {
        var self = this;
        self.images.book = '../images/booktwo.png';
        self.images.hearts = '../images/hearts.png';
        self.images.two = '../images/two.png';
      },
      hearts: function hearts() {
        var self = this;
        self.images.book = '../images/book.png';
        self.images.hearts = '../images/hearttwo.png';
        self.images.two = '../images/two.png';
      },
      two: function two() {
        var self = this;
        self.images.two = '../images/twotwo.png';
        self.images.book = '../images/book.png';
        self.images.hearts = '../images/hearts.png';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onload',
    value: function onload() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/partner'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRuZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltYWdlcyIsImJvb2siLCJoZWFydHMiLCJ0d28iLCJtZXRob2RzIiwic2VsZiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRO0FBQ05DLGNBQU0sb0JBREE7QUFFTkMsZ0JBQVEsc0JBRkY7QUFHTkMsYUFBSztBQUhDO0FBREgsSyxRQU9QQyxPLEdBQVU7QUFDUkgsVUFEUSxrQkFDRDtBQUNMLFlBQUlJLE9BQU8sSUFBWDtBQUNBQSxhQUFLTCxNQUFMLENBQVlDLElBQVosR0FBbUIsdUJBQW5CO0FBQ0FJLGFBQUtMLE1BQUwsQ0FBWUUsTUFBWixHQUFxQixzQkFBckI7QUFDQUcsYUFBS0wsTUFBTCxDQUFZRyxHQUFaLEdBQWtCLG1CQUFsQjtBQUNELE9BTk87QUFPUkQsWUFQUSxvQkFPQztBQUNQLFlBQUlHLE9BQU8sSUFBWDtBQUNBQSxhQUFLTCxNQUFMLENBQVlDLElBQVosR0FBbUIsb0JBQW5CO0FBQ0FJLGFBQUtMLE1BQUwsQ0FBWUUsTUFBWixHQUFxQix3QkFBckI7QUFDQUcsYUFBS0wsTUFBTCxDQUFZRyxHQUFaLEdBQWtCLG1CQUFsQjtBQUNELE9BWk87QUFhUkEsU0FiUSxpQkFhRjtBQUNKLFlBQUlFLE9BQU8sSUFBWDtBQUNBQSxhQUFLTCxNQUFMLENBQVlHLEdBQVosR0FBa0Isc0JBQWxCO0FBQ0FFLGFBQUtMLE1BQUwsQ0FBWUMsSUFBWixHQUFtQixvQkFBbkI7QUFDQUksYUFBS0wsTUFBTCxDQUFZRSxNQUFaLEdBQXFCLHNCQUFyQjtBQUNEO0FBbEJPLEs7Ozs7OzZCQW9CRCxDQUFHOzs7O0VBL0JxQixlQUFLSSxJOztrQkFBbkJWLEsiLCJmaWxlIjoicGFydG5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpmarkvaDluqbov4fmvKvplb/lsoHmnIgnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbWFnZXM6IHtcbiAgICAgIGJvb2s6ICcuLi9pbWFnZXMvYm9vay5wbmcnLFxuICAgICAgaGVhcnRzOiAnLi4vaW1hZ2VzL2hlYXJ0cy5wbmcnLFxuICAgICAgdHdvOiAnLi4vaW1hZ2VzL3R3by5wbmcnXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYm9vaygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5pbWFnZXMuYm9vayA9ICcuLi9pbWFnZXMvYm9va3R3by5wbmcnXG4gICAgICBzZWxmLmltYWdlcy5oZWFydHMgPSAnLi4vaW1hZ2VzL2hlYXJ0cy5wbmcnXG4gICAgICBzZWxmLmltYWdlcy50d28gPSAnLi4vaW1hZ2VzL3R3by5wbmcnXG4gICAgfSxcbiAgICBoZWFydHMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaW1hZ2VzLmJvb2sgPSAnLi4vaW1hZ2VzL2Jvb2sucG5nJ1xuICAgICAgc2VsZi5pbWFnZXMuaGVhcnRzID0gJy4uL2ltYWdlcy9oZWFydHR3by5wbmcnXG4gICAgICBzZWxmLmltYWdlcy50d28gPSAnLi4vaW1hZ2VzL3R3by5wbmcnXG4gICAgfSxcbiAgICB0d28oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaW1hZ2VzLnR3byA9ICcuLi9pbWFnZXMvdHdvdHdvLnBuZydcbiAgICAgIHNlbGYuaW1hZ2VzLmJvb2sgPSAnLi4vaW1hZ2VzL2Jvb2sucG5nJ1xuICAgICAgc2VsZi5pbWFnZXMuaGVhcnRzID0gJy4uL2ltYWdlcy9oZWFydHMucG5nJ1xuICAgIH1cbiAgfVxuICBvbmxvYWQoKSB7IH1cbn1cbiJdfQ==