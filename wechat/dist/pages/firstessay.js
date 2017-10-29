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
      img: ''
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
      self.essay = data.essay;
      self.img = data.image;
      console.log(data);
    }
  }]);

  return Firstessay;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Firstessay , 'pages/firstessay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0ZXNzYXkuanMiXSwibmFtZXMiOlsiRmlyc3Rlc3NheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGV4dCIsImZpcnN0IiwiaGVpZ2h0Iiwid2lkdGgiLCJlc3NheSIsImltZyIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImltYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsYUFBTywwQkFGRjtBQUdMQyxjQUFRLEVBSEg7QUFJTEMsYUFBTyxFQUpGO0FBS0xDLGFBQU8sRUFMRjtBQU1MQyxXQUFLO0FBTkEsSyxRQVFQQyxPLEdBQVUsRTs7Ozs7MkJBRUhQLEksRUFBTTtBQUNYLFVBQUlRLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtMLE1BQUwsR0FBY1EsSUFBSUMsWUFBbEI7QUFDQUosZUFBS0osS0FBTCxHQUFhTyxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUFMLFdBQUtILEtBQUwsR0FBYUwsS0FBS0ssS0FBbEI7QUFDQUcsV0FBS0YsR0FBTCxHQUFXTixLQUFLYyxLQUFoQjtBQUNBQyxjQUFRQyxHQUFSLENBQVloQixJQUFaO0FBQ0Q7Ozs7RUF6QnFDLGVBQUtpQixJOztrQkFBeEJwQixVIiwiZmlsZSI6ImZpcnN0ZXNzYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJzdGVzc2F5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoh7TmqaHmoJEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0ZXh0OiAnJyxcbiAgICBmaXJzdDogJy4uL2ltYWdlcy9maXJzdGVzc2F5LmpwZycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgZXNzYXk6ICcnLFxuICAgIGltZzogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICB9XG4gIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICBzZWxmLmVzc2F5ID0gZGF0YS5lc3NheVxuICAgIHNlbGYuaW1nID0gZGF0YS5pbWFnZVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cbn1cbiJdfQ==