var tiles = Array.prototype.slice.call(document.querySelectorAll('.block--skills__tile, .block--edu__tile'));
var offsets = [];

window.onload = function(){
   document.querySelector('html').style.display = 'block';
   var tiles = Array.prototype.slice.call(document.querySelectorAll('.block--skills__tile, .block--edu__tile'));
   showWork();
   setOffsets();
   checkAnimation();
   calcVH();
   var introCenter = document.querySelector('.block--intro__center-inside');
   if (introCenter) {
      introCenter.style.display = 'inline-block';
   }
   var skills_icons = document.querySelectorAll('.block--skills__icon');
};

function showWork() {
   var titles = document.querySelectorAll('.block--work__title');
   var links = document.querySelectorAll('.block--work__links');
   var tech = document.querySelectorAll('.block--work__tech');
   for (var i = 0; i < titles.length; i++) {
      titles[i].classList.add('block--work-animate');
      links[i].classList.add('block--work-animate');
      tech[i].classList.add('block--work-animate');
   }
}

function setOffsets() {
   for (var i = 0; i < tiles.length; i++) {
      var tile = tiles[i];
      offsets[i] = tile.offsetTop + tile.clientHeight;
   }
};

function calcVH() {
  if( window.innerWidth <= 767) {
    var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 50;
    document.querySelector(".block--intro").setAttribute("style", "height:" + vH + "px;");
  }
}

document.addEventListener('orientationchange', calcVH);

window.onresize = function() {
   setOffsets();
};

function checkAnimation() {
   var scroll = window.pageYOffset + window.innerHeight;

   for (var i = 0; i < offsets.length; i++) {
      if (scroll >= offsets[i]) {
         if (tiles[i].children[1]) {
            tiles[i].children[1].children[0].classList.add('block--skills__h2--show');
         }
         if (tiles[i].children[0].classList) {
            tiles[i].children[0].classList.add('block--skills__icon--animate');
         }

         for(var j = 1; j < tiles[i].children[1].children.length; j++) {
            if (tiles[i].children[1]) {
               tiles[i].children[1].children[j].classList.add('block--skills__h3--show');
            }
         }
      }
   }

   if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      document.querySelector(".footer__link--contact").classList.add("footer__link--contact-animate");
      var links = document.querySelectorAll(".footer__link--social");
      for (var i = 0; i < links.length; i++) {
         links[i].classList.add("footer__link--social-animate");
      }
   }
};

window.onscroll = checkAnimation;
