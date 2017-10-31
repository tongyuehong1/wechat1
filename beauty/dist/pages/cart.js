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

var Cart = function (_wepy$page) {
  _inherits(Cart, _wepy$page);

  function Cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小程序'
    }, _this.data = {
      thing: [],
      height: '',
      width: '',
      add: '../image/addnum (1).png',
      sub: '../image/substract.png'
    }, _this.methods = {
      add: function add(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var num = self.thing[index].num;
        num++;
        self.thing[index].num = num;
        console.log(self.thing[index].num);
      },
      sub: function sub(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var num = self.thing[index].num;
        if (num > 1) {
          num--;
        }
        self.thing[index].num = num;
        console.log(self.thing[index].num);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cart, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      self.thing = _wepy2.default.getStorageSync('thing');
      console.log(self.thing);
      self.setData({
        thing: _wepy2.default.getStorageSync('thing')
      });
    }
  }]);

  return Cart;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Cart , 'pages/cart'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiQ2FydCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGhpbmciLCJoZWlnaHQiLCJ3aWR0aCIsImFkZCIsInN1YiIsIm1ldGhvZHMiLCJlIiwic2VsZiIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJudW0iLCJjb25zb2xlIiwibG9nIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldFN0b3JhZ2VTeW5jIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxXQUFLLHlCQUpBO0FBS0xDLFdBQUs7QUFMQSxLLFFBT1BDLE8sR0FBVTtBQUNSRixTQURRLGVBQ0pHLENBREksRUFDRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF0QztBQUNBLFlBQUlHLE1BQU1KLEtBQUtQLEtBQUwsQ0FBV1EsS0FBWCxFQUFrQkcsR0FBNUI7QUFDQUE7QUFDQUosYUFBS1AsS0FBTCxDQUFXUSxLQUFYLEVBQWtCRyxHQUFsQixHQUF3QkEsR0FBeEI7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sS0FBS1AsS0FBTCxDQUFXUSxLQUFYLEVBQWtCRyxHQUE5QjtBQUNELE9BUk87QUFTUlAsU0FUUSxlQVNKRSxDQVRJLEVBU0Q7QUFDTCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSxZQUFJRyxNQUFNSixLQUFLUCxLQUFMLENBQVdRLEtBQVgsRUFBa0JHLEdBQTVCO0FBQ0EsWUFBSUEsTUFBTSxDQUFWLEVBQWE7QUFDWEE7QUFDRDtBQUNESixhQUFLUCxLQUFMLENBQVdRLEtBQVgsRUFBa0JHLEdBQWxCLEdBQXdCQSxHQUF4QjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZTixLQUFLUCxLQUFMLENBQVdRLEtBQVgsRUFBa0JHLEdBQTlCO0FBQ0Q7QUFsQk8sSzs7Ozs7NkJBb0JEO0FBQ1AsVUFBSUosT0FBTyxJQUFYO0FBQ0EscUJBQUtPLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFQsZUFBS04sTUFBTCxHQUFjZSxJQUFJQyxZQUFsQjtBQUNBVixlQUFLTCxLQUFMLEdBQWFjLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQVgsV0FBS1AsS0FBTCxHQUFhLGVBQUttQixjQUFMLENBQW9CLE9BQXBCLENBQWI7QUFDQVAsY0FBUUMsR0FBUixDQUFZTixLQUFLUCxLQUFqQjtBQUNBTyxXQUFLYSxPQUFMLENBQWE7QUFDWHBCLGVBQU8sZUFBS21CLGNBQUwsQ0FBb0IsT0FBcEI7QUFESSxPQUFiO0FBR0Q7Ozs7RUE1QytCLGVBQUtFLEk7O2tCQUFsQnpCLEkiLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+eoi+W6jydcbiAgfVxuICBkYXRhID0ge1xuICAgIHRoaW5nOiBbXSxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJyxcbiAgICBhZGQ6ICcuLi9pbWFnZS9hZGRudW0gKDEpLnBuZycsXG4gICAgc3ViOiAnLi4vaW1hZ2Uvc3Vic3RyYWN0LnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGFkZChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBudW0gPSBzZWxmLnRoaW5nW2luZGV4XS5udW1cbiAgICAgIG51bSsrXG4gICAgICBzZWxmLnRoaW5nW2luZGV4XS5udW0gPSBudW1cbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudGhpbmdbaW5kZXhdLm51bSlcbiAgICB9LFxuICAgIHN1YihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGxldCBudW0gPSBzZWxmLnRoaW5nW2luZGV4XS5udW1cbiAgICAgIGlmIChudW0gPiAxKSB7XG4gICAgICAgIG51bS0tXG4gICAgICB9XG4gICAgICBzZWxmLnRoaW5nW2luZGV4XS5udW0gPSBudW1cbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudGhpbmdbaW5kZXhdLm51bSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgc2VsZi50aGluZyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3RoaW5nJylcbiAgICBjb25zb2xlLmxvZyhzZWxmLnRoaW5nKVxuICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICB0aGluZzogd2VweS5nZXRTdG9yYWdlU3luYygndGhpbmcnKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==