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

var Missing = function (_wepy$page) {
  _inherits(Missing, _wepy$page);

  function Missing() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Missing);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Missing.__proto__ || Object.getPrototypeOf(Missing)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '纪念日'
    }, _this.data = {
      top: '../images/misstop.png',
      input: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Missing, [{
    key: 'onLoad',
    value: function onLoad() {
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/missing',
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }]);

  return Missing;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Missing , 'pages/missing'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3NpbmcuanMiXSwibmFtZXMiOlsiTWlzc2luZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidG9wIiwiaW5wdXQiLCJtZXRob2RzIiwicmVxdWVzdCIsInVybCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssdUJBREE7QUFFTEMsYUFBTztBQUZGLEssUUFJUEMsTyxHQUFVLEU7Ozs7OzZCQUVEO0FBQ1AscUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLCtCQURNO0FBRVhDLGlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJDLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUpVLE9BQWI7QUFNRDs7OztFQWpCa0MsZUFBS0csSTs7a0JBQXJCYixPIiwiZmlsZSI6Im1pc3NpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW5nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnuqrlv7Xml6UnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0b3A6ICcuLi9pbWFnZXMvbWlzc3RvcC5wbmcnLFxuICAgIGlucHV0OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvbWlzc2luZycsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=