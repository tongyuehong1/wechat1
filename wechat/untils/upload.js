import wepy from 'wepy'
module.exports = {
  uploadimg(data) {
    let self = this
    let i = data.i ? data.i : 0
    let success = data.success ? data.success : 0
    let fail = data.fail ? data.fail : 0
    wepy.uploadFile({
      url: data.url,
      filePath: data.path[i],
      name: 'fileData',
      formData: null,
      success: (resp) => {
        success++
        console.log(resp)
        console.log(i)
      },
      fail: (res) => {
        fail++
        console.log('fail:' + i + 'fail :' + fail)
      },
      complete: () => {
        console.log(i)
        i++
        if (i === data.path.length) {
          console.log('执行完毕')
          console.log('成功：' + success + ' 失败：' + fail)
        } else {
          console.log(i)
          data.i = i
          data.success = success
          data.fail = fail
          self.uploadimg(data)
        }
      }
    })
  }
}
