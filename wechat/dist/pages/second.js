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

var List = function (_wepy$page) {
  _inherits(List, _wepy$page);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小情书'
    }, _this.data = {
      src: '',
      second: '',
      pic: '../images/cat.jpg',
      height: '',
      width: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return _wepy2.default.getStorage({
                  key: 'second',
                  success: function success(res) {
                    console.log(res.data);
                    self.second = res.data;
                  }
                });

              case 3:
                _wepy2.default.getSystemInfo({
                  success: function success(res) {
                    self.height = res.windowHeight;
                    self.width = res.windowWidth;
                  }
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return List;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(List , 'pages/second'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZC5qcyJdLCJuYW1lcyI6WyJMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJzZWNvbmQiLCJwaWMiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxXQUFLLG1CQUhBO0FBSUxDLGNBQVEsRUFKSDtBQUtMQyxhQUFPO0FBTEYsSyxRQU9QQyxPLEdBQVUsRTs7Ozs7Ozs7Ozs7O0FBSUpDLG9CLEdBQU8sSTs7dUJBQ0wsZUFBS0MsVUFBTCxDQUFnQjtBQUNwQkMsdUJBQUssUUFEZTtBQUVwQkMsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkMsNEJBQVFDLEdBQVIsQ0FBWUYsSUFBSVgsSUFBaEI7QUFDQU8seUJBQUtMLE1BQUwsR0FBY1MsSUFBSVgsSUFBbEI7QUFDRDtBQUxtQixpQkFBaEIsQzs7O0FBT04sK0JBQUtjLGFBQUwsQ0FBbUI7QUFDakJKLHlCQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hKLHlCQUFLSCxNQUFMLEdBQWNPLElBQUlJLFlBQWxCO0FBQ0FSLHlCQUFLRixLQUFMLEdBQWFNLElBQUlLLFdBQWpCO0FBQ0Q7QUFKZ0IsaUJBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkI4QixlQUFLQyxJOztrQkFBbEJwQixJIiwiZmlsZSI6InNlY29uZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+aDheS5pidcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgc2Vjb25kOiAnJyxcbiAgICBwaWM6ICcuLi9pbWFnZXMvY2F0LmpwZycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuXG4gIH1cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdzZWNvbmQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICBzZWxmLnNlY29uZCA9IHJlcy5kYXRhXG4gICAgICB9XG4gICAgfSlcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=