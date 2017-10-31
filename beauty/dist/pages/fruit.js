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
      num: 1,
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
            price: self.price,
            num: self.num
          });
          _wepy2.default.setStorageSync('thing', thing);
        } else {
          var _thing = [{
            img: self.img[0],
            title: self.title,
            price: self.price,
            num: self.num
          }];
          _wepy2.default.setStorageSync('thing', _thing);
        }
        // wepy.showModal({
        //   title: '完成',
        //   content: '加入购物车成功',
        //   showCancel: false,
        //   success: function(res) {
        //     if (res.confirm) {
        //       console.log('用户点击确定')
        //     } else if (res.cancel) {
        //       console.log('用户点击取消')
        //     }
        //   }
        // })
        _wepy2.default.showToast({
          title: '加入成功',
          icon: 'success',
          duration: 2000
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
      self.num = data.num;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZydWl0LmpzIl0sIm5hbWVzIjpbIkZydWl0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsInRpdGxlIiwibnVtIiwiaW1nIiwicHJpY2UiLCJzdGFyIiwibWV0aG9kcyIsInNlbGYiLCJzdGFydCIsImFkZCIsInRoaW5nIiwiZ2V0U3RvcmFnZVN5bmMiLCJwdXNoIiwic2V0U3RvcmFnZVN5bmMiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJpbWFnZSIsInNwbGl0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxXQUFLLENBSkE7QUFLTEMsV0FBSyxFQUxBO0FBTUxDLGFBQU8sRUFORjtBQU9MQyxZQUFNO0FBUEQsSyxRQVNQQyxPLEdBQVU7QUFDUkQsVUFEUSxrQkFDRDtBQUNMLFlBQUlFLE9BQU8sSUFBWDtBQUNBQSxhQUFLQyxLQUFMLEdBQWEsQ0FBQ0QsS0FBS0MsS0FBbkI7QUFDQSxZQUFJRCxLQUFLQyxLQUFULEVBQWdCO0FBQ2RELGVBQUtGLElBQUwsR0FBWSxzQkFBWjtBQUNELFNBRkQsTUFFTztBQUNMRSxlQUFLRixJQUFMLEdBQVksdUJBQVo7QUFDRDtBQUNGLE9BVE87QUFVUkksU0FWUSxpQkFVRjtBQUNKLFlBQUlGLE9BQU8sSUFBWDtBQUNBLFlBQUlHLFFBQVEsZUFBS0MsY0FBTCxDQUFvQixPQUFwQixDQUFaO0FBQ0EsWUFBSUQsS0FBSixFQUFXO0FBQ1RBLGdCQUFNRSxJQUFOLENBQVc7QUFDVFQsaUJBQUtJLEtBQUtKLEdBQUwsQ0FBUyxDQUFULENBREk7QUFFVEYsbUJBQU9NLEtBQUtOLEtBRkg7QUFHVEcsbUJBQU9HLEtBQUtILEtBSEg7QUFJVEYsaUJBQUtLLEtBQUtMO0FBSkQsV0FBWDtBQU1BLHlCQUFLVyxjQUFMLENBQW9CLE9BQXBCLEVBQTZCSCxLQUE3QjtBQUNELFNBUkQsTUFRTztBQUNMLGNBQUlBLFNBQVEsQ0FDVjtBQUNFUCxpQkFBS0ksS0FBS0osR0FBTCxDQUFTLENBQVQsQ0FEUDtBQUVFRixtQkFBT00sS0FBS04sS0FGZDtBQUdFRyxtQkFBT0csS0FBS0gsS0FIZDtBQUlFRixpQkFBS0ssS0FBS0w7QUFKWixXQURVLENBQVo7QUFRQSx5QkFBS1csY0FBTCxDQUFvQixPQUFwQixFQUE2QkgsTUFBN0I7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFLSSxTQUFMLENBQWU7QUFDYmIsaUJBQU8sTUFETTtBQUViYyxnQkFBTSxTQUZPO0FBR2JDLG9CQUFVO0FBSEcsU0FBZjtBQUtEO0FBakRPLEs7Ozs7OzJCQW1ESGxCLEksRUFBTTtBQUNYLFVBQUlTLE9BQU8sSUFBWDtBQUNBQSxXQUFLTixLQUFMLEdBQWFILEtBQUtHLEtBQWxCO0FBQ0FNLFdBQUtKLEdBQUwsR0FBV0wsS0FBS21CLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQixHQUFqQixDQUFYO0FBQ0FYLFdBQUtILEtBQUwsR0FBYU4sS0FBS00sS0FBbEI7QUFDQUcsV0FBS0wsR0FBTCxHQUFXSixLQUFLSSxHQUFoQjtBQUNBLHFCQUFLaUIsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYZCxlQUFLUixNQUFMLEdBQWNzQixJQUFJQyxZQUFsQjtBQUNBZixlQUFLUCxLQUFMLEdBQWFxQixJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUE1RWdDLGVBQUtDLEk7O2tCQUFuQjdCLEsiLCJmaWxlIjoiZnJ1aXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcnVpdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE6K6i5Y2VJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHRpdGxlOiAnJyxcbiAgICBudW06IDEsXG4gICAgaW1nOiBbXSxcbiAgICBwcmljZTogJycsXG4gICAgc3RhcjogJy4uL2ltYWdlL2dyYXlzdGFyLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHN0YXIoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc3RhcnQgPSAhc2VsZi5zdGFydFxuICAgICAgaWYgKHNlbGYuc3RhcnQpIHtcbiAgICAgICAgc2VsZi5zdGFyID0gJy4uL2ltYWdlL3JlZHN0YXIucG5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zdGFyID0gJy4uL2ltYWdlL2dyYXlzdGFyLnBuZydcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHRoaW5nID0gd2VweS5nZXRTdG9yYWdlU3luYygndGhpbmcnKVxuICAgICAgaWYgKHRoaW5nKSB7XG4gICAgICAgIHRoaW5nLnB1c2goe1xuICAgICAgICAgIGltZzogc2VsZi5pbWdbMF0sXG4gICAgICAgICAgdGl0bGU6IHNlbGYudGl0bGUsXG4gICAgICAgICAgcHJpY2U6IHNlbGYucHJpY2UsXG4gICAgICAgICAgbnVtOiBzZWxmLm51bVxuICAgICAgICB9KVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0aGluZycsIHRoaW5nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRoaW5nID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogc2VsZi5pbWdbMF0sXG4gICAgICAgICAgICB0aXRsZTogc2VsZi50aXRsZSxcbiAgICAgICAgICAgIHByaWNlOiBzZWxmLnByaWNlLFxuICAgICAgICAgICAgbnVtOiBzZWxmLm51bVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0aGluZycsIHRoaW5nKVxuICAgICAgfVxuICAgICAgLy8gd2VweS5zaG93TW9kYWwoe1xuICAgICAgLy8gICB0aXRsZTogJ+WujOaIkCcsXG4gICAgICAvLyAgIGNvbnRlbnQ6ICfliqDlhaXotK3nianovabmiJDlip8nLFxuICAgICAgLy8gICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAvLyAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcbiAgICAgIC8vICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYudGl0bGUgPSBkYXRhLnRpdGxlXG4gICAgc2VsZi5pbWcgPSBkYXRhLmltYWdlLnNwbGl0KCcsJylcbiAgICBzZWxmLnByaWNlID0gZGF0YS5wcmljZVxuICAgIHNlbGYubnVtID0gZGF0YS5udW1cbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=