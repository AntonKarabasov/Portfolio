// const hamburger = document.querySelector('.hamburger'),
//      menu = document.querySelector('.menu'),
//      closeElem = document.querySelector('.menu__close');


// hamburger.addEventListener('click', () => {
//      menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
     lines[i].style.width = item.innerHTML;
});

$(document).ready(function () {

     $('.hamburger').on('click', function() {
		$('.menu').addClass('active');
	});

     $('.menu__close').on('click', function() {
		$('.menu').removeClass('active');
	});

     $('form').submit(function(e) {
          e.preventDefault();
          $.ajax({
               type: "POST",
               url: "mailer/smart.php",
               data: $(this).serialize()
          }).done(function() {
               $(this).find("input").val("");
               $('.overlay, #thanks').fadeIn('slow');

               $('form').trigger('reset');
          });
          return false;
     });

     $('.modal__close').on('click', function() {
		$('.overlay, #thanks').fadeOut('slow');
	});
});
