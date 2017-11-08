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
      img: '../images/littleadd.jpg',
      inside: '',
      border: 'true',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci5qcyJdLCJuYW1lcyI6WyJMZXR0ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiaW1nIiwiaW5zaWRlIiwiYm9yZGVyIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJ0ZXh0IiwidGl0bGUiLCJtZXRob2RzIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJlc3NheSIsImlucHV0IiwiaW1hZ2UiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiaW5zZXJ0IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ3ZWNoYXQiLCJsZXR0ZXIiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImFib2xpc2giLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybSIsImNhbmNlbCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxXQUFLLHlCQUpBO0FBS0xDLGNBQVEsRUFMSDtBQU1MQyxjQUFRLE1BTkg7QUFPTEMsZ0JBQVUsRUFQTDtBQVFMQyxpQkFBVyxFQVJOO0FBU0xDLFlBQU0sRUFURDtBQVVMQyxhQUFPO0FBVkYsSyxRQVlQQyxPLEdBQVU7QUFDUk4sWUFEUSxrQkFDRE8sQ0FEQyxF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QUtDLFNBQUwsQ0FBZTtBQUNibEMsaUJBQU8sSUFETTtBQUVibUMsbUJBQVMsVUFGSTtBQUdicEIsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUEsSUFBSW9CLE9BQVIsRUFBaUI7QUFDZiw2QkFBS0wsWUFBTCxDQUFrQjtBQUNoQkMsdUJBQU87QUFEUyxlQUFsQjtBQUdELGFBSkQsTUFJTyxJQUFJaEIsSUFBSXFCLE1BQVIsRUFBZ0IsQ0FDdEI7QUFDRjtBQVZZLFNBQWY7QUFZRDtBQXhGTyxLOzs7Ozs2QkEwRkQ7QUFDUCxVQUFJbEMsT0FBTyxJQUFYO0FBQ0EscUJBQUttQyxhQUFMLENBQW1CO0FBQ2pCdkIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYYixlQUFLWCxNQUFMLEdBQWN3QixJQUFJdUIsWUFBbEI7QUFDQXBDLGVBQUtWLEtBQUwsR0FBYXVCLElBQUl3QixXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFsSGlDLGVBQUtDLEk7O2tCQUFwQnRELE0iLCJmaWxlIjoibGV0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV0dGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/mg4XkuaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGhlaWdodDogJycsXG4gICAgd2lkdGg6ICcnLFxuICAgIGltZzogJy4uL2ltYWdlcy9saXR0bGVhZGQuanBnJyxcbiAgICBpbnNpZGU6ICcnLFxuICAgIGJvcmRlcjogJ3RydWUnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIHRpdGxlOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaW5zaWRlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICBzZWxmLmVzc2F5ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGlucHV0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICBzZWxmLnRpdGxlID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGltYWdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmJvcmRlciA9ICdmYWxzZSdcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHNlbGYuaW1nID0gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgaW1nOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coc2VsZi5pbWcubGVuZ3RoLCAnYWFhYWEnKVxuICAgICAgICAgIGlmIChzZWxmLmltZy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5Y+q6IO95pS+MeW8oOWTpicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgaW5zZXJ0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coc2VsZi50aXRsZSwgJ3RpdGxlJylcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuZXNzYXksICdlc3NheScpXG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgICAgIGlmIChzZWxmLm5pY2tOYW1lICE9PSAnJyAmIHNlbGYudGl0bGUgIT09ICcnICYgc2VsZi5lc3NheSAhPT0gJycpIHtcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oZWFydHMvc2VuZCcsXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgd2VjaGF0OiBzZWxmLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBzZWxmLnRpdGxlLFxuICAgICAgICAgICAgICAgIGltZzogc2VsZi5pbWcsXG4gICAgICAgICAgICAgICAgbGV0dGVyOiBzZWxmLmVzc2F5XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkOWKnycsXG4gICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn6K+36KGl5YWF5L+h5oGvJyxcbiAgICAgICAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvaGludC5wbmcnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGFib2xpc2goKSB7XG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+aYr+WQpuaUvuW8g+acrOasoee8lui+kScsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=