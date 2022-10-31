(function() {
    var body = $('body');
    var backgrounds = ['url(http://static.jsbin.com/images/jsbin_static.png)', 'url(http://static.jsbin.com/images/popout.png)'];
  var current = 0;
  
  function nextBackground() {
    body.css(
     'background',
      backgrounds[current = ++current % backgrounds.length]
   );
  
   setTimeout(nextBackground, 1000);
   }
   setTimeout(nextBackground, 1000);
     body.css('background', backgrounds[0]);
   });