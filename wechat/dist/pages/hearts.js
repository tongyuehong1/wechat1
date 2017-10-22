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

var Hearts = function (_wepy$page) {
  _inherits(Hearts, _wepy$page);

  function Hearts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hearts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hearts.__proto__ || Object.getPrototypeOf(Hearts)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      writecolor: 'black',
      sendcolor: 'gray',
      add: '../images/addletter.png',
      cat: '../images/cat.jpg',
      plant: '../images/plant.jpg',
      show: true
    }, _this.methods = {
      write: function write() {
        var self = this;
        self.writecolor = 'black';
        self.sendcolor = 'gray';
        self.show = true;
      },
      receive: function receive() {
        var self = this;
        self.writecolor = 'gray';
        self.sendcolor = 'black';
        self.show = false;
      },
      letter: function letter() {
        _wepy2.default.navigateTo({
          url: './letter'
        });
      },
      first: function first() {
        _wepy2.default.navigateTo({
          url: './list'
        });
      },
      second: function second() {
        _wepy2.default.navigateTo({
          url: './second'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hearts, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Hearts;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Hearts , 'pages/hearts'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXJ0cy5qcyJdLCJuYW1lcyI6WyJIZWFydHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIndyaXRlY29sb3IiLCJzZW5kY29sb3IiLCJhZGQiLCJjYXQiLCJwbGFudCIsInNob3ciLCJtZXRob2RzIiwid3JpdGUiLCJzZWxmIiwicmVjZWl2ZSIsImxldHRlciIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJmaXJzdCIsInNlY29uZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsa0JBQVksT0FGUDtBQUdMQyxpQkFBVyxNQUhOO0FBSUxDLFdBQUsseUJBSkE7QUFLTEMsV0FBSyxtQkFMQTtBQU1MQyxhQUFPLHFCQU5GO0FBT0xDLFlBQU07QUFQRCxLLFFBU1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLFVBQUwsR0FBa0IsT0FBbEI7QUFDQVEsYUFBS1AsU0FBTCxHQUFpQixNQUFqQjtBQUNBTyxhQUFLSCxJQUFMLEdBQVksSUFBWjtBQUNELE9BTk87QUFPUkksYUFQUSxxQkFPRTtBQUNSLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLUixVQUFMLEdBQWtCLE1BQWxCO0FBQ0FRLGFBQUtQLFNBQUwsR0FBaUIsT0FBakI7QUFDQU8sYUFBS0gsSUFBTCxHQUFZLEtBQVo7QUFDRCxPQVpPO0FBYVJLLFlBYlEsb0JBYUM7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWpCTztBQWtCUkMsV0FsQlEsbUJBa0JBO0FBQ04sdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0F0Qk87QUF1QlJFLFlBdkJRLG9CQXVCQztBQUNQLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBM0JPLEs7Ozs7OzZCQTZCRCxDQUFHOzs7O0VBMUNzQixlQUFLRyxJOztrQkFBcEJwQixNIiwiZmlsZSI6ImhlYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYXJ0cyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICB3cml0ZWNvbG9yOiAnYmxhY2snLFxuICAgIHNlbmRjb2xvcjogJ2dyYXknLFxuICAgIGFkZDogJy4uL2ltYWdlcy9hZGRsZXR0ZXIucG5nJyxcbiAgICBjYXQ6ICcuLi9pbWFnZXMvY2F0LmpwZycsXG4gICAgcGxhbnQ6ICcuLi9pbWFnZXMvcGxhbnQuanBnJyxcbiAgICBzaG93OiB0cnVlXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB3cml0ZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi53cml0ZWNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5zZW5kY29sb3IgPSAnZ3JheSdcbiAgICAgIHNlbGYuc2hvdyA9IHRydWVcbiAgICB9LFxuICAgIHJlY2VpdmUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYud3JpdGVjb2xvciA9ICdncmF5J1xuICAgICAgc2VsZi5zZW5kY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLnNob3cgPSBmYWxzZVxuICAgIH0sXG4gICAgbGV0dGVyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9sZXR0ZXInXG4gICAgICB9KVxuICAgIH0sXG4gICAgZmlyc3QoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2xpc3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2Vjb25kKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9zZWNvbmQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==