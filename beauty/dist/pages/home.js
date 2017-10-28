'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _content = require('./../untils/content.js');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小程序'
    }, _this.data = {
      src: '',
      img: ['../image/ffirst.jpg', '../image/second.jpg', '../image/third.jpg', '../image/forth.jpg', '../image/fifth.jpg'],
      height: '',
      width: '',
      firsticons: ['../image/fruit.jpg', '../image/nuts.jpg', '../image/cloth.jpg', '../image/beauty.jpg'],
      secondicons: ['../image/fruit.jpg', '../image/nuts.jpg', '../image/cloth.jpg', '../image/beauty.jpg'],
      display: [{ photo: 'http://img1.imgtn.bdimg.com/it/u=850119793,4249750756&fm=27&gp=0.jpg', title: '水果' }, { photo: 'http://img5.imgtn.bdimg.com/it/u=4120270162,516095231&fm=27&gp=0.jpg', title: '水果2' }, { photo: 'http://img1.imgtn.bdimg.com/it/u=1207912580,634887275&fm=27&gp=0.jpg', title: '水果3' }, { photo: 'http://img5.imgtn.bdimg.com/it/u=2229099749,611550402&fm=27&gp=0.jpg', title: '水果4' }],
      content: null,
      firstword: ['水果', '坚果', '服饰', '化妆品']
    }, _this.methods = {
      next: function next(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        console.log(e);
        _wepy2.default.navigateTo({
          url: './fruit?image=' + item.photo + '&title=' + item.title
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _content2.default;
      console.log(self.content);
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaXJzdGljb25zIiwic2Vjb25kaWNvbnMiLCJkaXNwbGF5IiwicGhvdG8iLCJ0aXRsZSIsImNvbnRlbnQiLCJmaXJzdHdvcmQiLCJtZXRob2RzIiwibmV4dCIsImUiLCJzZWxmIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxXQUFLLENBQ0gscUJBREcsRUFFSCxxQkFGRyxFQUdILG9CQUhHLEVBSUgsb0JBSkcsRUFLSCxvQkFMRyxDQUZBO0FBU0xDLGNBQVEsRUFUSDtBQVVMQyxhQUFPLEVBVkY7QUFXTEMsa0JBQVksQ0FDVixvQkFEVSxFQUVWLG1CQUZVLEVBR1Ysb0JBSFUsRUFJVixxQkFKVSxDQVhQO0FBaUJMQyxtQkFBYSxDQUNYLG9CQURXLEVBRVgsbUJBRlcsRUFHWCxvQkFIVyxFQUlYLHFCQUpXLENBakJSO0FBdUJMQyxlQUFTLENBQ1AsRUFBQ0MsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxJQUF2RixFQURPLEVBRVAsRUFBQ0QsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxLQUF2RixFQUZPLEVBR1AsRUFBQ0QsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxLQUF2RixFQUhPLEVBSVAsRUFBQ0QsT0FBTyxzRUFBUixFQUFnRkMsT0FBTyxLQUF2RixFQUpPLENBdkJKO0FBNkJMQyxlQUFTLElBN0JKO0FBOEJMQyxpQkFBVyxDQUNULElBRFMsRUFFVCxJQUZTLEVBR1QsSUFIUyxFQUlULEtBSlM7QUE5Qk4sSyxRQXFDUEMsTyxHQUFVO0FBQ1JDLFVBRFEsZ0JBQ0hDLENBREcsRUFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtMLE9BQUwsQ0FBYUksRUFBRUcsYUFBRixDQUFnQkMsRUFBN0IsQ0FBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZTixDQUFaO0FBQ0EsdUJBQUtPLFVBQUwsQ0FBZ0I7QUFDZEMsa0NBQXNCTixLQUFLUixLQUEzQixlQUEwQ1EsS0FBS1A7QUFEakMsU0FBaEI7QUFHRDtBQVJPLEs7Ozs7OzZCQVVEO0FBQ1AsVUFBSU0sT0FBTyxJQUFYO0FBQ0FBLFdBQUtMLE9BQUw7QUFDQVMsY0FBUUMsR0FBUixDQUFZTCxLQUFLTCxPQUFqQjtBQUNBLHFCQUFLYSxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hWLGVBQUtaLE1BQUwsR0FBY3NCLElBQUlDLFlBQWxCO0FBQ0FYLGVBQUtYLEtBQUwsR0FBYXFCLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQTdEK0IsZUFBS0MsSTs7a0JBQWxCL0IsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBjb250ZW50IGZyb20gJy4uL3VudGlscy9jb250ZW50LmpzJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP56iL5bqPJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc3JjOiAnJyxcbiAgICAgIGltZzogW1xuICAgICAgICAnLi4vaW1hZ2UvZmZpcnN0LmpwZycsXG4gICAgICAgICcuLi9pbWFnZS9zZWNvbmQuanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL3RoaXJkLmpwZycsXG4gICAgICAgICcuLi9pbWFnZS9mb3J0aC5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2UvZmlmdGguanBnJ1xuICAgICAgXSxcbiAgICAgIGhlaWdodDogJycsXG4gICAgICB3aWR0aDogJycsXG4gICAgICBmaXJzdGljb25zOiBbXG4gICAgICAgICcuLi9pbWFnZS9mcnVpdC5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2UvbnV0cy5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2UvY2xvdGguanBnJyxcbiAgICAgICAgJy4uL2ltYWdlL2JlYXV0eS5qcGcnXG4gICAgICBdLFxuICAgICAgc2Vjb25kaWNvbnM6IFtcbiAgICAgICAgJy4uL2ltYWdlL2ZydWl0LmpwZycsXG4gICAgICAgICcuLi9pbWFnZS9udXRzLmpwZycsXG4gICAgICAgICcuLi9pbWFnZS9jbG90aC5qcGcnLFxuICAgICAgICAnLi4vaW1hZ2UvYmVhdXR5LmpwZydcbiAgICAgIF0sXG4gICAgICBkaXNwbGF5OiBbXG4gICAgICAgIHtwaG90bzogJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTg1MDExOTc5Myw0MjQ5NzUwNzU2JmZtPTI3JmdwPTAuanBnJywgdGl0bGU6ICfmsLTmnpwnfSxcbiAgICAgICAge3Bob3RvOiAnaHR0cDovL2ltZzUuaW1ndG4uYmRpbWcuY29tL2l0L3U9NDEyMDI3MDE2Miw1MTYwOTUyMzEmZm09MjcmZ3A9MC5qcGcnLCB0aXRsZTogJ+awtOaenDInfSxcbiAgICAgICAge3Bob3RvOiAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MTIwNzkxMjU4MCw2MzQ4ODcyNzUmZm09MjcmZ3A9MC5qcGcnLCB0aXRsZTogJ+awtOaenDMnfSxcbiAgICAgICAge3Bob3RvOiAnaHR0cDovL2ltZzUuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjIyOTA5OTc0OSw2MTE1NTA0MDImZm09MjcmZ3A9MC5qcGcnLCB0aXRsZTogJ+awtOaenDQnfVxuICAgICAgXSxcbiAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICBmaXJzdHdvcmQ6IFtcbiAgICAgICAgJ+awtOaenCcsXG4gICAgICAgICflnZrmnpwnLFxuICAgICAgICAn5pyN6aWwJyxcbiAgICAgICAgJ+WMluWmhuWTgSdcbiAgICAgIF1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG5leHQoZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGl0ZW0gPSBzZWxmLmNvbnRlbnRbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC4vZnJ1aXQ/aW1hZ2U9JHtpdGVtLnBob3RvfSZ0aXRsZT0ke2l0ZW0udGl0bGV9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29udGVudCA9IGNvbnRlbnRcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY29udGVudClcbiAgICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19