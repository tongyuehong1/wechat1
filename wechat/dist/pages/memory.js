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

var Memory = function (_wepy$page) {
  _inherits(Memory, _wepy$page);

  function Memory() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Memory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Memory.__proto__ || Object.getPrototypeOf(Memory)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '回忆集'
    }, _this.data = {
      src: '',
      height: '',
      width: '',
      add: '../images/add.png',
      img: [],
      arr: '',
      essay: '',
      title: ''
    }, _this.methods = {
      letter: function letter(e) {
        var self = this;
        self.essay = e.detail.value;
      },
      input: function input(e) {
        var self = this;
        self.title = e.detail.value;
      },
      image: function image() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var arr = self.img;
            var image = arr.concat(res.tempFilePaths);
            self.img = image;
            self.setData({
              img: image
            });
          }
        });
      },
      insert: function insert() {
        var self = this;
        _wepy2.default.getUserInfo({
          success: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self.nickName = res.userInfo.nickName;
                      self.avatarUrl = res.userInfo.avatarUrl;

                      if (!(self.img !== '' & self.essay !== '')) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 5;
                      return _wepy2.default.request({
                        url: 'http://127.0.0.1:7001/memory/insert',
                        method: 'POST',
                        data: {
                          wechat: self.nickName,
                          img: self.img,
                          title: self.title,
                          essay: self.essay
                        },
                        success: function success(res) {
                          console.log(res);
                          _wepy2.default.showToast({
                            title: '成功',
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

                    case 5:
                      _context.next = 8;
                      break;

                    case 7:
                      _wepy2.default.showToast({
                        title: '请补充信息',
                        image: '../images/hint.png'
                      });

                    case 8:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function success(_x) {
              return _ref2.apply(this, arguments);
            }

            return success;
          }()
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Memory, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Memory;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Memory , 'pages/memory'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbW9yeS5qcyJdLCJuYW1lcyI6WyJNZW1vcnkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWRkIiwiaW1nIiwiYXJyIiwiZXNzYXkiLCJ0aXRsZSIsIm1ldGhvZHMiLCJsZXR0ZXIiLCJlIiwic2VsZiIsImRldGFpbCIsInZhbHVlIiwiaW5wdXQiLCJpbWFnZSIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJpbnNlcnQiLCJnZXRVc2VySW5mbyIsIm5pY2tOYW1lIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwid2VjaGF0IiwiY29uc29sZSIsImxvZyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsV0FBSyxtQkFKQTtBQUtMQyxXQUFLLEVBTEE7QUFNTEMsV0FBSyxFQU5BO0FBT0xDLGFBQU8sRUFQRjtBQVFMQyxhQUFPO0FBUkYsSyxRQVVQQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsQ0FEQyxFQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtMLEtBQUwsR0FBYUksRUFBRUUsTUFBRixDQUFTQyxLQUF0QjtBQUNELE9BSk87QUFLUkMsV0FMUSxpQkFLRkosQ0FMRSxFQUtDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLEtBQUwsR0FBYUcsRUFBRUUsTUFBRixDQUFTQyxLQUF0QjtBQUNELE9BUk87QUFTUkUsV0FUUSxtQkFTQTtBQUNOLFlBQUlKLE9BQU8sSUFBWDtBQUNBLHVCQUFLSyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFEsRUFDTDtBQUNWQyxvQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRks7QUFHZkMsc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHO0FBSWZDLGlCQUplLG1CQUlQQyxHQUpPLEVBSUY7QUFDWCxnQkFBSWhCLE1BQU1NLEtBQUtQLEdBQWY7QUFDQSxnQkFBSVcsUUFBUVYsSUFBSWlCLE1BQUosQ0FBV0QsSUFBSUUsYUFBZixDQUFaO0FBQ0FaLGlCQUFLUCxHQUFMLEdBQVdXLEtBQVg7QUFDQUosaUJBQUthLE9BQUwsQ0FBYTtBQUNYcEIsbUJBQUtXO0FBRE0sYUFBYjtBQUdEO0FBWGMsU0FBakI7QUFhRCxPQXhCTztBQXlCUlUsWUF6QlEsb0JBeUJDO0FBQ1AsWUFBSWQsT0FBTyxJQUFYO0FBQ0EsdUJBQUtlLFdBQUwsQ0FBaUI7QUFDZk47QUFBQSxnRkFBUyxpQkFBZUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BWLDJCQUFLZ0IsUUFBTCxHQUFnQk4sSUFBSU8sUUFBSixDQUFhRCxRQUE3QjtBQUNBaEIsMkJBQUtrQixTQUFMLEdBQWlCUixJQUFJTyxRQUFKLENBQWFDLFNBQTlCOztBQUZPLDRCQUdIbEIsS0FBS1AsR0FBTCxLQUFhLEVBQWIsR0FBa0JPLEtBQUtMLEtBQUwsS0FBZSxFQUg5QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZCQUlDLGVBQUt3QixPQUFMLENBQWE7QUFDakJDLDZCQUFLLHFDQURZO0FBRWpCQyxnQ0FBUSxNQUZTO0FBR2pCakMsOEJBQU07QUFDSmtDLGtDQUFRdEIsS0FBS2dCLFFBRFQ7QUFFSnZCLCtCQUFLTyxLQUFLUCxHQUZOO0FBR0pHLGlDQUFPSSxLQUFLSixLQUhSO0FBSUpELGlDQUFPSyxLQUFLTDtBQUpSLHlCQUhXO0FBU2pCYyxpQ0FBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCYSxrQ0FBUUMsR0FBUixDQUFZZCxHQUFaO0FBQ0EseUNBQUtlLFNBQUwsQ0FBZTtBQUNiN0IsbUNBQU8sSUFETTtBQUViOEIsa0NBQU0sU0FGTztBQUdiQyxzQ0FBVSxJQUhHO0FBSWJsQixxQ0FBUyxtQkFBVztBQUNsQiw2Q0FBS21CLFlBQUwsQ0FBa0I7QUFDaEJDLHVDQUFPO0FBRFMsK0JBQWxCO0FBR0Q7QUFSWSwyQkFBZjtBQVVEO0FBckJnQix1QkFBYixDQUpEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQTRCTCxxQ0FBS0osU0FBTCxDQUFlO0FBQ2I3QiwrQkFBTyxPQURNO0FBRWJRLCtCQUFPO0FBRk0sdUJBQWY7O0FBNUJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSxTQUFqQjtBQW9DRDtBQS9ETyxLOzs7Ozs2QkFpRUQ7QUFDUCxVQUFJSixPQUFPLElBQVg7QUFDQSxxQkFBSzhCLGFBQUwsQ0FBbUI7QUFDakJyQixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hWLGVBQUtWLE1BQUwsR0FBY29CLElBQUlxQixZQUFsQjtBQUNBL0IsZUFBS1QsS0FBTCxHQUFhbUIsSUFBSXNCLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXZGaUMsZUFBS0MsSTs7a0JBQXBCaEQsTSIsImZpbGUiOiJtZW1vcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1vcnkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WbnuW/humbhidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgYWRkOiAnLi4vaW1hZ2VzL2FkZC5wbmcnLFxuICAgIGltZzogW10sXG4gICAgYXJyOiAnJyxcbiAgICBlc3NheTogJycsXG4gICAgdGl0bGU6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBsZXR0ZXIoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmVzc2F5ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGlucHV0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi50aXRsZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbWFnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA5LCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBsZXQgYXJyID0gc2VsZi5pbWdcbiAgICAgICAgICBsZXQgaW1hZ2UgPSBhcnIuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKVxuICAgICAgICAgIHNlbGYuaW1nID0gaW1hZ2VcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgaW1nOiBpbWFnZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnNlcnQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiBhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgICAgaWYgKHNlbGYuaW1nICE9PSAnJyAmIHNlbGYuZXNzYXkgIT09ICcnKSB7XG4gICAgICAgICAgICBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvbWVtb3J5L2luc2VydCcsXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgIGltZzogc2VsZi5pbWcsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHNlbGYudGl0bGUsXG4gICAgICAgICAgICAgICAgZXNzYXk6IHNlbGYuZXNzYXlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfor7fooaXlhYXkv6Hmga8nLFxuICAgICAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9oaW50LnBuZydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19