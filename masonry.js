window.addEventListener('load',function(){
  
  var elem = document.querySelector('.caja-imagenes2');
  elem.style.display='block'
  var masonry = new Masonry( elem, {
  // options
  itemSelector: '.imagenes-masonry',
});
})
