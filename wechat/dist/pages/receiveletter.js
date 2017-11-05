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
      index: 0,
      letterid: ''
    }, _this.methods = {
      delete: function _delete() {
        var self = this;
        _wepy2.default.request({
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
            self.letterid = self.text.id;
            console.log(self.letterid, 'id');
            _wepy2.default.request({
              url: 'http://127.0.0.1:7001/hearts/delete',
              method: 'POST',
              data: {
                id: self.letterid
              },
              success: function success(res) {
                _wepy2.default.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 2000,
                  success: function success() {
                    _wepy2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
              }
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VpdmVsZXR0ZXIuanMiXSwibmFtZXMiOlsiTGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwic2Vjb25kIiwicGljIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbmRleCIsImxldHRlcmlkIiwibWV0aG9kcyIsImRlbGV0ZSIsInNlbGYiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwid2VjaGF0Iiwic3VjY2VzcyIsInJlcyIsInRleHQiLCJzZXREYXRhIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFVzZXJJbmZvIiwibmlja05hbWUiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsV0FBSyxtQkFIQTtBQUlMQyxjQUFRLEVBSkg7QUFLTEMsYUFBTyxFQUxGO0FBTUxDLGFBQU8sQ0FORjtBQU9MQyxnQkFBVTtBQVBMLEssUUFTUEMsTyxHQUFVO0FBQ1JDLFlBRFEscUJBQ0M7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQSx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssbUNBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYYixnQkFBTTtBQUNKYyxvQkFBUUosS0FBS0k7QUFEVCxXQUhLO0FBTVhDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJOLGlCQUFLTyxJQUFMLEdBQVlELElBQUloQixJQUFKLENBQVNVLEtBQUtKLEtBQWQsQ0FBWjtBQUNBSSxpQkFBS1EsT0FBTCxDQUFhO0FBQ1hELG9CQUFNRCxJQUFJaEIsSUFBSixDQUFTVSxLQUFLSixLQUFkO0FBREssYUFBYjtBQUdBSSxpQkFBS0gsUUFBTCxHQUFnQkcsS0FBS08sSUFBTCxDQUFVRSxFQUExQjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZWCxLQUFLSCxRQUFqQixFQUEyQixJQUEzQjtBQUNBLDJCQUFLSSxPQUFMLENBQWE7QUFDWEMsbUJBQUsscUNBRE07QUFFWEMsc0JBQVEsTUFGRztBQUdYYixvQkFBTTtBQUNKbUIsb0JBQUlULEtBQUtIO0FBREwsZUFISztBQU1YUSx1QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLCtCQUFLTSxTQUFMLENBQWU7QUFDYkMseUJBQU8sTUFETTtBQUViQyx3QkFBTSxTQUZPO0FBR2JDLDRCQUFVLElBSEc7QUFJYlYsMkJBQVMsbUJBQVc7QUFDbEIsbUNBQUtXLFlBQUwsQ0FBa0I7QUFDaEJDLDZCQUFPO0FBRFMscUJBQWxCO0FBR0Q7QUFSWSxpQkFBZjtBQVVEO0FBakJVLGFBQWI7QUFtQkQ7QUFoQ1UsU0FBYjtBQWtDRDtBQXJDTyxLOzs7Ozs7NEZBdUNHM0IsSTs7Ozs7O0FBQ1BVLG9CLEdBQU8sSTs7QUFDWEEscUJBQUtKLEtBQUwsR0FBYU4sS0FBS00sS0FBbEI7QUFDQUkscUJBQUtJLE1BQUwsR0FBY2QsS0FBS2MsTUFBbkI7QUFDQSwrQkFBS2MsV0FBTCxDQUFpQjtBQUNmYjtBQUFBLHdGQUFTLGlCQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUE4sbUNBQUttQixRQUFMLEdBQWdCYixJQUFJYyxRQUFKLENBQWFELFFBQTdCO0FBQ0FuQixtQ0FBS3FCLFNBQUwsR0FBaUJmLElBQUljLFFBQUosQ0FBYUMsU0FBOUI7QUFGTztBQUFBLHFDQUdELGVBQUtwQixPQUFMLENBQWE7QUFDakJDLHFDQUFLLG1DQURZO0FBRWpCQyx3Q0FBUSxNQUZTO0FBR2pCYixzQ0FBTTtBQUNKYywwQ0FBUUosS0FBS0k7QUFEVCxpQ0FIVztBQU1qQkMseUNBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQk4sdUNBQUtPLElBQUwsR0FBWUQsSUFBSWhCLElBQUosQ0FBU1UsS0FBS0osS0FBZCxDQUFaO0FBQ0FJLHVDQUFLUSxPQUFMLENBQWE7QUFDWEQsMENBQU1ELElBQUloQixJQUFKLENBQVNVLEtBQUtKLEtBQWQ7QUFESyxtQ0FBYjtBQUdEO0FBWGdCLCtCQUFiLENBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSxpQkFBakI7QUFtQkEsK0JBQUswQixhQUFMLENBQW1CO0FBQ2pCakIseUJBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWE4seUJBQUtOLE1BQUwsR0FBY1ksSUFBSWlCLFlBQWxCO0FBQ0F2Qix5QkFBS0wsS0FBTCxHQUFhVyxJQUFJa0IsV0FBakI7QUFDRDtBQUpnQixpQkFBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzRThCLGVBQUtDLEk7O2tCQUFsQnRDLEkiLCJmaWxlIjoicmVjZWl2ZWxldHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgc2Vjb25kOiAnJyxcbiAgICBwaWM6ICcuLi9pbWFnZXMvY2F0LmpwZycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgaW5kZXg6IDAsXG4gICAgbGV0dGVyaWQ6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBkZWxldGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvbGlzdCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgd2VjaGF0OiBzZWxmLndlY2hhdFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVtzZWxmLmluZGV4XVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICB0ZXh0OiByZXMuZGF0YVtzZWxmLmluZGV4XVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2VsZi5sZXR0ZXJpZCA9IHNlbGYudGV4dC5pZFxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYubGV0dGVyaWQsICdpZCcpXG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvZGVsZXRlJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBpZDogc2VsZi5sZXR0ZXJpZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliKDpmaTmiJDlip8nLFxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGFzeW5jIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5pbmRleCA9IGRhdGEuaW5kZXhcbiAgICBzZWxmLndlY2hhdCA9IGRhdGEud2VjaGF0XG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvaGVhcnRzL2xpc3QnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdlY2hhdDogc2VsZi53ZWNoYXRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFbc2VsZi5pbmRleF1cbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhW3NlbGYuaW5kZXhdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==