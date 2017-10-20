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

var Two = function (_wepy$page) {
  _inherits(Two, _wepy$page);

  function Two() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Two);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Two.__proto__ || Object.getPrototypeOf(Two)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      nickName: '',
      avatarUrl: '',
      point: '../images/point.png',
      height: '',
      width: ''
    }, _this.methods = {
      missing: function missing() {
        _wepy2.default.navigateTo({
          url: './missing'
        });
      },
      photo: function photo() {
        _wepy2.default.navigateTo({
          url: './photo'
        });
      },
      memory: function memory() {
        _wepy2.default.navigateTo({
          url: './memory'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Two, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Two;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Two , 'pages/two'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by5qcyJdLCJuYW1lcyI6WyJUd28iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwicG9pbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJtaXNzaW5nIiwibmF2aWdhdGVUbyIsInVybCIsInBob3RvIiwibWVtb3J5Iiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGlCQUFXLEVBSE47QUFJTEMsYUFBTyxxQkFKRjtBQUtMQyxjQUFRLEVBTEg7QUFNTEMsYUFBTztBQU5GLEssUUFRUEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFdBTlEsbUJBTUE7QUFDTix1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVZPO0FBV1JFLFlBWFEsb0JBV0M7QUFDUCx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQWZPLEs7Ozs7OzZCQWlCRDtBQUNQLFVBQUlHLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGVBQUtYLFFBQUwsR0FBZ0JjLElBQUlDLFFBQUosQ0FBYWYsUUFBN0I7QUFDQVcsZUFBS1YsU0FBTCxHQUFpQmEsSUFBSUMsUUFBSixDQUFhZCxTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNQSxxQkFBS2UsYUFBTCxDQUFtQjtBQUNqQkgsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCxlQUFLUixNQUFMLEdBQWNXLElBQUlHLFlBQWxCO0FBQ0FOLGVBQUtQLEtBQUwsR0FBYVUsSUFBSUksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBM0M4QixlQUFLQyxJOztrQkFBakJ4QixHIiwiZmlsZSI6InR3by5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3byBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBwb2ludDogJy4uL2ltYWdlcy9wb2ludC5wbmcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBtaXNzaW5nKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9taXNzaW5nJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBob3RvKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9waG90bydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBtZW1vcnkoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL21lbW9yeSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19