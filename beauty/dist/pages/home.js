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
      search: '../image/search.png',
      title: ['精选优品', '年轻风尚', '休闲零食', '美妆个护', '家清家居', '国际尖货'],
      currentTargetId: 0,
      height: 0,
      width: 0,
      swiperimg: ''
    }, _this.methods = {
      next: function next(e) {
        var self = this;
        var item = self.content[e.currentTarget.dataset.index];
        console.log(e);
        _wepy2.default.navigateTo({
          url: './fruit?image=' + item.photo + '&title=' + item.title + '&price=' + item.price + '&num=' + item.num
        });
      },
      choose: function choose(e) {
        var self = this;
        self.currentTargetId = e.currentTarget.id;
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
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/home',
        method: 'POST',
        success: function success(res) {
          self.swiperimg = res.data;
          self.setData({
            swiperimg: res.data
          });
          console.log(res.data);
        }
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwic2VhcmNoIiwidGl0bGUiLCJjdXJyZW50VGFyZ2V0SWQiLCJoZWlnaHQiLCJ3aWR0aCIsInN3aXBlcmltZyIsIm1ldGhvZHMiLCJuZXh0IiwiZSIsInNlbGYiLCJpdGVtIiwiY29udGVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGVUbyIsInVybCIsInBob3RvIiwicHJpY2UiLCJudW0iLCJjaG9vc2UiLCJpZCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJyZXF1ZXN0IiwibWV0aG9kIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxjQUFRLHFCQUZIO0FBR0xDLGFBQU8sQ0FDTCxNQURLLEVBRUwsTUFGSyxFQUdMLE1BSEssRUFJTCxNQUpLLEVBS0wsTUFMSyxFQU1MLE1BTkssQ0FIRjtBQVdMQyx1QkFBaUIsQ0FYWjtBQVlMQyxjQUFRLENBWkg7QUFhTEMsYUFBTyxDQWJGO0FBY0xDLGlCQUFXO0FBZE4sSyxRQWdCUEMsTyxHQUFVO0FBQ1JDLFVBRFEsZ0JBQ0hDLENBREcsRUFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtFLE9BQUwsQ0FBYUgsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXJDLENBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWVIsQ0FBWjtBQUNBLHVCQUFLUyxVQUFMLENBQWdCO0FBQ2RDLGtDQUFzQlIsS0FBS1MsS0FBM0IsZUFBMENULEtBQUtULEtBQS9DLGVBQThEUyxLQUFLVSxLQUFuRSxhQUFnRlYsS0FBS1c7QUFEdkUsU0FBaEI7QUFHRCxPQVJPO0FBU1JDLFlBVFEsa0JBU0RkLENBVEMsRUFTRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLUCxlQUFMLEdBQXVCTSxFQUFFSSxhQUFGLENBQWdCVyxFQUF2QztBQUNEO0FBWk8sSzs7Ozs7NkJBY0Q7QUFDUCxVQUFJZCxPQUFPLElBQVg7QUFDQUEsV0FBS0UsT0FBTDtBQUNBSSxjQUFRQyxHQUFSLENBQVlQLEtBQUtFLE9BQWpCO0FBQ0EscUJBQUthLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWGpCLGVBQUtOLE1BQUwsR0FBY3VCLElBQUlDLFlBQWxCO0FBQ0FsQixlQUFLTCxLQUFMLEdBQWFzQixJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUEscUJBQUtDLE9BQUwsQ0FBYTtBQUNYWCxhQUFLLDRCQURNO0FBRVhZLGdCQUFRLE1BRkc7QUFHWEwsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmpCLGVBQUtKLFNBQUwsR0FBaUJxQixJQUFJNUIsSUFBckI7QUFDQVcsZUFBS3NCLE9BQUwsQ0FBYTtBQUNYMUIsdUJBQVdxQixJQUFJNUI7QUFESixXQUFiO0FBR0FpQixrQkFBUUMsR0FBUixDQUFZVSxJQUFJNUIsSUFBaEI7QUFDRDtBQVRVLE9BQWI7QUFXRDs7OztFQXZEK0IsZUFBS2tDLEk7O2tCQUFsQnJDLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgY29udGVudCBmcm9tICcuLi91bnRpbHMvY29udGVudC5qcydcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+eoi+W6jydcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNyYzogJycsXG4gICAgICBzZWFyY2g6ICcuLi9pbWFnZS9zZWFyY2gucG5nJyxcbiAgICAgIHRpdGxlOiBbXG4gICAgICAgICfnsr7pgInkvJjlk4EnLFxuICAgICAgICAn5bm06L276aOO5bCaJyxcbiAgICAgICAgJ+S8kemXsumbtumjnycsXG4gICAgICAgICfnvo7lpobkuKrmiqQnLFxuICAgICAgICAn5a625riF5a625bGFJyxcbiAgICAgICAgJ+WbvemZheWwlui0pydcbiAgICAgIF0sXG4gICAgICBjdXJyZW50VGFyZ2V0SWQ6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIHN3aXBlcmltZzogJydcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG5leHQoZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGl0ZW0gPSBzZWxmLmNvbnRlbnRbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgLi9mcnVpdD9pbWFnZT0ke2l0ZW0ucGhvdG99JnRpdGxlPSR7aXRlbS50aXRsZX0mcHJpY2U9JHtpdGVtLnByaWNlfSZudW09JHtpdGVtLm51bX1gXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgY2hvb3NlKGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYuY3VycmVudFRhcmdldElkID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb250ZW50ID0gY29udGVudFxuICAgICAgY29uc29sZS5sb2coc2VsZi5jb250ZW50KVxuICAgICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvaG9tZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLnN3aXBlcmltZyA9IHJlcy5kYXRhXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHN3aXBlcmltZzogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19