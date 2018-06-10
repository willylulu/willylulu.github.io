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
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    
    var elems = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(elems);
});

$("[href='#seg2']").click(function(){
    $("#avatar").animateCss('bounceInLeft');
    $("#links").animateCss('bounceInLeft');
});

$("#links div").hover(function(){
    $(this).animateCss("tada");
});

$("#avatar").hover(function(){
    $(this).animateCss("bounce");
});
