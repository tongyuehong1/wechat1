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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by5qcyJdLCJuYW1lcyI6WyJUd28iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwicG9pbnQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJtaXNzaW5nIiwibmF2aWdhdGVUbyIsInVybCIsInBob3RvIiwibWVtb3J5Iiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwic2V0RGF0YSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGlCQUFXLEVBSE47QUFJTEMsYUFBTyxxQkFKRjtBQUtMQyxjQUFRLEVBTEg7QUFNTEMsYUFBTztBQU5GLEssUUFRUEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFdBTlEsbUJBTUE7QUFDTix1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVZPO0FBV1JFLFlBWFEsb0JBV0M7QUFDUCx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQWZPLEs7Ozs7Ozs7Ozs7OztBQWtCSkcsb0IsR0FBTyxJOzt1QkFDTCxlQUFLQyxXQUFMLENBQWlCO0FBQ3JCQywyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCx5QkFBS1gsUUFBTCxHQUFnQmMsSUFBSUMsUUFBSixDQUFhZixRQUE3QjtBQUNBVyx5QkFBS1YsU0FBTCxHQUFpQmEsSUFBSUMsUUFBSixDQUFhZCxTQUE5QjtBQUNBVSx5QkFBS0ssT0FBTCxDQUFhO0FBQ1hoQixnQ0FBVWMsSUFBSUMsUUFBSixDQUFhZixRQURaO0FBRVhDLGlDQUFXYSxJQUFJQyxRQUFKLENBQWFkO0FBRmIscUJBQWI7QUFJRDtBQVJvQixpQkFBakIsQzs7O0FBVU4sK0JBQUtnQixhQUFMLENBQW1CO0FBQ2pCSix5QkFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCx5QkFBS1IsTUFBTCxHQUFjVyxJQUFJSSxZQUFsQjtBQUNBUCx5QkFBS1AsS0FBTCxHQUFhVSxJQUFJSyxXQUFqQjtBQUNEO0FBSmdCLGlCQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpDNkIsZUFBS0MsSTs7a0JBQWpCekIsRyIsImZpbGUiOiJ0d28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd28gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgcG9pbnQ6ICcuLi9pbWFnZXMvcG9pbnQucG5nJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbWlzc2luZygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbWlzc2luZydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwaG90bygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vcGhvdG8nXG4gICAgICB9KVxuICAgIH0sXG4gICAgbWVtb3J5KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9zaG93bWVtb3J5J1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgbmlja05hbWU6IHJlcy51c2VySW5mby5uaWNrTmFtZSxcbiAgICAgICAgICBhdmF0YXJVcmw6IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==