var tiles = Array.prototype.slice.call(document.querySelectorAll('.block--skills__tile'));
var offsets = [];

window.onload = function(){
   document.querySelector('html').style.display = 'block';
   var tiles = Array.prototype.slice.call(document.querySelectorAll('.block--skills__tile'));
   setOffsets();
   checkAnimation();
   document.querySelector('.block--intro__center-inside').style.display = 'inline-block';
   var skills_icons = document.querySelectorAll('.block--skills__icon');
};

function setOffsets() {
   for (var i = 0; i < tiles.length; i++) {
      var tile = tiles[i];
      offsets[i] = tile.offsetTop + tile.clientHeight;
   }
};

window.onresize = setOffsets;

function checkAnimation() {
   var scroll = window.scrollY + window.innerHeight;

   for (var i = 0; i < offsets.length; i++) {
      if (scroll >= offsets[i]) {
         tiles[i].children[1].children[0].classList.add('block--skills__h2--show');
         tiles[i].children[0].classList.add('block--skills__icon--animate');

         for(var j = 1; j < tiles[i].children[1].children.length; j++) {
            tiles[i].children[1].children[j].classList.add('block--skills__h3--show');
         }
      }
   }
};

window.onscroll = checkAnimation;
