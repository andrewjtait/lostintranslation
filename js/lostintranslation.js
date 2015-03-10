$(document).ready(function() {
  var title = $("h1");

  title.lettering();
  title.fitText(1.75);
  $(".trailer-wrap").fitVids();

  if ($('.ampersand').css('clear') != 'both') {
    handleDesktop();
  } else {
    handleMobile();
  }

  function handleDesktop() {
    var i = 1,
        modifiers = [0.5, -0.6, 0.8, -1.3, -1.8, 0.8, -0.3, -1.5, 1.3, -1.1, -0.2, 0.4, -0.7, -1.4, 0.7, 1.0, -0.1, 0.3, -0.8, 1.8];

    modifiers.forEach(function(mod) {
      $('.char' + i).parallax(null, mod);
      i++;
    });
  };

  function handleMobile() {
    var lastRender = 0,
        rotationY;

    window.ondevicemotion = function(event) {
      // ratio of rotation, out of 100
      if (window.orientation == 0) {
        rotationY = (event.accelerationIncludingGravity.y + 5) * -20;
      } else {
        rotationY = (event.accelerationIncludingGravity.z + 5) * -20;
      }
      rotationY = rotationY.toFixed(0);

      if ((rotationY > (lastRender + 10)) || (rotationY < (lastRender - 10))) {
        if (rotationY < 10 && rotationY > -10) {
          rotationY = 0;
        }

        var i = 1,
            modifiers = [2.5, -0.5, 4, -5.5, 0, -4, 1.5, 0, 4.5, -2.5, 2, 3, -1, -6, 5, 4.5, -3.5, -3, 2.5, 0];

        modifiers.forEach(function(mod) {
          c = $('.char' + i);
          c.css('margin-top', rotationY * mod);
          c.css('margin-bottom', rotationY * (mod * -1));
          i++;
        });

        lastRender = rotationY;
      }
    }
  };
});
