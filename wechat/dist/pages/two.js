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
      navigationBarTitleText: '陪你度过漫长岁月'
    }, _this.data = {
      src: '',
      lovers: '../images/lovers.jpg',
      // userInfo: '',
      nickName: '',
      avatarUrl: ''
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
    }
  }]);

  return Two;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Two , 'pages/two'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by5qcyJdLCJuYW1lcyI6WyJUd28iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImxvdmVycyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwibWV0aG9kcyIsIm1pc3NpbmciLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGhvdG8iLCJtZW1vcnkiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsc0JBRkg7QUFHTDtBQUNBQyxnQkFBVSxFQUpMO0FBS0xDLGlCQUFXO0FBTE4sSyxRQU9QQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsV0FOUSxtQkFNQTtBQUNOLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsWUFYUSxvQkFXQztBQUNQLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBZk8sSzs7Ozs7NkJBaUJEO0FBQ1AsVUFBSUcsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS1IsUUFBTCxHQUFnQlcsSUFBSUMsUUFBSixDQUFhWixRQUE3QjtBQUNBUSxlQUFLUCxTQUFMLEdBQWlCVSxJQUFJQyxRQUFKLENBQWFYLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBcEM4QixlQUFLWSxJOztrQkFBakJuQixHIiwiZmlsZSI6InR3by5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3byBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Zmq5L2g5bqm6L+H5ryr6ZW/5bKB5pyIJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBsb3ZlcnM6ICcuLi9pbWFnZXMvbG92ZXJzLmpwZycsXG4gICAgLy8gdXNlckluZm86ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBtaXNzaW5nKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9taXNzaW5nJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBob3RvKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9waG90bydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBtZW1vcnkoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL21lbW9yeSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==