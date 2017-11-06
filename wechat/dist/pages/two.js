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
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      nickName: '',
      avatarUrl: '',
      point: '../images/point.png',
      height: '',
      width: ''
    }, _this.methods = {
      missing: function missing() {
        _wepy2.default.navigateTo({
          url: './missing'
        });
      },
      photo: function photo() {
        _wepy2.default.navigateTo({
          url: './photo'
        });
      },
      memory: function memory() {
        _wepy2.default.navigateTo({
          url: './showmemory'
        });
      },
      TA: function TA() {
        _wepy2.default.navigateTo({
          url: './temporary'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Two , 'pages/two'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by5qcyJdLCJuYW1lcyI6WyJUd28iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwicG9pbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJtaXNzaW5nIiwibmF2aWdhdGVUbyIsInVybCIsInBob3RvIiwibWVtb3J5IiwiVEEiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJzZXREYXRhIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsaUJBQVcsRUFITjtBQUlMQyxhQUFPLHFCQUpGO0FBS0xDLGNBQVEsRUFMSDtBQU1MQyxhQUFPO0FBTkYsSyxRQVFQQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsV0FOUSxtQkFNQTtBQUNOLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsWUFYUSxvQkFXQztBQUNQLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BZk87QUFnQlJHLFFBaEJRLGdCQWdCSDtBQUNILHVCQUFLSixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBcEJPLEs7Ozs7Ozs7Ozs7OztBQXVCSkksb0IsR0FBTyxJOzt1QkFDTCxlQUFLQyxXQUFMLENBQWlCO0FBQ3JCQywyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCx5QkFBS1osUUFBTCxHQUFnQmUsSUFBSUMsUUFBSixDQUFhaEIsUUFBN0I7QUFDQVkseUJBQUtYLFNBQUwsR0FBaUJjLElBQUlDLFFBQUosQ0FBYWYsU0FBOUI7QUFDQVcseUJBQUtLLE9BQUwsQ0FBYTtBQUNYakIsZ0NBQVVlLElBQUlDLFFBQUosQ0FBYWhCLFFBRFo7QUFFWEMsaUNBQVdjLElBQUlDLFFBQUosQ0FBYWY7QUFGYixxQkFBYjtBQUlEO0FBUm9CLGlCQUFqQixDOzs7QUFVTiwrQkFBS2lCLGFBQUwsQ0FBbUI7QUFDakJKLHlCQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILHlCQUFLVCxNQUFMLEdBQWNZLElBQUlJLFlBQWxCO0FBQ0FQLHlCQUFLUixLQUFMLEdBQWFXLElBQUlLLFdBQWpCO0FBQ0Q7QUFKZ0IsaUJBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUM2QixlQUFLQyxJOztrQkFBakIxQixHIiwiZmlsZSI6InR3by5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3byBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5oOF5LmmJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBwb2ludDogJy4uL2ltYWdlcy9wb2ludC5wbmcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBtaXNzaW5nKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9taXNzaW5nJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBob3RvKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9waG90bydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBtZW1vcnkoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3Nob3dtZW1vcnknXG4gICAgICB9KVxuICAgIH0sXG4gICAgVEEoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3RlbXBvcmFyeSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIG5pY2tOYW1lOiByZXMudXNlckluZm8ubmlja05hbWUsXG4gICAgICAgICAgYXZhdGFyVXJsOiByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=