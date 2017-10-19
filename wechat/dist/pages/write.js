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

var Write = function (_wepy$page) {
  _inherits(Write, _wepy$page);

  function Write() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Write);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Write.__proto__ || Object.getPrototypeOf(Write)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      letter: ''
    }, _this.methods = {
      letter: function letter(e) {
        var self = this;
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        self.letter = e.detail.value;
      },
      show: function show() {
        _wepy2.default.navigateTo({
          url: './letter'
        });
        var self = this;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/hearts/write',
          method: 'POST',
          data: {
            wechat: self.nickName,
            letters: self.letter
          },
          success: function success(res) {
            console.log(res);
            console.log(self.letter);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Write, [{
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

  return Write;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Write , 'pages/write'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlLmpzIl0sIm5hbWVzIjpbIldyaXRlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsZXR0ZXIiLCJtZXRob2RzIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJzaG93IiwibmF2aWdhdGVUbyIsInVybCIsInJlcXVlc3QiLCJtZXRob2QiLCJ3ZWNoYXQiLCJuaWNrTmFtZSIsImxldHRlcnMiLCJzdWNjZXNzIiwicmVzIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSyxRQUdQQyxPLEdBQVU7QUFDUkQsWUFEUSxrQkFDREUsQ0FEQyxFQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NILEVBQUVJLE1BQUYsQ0FBU0MsS0FBL0M7QUFDQUosYUFBS0gsTUFBTCxHQUFjRSxFQUFFSSxNQUFGLENBQVNDLEtBQXZCO0FBQ0QsT0FMTztBQU1SQyxVQU5RLGtCQU1EO0FBQ0wsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0EsWUFBSVAsT0FBTyxJQUFYO0FBQ0EsdUJBQUtRLE9BQUwsQ0FBYTtBQUNYRCxlQUFLLG9DQURNO0FBRVhFLGtCQUFRLE1BRkc7QUFHWGIsZ0JBQU07QUFDSmMsb0JBQVFWLEtBQUtXLFFBRFQ7QUFFSkMscUJBQVNaLEtBQUtIO0FBRlYsV0FISztBQU9YZ0IsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmIsb0JBQVFDLEdBQVIsQ0FBWVksR0FBWjtBQUNBYixvQkFBUUMsR0FBUixDQUFZRixLQUFLSCxNQUFqQjtBQUNEO0FBVlUsU0FBYjtBQVlEO0FBdkJPLEs7Ozs7OzZCQXlCRDtBQUNQLFVBQUlHLE9BQU8sSUFBWDtBQUNBLHFCQUFLZSxXQUFMLENBQWlCO0FBQ2ZGLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJkLGVBQUtXLFFBQUwsR0FBZ0JHLElBQUlFLFFBQUosQ0FBYUwsUUFBN0I7QUFDQVgsZUFBS2lCLFNBQUwsR0FBaUJILElBQUlFLFFBQUosQ0FBYUMsU0FBOUI7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF4Q2dDLGVBQUtDLEk7O2tCQUFuQnpCLEsiLCJmaWxlIjoid3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcml0ZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbGV0dGVyOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbGV0dGVyKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgIHNlbGYubGV0dGVyID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHNob3coKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2xldHRlcidcbiAgICAgIH0pXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvd3JpdGUnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZSxcbiAgICAgICAgICBsZXR0ZXJzOiBzZWxmLmxldHRlclxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgY29uc29sZS5sb2coc2VsZi5sZXR0ZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==