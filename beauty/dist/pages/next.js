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

var Next = function (_wepy$page) {
  _inherits(Next, _wepy$page);

  function Next() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Next);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Next.__proto__ || Object.getPrototypeOf(Next)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品详情'
    }, _this.data = {
      height: '',
      width: '',
      img: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509109045309&di=2934108553469dd1e83c1b0f0c342049&imgtype=0&src=http%3A%2F%2Fd7.yihaodianimg.com%2FN11%2FM06%2F96%2F11%2FChEwoVhjdPSAFBLEAAHwzUx7zps18400.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509109045308&di=9aeb1128f9aba3a6f2ae839a1e510a1d&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpc_best%2F1710%2F24%2Fc46%2F64283876_1508840274423.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509109045307&di=38beb66a121d0959318a7c933b376641&imgtype=0&src=http%3A%2F%2Fwww.xiaochanmao.net%2Fmaopic%2Fimgxiaochanmaoali%2Fimgextra%2Fi4%2F2196500332%2FTB2X9GHaUhnpuFjSZFpXXcpuXXa_%2521%25212196500332.jpg']
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Next, [{
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

  return Next;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Next , 'pages/next'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5leHQuanMiXSwibmFtZXMiOlsiTmV4dCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbWciLCJtZXRob2RzIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxXQUFLLENBQ0gsbU9BREcsRUFFSCw0UEFGRyxFQUdILHVSQUhHO0FBSEEsSyxRQVNQQyxPLEdBQVUsRTs7Ozs7NkJBRUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCxlQUFLSixNQUFMLEdBQWNPLElBQUlDLFlBQWxCO0FBQ0FKLGVBQUtILEtBQUwsR0FBYU0sSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBdkIrQixlQUFLQyxJOztrQkFBbEJkLEkiLCJmaWxlIjoibmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWTgeivpuaDhSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGltZzogW1xuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTEwOTA0NTMwOSZkaT0yOTM0MTA4NTUzNDY5ZGQxZTgzYzFiMGYwYzM0MjA0OSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZkNy55aWhhb2RpYW5pbWcuY29tJTJGTjExJTJGTTA2JTJGOTYlMkYxMSUyRkNoRXdvVmhqZFBTQUZCTEVBQUh3elV4N3pwczE4NDAwLmpwZycsXG4gICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MTA5MDQ1MzA4JmRpPTlhZWIxMTI4ZjlhYmEzYTZmMmFlODM5YTFlNTEwYTFkJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmltZy5wY29ubGluZS5jb20uY24lMkZpbWFnZXMlMkZ1cGxvYWQlMkZ1cGMlMkZ0eCUyRnBjX2Jlc3QlMkYxNzEwJTJGMjQlMkZjNDYlMkY2NDI4Mzg3Nl8xNTA4ODQwMjc0NDIzLmpwZycsXG4gICAgICAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5MTA5MDQ1MzA3JmRpPTM4YmViNjZhMTIxZDA5NTkzMThhN2M5MzNiMzc2NjQxJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnd3dy54aWFvY2hhbm1hby5uZXQlMkZtYW9waWMlMkZpbWd4aWFvY2hhbm1hb2FsaSUyRmltZ2V4dHJhJTJGaTQlMkYyMTk2NTAwMzMyJTJGVEIyWDlHSGFVaG5wdUZqU1pGcFhYY3B1WFhhXyUyNTIxJTI1MjEyMTk2NTAwMzMyLmpwZydcbiAgICBdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19