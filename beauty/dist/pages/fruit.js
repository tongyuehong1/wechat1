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

var Fruit = function (_wepy$page) {
  _inherits(Fruit, _wepy$page);

  function Fruit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fruit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fruit.__proto__ || Object.getPrototypeOf(Fruit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的订单'
    }, _this.data = {
      height: 0,
      width: 0,
      title: '',
      img: [],
      price: '',
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
      },
      add: function add() {
        var self = this;
        var thing = _wepy2.default.getStorageSync('thing');
        if (thing) {
          thing.push({
            img: self.img[0],
            title: self.title,
            price: self.price
          });
          _wepy2.default.setStorageSync('thing', thing);
        } else {
          var _thing = [{
            img: self.img[0],
            title: self.title,
            price: self.price
          }];
          _wepy2.default.setStorageSync('thing', _thing);
        }
        _wepy2.default.showModal({
          title: '完成',
          content: '加入购物车成功',
          showCancel: false,
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击确定');
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fruit, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title;
      self.img = data.image.split(',');
      self.price = data.price;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Fruit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Fruit , 'pages/fruit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZydWl0LmpzIl0sIm5hbWVzIjpbIkZydWl0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsInRpdGxlIiwiaW1nIiwicHJpY2UiLCJzdGFyIiwibWV0aG9kcyIsInNlbGYiLCJzdGFydCIsImFkZCIsInRoaW5nIiwiZ2V0U3RvcmFnZVN5bmMiLCJwdXNoIiwic2V0U3RvcmFnZVN5bmMiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImNhbmNlbCIsImltYWdlIiwic3BsaXQiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsV0FBSyxFQUpBO0FBS0xDLGFBQU8sRUFMRjtBQU1MQyxZQUFNO0FBTkQsSyxRQVFQQyxPLEdBQVU7QUFDUkQsVUFEUSxrQkFDRDtBQUNMLFlBQUlFLE9BQU8sSUFBWDtBQUNBQSxhQUFLQyxLQUFMLEdBQWEsQ0FBQ0QsS0FBS0MsS0FBbkI7QUFDQSxZQUFJRCxLQUFLQyxLQUFULEVBQWdCO0FBQ2RELGVBQUtGLElBQUwsR0FBWSxzQkFBWjtBQUNELFNBRkQsTUFFTztBQUNMRSxlQUFLRixJQUFMLEdBQVksdUJBQVo7QUFDRDtBQUNGLE9BVE87QUFVUkksU0FWUSxpQkFVRjtBQUNKLFlBQUlGLE9BQU8sSUFBWDtBQUNBLFlBQUlHLFFBQVEsZUFBS0MsY0FBTCxDQUFvQixPQUFwQixDQUFaO0FBQ0EsWUFBSUQsS0FBSixFQUFXO0FBQ1RBLGdCQUFNRSxJQUFOLENBQVc7QUFDVFQsaUJBQUtJLEtBQUtKLEdBQUwsQ0FBUyxDQUFULENBREk7QUFFVEQsbUJBQU9LLEtBQUtMLEtBRkg7QUFHVEUsbUJBQU9HLEtBQUtIO0FBSEgsV0FBWDtBQUtBLHlCQUFLUyxjQUFMLENBQW9CLE9BQXBCLEVBQTZCSCxLQUE3QjtBQUNELFNBUEQsTUFPTztBQUNMLGNBQUlBLFNBQVEsQ0FDVjtBQUNFUCxpQkFBS0ksS0FBS0osR0FBTCxDQUFTLENBQVQsQ0FEUDtBQUVFRCxtQkFBT0ssS0FBS0wsS0FGZDtBQUdFRSxtQkFBT0csS0FBS0g7QUFIZCxXQURVLENBQVo7QUFPQSx5QkFBS1MsY0FBTCxDQUFvQixPQUFwQixFQUE2QkgsTUFBN0I7QUFDRDtBQUNELHVCQUFLSSxTQUFMLENBQWU7QUFDYlosaUJBQU8sSUFETTtBQUViYSxtQkFBUyxTQUZJO0FBR2JDLHNCQUFZLEtBSEM7QUFJYkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUEsSUFBSUMsT0FBUixFQUFpQjtBQUNmQyxzQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRCxhQUZELE1BRU8sSUFBSUgsSUFBSUksTUFBUixFQUFnQjtBQUNyQkYsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVZZLFNBQWY7QUFZRDtBQTFDTyxLOzs7OzsyQkE0Q0h0QixJLEVBQU07QUFDWCxVQUFJUSxPQUFPLElBQVg7QUFDQUEsV0FBS0wsS0FBTCxHQUFhSCxLQUFLRyxLQUFsQjtBQUNBSyxXQUFLSixHQUFMLEdBQVdKLEtBQUt3QixLQUFMLENBQVdDLEtBQVgsQ0FBaUIsR0FBakIsQ0FBWDtBQUNBakIsV0FBS0gsS0FBTCxHQUFhTCxLQUFLSyxLQUFsQjtBQUNBLHFCQUFLcUIsYUFBTCxDQUFtQjtBQUNqQlIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWCxlQUFLUCxNQUFMLEdBQWNrQixJQUFJUSxZQUFsQjtBQUNBbkIsZUFBS04sS0FBTCxHQUFhaUIsSUFBSVMsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBbkVnQyxlQUFLQyxJOztrQkFBbkJoQyxLIiwiZmlsZSI6ImZydWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJ1aXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICB0aXRsZTogJycsXG4gICAgaW1nOiBbXSxcbiAgICBwcmljZTogJycsXG4gICAgc3RhcjogJy4uL2ltYWdlL2dyYXlzdGFyLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHN0YXIoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc3RhcnQgPSAhc2VsZi5zdGFydFxuICAgICAgaWYgKHNlbGYuc3RhcnQpIHtcbiAgICAgICAgc2VsZi5zdGFyID0gJy4uL2ltYWdlL3JlZHN0YXIucG5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zdGFyID0gJy4uL2ltYWdlL2dyYXlzdGFyLnBuZydcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHRoaW5nID0gd2VweS5nZXRTdG9yYWdlU3luYygndGhpbmcnKVxuICAgICAgaWYgKHRoaW5nKSB7XG4gICAgICAgIHRoaW5nLnB1c2goe1xuICAgICAgICAgIGltZzogc2VsZi5pbWdbMF0sXG4gICAgICAgICAgdGl0bGU6IHNlbGYudGl0bGUsXG4gICAgICAgICAgcHJpY2U6IHNlbGYucHJpY2VcbiAgICAgICAgfSlcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndGhpbmcnLCB0aGluZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0aGluZyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IHNlbGYuaW1nWzBdLFxuICAgICAgICAgICAgdGl0bGU6IHNlbGYudGl0bGUsXG4gICAgICAgICAgICBwcmljZTogc2VsZi5wcmljZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0aGluZycsIHRoaW5nKVxuICAgICAgfVxuICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+WujOaIkCcsXG4gICAgICAgIGNvbnRlbnQ6ICfliqDlhaXotK3nianovabmiJDlip8nLFxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIHNlbGYuaW1nID0gZGF0YS5pbWFnZS5zcGxpdCgnLCcpXG4gICAgc2VsZi5wcmljZSA9IGRhdGEucHJpY2VcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=