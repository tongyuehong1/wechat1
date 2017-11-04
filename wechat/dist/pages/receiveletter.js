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

var List = function (_wepy$page) {
  _inherits(List, _wepy$page);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      second: '',
      pic: '../images/cat.jpg',
      height: '',
      width: '',
      index: 0
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var self;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;

                self.index = data.index;
                self.wechat = data.wechat;
                _wepy2.default.getUserInfo({
                  success: function () {
                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              self.nickName = res.userInfo.nickName;
                              self.avatarUrl = res.userInfo.avatarUrl;
                              _context.next = 4;
                              return _wepy2.default.request({
                                url: 'http://127.0.0.1:7001/hearts/list',
                                method: 'POST',
                                data: {
                                  wechat: self.wechat
                                },
                                success: function success(res) {
                                  self.text = res.data[self.index];
                                  self.setData({
                                    text: res.data[self.index]
                                  });
                                }
                              });

                            case 4:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));

                    function success(_x2) {
                      return _ref3.apply(this, arguments);
                    }

                    return success;
                  }()
                });
                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
                  }
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return List;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(List , 'pages/receiveletter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpdmVsZXR0ZXIuanMiXSwibmFtZXMiOlsiTGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwic2Vjb25kIiwicGljIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbmRleCIsIm1ldGhvZHMiLCJzZWxmIiwid2VjaGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ0ZXh0Iiwic2V0RGF0YSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsV0FBSyxtQkFIQTtBQUlMQyxjQUFRLEVBSkg7QUFLTEMsYUFBTyxFQUxGO0FBTUxDLGFBQU87QUFORixLLFFBUVBDLE8sR0FBVSxFOzs7Ozs7NEZBR0dQLEk7Ozs7OztBQUNQUSxvQixHQUFPLEk7O0FBQ1hBLHFCQUFLRixLQUFMLEdBQWFOLEtBQUtNLEtBQWxCO0FBQ0FFLHFCQUFLQyxNQUFMLEdBQWNULEtBQUtTLE1BQW5CO0FBQ0EsK0JBQUtDLFdBQUwsQ0FBaUI7QUFDZkM7QUFBQSx3RkFBUyxpQkFBZUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BKLG1DQUFLSyxRQUFMLEdBQWdCRCxJQUFJRSxRQUFKLENBQWFELFFBQTdCO0FBQ0FMLG1DQUFLTyxTQUFMLEdBQWlCSCxJQUFJRSxRQUFKLENBQWFDLFNBQTlCO0FBRk87QUFBQSxxQ0FHRCxlQUFLQyxPQUFMLENBQWE7QUFDakJDLHFDQUFLLG1DQURZO0FBRWpCQyx3Q0FBUSxNQUZTO0FBR2pCbEIsc0NBQU07QUFDSlMsMENBQVFELEtBQUtDO0FBRFQsaUNBSFc7QUFNakJFLHlDQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJKLHVDQUFLVyxJQUFMLEdBQVlQLElBQUlaLElBQUosQ0FBU1EsS0FBS0YsS0FBZCxDQUFaO0FBQ0FFLHVDQUFLWSxPQUFMLENBQWE7QUFDWEQsMENBQU1QLElBQUlaLElBQUosQ0FBU1EsS0FBS0YsS0FBZDtBQURLLG1DQUFiO0FBR0Q7QUFYZ0IsK0JBQWIsQ0FIQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBVDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURlLGlCQUFqQjtBQW1CQSwrQkFBS2UsYUFBTCxDQUFtQjtBQUNqQlYseUJBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEoseUJBQUtKLE1BQUwsR0FBY1EsSUFBSVUsWUFBbEI7QUFDQWQseUJBQUtILEtBQUwsR0FBYU8sSUFBSVcsV0FBakI7QUFDRDtBQUpnQixpQkFBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0QzhCLGVBQUtDLEk7O2tCQUFsQjNCLEkiLCJmaWxlIjoicmVjZWl2ZWxldHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgc2Vjb25kOiAnJyxcbiAgICBwaWM6ICcuLi9pbWFnZXMvY2F0LmpwZycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgaW5kZXg6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuXG4gIH1cbiAgYXN5bmMgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmluZGV4ID0gZGF0YS5pbmRleFxuICAgIHNlbGYud2VjaGF0ID0gZGF0YS53ZWNoYXRcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvbGlzdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2VjaGF0OiBzZWxmLndlY2hhdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVtzZWxmLmluZGV4XVxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFbc2VsZi5pbmRleF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19