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

var Letter = function (_wepy$page) {
  _inherits(Letter, _wepy$page);

  function Letter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Letter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Letter.__proto__ || Object.getPrototypeOf(Letter)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      height: '',
      width: '',
      add: '../images/add.png',
      inside: '',
      img: [],
      nickName: '',
      avatarUrl: '',
      text: '',
      title: ''
    }, _this.methods = {
      inside: function inside(e) {
        var self = this;
        console.log(e.detail.value);
        self.essay = e.detail.value;
      },
      input: function input(e) {
        var self = this;
        console.log(e.detail.value);
        self.title = e.detail.value;
      },
      image: function image() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            self.img = res.tempFilePaths[0];
            self.setData({
              img: res.tempFilePaths[0]
            });
          }
        });
      },
      insert: function insert(e) {
        var self = this;
        console.log(self.title, 'title');
        console.log(self.essay, 'essay');
        _wepy2.default.getUserInfo({
          success: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self.nickName = res.userInfo.nickName;
                      self.avatarUrl = res.userInfo.avatarUrl;
                      _context.next = 4;
                      return _wepy2.default.request({
                        url: 'http://127.0.0.1:7001/hearts/send',
                        method: 'POST',
                        data: {
                          wechat: self.nickName,
                          title: self.title,
                          img: 'a',
                          letter: self.essay
                        },
                        success: function success(res) {
                          self.text = res.data[0];
                          self.setData({
                            text: res.data[0]
                          });
                          console.log(res);
                        }
                      });

                    case 4:
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

  _createClass(Letter, [{
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

  return Letter;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Letter , 'pages/letter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5qcyJdLCJuYW1lcyI6WyJMZXR0ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWRkIiwiaW5zaWRlIiwiaW1nIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJ0ZXh0IiwidGl0bGUiLCJtZXRob2RzIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJlc3NheSIsImlucHV0IiwiaW1hZ2UiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwiaW5zZXJ0IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ3ZWNoYXQiLCJsZXR0ZXIiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxXQUFLLG1CQUpBO0FBS0xDLGNBQVEsRUFMSDtBQU1MQyxXQUFLLEVBTkE7QUFPTEMsZ0JBQVUsRUFQTDtBQVFMQyxpQkFBVyxFQVJOO0FBU0xDLFlBQU0sRUFURDtBQVVMQyxhQUFPO0FBVkYsSyxRQVlQQyxPLEdBQVU7QUFDUk4sWUFEUSxrQkFDRE8sQ0FEQyxFQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlILEVBQUVJLE1BQUYsQ0FBU0MsS0FBckI7QUFDQUosYUFBS0ssS0FBTCxHQUFhTixFQUFFSSxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FMTztBQU1SRSxXQU5RLGlCQU1GUCxDQU5FLEVBTUM7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsRUFBRUksTUFBRixDQUFTQyxLQUFyQjtBQUNBSixhQUFLSCxLQUFMLEdBQWFFLEVBQUVJLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQVZPO0FBV1JHLFdBWFEsbUJBV0E7QUFDTixZQUFJUCxPQUFPLElBQVg7QUFDQSx1QkFBS1EsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxDQURRLEVBQ0w7QUFDVkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLLEVBRXVCO0FBQ3RDQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEcsRUFHa0I7QUFDakNDLGlCQUplLG1CQUlQQyxHQUpPLEVBSUY7QUFDWGIsaUJBQUtQLEdBQUwsR0FBV29CLElBQUlDLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBWDtBQUNBZCxpQkFBS2UsT0FBTCxDQUFhO0FBQ1h0QixtQkFBS29CLElBQUlDLGFBQUosQ0FBa0IsQ0FBbEI7QUFETSxhQUFiO0FBR0Q7QUFUYyxTQUFqQjtBQVdELE9BeEJPO0FBeUJSRSxZQXpCUSxrQkF5QkRqQixDQXpCQyxFQXlCRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZRixLQUFLSCxLQUFqQixFQUF3QixPQUF4QjtBQUNBSSxnQkFBUUMsR0FBUixDQUFZRixLQUFLSyxLQUFqQixFQUF3QixPQUF4QjtBQUNBLHVCQUFLWSxXQUFMLENBQWlCO0FBQ2ZMO0FBQUEsZ0ZBQVMsaUJBQWVDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQYiwyQkFBS04sUUFBTCxHQUFnQm1CLElBQUlLLFFBQUosQ0FBYXhCLFFBQTdCO0FBQ0FNLDJCQUFLTCxTQUFMLEdBQWlCa0IsSUFBSUssUUFBSixDQUFhdkIsU0FBOUI7QUFGTztBQUFBLDZCQUdELGVBQUt3QixPQUFMLENBQWE7QUFDakJDLDZCQUFLLG1DQURZO0FBRWpCQyxnQ0FBUSxNQUZTO0FBR2pCbEMsOEJBQU07QUFDSm1DLGtDQUFRdEIsS0FBS04sUUFEVDtBQUVKRyxpQ0FBT0csS0FBS0gsS0FGUjtBQUdKSiwrQkFBSyxHQUhEO0FBSUo4QixrQ0FBUXZCLEtBQUtLO0FBSlQseUJBSFc7QUFTakJPLGlDQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJiLCtCQUFLSixJQUFMLEdBQVlpQixJQUFJMUIsSUFBSixDQUFTLENBQVQsQ0FBWjtBQUNBYSwrQkFBS2UsT0FBTCxDQUFhO0FBQ1huQixrQ0FBTWlCLElBQUkxQixJQUFKLENBQVMsQ0FBVDtBQURLLDJCQUFiO0FBR0FjLGtDQUFRQyxHQUFSLENBQVlXLEdBQVo7QUFDRDtBQWZnQix1QkFBYixDQUhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEZSxTQUFqQjtBQXVCRDtBQXBETyxLOzs7Ozs2QkFzREQ7QUFDUCxVQUFJYixPQUFPLElBQVg7QUFDQSxxQkFBS3dCLGFBQUwsQ0FBbUI7QUFDakJaLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWGIsZUFBS1gsTUFBTCxHQUFjd0IsSUFBSVksWUFBbEI7QUFDQXpCLGVBQUtWLEtBQUwsR0FBYXVCLElBQUlhLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQTlFaUMsZUFBS0MsSTs7a0JBQXBCM0MsTSIsImZpbGUiOiJsZXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgYWRkOiAnLi4vaW1hZ2VzL2FkZC5wbmcnLFxuICAgIGluc2lkZTogJycsXG4gICAgaW1nOiBbXSxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICB0aXRsZTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGluc2lkZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi5lc3NheSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbnB1dChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi50aXRsZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbWFnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHNlbGYuaW1nID0gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgaW1nOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnNlcnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLnRpdGxlLCAndGl0bGUnKVxuICAgICAgY29uc29sZS5sb2coc2VsZi5lc3NheSwgJ2Vzc2F5JylcbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiBhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgICAgYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvc2VuZCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lLFxuICAgICAgICAgICAgICB0aXRsZTogc2VsZi50aXRsZSxcbiAgICAgICAgICAgICAgaW1nOiAnYScsXG4gICAgICAgICAgICAgIGxldHRlcjogc2VsZi5lc3NheVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVswXVxuICAgICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhWzBdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19