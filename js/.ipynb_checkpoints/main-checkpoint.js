$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});

$("[href='#seg2']").click(function(){
    $("#avatar").animateCss('bounceInLeft');
    $("#links").animateCss('bounceInLeft');
    showList();
});

$("#links div").hover(function(){
    $(this).animateCss("tada");
});

$("#avatar").hover(function(){
    $(this).animateCss("bounce");
});

function showList(){
    $('.info-list').hide();
    setTimeout(function(){$($('.info-list')[0]).show();$($('.info-list')[0]).animateCss("bounceInRight")}, 150);
    setTimeout(function(){$($('.info-list')[1]).show();$($('.info-list')[1]).animateCss("bounceInRight")}, 300);
    setTimeout(function(){$($('.info-list')[2]).show();$($('.info-list')[2]).animateCss("bounceInRight")}, 450);
    setTimeout(function(){$($('.info-list')[3]).show();$($('.info-list')[3]).animateCss("bounceInRight")}, 600);
    setTimeout(function(){$($('.info-list')[4]).show();$($('.info-list')[4]).animateCss("bounceInRight")}, 750);
    
}