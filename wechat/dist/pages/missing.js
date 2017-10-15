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
      input: '',
      pinktree: '../images/pinktree.jpg',
      confession: ''
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        var self = this;
        self.confession = e.detail.value;

        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/two/missing',
          method: 'POST',
          data: {
            date: e.detail.value.input
            // 她的破壳日: 'self.herbirth',
            // 他的破壳日: 'self.hisbirth'
          },
          success: function success(res) {
            console.log(res);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Missing, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Missing;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Missing , 'pages/missing'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3NpbmcuanMiXSwibmFtZXMiOlsiTWlzc2luZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidG9wIiwiaW5wdXQiLCJwaW5rdHJlZSIsImNvbmZlc3Npb24iLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJzZWxmIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRhdGUiLCJzdWNjZXNzIiwicmVzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssdUJBREE7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGdCQUFVLHdCQUhMO0FBSUxDLGtCQUFZO0FBSlAsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaQyxnQkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDRixFQUFFRyxNQUFGLENBQVNDLEtBQS9DO0FBQ0EsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLFVBQUwsR0FBa0JHLEVBQUVHLE1BQUYsQ0FBU0MsS0FBM0I7O0FBRUEsdUJBQUtFLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLG1DQURNO0FBRVhDLGtCQUFRLE1BRkc7QUFHWGYsZ0JBQU07QUFDSmdCLGtCQUFNVCxFQUFFRyxNQUFGLENBQVNDLEtBQVQsQ0FBZVQ7QUFDckI7QUFDQTtBQUhJLFdBSEs7QUFRWGUsbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QlYsb0JBQVFDLEdBQVIsQ0FBWVMsR0FBWjtBQUNEO0FBVlUsU0FBYjtBQVlEO0FBbEJPLEs7Ozs7OzZCQW9CRCxDQUNSOzs7O0VBL0JrQyxlQUFLQyxJOztrQkFBckJ0QixPIiwiZmlsZSI6Im1pc3NpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW5nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnuqrlv7Xml6UnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0b3A6ICcuLi9pbWFnZXMvbWlzc3RvcC5wbmcnLFxuICAgIGlucHV0OiAnJyxcbiAgICBwaW5rdHJlZTogJy4uL2ltYWdlcy9waW5rdHJlZS5qcGcnLFxuICAgIGNvbmZlc3Npb246ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29uZmVzc2lvbiA9IGUuZGV0YWlsLnZhbHVlXG5cbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90d28vbWlzc2luZycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0ZTogZS5kZXRhaWwudmFsdWUuaW5wdXRcbiAgICAgICAgICAvLyDlpbnnmoTnoLTlo7Pml6U6ICdzZWxmLmhlcmJpcnRoJyxcbiAgICAgICAgICAvLyDku5bnmoTnoLTlo7Pml6U6ICdzZWxmLmhpc2JpcnRoJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==