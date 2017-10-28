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
      height: 0,
      width: 0,
      img: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509109045309&di=2934108553469dd1e83c1b0f0c342049&imgtype=0&src=http%3A%2F%2Fd7.yihaodianimg.com%2FN11%2FM06%2F96%2F11%2FChEwoVhjdPSAFBLEAAHwzUx7zps18400.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509109045308&di=9aeb1128f9aba3a6f2ae839a1e510a1d&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpc_best%2F1710%2F24%2Fc46%2F64283876_1508840274423.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509109045307&di=38beb66a121d0959318a7c933b376641&imgtype=0&src=http%3A%2F%2Fwww.xiaochanmao.net%2Fmaopic%2Fimgxiaochanmaoali%2Fimgextra%2Fi4%2F2196500332%2FTB2X9GHaUhnpuFjSZFpXXcpuXXa_%2521%25212196500332.jpg'],
      src: '',
      star: '../image/graystar.png'
    }, _this.methods = {
      star: function star() {
        var self = this;
        self.start = !self.start;
        if (self.start) {
          self.star = '../image/redstar.png';
        } else {
          self.star = '../image/graystar.png';
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5leHQuanMiXSwibmFtZXMiOlsiTmV4dCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbWciLCJzcmMiLCJzdGFyIiwibWV0aG9kcyIsInNlbGYiLCJzdGFydCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxXQUFLLENBQ0gsbU9BREcsRUFFSCw0UEFGRyxFQUdILHVSQUhHLENBSEE7QUFRTEMsV0FBSyxFQVJBO0FBU0xDLFlBQU07QUFURCxLLFFBV1BDLE8sR0FBVTtBQUNSRCxVQURRLGtCQUNEO0FBQ0wsWUFBSUUsT0FBTyxJQUFYO0FBQ0FBLGFBQUtDLEtBQUwsR0FBYSxDQUFDRCxLQUFLQyxLQUFuQjtBQUNBLFlBQUlELEtBQUtDLEtBQVQsRUFBZ0I7QUFDZEQsZUFBS0YsSUFBTCxHQUFZLHNCQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0xFLGVBQUtGLElBQUwsR0FBWSx1QkFBWjtBQUNEO0FBQ0Y7QUFUTyxLOzs7Ozs2QkFXRDtBQUNQLFVBQUlFLE9BQU8sSUFBWDtBQUNBLHFCQUFLRSxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hKLGVBQUtOLE1BQUwsR0FBY1UsSUFBSUMsWUFBbEI7QUFDQUwsZUFBS0wsS0FBTCxHQUFhUyxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFsQytCLGVBQUtDLEk7O2tCQUFsQmpCLEkiLCJmaWxlIjoibmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWTgeivpuaDhSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBpbWc6IFtcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDkxMDkwNDUzMDkmZGk9MjkzNDEwODU1MzQ2OWRkMWU4M2MxYjBmMGMzNDIwNDkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGZDcueWloYW9kaWFuaW1nLmNvbSUyRk4xMSUyRk0wNiUyRjk2JTJGMTElMkZDaEV3b1ZoamRQU0FGQkxFQUFId3pVeDd6cHMxODQwMC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTEwOTA0NTMwOCZkaT05YWViMTEyOGY5YWJhM2E2ZjJhZTgzOWExZTUxMGExZCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZpbWcucGNvbmxpbmUuY29tLmNuJTJGaW1hZ2VzJTJGdXBsb2FkJTJGdXBjJTJGdHglMkZwY19iZXN0JTJGMTcxMCUyRjI0JTJGYzQ2JTJGNjQyODM4NzZfMTUwODg0MDI3NDQyMy5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTEwOTA0NTMwNyZkaT0zOGJlYjY2YTEyMWQwOTU5MzE4YTdjOTMzYjM3NjY0MSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZ3d3cueGlhb2NoYW5tYW8ubmV0JTJGbWFvcGljJTJGaW1neGlhb2NoYW5tYW9hbGklMkZpbWdleHRyYSUyRmk0JTJGMjE5NjUwMDMzMiUyRlRCMlg5R0hhVWhucHVGalNaRnBYWGNwdVhYYV8lMjUyMSUyNTIxMjE5NjUwMDMzMi5qcGcnXG4gICAgXSxcbiAgICBzcmM6ICcnLFxuICAgIHN0YXI6ICcuLi9pbWFnZS9ncmF5c3Rhci5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzdGFyKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnN0YXJ0ID0gIXNlbGYuc3RhcnRcbiAgICAgIGlmIChzZWxmLnN0YXJ0KSB7XG4gICAgICAgIHNlbGYuc3RhciA9ICcuLi9pbWFnZS9yZWRzdGFyLnBuZydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuc3RhciA9ICcuLi9pbWFnZS9ncmF5c3Rhci5wbmcnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=