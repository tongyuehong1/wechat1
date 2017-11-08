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

var Temporary = function (_wepy$page) {
  _inherits(Temporary, _wepy$page);

  function Temporary() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Temporary);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Temporary.__proto__ || Object.getPrototypeOf(Temporary)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '关联TA'
    }, _this.data = {
      height: 0,
      width: 0,
      nickName: '',
      input: '',
      anotherlength: '',
      another: ''
    }, _this.methods = {
      input: function input(e) {
        var self = this;
        self.input = e.detail.value;
      },
      verify: function verify() {
        var self = this;
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/temporaryinsert',
          data: {
            wechat: self.nickName,
            anthor: self.input
          },
          method: 'POST',
          success: function success(res) {}
        });
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/temporaryselect',
          data: {
            wechat: self.input
          },
          method: 'POST',
          success: function success(res) {
            self.anotherlength = res.data.length;
            self.setData({
              anotherlength: res.data.length
            });
            console.log(self.anotherlength);
            if (self.anotherlength === 0) {
              _wepy2.default.showModal({
                title: '提示',
                content: '他还没有使用奥',
                showCancel: false
              });
            } else {
              _wepy2.default.request({
                url: 'http://127.0.0.1:7001/temporaryselect',
                data: {
                  wechat: self.input
                },
                method: 'POST',
                success: function success(res) {
                  self.another = res.data[0].anthor;
                  self.setData({
                    another: res.data[0].anthor
                  });
                  // console.log(self.another, '。。。。。another')
                  if (self.another === '') {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '他还没有添加你奥',
                      showCancel: false
                    });
                  } else {
                    if (self.another === self.nickName) {
                      _wepy2.default.showModal({
                        title: '成功',
                        content: '添加成功',
                        showCancel: false
                      });
                    } else {
                      _wepy2.default.showModal({
                        title: '提示',
                        content: '对方添加的不是你',
                        showCancel: false
                      });
                    }
                  }
                }
              });
            }
            _wepy2.default.request({
              url: 'http://127.0.0.1:7001/user',
              data: {
                wechat: self.nickName,
                anthor: self.input
              },
              method: 'POST',
              success: function success(res) {
                console.log(self.input, 'input');
              }
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Temporary, [{
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
        url: 'http://127.0.0.1:7001/userselect',
        data: {
          wechat: self.nickName
        },
        method: 'POST',
        success: function success(res) {}
      });
      // wepy.getUserInfo({
      //   success: function(res) {
      //     self.nickName = res.userInfo.nickName
      //     self.avatarUrl = res.userInfo.avatarUrl
      //     wepy.request({
      //       url: 'http://127.0.0.1:7001/userselect',
      //       data: {
      //         wechat: self.nickName
      //       },
      //       method: 'POST',
      //       success: function(res) {
      //       }
      //     })
      //   }
      // })
    }
  }]);

  return Temporary;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Temporary , 'pages/temporary'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBvcmFyeS5qcyJdLCJuYW1lcyI6WyJUZW1wb3JhcnkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwibmlja05hbWUiLCJpbnB1dCIsImFub3RoZXJsZW5ndGgiLCJhbm90aGVyIiwibWV0aG9kcyIsImUiLCJzZWxmIiwiZGV0YWlsIiwidmFsdWUiLCJ2ZXJpZnkiLCJyZXF1ZXN0IiwidXJsIiwid2VjaGF0IiwiYW50aG9yIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImxlbmd0aCIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsYUFBTyxFQUpGO0FBS0xDLHFCQUFlLEVBTFY7QUFNTEMsZUFBUztBQU5KLEssUUFRUEMsTyxHQUFVO0FBQ1JILFdBRFEsaUJBQ0ZJLENBREUsRUFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTCxLQUFMLEdBQWFJLEVBQUVFLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQUpPO0FBS1JDLFlBTFEsb0JBS0M7QUFDUCxZQUFJSCxPQUFPLElBQVg7QUFDQSx1QkFBS0ksT0FBTCxDQUFhO0FBQ1hDLGVBQUssdUNBRE07QUFFWGQsZ0JBQU07QUFDSmUsb0JBQVFOLEtBQUtOLFFBRFQ7QUFFSmEsb0JBQVFQLEtBQUtMO0FBRlQsV0FGSztBQU1YYSxrQkFBUSxNQU5HO0FBT1hDLG1CQUFTLGlC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eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBvcmFyeSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWz6IGUVEEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGlucHV0OiAnJyxcbiAgICBhbm90aGVybGVuZ3RoOiAnJyxcbiAgICBhbm90aGVyOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaW5wdXQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmlucHV0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHZlcmlmeSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3RlbXBvcmFyeWluc2VydCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWUsXG4gICAgICAgICAgYW50aG9yOiBzZWxmLmlucHV0XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90ZW1wb3JhcnlzZWxlY3QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgd2VjaGF0OiBzZWxmLmlucHV0XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLmFub3RoZXJsZW5ndGggPSByZXMuZGF0YS5sZW5ndGhcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgYW5vdGhlcmxlbmd0aDogcmVzLmRhdGEubGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmFub3RoZXJsZW5ndGgpXG4gICAgICAgICAgaWYgKHNlbGYuYW5vdGhlcmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfku5bov5jmsqHmnInkvb/nlKjlpaUnLFxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3RlbXBvcmFyeXNlbGVjdCcsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB3ZWNoYXQ6IHNlbGYuaW5wdXRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIHNlbGYuYW5vdGhlciA9IHJlcy5kYXRhWzBdLmFudGhvclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICBhbm90aGVyOiByZXMuZGF0YVswXS5hbnRob3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuYW5vdGhlciwgJ+OAguOAguOAguOAguOAgmFub3RoZXInKVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFub3RoZXIgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+S7lui/mOayoeaciea3u+WKoOS9oOWlpScsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbm90aGVyID09PSBzZWxmLm5pY2tOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkOWKnycsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+a3u+WKoOaIkOWKnycsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+WvueaWuea3u+WKoOeahOS4jeaYr+S9oCcsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvdXNlcicsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgYW50aG9yOiBzZWxmLmlucHV0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5pbnB1dCwgJ2lucHV0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3VzZXJzZWxlY3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWVcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgfVxuICAgIH0pXG4gICAgLy8gd2VweS5nZXRVc2VySW5mbyh7XG4gICAgLy8gICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAvLyAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgIC8vICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAvLyAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAvLyAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvdXNlcnNlbGVjdCcsXG4gICAgLy8gICAgICAgZGF0YToge1xuICAgIC8vICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAvLyAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgfVxufVxuIl19