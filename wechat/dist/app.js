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
      pages: ['pages/hearts', 'pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: 'pink',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        list: [{
          pagePath: 'pages/index',
          color: '#000000',
          selectedColor: '#808080',
          backgroundColor: '#ffc0cb',
          iconPath: './images/book.png',
          selectedIconPath: './images/booktwo.png',
          text: '攻略'
        }, {
          pagePath: 'pages/hearts',
          color: '#000000',
          selectedColor: '#808080',
          backgroundColor: '#ffc0cb',
          iconPath: './images/hearts.png',
          selectedIconPath: './images/hearttwo.png',
          text: '小情书'
        }, {
          pagePath: 'pages/two',
          color: '#000000',
          selectedColor: '#808080',
          backgroundColor: '#ffc0cb',
          iconPath: './images/two.png',
          selectedIconPath: './images/twotwo.png',
          text: '我们'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQStDRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBNUNkQSxNQTRDYyxHQTVDTDtBQUNQQyxhQUFPLENBQ0wsY0FESyxFQUVMLGFBRkssQ0FEQTtBQUtQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BTEQ7QUFXUEMsY0FBUTtBQUNOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsYUFETDtBQUVMQyxpQkFBTyxTQUZGO0FBR0xDLHlCQUFlLFNBSFY7QUFJTEMsMkJBQWlCLFNBSlo7QUFLTEMsb0JBQVUsbUJBTEw7QUFNTEMsNEJBQWtCLHNCQU5iO0FBT0xDLGdCQUFNO0FBUEQsU0FBRCxFQVFIO0FBQ0ROLG9CQUFVLGNBRFQ7QUFFREMsaUJBQU8sU0FGTjtBQUdEQyx5QkFBZSxTQUhkO0FBSURDLDJCQUFpQixTQUpoQjtBQUtEQyxvQkFBVSxxQkFMVDtBQU1EQyw0QkFBa0IsdUJBTmpCO0FBT0RDLGdCQUFNO0FBUEwsU0FSRyxFQWdCSDtBQUNETixvQkFBVSxXQURUO0FBRURDLGlCQUFPLFNBRk47QUFHREMseUJBQWUsU0FIZDtBQUlEQywyQkFBaUIsU0FKaEI7QUFLREMsb0JBQVUsa0JBTFQ7QUFNREMsNEJBQWtCLHFCQU5qQjtBQU9EQyxnQkFBTTtBQVBMLFNBaEJHO0FBREE7QUFYRCxLQTRDSztBQUFBLFVBSmRDLFVBSWMsR0FKRDtBQUNYQyxnQkFBVTtBQURDLEtBSUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGWTtBQUdiOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRUtDLEMsRUFBRztBQUNQLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWEgsZUFBS2QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJnQixJQUFJaEIsUUFBL0I7QUFDQVksZ0JBQU1BLEdBQUdJLElBQUloQixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUE5RTBCLGVBQUtpQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaGVhcnRzJyxcclxuICAgICAgJ3BhZ2VzL2luZGV4J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAncGluaycsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICBzZWxlY3RlZENvbG9yOiAnIzgwODA4MCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmYzBjYicsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9ib29rLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2Jvb2t0d28ucG5nJyxcclxuICAgICAgICB0ZXh0OiAn5pS755WlJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9oZWFydHMnLFxyXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogJyM4MDgwODAnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmMwY2InLFxyXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvaGVhcnRzLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2hlYXJ0dHdvLnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+Wwj+aDheS5pidcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdHdvJyxcclxuICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjODA4MDgwJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZjMGNiJyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3R3by5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90d290d28ucG5nJyxcclxuICAgICAgICB0ZXh0OiAn5oiR5LusJ1xyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgdGhpcy50ZXN0QXN5bmMoKVxyXG4gIH1cclxuXHJcbiAgc2xlZXAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19