var position = 0;                    // Track position
var container = document.getElementById('itemsWrapper');  // Get container
var photos = document.querySelectorAll('.category-circle'); // Get photos

function moveRight() {               // Move function
    position++;                      // Add 1 to position
    container.style.transform = 'translateX(' + -(position * 170) + 'px)';
}

for (var i = 0; i < photos.length; i++) {  // Add click to each photo
    photos[i].onclick = moveRight;
}

// Countdown timer
        function updateCountdown() {
            const countdownItems = document.querySelectorAll('.countdown-item');
            countdownItems.forEach((item, index) => {
                let value = parseInt(item.textContent);
                if (value > 0) {
                    value--;
                    item.textContent = value.toString().padStart(2, '0');
                } else if (index < countdownItems.length - 1) {
                    // Reset this counter and decrease the next one
                    item.textContent = '59';
                }
            });
        }

        // Update countdown every second
        setInterval(updateCountdown, 1000);
function updateCarousel() {
  // your logic to update carousel
  console.log("Carousel updated");
}

        // Initialize carousel
        updateCarousel();

$(document).ready(function () {
  $('#div1').owlCarousel({
    loop: true,
    nav: false,
    items: 8,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 3 },
      768: { items: 8 }
    }
  });

  var owlDiv2 = $('#div2 .owl-carousel');

  owlDiv2.owlCarousel({
    loop: true,
    nav: false,
    items: 5,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      768: { items: 5 }
    }
  });
  var owlDiv3 = $('#div3 .owl-carousel');

owlDiv3.owlCarousel({
  loop: true,
  nav: false,
  items: 5,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 2 },
    768: { items: 5 }
  }
});
var owlDiv4 = $('#div4 .owl-carousel');

owlDiv4.owlCarousel({
  loop: true,
  nav: false,
  items: 5,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1 },
    768: { items: 3 }
  }
});



  $('#custom-prev2').click(function(e) {
    e.preventDefault();
    owlDiv2.trigger('prev.owl.carousel');
  });

  $('#custom-next2').click(function(e) {
    e.preventDefault();
    owlDiv2.trigger('next.owl.carousel');
  });

  $('#custom-prev3').click(function(e) {
    e.preventDefault();
    owlDiv3.trigger('prev.owl.carousel');
  });

  $('#custom-next3').click(function(e) {
    e.preventDefault();
    owlDiv3.trigger('next.owl.carousel');
  });
  $('#custom-prev4').click(function(e) {
    e.preventDefault();
    owlDiv4.trigger('prev.owl.carousel');
  });

  $('#custom-next4').click(function(e) {
    e.preventDefault();
    owlDiv4.trigger('next.owl.carousel');
  });
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

    

$(document).ready(function () {
  $('#div2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 16, // important to add margin between items
    nav: false,
    items: 5,
    autoplay: true,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 }
    }
  });
});

 const tabs = document.querySelectorAll('#arrivalTabs a[data-category]');
  const panes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const category = this.getAttribute('data-category');

      tabs.forEach(t => t.classList.remove('active', 'text-danger'));
      this.classList.add('active', 'text-danger');

      panes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.getAttribute('data-category') === category) {
          pane.classList.add('active');
        }
      });
    });
  });
  const blogCarousel = document.getElementById("blogCarousel");
  const blogNext = document.getElementById("blogNext");
  const blogPrev = document.getElementById("blogPrev");

  blogNext.addEventListener("click", () => {
    blogCarousel.scrollBy({ left: 320, behavior: 'smooth' });
  });

  blogPrev.addEventListener("click", () => {
    blogCarousel.scrollBy({ left: -320, behavior: 'smooth' });
  });