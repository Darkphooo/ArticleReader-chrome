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
})