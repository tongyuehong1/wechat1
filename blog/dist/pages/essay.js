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

var Essay = function (_wepy$page) {
  _inherits(Essay, _wepy$page);

  function Essay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Essay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Essay.__proto__ || Object.getPrototypeOf(Essay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '博客'
    }, _this.data = {
      type: ['JavaScript', 'CSS', 'Html', 'MySql'],
      height: '',
      width: '',
      currentTargetId: 0,
      someone: 'JavaScript',
      text: '',
      id: 0
    }, _this.methods = {
      choose: function choose(e) {
        var self = this;
        self.currentTargetId = e.currentTarget.id;
        self.someone = self.type[self.currentTargetId];
        console.log(self.someone);
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/essay',
          method: 'POST',
          data: {
            type: self.someone
          },
          success: function success(res) {
            self.text = res.data;
            self.setData({
              text: res.data
            });
          }
        });
      },
      select: function select(e) {
        var self = this;
        self.id = e.currentTarget.id;
        console.log(self.id);
        console.log(self.someone);
        _wepy2.default.navigateTo({
          url: './showessay?index=' + self.id + '&type=' + self.someone
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Essay, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/essay',
        method: 'POST',
        data: {
          type: self.someone
        },
        success: function success(res) {
          self.text = res.data;
          self.setData({
            text: res.data
          });
        }
      });
    }
  }]);

  return Essay;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Essay , 'pages/essay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzc2F5LmpzIl0sIm5hbWVzIjpbIkVzc2F5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0eXBlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjdXJyZW50VGFyZ2V0SWQiLCJzb21lb25lIiwidGV4dCIsImlkIiwibWV0aG9kcyIsImNob29zZSIsImUiLCJzZWxmIiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJzZWxlY3QiLCJuYXZpZ2F0ZVRvIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FDSixZQURJLEVBRUosS0FGSSxFQUdKLE1BSEksRUFJSixPQUpJLENBREQ7QUFPTEMsY0FBUSxFQVBIO0FBUUxDLGFBQU8sRUFSRjtBQVNMQyx1QkFBaUIsQ0FUWjtBQVVMQyxlQUFTLFlBVko7QUFXTEMsWUFBTSxFQVhEO0FBWUxDLFVBQUk7QUFaQyxLLFFBY1BDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1AsZUFBTCxHQUF1Qk0sRUFBRUUsYUFBRixDQUFnQkwsRUFBdkM7QUFDQUksYUFBS04sT0FBTCxHQUFlTSxLQUFLVixJQUFMLENBQVVVLEtBQUtQLGVBQWYsQ0FBZjtBQUNBUyxnQkFBUUMsR0FBUixDQUFZSCxLQUFLTixPQUFqQjtBQUNBLHVCQUFLVSxPQUFMLENBQWE7QUFDWEMsZUFBSyw2QkFETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hqQixnQkFBTTtBQUNKQyxrQkFBTVUsS0FBS047QUFEUCxXQUhLO0FBTVhhLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJSLGlCQUFLTCxJQUFMLEdBQVlhLElBQUluQixJQUFoQjtBQUNBVyxpQkFBS1MsT0FBTCxDQUFhO0FBQ1hkLG9CQUFNYSxJQUFJbkI7QUFEQyxhQUFiO0FBR0Q7QUFYVSxTQUFiO0FBYUQsT0FuQk87QUFvQlJxQixZQXBCUSxrQkFvQkRYLENBcEJDLEVBb0JFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLEVBQUwsR0FBVUcsRUFBRUUsYUFBRixDQUFnQkwsRUFBMUI7QUFDQU0sZ0JBQVFDLEdBQVIsQ0FBWUgsS0FBS0osRUFBakI7QUFDQU0sZ0JBQVFDLEdBQVIsQ0FBWUgsS0FBS04sT0FBakI7QUFDQSx1QkFBS2lCLFVBQUwsQ0FBZ0I7QUFDZE4sc0NBQTBCTCxLQUFLSixFQUEvQixjQUEwQ0ksS0FBS047QUFEakMsU0FBaEI7QUFHRDtBQTVCTyxLOzs7Ozs2QkE4QkQ7QUFDUCxVQUFJTSxPQUFPLElBQVg7QUFDQSxxQkFBS1ksYUFBTCxDQUFtQjtBQUNqQkwsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUixlQUFLVCxNQUFMLEdBQWNpQixJQUFJSyxZQUFsQjtBQUNBYixlQUFLUixLQUFMLEdBQWFnQixJQUFJTSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUEscUJBQUtWLE9BQUwsQ0FBYTtBQUNYQyxhQUFLLDZCQURNO0FBRVhDLGdCQUFRLE1BRkc7QUFHWGpCLGNBQU07QUFDSkMsZ0JBQU1VLEtBQUtOO0FBRFAsU0FISztBQU1YYSxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCUixlQUFLTCxJQUFMLEdBQVlhLElBQUluQixJQUFoQjtBQUNBVyxlQUFLUyxPQUFMLENBQWE7QUFDWGQsa0JBQU1hLElBQUluQjtBQURDLFdBQWI7QUFHRDtBQVhVLE9BQWI7QUFhRDs7OztFQXJFZ0MsZUFBSzBCLEk7O2tCQUFuQjdCLEsiLCJmaWxlIjoiZXNzYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXNzYXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljZrlrqInXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICB0eXBlOiBbXG4gICAgICAgICdKYXZhU2NyaXB0JyxcbiAgICAgICAgJ0NTUycsXG4gICAgICAgICdIdG1sJyxcbiAgICAgICAgJ015U3FsJ1xuICAgICAgXSxcbiAgICAgIGhlaWdodDogJycsXG4gICAgICB3aWR0aDogJycsXG4gICAgICBjdXJyZW50VGFyZ2V0SWQ6IDAsXG4gICAgICBzb21lb25lOiAnSmF2YVNjcmlwdCcsXG4gICAgICB0ZXh0OiAnJyxcbiAgICAgIGlkOiAwXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjaG9vc2UoZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5jdXJyZW50VGFyZ2V0SWQgPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgICAgc2VsZi5zb21lb25lID0gc2VsZi50eXBlW3NlbGYuY3VycmVudFRhcmdldElkXVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnNvbWVvbmUpXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2Vzc2F5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiBzZWxmLnNvbWVvbmVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzZWxlY3QoZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5pZCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmlkKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnNvbWVvbmUpXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgLi9zaG93ZXNzYXk/aW5kZXg9JHtzZWxmLmlkfSZ0eXBlPSR7c2VsZi5zb21lb25lfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9lc3NheScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogc2VsZi5zb21lb25lXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==