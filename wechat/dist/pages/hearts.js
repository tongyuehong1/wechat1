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

var Hearts = function (_wepy$page) {
  _inherits(Hearts, _wepy$page);

  function Hearts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hearts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hearts.__proto__ || Object.getPrototypeOf(Hearts)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      writecolor: 'black',
      sendcolor: 'gray',
      add: '../images/addletter.png',
      cat: '../images/cat.jpg',
      plant: '../images/plant.jpg'
    }, _this.methods = {
      write: function write() {
        var self = this;
        self.writecolor = 'black';
        self.sendcolor = 'gray';
      },
      send: function send() {
        var self = this;
        self.writecolor = 'gray';
        self.sendcolor = 'black';
      },
      letter: function letter() {
        _wepy2.default.navigateTo({
          url: './letter'
        });
      },
      first: function first() {
        _wepy2.default.navigateTo({
          url: './list'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hearts, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Hearts;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Hearts , 'pages/hearts'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXJ0cy5qcyJdLCJuYW1lcyI6WyJIZWFydHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIndyaXRlY29sb3IiLCJzZW5kY29sb3IiLCJhZGQiLCJjYXQiLCJwbGFudCIsIm1ldGhvZHMiLCJ3cml0ZSIsInNlbGYiLCJzZW5kIiwibGV0dGVyIiwibmF2aWdhdGVUbyIsInVybCIsImZpcnN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxrQkFBWSxPQUZQO0FBR0xDLGlCQUFXLE1BSE47QUFJTEMsV0FBSyx5QkFKQTtBQUtMQyxXQUFLLG1CQUxBO0FBTUxDLGFBQU87QUFORixLLFFBUVBDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtQLFVBQUwsR0FBa0IsT0FBbEI7QUFDQU8sYUFBS04sU0FBTCxHQUFpQixNQUFqQjtBQUNELE9BTE87QUFNUk8sVUFOUSxrQkFNRDtBQUNMLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLUCxVQUFMLEdBQWtCLE1BQWxCO0FBQ0FPLGFBQUtOLFNBQUwsR0FBaUIsT0FBakI7QUFDRCxPQVZPO0FBV1JRLFlBWFEsb0JBV0M7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWZPO0FBZ0JSQyxXQWhCUSxtQkFnQkE7QUFDTix1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQXBCTyxLOzs7Ozs2QkFzQkQsQ0FBRzs7OztFQWxDc0IsZUFBS0UsSTs7a0JBQXBCbEIsTSIsImZpbGUiOiJoZWFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFydHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgd3JpdGVjb2xvcjogJ2JsYWNrJyxcbiAgICBzZW5kY29sb3I6ICdncmF5JyxcbiAgICBhZGQ6ICcuLi9pbWFnZXMvYWRkbGV0dGVyLnBuZycsXG4gICAgY2F0OiAnLi4vaW1hZ2VzL2NhdC5qcGcnLFxuICAgIHBsYW50OiAnLi4vaW1hZ2VzL3BsYW50LmpwZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHdyaXRlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLndyaXRlY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLnNlbmRjb2xvciA9ICdncmF5J1xuICAgIH0sXG4gICAgc2VuZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi53cml0ZWNvbG9yID0gJ2dyYXknXG4gICAgICBzZWxmLnNlbmRjb2xvciA9ICdibGFjaydcbiAgICB9LFxuICAgIGxldHRlcigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbGV0dGVyJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGZpcnN0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9saXN0J1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkgeyB9XG59XG4iXX0=