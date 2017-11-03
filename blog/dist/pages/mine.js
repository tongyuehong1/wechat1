'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Two = function (_wepy$page) {
  _inherits(Two, _wepy$page);

  function Two() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Two);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Two.__proto__ || Object.getPrototypeOf(Two)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      src: '',
      nickName: '',
      avatarUrl: '',
      point: '../image/point.png',
      height: '',
      width: ''
    }, _this.methods = {
      message: function message() {
        _wepy2.default.navigateTo({
          url: './message'
        });
      },
      github: function github() {
        _wepy2.default.showModal({
          title: 'My Github',
          content: 'https://github.com/tongyuehong1',
          showCancel: false,
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击确定');
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      },
      email: function email() {
        _wepy2.default.showModal({
          title: 'My Email',
          content: '245503112@qq.com',
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

  _createClass(Two, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return _wepy2.default.getUserInfo({
                  success: function success(res) {
                    self.nickName = res.userInfo.nickName;
                    self.avatarUrl = res.userInfo.avatarUrl;
                    self.setData({
                      nickName: res.userInfo.nickName,
                      avatarUrl: res.userInfo.avatarUrl
                    });
                  }
                });

              case 3:
                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
                  }
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Two;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Two , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiVHdvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInBvaW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwibWVzc2FnZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnaXRodWIiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwiY2FuY2VsIiwiZW1haWwiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInNldERhdGEiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxpQkFBVyxFQUhOO0FBSUxDLGFBQU8sb0JBSkY7QUFLTEMsY0FBUSxFQUxIO0FBTUxDLGFBQU87QUFORixLLFFBUVBDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxZQU5RLG9CQU1DO0FBQ1AsdUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxXQURNO0FBRWJDLG1CQUFTLGlDQUZJO0FBR2JDLHNCQUFZLEtBSEM7QUFJYkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUEsSUFBSUMsT0FBUixFQUFpQjtBQUNmQyxzQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRCxhQUZELE1BRU8sSUFBSUgsSUFBSUksTUFBUixFQUFnQjtBQUNyQkYsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVZZLFNBQWY7QUFZRCxPQW5CTztBQW9CUkUsV0FwQlEsbUJBb0JBO0FBQ04sdUJBQUtWLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxVQURNO0FBRWJDLG1CQUFTLGtCQUZJO0FBR2JDLHNCQUFZLEtBSEM7QUFJYkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUEsSUFBSUMsT0FBUixFQUFpQjtBQUNmQyxzQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRCxhQUZELE1BRU8sSUFBSUgsSUFBSUksTUFBUixFQUFnQjtBQUNyQkYsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVZZLFNBQWY7QUFZRDtBQWpDTyxLOzs7Ozs7Ozs7Ozs7QUFvQ0pHLG9CLEdBQU8sSTs7dUJBQ0wsZUFBS0MsV0FBTCxDQUFpQjtBQUNyQlIsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQk0seUJBQUtyQixRQUFMLEdBQWdCZSxJQUFJUSxRQUFKLENBQWF2QixRQUE3QjtBQUNBcUIseUJBQUtwQixTQUFMLEdBQWlCYyxJQUFJUSxRQUFKLENBQWF0QixTQUE5QjtBQUNBb0IseUJBQUtHLE9BQUwsQ0FBYTtBQUNYeEIsZ0NBQVVlLElBQUlRLFFBQUosQ0FBYXZCLFFBRFo7QUFFWEMsaUNBQVdjLElBQUlRLFFBQUosQ0FBYXRCO0FBRmIscUJBQWI7QUFJRDtBQVJvQixpQkFBakIsQzs7O0FBVU4sK0JBQUt3QixhQUFMLENBQW1CO0FBQ2pCWCx5QkFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYTSx5QkFBS2xCLE1BQUwsR0FBY1ksSUFBSVcsWUFBbEI7QUFDQUwseUJBQUtqQixLQUFMLEdBQWFXLElBQUlZLFdBQWpCO0FBQ0Q7QUFKZ0IsaUJBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0Q2QixlQUFLQyxJOztrQkFBakJqQyxHIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd28gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgcG9pbnQ6ICcuLi9pbWFnZS9wb2ludC5wbmcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBtZXNzYWdlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9tZXNzYWdlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGdpdGh1YigpIHtcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICdNeSBHaXRodWInLFxuICAgICAgICBjb250ZW50OiAnaHR0cHM6Ly9naXRodWIuY29tL3Rvbmd5dWVob25nMScsXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgZW1haWwoKSB7XG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAnTXkgRW1haWwnLFxuICAgICAgICBjb250ZW50OiAnMjQ1NTAzMTEyQHFxLmNvbScsXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXdhaXQgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBuaWNrTmFtZTogcmVzLnVzZXJJbmZvLm5pY2tOYW1lLFxuICAgICAgICAgIGF2YXRhclVybDogcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19