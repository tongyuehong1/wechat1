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
      img: '../images/addletter.png',
      inside: '',
      border: 'true',
      nickName: '',
      avatarUrl: '',
      text: '',
      title: '',
      essay: ''
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
        self.border = 'false';
        _wepy2.default.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            self.img = res.tempFilePaths[0];
            self.setData({
              img: res.tempFilePaths[0]
            });
            console.log(self.img.length, 'aaaaa');
            if (self.img.length > 1) {
              _wepy2.default.showToast({
                title: '只能放1张哦',
                icon: 'success',
                duration: 1000
              });
            }
          }
        });
      },
      insert: function insert(e) {
        var self = this;
        console.log(self.title, 'title');
        console.log(self.essay, 'essay');
        _wepy2.default.getUserInfo({
          success: function success(res) {
            self.nickName = res.userInfo.nickName;
            self.avatarUrl = res.userInfo.avatarUrl;
            if (self.nickName !== '' & self.title !== '' & self.essay !== '') {
              _wepy2.default.request({
                url: 'http://127.0.0.1:7001/hearts/send',
                method: 'POST',
                data: {
                  wechat: self.nickName,
                  title: self.title,
                  img: self.img,
                  letter: self.essay
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
            } else {
              _wepy2.default.showToast({
                title: '请补充信息',
                image: '../images/hint.png'
              });
            }
          }
        });
      },
      abolish: function abolish() {
        _wepy2.default.showModal({
          title: '提示',
          content: '是否放弃本次编辑',
          success: function success(res) {
            if (res.confirm) {
              _wepy2.default.navigateBack({
                delta: 1
              });
            } else if (res.cancel) {}
          }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5qcyJdLCJuYW1lcyI6WyJMZXR0ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiaW1nIiwiaW5zaWRlIiwiYm9yZGVyIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJ0ZXh0IiwidGl0bGUiLCJlc3NheSIsIm1ldGhvZHMiLCJlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsImlucHV0IiwiaW1hZ2UiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiaW5zZXJ0IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ3ZWNoYXQiLCJsZXR0ZXIiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImFib2xpc2giLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybSIsImNhbmNlbCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxXQUFLLHlCQUpBO0FBS0xDLGNBQVEsRUFMSDtBQU1MQyxjQUFRLE1BTkg7QUFPTEMsZ0JBQVUsRUFQTDtBQVFMQyxpQkFBVyxFQVJOO0FBU0xDLFlBQU0sRUFURDtBQVVMQyxhQUFPLEVBVkY7QUFXTEMsYUFBTztBQVhGLEssUUFhUEMsTyxHQUFVO0FBQ1JQLFlB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cUJBMkVFO0FBQ1IsdUJBQUtDLFNBQUwsQ0FBZTtBQUNibEMsaUJBQU8sSUFETTtBQUVibUMsbUJBQVMsVUFGSTtBQUdicEIsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUEsSUFBSW9CLE9BQVIsRUFBaUI7QUFDZiw2QkFBS0wsWUFBTCxDQUFrQjtBQUNoQkMsdUJBQU87QUFEUyxlQUFsQjtBQUdELGFBSkQsTUFJTyxJQUFJaEIsSUFBSXFCLE1BQVIsRUFBZ0IsQ0FDdEI7QUFDRjtBQVZZLFNBQWY7QUFZRDtBQXhGTyxLOzs7Ozs2QkEwRkQ7QUFDUCxVQUFJakMsT0FBTyxJQUFYO0FBQ0EscUJBQUtrQyxhQUFMLENBQW1CO0FBQ2pCdkIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWixlQUFLWixNQUFMLEdBQWN3QixJQUFJdUIsWUFBbEI7QUFDQW5DLGVBQUtYLEtBQUwsR0FBYXVCLElBQUl3QixXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFuSGlDLGVBQUtDLEk7O2tCQUFwQnRELE0iLCJmaWxlIjoibGV0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV0dGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/mg4XkuaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGltZzogJy4uL2ltYWdlcy9hZGRsZXR0ZXIucG5nJyxcbiAgICBpbnNpZGU6ICcnLFxuICAgIGJvcmRlcjogJ3RydWUnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBlc3NheTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGluc2lkZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi5lc3NheSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbnB1dChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi50aXRsZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBpbWFnZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5ib3JkZXIgPSAnZmFsc2UnXG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBzZWxmLmltZyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGltZzogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuaW1nLmxlbmd0aCwgJ2FhYWFhJylcbiAgICAgICAgICBpZiAoc2VsZi5pbWcubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WPquiDveaUvjHlvKDlk6YnLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGluc2VydChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudGl0bGUsICd0aXRsZScpXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmVzc2F5LCAnZXNzYXknKVxuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICBpZiAoc2VsZi5uaWNrTmFtZSAhPT0gJycgJiBzZWxmLnRpdGxlICE9PSAnJyAmIHNlbGYuZXNzYXkgIT09ICcnKSB7XG4gICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvaGVhcnRzL3NlbmQnLFxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHdlY2hhdDogc2VsZi5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogc2VsZi50aXRsZSxcbiAgICAgICAgICAgICAgICBpbWc6IHNlbGYuaW1nLFxuICAgICAgICAgICAgICAgIGxldHRlcjogc2VsZi5lc3NheVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+ivt+ihpeWFheS/oeaBrycsXG4gICAgICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2hpbnQucG5nJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBhYm9saXNoKCkge1xuICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgIGNvbnRlbnQ6ICfmmK/lkKbmlL7lvIPmnKzmrKHnvJbovpEnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19