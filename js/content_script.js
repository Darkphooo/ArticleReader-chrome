$(function() {
  var clearDom = {
    clear: function() {
      var id_name = [
        "header",
        "maincontent",
        "LOCSTORAGE",
        "lsframe",
        "google_osd_static_frame_5424189465589",
        "kx-proxy-JVZiE3vn",
        "dfp-ad--inline1"
      ];
      var class_name = [
        "iframed--overflow-hidden",
        "block-share--article",
        "ad-slot--dfp",
        "navigation-container",
        "breaking-news",
        "gallery-lightbox",
        "site-message",
        "skip",
        "top-banner-ad-container",
        "content__labels",
        "content__meta-container",
        "inline-expand-image",
        "submeta",
        "after-article",
        "content__secondary-column",
        "content-footer",
        "l-footer",
        "element-rich-link",
        "ad_unit",
        "selection-sharing",
        "kxhead"
      ];

      for (var i = 0; i < id_name.length; i++) {
        $('#' + id_name[i]).remove();
      }

      for (var i = 0; i < class_name.length; i++) {
        $('.' + class_name[i]).remove();
      }

      $("script").remove();
      $("noscript").remove();
      $("aside").remove();
      $("link").remove();
      $("meta").remove();
    },
    init: function() {
      this.clear();
    }
  }
  $(document).ready(function() {
    clearDom.init();
    setTimeout(function(){
      clearDom.init();
    },5000)
  });

  $("article").mouseup(function (event) {
    $('#translation').remove()
    var oDiv = document.createElement('div'); 
    var selection = window.getSelection().toString();
    if(selection != ""){
      oDiv.style.left = event.clientX+'px';
      oDiv.style.top = event.clientY+$(document).scrollTop()+'px';
      oDiv.style.border = '1px solid #000';
      oDiv.style.background = '#ffeb3b'
      oDiv.style.position = 'absolute';
      oDiv.style.width = '200px';
      oDiv.style.height = 'auto';
      oDiv.style.fontSize = '12px';
      $(oDiv).attr("id","translation");
      document.body.appendChild(oDiv);
      $.get("https://api.shanbay.com/bdc/search/?word="+selection, function (response, status) {
        if(status == "success"){
          console.log(response);
          if(response.status_code == 0){
            document.getElementById("translation").innerHTML = "<div><p>"+response.data.content+
              "</p><p>中文释义："+response.data.definition+
              "</p><p>音标:"+response.data.pronunciation
          }else if(response.status_code == 1){
            document.getElementById("translation").innerHTML="<div><p>"+response.msg+"</p></div>"
          }
        }else if(status == "fail"){
          document.getElementById("translation").innerHTML="<div><p>网络出错，请重试！</p></div>"
        }
      });
    }  
  });
})
