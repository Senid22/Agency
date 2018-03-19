(function() {
  var carousel, next, prev, seats;

  carousel = $('.carousel');

  seats = $('.carousel-seat');

  next = function(el) {
    if (el.next().length > 0) {
      return el.next();
    } else {
      return seats.first();
    }
  };

  prev = function(el) {
    if (el.prev().length > 0) {
      return el.prev();
    } else {
      return seats.last();
    }
  };

  $('.toggle').on('click', function(e) {
    var el, i, j, new_seat, ref;
    el = $('.is-ref').removeClass('is-ref');
    if ($(e.currentTarget).data('toggle') === 'next') {
      new_seat = next(el);
      carousel.removeClass('is-reversing');
    } else {
      new_seat = prev(el);
      carousel.addClass('is-reversing');
    }
    new_seat.addClass('is-ref').css('order', 1);
    for (i = j = 2, ref = seats.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
      new_seat = next(new_seat).css('order', i);
    }
    carousel.removeClass('is-set');
    return setTimeout((function() {
      return carousel.addClass('is-set');
    }), 50);
  });

}).call(this);

window.addEventListener('load', function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(43.99240229999999, 18.181871699999988)
    });

    // See Github for class https://github.com/defvayne23/SVGMarker
    var marker = new SVGMarker({
      map: map,
      position: new google.maps.LatLng(43.99240229999999, 18.181871699999988),
      icon: {
        anchor: new google.maps.Point(30, 30.26),
        size: new google.maps.Size(60,30.26),
        url: 'http://image.flaticon.com/icons/svg/252/252025.svg'
      }
    })
  });