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
      plant: '../images/plant.jpg',
      show: true
    }, _this.methods = {
      write: function write() {
        var self = this;
        self.writecolor = 'black';
        self.sendcolor = 'gray';
        self.show = true;
      },
      receive: function receive() {
        var self = this;
        self.writecolor = 'gray';
        self.sendcolor = 'black';
        self.show = false;
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
      },
      second: function second() {
        _wepy2.default.navigateTo({
          url: './second'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Hearts , 'pages/same'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbWUuanMiXSwibmFtZXMiOlsiSGVhcnRzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJ3cml0ZWNvbG9yIiwic2VuZGNvbG9yIiwiYWRkIiwiY2F0IiwicGxhbnQiLCJzaG93IiwibWV0aG9kcyIsIndyaXRlIiwic2VsZiIsInJlY2VpdmUiLCJsZXR0ZXIiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZmlyc3QiLCJzZWNvbmQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGtCQUFZLE9BRlA7QUFHTEMsaUJBQVcsTUFITjtBQUlMQyxXQUFLLHlCQUpBO0FBS0xDLFdBQUssbUJBTEE7QUFNTEMsYUFBTyxxQkFORjtBQU9MQyxZQUFNO0FBUEQsSyxRQVNQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLUixVQUFMLEdBQWtCLE9BQWxCO0FBQ0FRLGFBQUtQLFNBQUwsR0FBaUIsTUFBakI7QUFDQU8sYUFBS0gsSUFBTCxHQUFZLElBQVo7QUFDRCxPQU5PO0FBT1JJLGFBUFEscUJBT0U7QUFDUixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS1IsVUFBTCxHQUFrQixNQUFsQjtBQUNBUSxhQUFLUCxTQUFMLEdBQWlCLE9BQWpCO0FBQ0FPLGFBQUtILElBQUwsR0FBWSxLQUFaO0FBQ0QsT0FaTztBQWFSSyxZQWJRLG9CQWFDO0FBQ1AsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FqQk87QUFrQlJDLFdBbEJRLG1CQWtCQTtBQUNOLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BdEJPO0FBdUJSRSxZQXZCUSxvQkF1QkM7QUFDUCx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQTNCTyxLOzs7Ozs2QkE2QkQsQ0FBRzs7OztFQTFDc0IsZUFBS0csSTs7a0JBQXBCcEIsTSIsImZpbGUiOiJzYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhcnRzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflsI/mg4XkuaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHdyaXRlY29sb3I6ICdibGFjaycsXG4gICAgc2VuZGNvbG9yOiAnZ3JheScsXG4gICAgYWRkOiAnLi4vaW1hZ2VzL2FkZGxldHRlci5wbmcnLFxuICAgIGNhdDogJy4uL2ltYWdlcy9jYXQuanBnJyxcbiAgICBwbGFudDogJy4uL2ltYWdlcy9wbGFudC5qcGcnLFxuICAgIHNob3c6IHRydWVcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHdyaXRlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLndyaXRlY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLnNlbmRjb2xvciA9ICdncmF5J1xuICAgICAgc2VsZi5zaG93ID0gdHJ1ZVxuICAgIH0sXG4gICAgcmVjZWl2ZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi53cml0ZWNvbG9yID0gJ2dyYXknXG4gICAgICBzZWxmLnNlbmRjb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuc2hvdyA9IGZhbHNlXG4gICAgfSxcbiAgICBsZXR0ZXIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2xldHRlcidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBmaXJzdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbGlzdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzZWNvbmQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3NlY29uZCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19