'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/cart', 'pages/mine',
      // 'pages/next',
      'pages/zero', 'pages/first', 'pages/second', 'pages/fruit', 'pages/set'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        backgroundColor: '#ffffff',
        color: '#808080',
        selectedColor: '#000000',
        list: [{
          pagePath: 'pages/home',
          iconPath: './image/grayshop.png',
          selectedIconPath: './image/blackshop.png',
          text: '商城'
        }, {
          pagePath: 'pages/cart',
          iconPath: './image/graycart.png',
          selectedIconPath: './image/blackcart.png',
          text: '购物车'
        }, {
          pagePath: 'pages/mine',
          iconPath: './image/graymine.png',
          selectedIconPath: './image/blackmine.png',
          text: '我的'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWdERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBN0NmQSxNQTZDZSxHQTdDTjtBQUNQQyxhQUFPLENBQ0wsWUFESyxFQUVMLFlBRkssRUFHTCxZQUhLO0FBSUw7QUFDQSxrQkFMSyxFQU1MLGFBTkssRUFPTCxjQVBLLEVBUUwsYUFSSyxFQVNMLFdBVEssQ0FEQTtBQVlQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BWkQ7QUFrQlBDLGNBQVE7QUFDTkMseUJBQWlCLFNBRFg7QUFFTkMsZUFBTyxTQUZEO0FBR05DLHVCQUFlLFNBSFQ7QUFJTkMsY0FBTSxDQUFDO0FBQ0xDLG9CQUFVLFlBREw7QUFFTEMsb0JBQVUsc0JBRkw7QUFHTEMsNEJBQWtCLHVCQUhiO0FBSUxDLGdCQUFNO0FBSkQsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLFlBRFQ7QUFFREMsb0JBQVUsc0JBRlQ7QUFHREMsNEJBQWtCLHVCQUhqQjtBQUlEQyxnQkFBTTtBQUpMLFNBTEcsRUFVSDtBQUNESCxvQkFBVSxZQURUO0FBRURDLG9CQUFVLHNCQUZUO0FBR0RDLDRCQUFrQix1QkFIakI7QUFJREMsZ0JBQU07QUFKTCxTQVZHO0FBSkE7QUFsQkQsS0E2Q007QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRmE7QUFHZDs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDRDs7OzBCQUVNQyxDLEVBQUc7QUFDUixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VHLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2QsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtjLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZ0IsSUFBSWhCLFFBQS9CO0FBQ0FZLGdCQUFNQSxHQUFHSSxJQUFJaEIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBL0UwQixlQUFLaUIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2hvbWUnLFxyXG4gICAgICAncGFnZXMvY2FydCcsXHJcbiAgICAgICdwYWdlcy9taW5lJyxcclxuICAgICAgLy8gJ3BhZ2VzL25leHQnLFxyXG4gICAgICAncGFnZXMvemVybycsXHJcbiAgICAgICdwYWdlcy9maXJzdCcsXHJcbiAgICAgICdwYWdlcy9zZWNvbmQnLFxyXG4gICAgICAncGFnZXMvZnJ1aXQnLFxyXG4gICAgICAncGFnZXMvc2V0J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBjb2xvcjogJyM4MDgwODAnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lJyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2UvZ3JheXNob3AucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS9ibGFja3Nob3AucG5nJyxcclxuICAgICAgICB0ZXh0OiAn5ZWG5Z+OJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9jYXJ0JyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2UvZ3JheWNhcnQucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS9ibGFja2NhcnQucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6LSt54mp6L2mJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lJyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2UvZ3JheW1pbmUucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS9ibGFja21pbmUucG5nJyxcclxuICAgICAgICB0ZXh0OiAn5oiR55qEJ1xyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIHRoaXMudGVzdEFzeW5jKClcclxuICB9XHJcblxyXG4gIHNsZWVwIChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==