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

var Showessay = function (_wepy$page) {
  _inherits(Showessay, _wepy$page);

  function Showessay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Showessay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Showessay.__proto__ || Object.getPrototypeOf(Showessay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '文章详情'
    }, _this.data = {
      type: '',
      index: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Showessay, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.type = data.type;
      self.index = data.index;
      console.log(self.index, 'aaaaaaaa');
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/essay',
        method: 'POST',
        data: {
          type: self.type
        },
        success: function success(res) {
          self.text = res.data;
          self.setData({
            text: res.data
          });
          console.log(self.text);
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Showessay;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Showessay , 'pages/showessay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dlc3NheS5qcyJdLCJuYW1lcyI6WyJTaG93ZXNzYXkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInR5cGUiLCJpbmRleCIsIm1ldGhvZHMiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwidGV4dCIsInNldERhdGEiLCJnZXRTeXN0ZW1JbmZvIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsYUFBTztBQUZGLEssUUFJUEMsTyxHQUFVLEU7Ozs7OzJCQUVISCxJLEVBQU07QUFDWCxVQUFJSSxPQUFPLElBQVg7QUFDQUEsV0FBS0gsSUFBTCxHQUFZRCxLQUFLQyxJQUFqQjtBQUNBRyxXQUFLRixLQUFMLEdBQWFGLEtBQUtFLEtBQWxCO0FBQ0FHLGNBQVFDLEdBQVIsQ0FBWUYsS0FBS0YsS0FBakIsRUFBd0IsVUFBeEI7QUFDQSxxQkFBS0ssT0FBTCxDQUFhO0FBQ1hDLGFBQUssNkJBRE07QUFFWEMsZ0JBQVEsTUFGRztBQUdYVCxjQUFNO0FBQ0pDLGdCQUFNRyxLQUFLSDtBQURQLFNBSEs7QUFNWFMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAsZUFBS1EsSUFBTCxHQUFZRCxJQUFJWCxJQUFoQjtBQUNBSSxlQUFLUyxPQUFMLENBQWE7QUFDWEQsa0JBQU1ELElBQUlYO0FBREMsV0FBYjtBQUdBSyxrQkFBUUMsR0FBUixDQUFZRixLQUFLUSxJQUFqQjtBQUNEO0FBWlUsT0FBYjtBQWNBLHFCQUFLRSxhQUFMLENBQW1CO0FBQ2pCSixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hQLGVBQUtXLE1BQUwsR0FBY0osSUFBSUssWUFBbEI7QUFDQVosZUFBS2EsS0FBTCxHQUFhTixJQUFJTyxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFuQ29DLGVBQUtDLEk7O2tCQUF2QnRCLFMiLCJmaWxlIjoic2hvd2Vzc2F5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd2Vzc2F5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlofnq6Dor6bmg4UnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICBpbmRleDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICB9XG4gIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi50eXBlID0gZGF0YS50eXBlXG4gICAgc2VsZi5pbmRleCA9IGRhdGEuaW5kZXhcbiAgICBjb25zb2xlLmxvZyhzZWxmLmluZGV4LCAnYWFhYWFhYWEnKVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZXNzYXknLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IHNlbGYudHlwZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIHRleHQ6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGYudGV4dClcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==