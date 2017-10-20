'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (app) {
  var MissingController = function (_app$Controller) {
    _inherits(MissingController, _app$Controller);

    function MissingController() {
      _classCallCheck(this, MissingController);

      return _possibleConstructorReturn(this, (MissingController.__proto__ || Object.getPrototypeOf(MissingController)).apply(this, arguments));
    }

    _createClass(MissingController, [{
      key: 'insert',
      value: /*#__PURE__*/regeneratorRuntime.mark(function insert() {
        return regeneratorRuntime.wrap(function insert$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.service.missing.insert(this.ctx.request.body);

              case 2:
                this.ctx.body = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, insert, this);
      })
    }, {
      key: 'select',
      value: /*#__PURE__*/regeneratorRuntime.mark(function select() {
        return regeneratorRuntime.wrap(function select$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.service.missing.select(this.ctx.request.body);

              case 2:
                this.ctx.body = _context2.sent;

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, select, this);
      })
    }]);

    return MissingController;
  }(app.Controller);

  return MissingController;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3NpbmcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIk1pc3NpbmdDb250cm9sbGVyIiwic2VydmljZSIsIm1pc3NpbmciLCJpbnNlcnQiLCJjdHgiLCJyZXF1ZXN0IiwiYm9keSIsInNlbGVjdCIsImFwcCIsIkNvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUIsZUFBTztBQUFBLE1BQ2hCQyxpQkFEZ0I7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUlJLEtBQUtDLE9BQUwsQ0FBYUMsT0FBYixDQUFxQkMsTUFBckIsQ0FBNEIsS0FBS0MsR0FBTCxDQUFTQyxPQUFULENBQWlCQyxJQUE3QyxDQUpKOztBQUFBO0FBSWxCLHFCQUFLRixHQUFMLENBQVNFLElBSlM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUUksS0FBS0wsT0FBTCxDQUFhQyxPQUFiLENBQXFCSyxNQUFyQixDQUE0QixLQUFLSCxHQUFMLENBQVNDLE9BQVQsQ0FBaUJDLElBQTdDLENBUko7O0FBQUE7QUFRbEIscUJBQUtGLEdBQUwsQ0FBU0UsSUFSUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsSUFDVUUsSUFBSUMsVUFEZDs7QUFXdEIsU0FBT1QsaUJBQVA7QUFDRCxDQVpEIiwiZmlsZSI6Im1pc3NpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwID0+IHtcbiAgY2xhc3MgTWlzc2luZ0NvbnRyb2xsZXIgZXh0ZW5kcyBhcHAuQ29udHJvbGxlciB7XG4gICAgKiBpbnNlcnQoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN0eC5yZXF1ZXN0LmJvZHkpO1xuICAgICAgdGhpcy5jdHguYm9keSA9IHlpZWxkIHRoaXMuc2VydmljZS5taXNzaW5nLmluc2VydCh0aGlzLmN0eC5yZXF1ZXN0LmJvZHkpO1xuICAgIH1cbiAgICAqIHNlbGVjdCgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3R4LnJlcXVlc3QuYm9keSk7XG4gICAgICB0aGlzLmN0eC5ib2R5ID0geWllbGQgdGhpcy5zZXJ2aWNlLm1pc3Npbmcuc2VsZWN0KHRoaXMuY3R4LnJlcXVlc3QuYm9keSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBNaXNzaW5nQ29udHJvbGxlcjtcbn07XG4iXX0=