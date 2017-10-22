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

var Strategy = function (_wepy$page) {
  _inherits(Strategy, _wepy$page);

  function Strategy() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Strategy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Strategy.__proto__ || Object.getPrototypeOf(Strategy)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书',
      enablePullDownRefresh: true
    }, _this.data = {
      src: '',
      first: '../images/first.jpg',
      height: '',
      width: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Strategy, [{
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
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.startPullDownRefresh();
      setTimeout(function () {
        _wepy2.default.stopPullDownRefresh();
      }, 1500);
    }
  }]);

  return Strategy;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Strategy , 'pages/strategy'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmF0ZWd5LmpzIl0sIm5hbWVzIjpbIlN0cmF0ZWd5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJmaXJzdCIsImhlaWdodCIsIndpZHRoIiwibWV0aG9kcyIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwic3RhcnRQdWxsRG93blJlZnJlc2giLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixLQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGFBQU8scUJBRkY7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVSxFOzs7Ozs2QkFDRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtILE1BQUwsR0FBY00sSUFBSUMsWUFBbEI7QUFDQUosZUFBS0YsS0FBTCxHQUFhSyxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozt3Q0FDbUI7QUFDbEIscUJBQUtDLG9CQUFMO0FBQ0FDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQTFCbUMsZUFBS0MsSTs7a0JBQXRCbkIsUSIsImZpbGUiOiJzdHJhdGVneS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmF0ZWd5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/mg4XkuaYnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9O1xuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgZmlyc3Q6ICcuLi9pbWFnZXMvZmlyc3QuanBnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJ1xuICB9O1xuICBtZXRob2RzID0ge31cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgd2VweS5zdGFydFB1bGxEb3duUmVmcmVzaCgpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTUwMClcbiAgfVxufVxuIl19