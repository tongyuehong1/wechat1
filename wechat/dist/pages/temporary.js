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
                  console.log(self.another, '。。。。。another');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBvcmFyeS5qcyJdLCJuYW1lcyI6WyJUZW1wb3JhcnkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwibmlja05hbWUiLCJpbnB1dCIsImFub3RoZXJsZW5ndGgiLCJhbm90aGVyIiwibWV0aG9kcyIsImUiLCJzZWxmIiwiZGV0YWlsIiwidmFsdWUiLCJ2ZXJpZnkiLCJyZXF1ZXN0IiwidXJsIiwid2VjaGF0IiwiYW50aG9yIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImxlbmd0aCIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsYUFBTyxFQUpGO0FBS0xDLHFCQUFlLEVBTFY7QUFNTEMsZUFBUztBQU5KLEssUUFRUEMsTyxHQUFVO0FBQ1JILFdBRFEsaUJBQ0ZJLENBREUsRUFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTCxLQUFMLEdBQWFJLEVBQUVFLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQUpPO0FBS1JDLFlBTFEsb0JBS0M7QUFDUCxZQUFJSCxPQUFPLElBQVg7QUFDQSx1QkFBS0ksT0FBTCxDQUFhO0FBQ1hDLGVBQUssdUNBRE07QUFFWGQsZ0JBQU07QUFDSmUsb0JBQVFOLEtBQUtOLFFBRFQ7QUFFSmEsb0JBQVFQLEtBQUtMO0FBRlQsV0FGSztBQU1YYSxrQkFBUSxNQU5HO0FBT1hDLG1CQUFTLGlC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QW5Jb0MsZUFBS1ksSTs7a0JBQXZCbEMsUyIsImZpbGUiOiJ0ZW1wb3JhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wb3JhcnkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFs+iBlFRBJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBpbnB1dDogJycsXG4gICAgYW5vdGhlcmxlbmd0aDogJycsXG4gICAgYW5vdGhlcjogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGlucHV0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5pbnB1dCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICB2ZXJpZnkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90ZW1wb3JhcnlpbnNlcnQnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lLFxuICAgICAgICAgIGFudGhvcjogc2VsZi5pbnB1dFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvdGVtcG9yYXJ5c2VsZWN0JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHdlY2hhdDogc2VsZi5pbnB1dFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi5hbm90aGVybGVuZ3RoID0gcmVzLmRhdGEubGVuZ3RoXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGFub3RoZXJsZW5ndGg6IHJlcy5kYXRhLmxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coc2VsZi5hbm90aGVybGVuZ3RoKVxuICAgICAgICAgIGlmIChzZWxmLmFub3RoZXJsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICBjb250ZW50OiAn5LuW6L+Y5rKh5pyJ5L2/55So5aWlJyxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS90ZW1wb3JhcnlzZWxlY3QnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgd2VjaGF0OiBzZWxmLmlucHV0XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFub3RoZXIgPSByZXMuZGF0YVswXS5hbnRob3JcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgYW5vdGhlcjogcmVzLmRhdGFbMF0uYW50aG9yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmFub3RoZXIsICfjgILjgILjgILjgILjgIJhbm90aGVyJylcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbm90aGVyID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfku5bov5jmsqHmnInmt7vliqDkvaDlpaUnLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYW5vdGhlciA9PT0gc2VsZi5uaWNrTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmt7vliqDmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflr7nmlrnmt7vliqDnmoTkuI3mmK/kvaAnLFxuICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3VzZXInLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICB3ZWNoYXQ6IHNlbGYubmlja05hbWUsXG4gICAgICAgICAgICAgIGFudGhvcjogc2VsZi5pbnB1dFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuaW5wdXQsICdpbnB1dCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS91c2Vyc2VsZWN0JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgLy8gICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAvLyAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgLy8gICAgIHdlcHkucmVxdWVzdCh7XG4gICAgLy8gICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3VzZXJzZWxlY3QnLFxuICAgIC8vICAgICAgIGRhdGE6IHtcbiAgICAvLyAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZVxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH1cbn1cbiJdfQ==