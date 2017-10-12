<script>
  var $ = jQuery = require('jquery');
  
  var morkArr = [
    {name: '服务产品', number: 2, contList: [
      {content: '学历鉴定'},
      {content: '法律'},
      {content: '犯罪'},
      {content: '学位鉴定'},
      {content: '职称鉴定'}
    ]},
    {name: '服务人员', number: 45, contList: [
      {content: '张三'},
      {content: '李四'},
      {content: '王五'},
      {content: '赵六'},
      {content: '爱新觉罗'}
    ]},
    {name: '服务视频', number: 57, contList: [
      {content: '法规视频'},
      {content: '司法视频'},
      {content: '犯罪视频'},
      {content: '学位视频'}
    ]},
    {name: '学习视频', number: 57, contList: [
      {content: '1视频'},
      {content: '2视频'},
      {content: '3视频'},
      {content: '4视频'},
      {content: '5视频'}
    ]}
  ]

  var len = morkArr.length;
  var aa = '法律视频'
  var lenaa = aa.length
  var rex = new RegExp('' + aa + '', 'g')
  var abb = aa.replace(rex, '<b style="color: black">' + abb + '</b>')

  $.fn.serch = function (arr) {
    var newArr = []
    var newTwoArr = []
    var clearArr=[]
    var arrLength = arr.length;
    function forInarr (text) {
      newArr = []
      for(var i = 0; i < arrLength; i++) {
        var len = arr[i].contList.length
        for(var j = 0; j < len; j++) {
          if (arr[i].contList[j].content.indexOf(text) !== -1) {
            var ob = {name: arr[i].name, contList: [], number: ''}
            newArr.push(ob)
            break
          }
        }
      }

      for (var gt = 0; gt < arrLength; gt++) {
        var lena = newArr.length
        for (var hs = 0; hs < lena; hs++) {
          if (arr[gt].name === newArr[hs].name) {
            var dbLen = arr[gt].contList.length;
            for (var db = 0; db < dbLen; db++) {
              if (arr[gt].contList[db].content.indexOf(text) !== -1) {
                var cb = {name: arr[gt].contList[db].content}
                newArr[hs].contList.push(cb)
              }
            }
          }
        }
      }
      return newArr
    }
    $(this).on('keyup', function () {
      var text = $(this).val()
      var rex = new RegExp('' + text + '', 'g')
      var thisArr = []
      if (text === '') {
        $('.result-search-warp').removeClass('active')
      } else {
        $('.result-search-warp').addClass('active')
        var listArr = forInarr(text)
        var listArrLen = listArr.length
        console.log(listArr)
        $('.result-search-warp').empty()
        for (var i = 0; i < listArrLen; i++) {
          var inerLen = listArr[i].contList.length
          var docu = '<div class="title">' +
                    '<span class="title-left">' + listArr[i].name + '</span>' +
                    '<span class="title-right">共' + listArr[i].number + '个结果</span>' +
                    '</div>'
                    $(docu).appendTo($('.result-search-warp'))
          for (var j = 0; j < inerLen; j++) {
            var inerName = listArr[i].contList[j].name
            var inerrName = inerName.replace(rex, '<b style="color: red">' + text + '</b>')
            var docub = '<li class="search-list">' +
                          '<span>' + inerrName + '</span>' +
                          '<a href="javascript:;"></a>' +
                        '</li>'
            $(docub).appendTo($('.result-search-warp'))
          }
        }
      }
    })
    $(this).on('blur', function () {
      $('.result-search-warp').removeClass('active')
    })
    $(this).on('focus', function () {
      var text = $(this).val()
      if (text !== '') {
        $('.result-search-warp').addClass('active')
      } else {
        $('.result-search-warp').removeClass('active')
      }
    })
  }

  $('.search-input').serch(morkArr)
</script>