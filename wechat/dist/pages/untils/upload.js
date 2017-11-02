'use strict';

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = [function uploadimg(data) {
  var self = this;
  var i = data.i ? data.i : 0;
  var _success = data.success ? data.success : 0;
  var _fail = data.fail ? data.fail : 0;
  _wepy2.default.uploadFile({
    url: data.url,
    filePath: data.path[i],
    name: 'fileData',
    formData: null,
    success: function success(resp) {
      _success++;
      console.log(resp);
      console.log(i);
    },
    fail: function fail(res) {
      _fail++;
      console.log('fail:' + i + 'fail :' + _fail);
    },
    complete: function complete() {
      console.log(i);
      i++;
      if (i === data.path.length) {
        console.log('执行完毕');
        console.log('成功：' + _success + ' 失败：' + _fail);
      } else {
        console.log(i);
        data.i = i;
        data.success = _success;
        data.fail = _fail;
        self.uploadimg(data);
      }
    }
  });
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXBsb2FkaW1nIiwiZGF0YSIsInNlbGYiLCJpIiwic3VjY2VzcyIsImZhaWwiLCJ1cGxvYWRGaWxlIiwidXJsIiwiZmlsZVBhdGgiLCJwYXRoIiwibmFtZSIsImZvcm1EYXRhIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJjb21wbGV0ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBQ0FBLE9BQU9DLE9BQVAsR0FBaUIsQ0FDZixTQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixNQUFJQyxPQUFPLElBQVg7QUFDQSxNQUFJQyxJQUFJRixLQUFLRSxDQUFMLEdBQVNGLEtBQUtFLENBQWQsR0FBa0IsQ0FBMUI7QUFDQSxNQUFJQyxXQUFVSCxLQUFLRyxPQUFMLEdBQWVILEtBQUtHLE9BQXBCLEdBQThCLENBQTVDO0FBQ0EsTUFBSUMsUUFBT0osS0FBS0ksSUFBTCxHQUFZSixLQUFLSSxJQUFqQixHQUF3QixDQUFuQztBQUNBLGlCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLFNBQUtOLEtBQUtNLEdBREk7QUFFZEMsY0FBVVAsS0FBS1EsSUFBTCxDQUFVTixDQUFWLENBRkk7QUFHZE8sVUFBTSxVQUhRO0FBSWRDLGNBQVUsSUFKSTtBQUtkUCxhQUFTLGlCQUFDUSxJQUFELEVBQVU7QUFDakJSO0FBQ0FTLGNBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBQyxjQUFRQyxHQUFSLENBQVlYLENBQVo7QUFDRCxLQVRhO0FBVWRFLFVBQU0sY0FBQ1UsR0FBRCxFQUFTO0FBQ2JWO0FBQ0FRLGNBQVFDLEdBQVIsQ0FBWSxVQUFVWCxDQUFWLEdBQWMsUUFBZCxHQUF5QkUsS0FBckM7QUFDRCxLQWJhO0FBY2RXLGNBQVUsb0JBQU07QUFDZEgsY0FBUUMsR0FBUixDQUFZWCxDQUFaO0FBQ0FBO0FBQ0EsVUFBSUEsTUFBTUYsS0FBS1EsSUFBTCxDQUFVUSxNQUFwQixFQUE0QjtBQUMxQkosZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELGdCQUFRQyxHQUFSLENBQVksUUFBUVYsUUFBUixHQUFrQixNQUFsQixHQUEyQkMsS0FBdkM7QUFDRCxPQUhELE1BR087QUFDTFEsZ0JBQVFDLEdBQVIsQ0FBWVgsQ0FBWjtBQUNBRixhQUFLRSxDQUFMLEdBQVNBLENBQVQ7QUFDQUYsYUFBS0csT0FBTCxHQUFlQSxRQUFmO0FBQ0FILGFBQUtJLElBQUwsR0FBWUEsS0FBWjtBQUNBSCxhQUFLRixTQUFMLENBQWVDLElBQWY7QUFDRDtBQUNGO0FBM0JhLEdBQWhCO0FBNkJELENBbkNjLENBQWpCIiwiZmlsZSI6InVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgZnVuY3Rpb24gdXBsb2FkaW1nKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBsZXQgaSA9IGRhdGEuaSA/IGRhdGEuaSA6IDBcbiAgICBsZXQgc3VjY2VzcyA9IGRhdGEuc3VjY2VzcyA/IGRhdGEuc3VjY2VzcyA6IDBcbiAgICBsZXQgZmFpbCA9IGRhdGEuZmFpbCA/IGRhdGEuZmFpbCA6IDBcbiAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgdXJsOiBkYXRhLnVybCxcbiAgICAgIGZpbGVQYXRoOiBkYXRhLnBhdGhbaV0sXG4gICAgICBuYW1lOiAnZmlsZURhdGEnLFxuICAgICAgZm9ybURhdGE6IG51bGwsXG4gICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xuICAgICAgICBzdWNjZXNzKytcbiAgICAgICAgY29uc29sZS5sb2cocmVzcClcbiAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgIGZhaWwrK1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbDonICsgaSArICdmYWlsIDonICsgZmFpbClcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgICBpKytcbiAgICAgICAgaWYgKGkgPT09IGRhdGEucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn5omn6KGM5a6M5q+VJylcbiAgICAgICAgICBjb25zb2xlLmxvZygn5oiQ5Yqf77yaJyArIHN1Y2Nlc3MgKyAnIOWksei0pe+8micgKyBmYWlsKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICAgICAgZGF0YS5pID0gaVxuICAgICAgICAgIGRhdGEuc3VjY2VzcyA9IHN1Y2Nlc3NcbiAgICAgICAgICBkYXRhLmZhaWwgPSBmYWlsXG4gICAgICAgICAgc2VsZi51cGxvYWRpbWcoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbl1cbiJdfQ==