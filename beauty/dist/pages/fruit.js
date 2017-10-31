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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZydWl0LmpzIl0sIm5hbWVzIjpbIkZydWl0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsInRpdGxlIiwibnVtIiwiaW1nIiwicHJpY2UiLCJzdGFyIiwibWV0aG9kcyIsInNlbGYiLCJzdGFydCIsImFkZCIsInRoaW5nIiwiZ2V0U3RvcmFnZVN5bmMiLCJwdXNoIiwic2V0U3RvcmFnZVN5bmMiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImNhbmNlbCIsImltYWdlIiwic3BsaXQiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsV0FBSyxDQUpBO0FBS0xDLFdBQUssRUFMQTtBQU1MQyxhQUFPLEVBTkY7QUFPTEMsWUFBTTtBQVBELEssUUFTUEMsTyxHQUFVO0FBQ1JELFVBRFEsa0JBQ0Q7QUFDTCxZQUFJRSxPQUFPLElBQVg7QUFDQUEsYUFBS0MsS0FBTCxHQUFhLENBQUNELEtBQUtDLEtBQW5CO0FBQ0EsWUFBSUQsS0FBS0MsS0FBVCxFQUFnQjtBQUNkRCxlQUFLRixJQUFMLEdBQVksc0JBQVo7QUFDRCxTQUZELE1BRU87QUFDTEUsZUFBS0YsSUFBTCxHQUFZLHVCQUFaO0FBQ0Q7QUFDRixPQVRPO0FBVVJJLFNBVlEsaUJBVUY7QUFDSixZQUFJRixPQUFPLElBQVg7QUFDQSxZQUFJRyxRQUFRLGVBQUtDLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBWjtBQUNBLFlBQUlELEtBQUosRUFBVztBQUNUQSxnQkFBTUUsSUFBTixDQUFXO0FBQ1RULGlCQUFLSSxLQUFLSixHQUFMLENBQVMsQ0FBVCxDQURJO0FBRVRGLG1CQUFPTSxLQUFLTixLQUZIO0FBR1RHLG1CQUFPRyxLQUFLSCxLQUhIO0FBSVRGLGlCQUFLSyxLQUFLTDtBQUpELFdBQVg7QUFNQSx5QkFBS1csY0FBTCxDQUFvQixPQUFwQixFQUE2QkgsS0FBN0I7QUFDRCxTQVJELE1BUU87QUFDTCxjQUFJQSxTQUFRLENBQ1Y7QUFDRVAsaUJBQUtJLEtBQUtKLEdBQUwsQ0FBUyxDQUFULENBRFA7QUFFRUYsbUJBQU9NLEtBQUtOLEtBRmQ7QUFHRUcsbUJBQU9HLEtBQUtILEtBSGQ7QUFJRUYsaUJBQUtLLEtBQUtMO0FBSlosV0FEVSxDQUFaO0FBUUEseUJBQUtXLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkJILE1BQTdCO0FBQ0Q7QUFDRCx1QkFBS0ksU0FBTCxDQUFlO0FBQ2JiLGlCQUFPLElBRE07QUFFYmMsbUJBQVMsU0FGSTtBQUdiQyxzQkFBWSxLQUhDO0FBSWJDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZkMsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsYUFGRCxNQUVPLElBQUlILElBQUlJLE1BQVIsRUFBZ0I7QUFDckJGLHNCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBQ0Y7QUFWWSxTQUFmO0FBWUQ7QUE1Q08sSzs7Ozs7MkJBOENIdkIsSSxFQUFNO0FBQ1gsVUFBSVMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtOLEtBQUwsR0FBYUgsS0FBS0csS0FBbEI7QUFDQU0sV0FBS0osR0FBTCxHQUFXTCxLQUFLeUIsS0FBTCxDQUFXQyxLQUFYLENBQWlCLEdBQWpCLENBQVg7QUFDQWpCLFdBQUtILEtBQUwsR0FBYU4sS0FBS00sS0FBbEI7QUFDQUcsV0FBS0wsR0FBTCxHQUFXSixLQUFLSSxHQUFoQjtBQUNBLHFCQUFLdUIsYUFBTCxDQUFtQjtBQUNqQlIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWCxlQUFLUixNQUFMLEdBQWNtQixJQUFJUSxZQUFsQjtBQUNBbkIsZUFBS1AsS0FBTCxHQUFha0IsSUFBSVMsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBdkVnQyxlQUFLQyxJOztrQkFBbkJqQyxLIiwiZmlsZSI6ImZydWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJ1aXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICB0aXRsZTogJycsXG4gICAgbnVtOiAxLFxuICAgIGltZzogW10sXG4gICAgcHJpY2U6ICcnLFxuICAgIHN0YXI6ICcuLi9pbWFnZS9ncmF5c3Rhci5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzdGFyKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnN0YXJ0ID0gIXNlbGYuc3RhcnRcbiAgICAgIGlmIChzZWxmLnN0YXJ0KSB7XG4gICAgICAgIHNlbGYuc3RhciA9ICcuLi9pbWFnZS9yZWRzdGFyLnBuZydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuc3RhciA9ICcuLi9pbWFnZS9ncmF5c3Rhci5wbmcnXG4gICAgICB9XG4gICAgfSxcbiAgICBhZGQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCB0aGluZyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3RoaW5nJylcbiAgICAgIGlmICh0aGluZykge1xuICAgICAgICB0aGluZy5wdXNoKHtcbiAgICAgICAgICBpbWc6IHNlbGYuaW1nWzBdLFxuICAgICAgICAgIHRpdGxlOiBzZWxmLnRpdGxlLFxuICAgICAgICAgIHByaWNlOiBzZWxmLnByaWNlLFxuICAgICAgICAgIG51bTogc2VsZi5udW1cbiAgICAgICAgfSlcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndGhpbmcnLCB0aGluZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0aGluZyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IHNlbGYuaW1nWzBdLFxuICAgICAgICAgICAgdGl0bGU6IHNlbGYudGl0bGUsXG4gICAgICAgICAgICBwcmljZTogc2VsZi5wcmljZSxcbiAgICAgICAgICAgIG51bTogc2VsZi5udW1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndGhpbmcnLCB0aGluZylcbiAgICAgIH1cbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICflrozmiJAnLFxuICAgICAgICBjb250ZW50OiAn5Yqg5YWl6LSt54mp6L2m5oiQ5YqfJyxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi50aXRsZSA9IGRhdGEudGl0bGVcbiAgICBzZWxmLmltZyA9IGRhdGEuaW1hZ2Uuc3BsaXQoJywnKVxuICAgIHNlbGYucHJpY2UgPSBkYXRhLnByaWNlXG4gICAgc2VsZi5udW0gPSBkYXRhLm51bVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==