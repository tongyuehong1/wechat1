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

var Firstessay = function (_wepy$page) {
  _inherits(Firstessay, _wepy$page);

  function Firstessay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Firstessay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Firstessay.__proto__ || Object.getPrototypeOf(Firstessay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '致橡树'
    }, _this.data = {
      text: '',
      first: '../images/firstessay.jpg',
      height: '',
      width: '',
      essay: '',
      pic: '',
      index: '',
      show: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Firstessay, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      self.id = data.id;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
          _wepy2.default.request({
            url: 'http://127.0.0.1:7001/memory/select',
            method: 'POST',
            data: {
              wechat: self.nickName
            },
            success: function success(res) {
              self.show = res.data[self.id];
              self.setData({
                show: res.data[self.id]
              });
            }
          });
        }
      });
    }
  }]);

  return Firstessay;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Firstessay , 'pages/readmemory'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRtZW1vcnkuanMiXSwibmFtZXMiOlsiRmlyc3Rlc3NheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGV4dCIsImZpcnN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJlc3NheSIsInBpYyIsImluZGV4Iiwic2hvdyIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImlkIiwiZ2V0VXNlckluZm8iLCJuaWNrTmFtZSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsIndlY2hhdCIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGFBQU8sMEJBRkY7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLGFBQU8sRUFKRjtBQUtMQyxhQUFPLEVBTEY7QUFNTEMsV0FBSyxFQU5BO0FBT0xDLGFBQU8sRUFQRjtBQVFMQyxZQUFNO0FBUkQsSyxRQVVQQyxPLEdBQVUsRTs7Ozs7MkJBRUhULEksRUFBTTtBQUNYLFVBQUlVLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtQLE1BQUwsR0FBY1UsSUFBSUMsWUFBbEI7QUFDQUosZUFBS04sS0FBTCxHQUFhUyxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUFMLFdBQUtNLEVBQUwsR0FBVWhCLEtBQUtnQixFQUFmO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkwsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS1EsUUFBTCxHQUFnQkwsSUFBSU0sUUFBSixDQUFhRCxRQUE3QjtBQUNBUixlQUFLVSxTQUFMLEdBQWlCUCxJQUFJTSxRQUFKLENBQWFDLFNBQTlCO0FBQ0EseUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxpQkFBSyxxQ0FETTtBQUVYQyxvQkFBUSxNQUZHO0FBR1h2QixrQkFBTTtBQUNKd0Isc0JBQVFkLEtBQUtRO0FBRFQsYUFISztBQU1YTixxQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxtQkFBS0YsSUFBTCxHQUFZSyxJQUFJYixJQUFKLENBQVNVLEtBQUtNLEVBQWQsQ0FBWjtBQUNBTixtQkFBS2UsT0FBTCxDQUFhO0FBQ1hqQixzQkFBTUssSUFBSWIsSUFBSixDQUFTVSxLQUFLTSxFQUFkO0FBREssZUFBYjtBQUdEO0FBWFUsV0FBYjtBQWFEO0FBakJjLE9BQWpCO0FBbUJEOzs7O0VBNUNxQyxlQUFLVSxJOztrQkFBeEI3QixVIiwiZmlsZSI6InJlYWRtZW1vcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJzdGVzc2F5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoh7TmqaHmoJEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0ZXh0OiAnJyxcbiAgICBmaXJzdDogJy4uL2ltYWdlcy9maXJzdGVzc2F5LmpwZycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgZXNzYXk6ICcnLFxuICAgIHBpYzogJycsXG4gICAgaW5kZXg6ICcnLFxuICAgIHNob3c6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgc2VsZi5pZCA9IGRhdGEuaWRcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9tZW1vcnkvc2VsZWN0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VsZi5zaG93ID0gcmVzLmRhdGFbc2VsZi5pZF1cbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHNob3c6IHJlcy5kYXRhW3NlbGYuaWRdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=