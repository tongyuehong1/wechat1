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

var Zero = function (_wepy$page) {
  _inherits(Zero, _wepy$page);

  function Zero() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Zero);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Zero.__proto__ || Object.getPrototypeOf(Zero)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的设置'
    }, _this.data = {}, _this.methods = {
      choose: function choose() {
        _wepy2.default.chooseAddress({
          success: function success(res) {
            console.log(res.userName);
            console.log(res.postalCode);
            console.log(res.provinceName);
            console.log(res.cityName);
            console.log(res.countyName);
            console.log(res.detailInfo);
            console.log(res.nationalCode);
            console.log(res.telNumber);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Zero, [{
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

  return Zero;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Zero , 'pages/set'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC5qcyJdLCJuYW1lcyI6WyJaZXJvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJtZXRob2RzIiwiY2hvb3NlIiwiY2hvb3NlQWRkcmVzcyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidXNlck5hbWUiLCJwb3N0YWxDb2RlIiwicHJvdmluY2VOYW1lIiwiY2l0eU5hbWUiLCJjb3VudHlOYW1lIiwiZGV0YWlsSW5mbyIsIm5hdGlvbmFsQ29kZSIsInRlbE51bWJlciIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsdUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJDLG9CQUFRQyxHQUFSLENBQVlGLElBQUlHLFFBQWhCO0FBQ0FGLG9CQUFRQyxHQUFSLENBQVlGLElBQUlJLFVBQWhCO0FBQ0FILG9CQUFRQyxHQUFSLENBQVlGLElBQUlLLFlBQWhCO0FBQ0FKLG9CQUFRQyxHQUFSLENBQVlGLElBQUlNLFFBQWhCO0FBQ0FMLG9CQUFRQyxHQUFSLENBQVlGLElBQUlPLFVBQWhCO0FBQ0FOLG9CQUFRQyxHQUFSLENBQVlGLElBQUlRLFVBQWhCO0FBQ0FQLG9CQUFRQyxHQUFSLENBQVlGLElBQUlTLFlBQWhCO0FBQ0FSLG9CQUFRQyxHQUFSLENBQVlGLElBQUlVLFNBQWhCO0FBQ0Q7QUFWZ0IsU0FBbkI7QUFZRDtBQWRPLEs7Ozs7OzZCQWdCRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCYixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hXLGVBQUtFLE1BQUwsR0FBY2IsSUFBSWMsWUFBbEI7QUFDQUgsZUFBS0ksS0FBTCxHQUFhZixJQUFJZ0IsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBOUIrQixlQUFLQyxJOztrQkFBbEJ6QixJIiwiZmlsZSI6InNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFplcm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuvue9ridcbiAgfVxuICBkYXRhID0ge1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hvb3NlKCkge1xuICAgICAgd2VweS5jaG9vc2VBZGRyZXNzKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy51c2VyTmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMucG9zdGFsQ29kZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMucHJvdmluY2VOYW1lKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jaXR5TmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuY291bnR5TmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGV0YWlsSW5mbylcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMubmF0aW9uYWxDb2RlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZWxOdW1iZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=