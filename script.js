$(function(){
  // socials
  $.each(['//connect.facebook.net/ja_JP/all.js#xfbml=1', '//apis.google.com/js/plusone.js',
          '//b.st-hatena.com/js/bookmark_button.js', '//platform.twitter.com/widgets.js']
  , function(i, url) {
    $("<script>", {src:url,async:'async'}).appendTo("body");
  });

  // history state
  var history = window.history;
  $("a[href^=#],a[href=#]").click(function(){
    var offset = this.hash ? $(this.hash).offset().top : 0;
    $("html,body").animate({scrollTop: offset}, 250);
    if (history.pushState) {
        history.pushState(null, null, this.hash||"#");
    }
    return false;
  });
});
