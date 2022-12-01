$("document").ready(function(){
    
      //Sticky Header 
      $(window).scroll(function(){
        if ($(document).scrollTop () < 1){
            $(".header-area").removeClass("fixed");
            $(".header-area").removeClass("active-bg");
        }
        else if ($(document).scrollTop () > 300){
            $(".header-area").removeClass("fixed");
            $(".header-area").addClass("active-bg");
        }
        else{
            $(".header-area").addClass("fixed");
        }
    });
    // Header Menu Toggle
    $('.nav-toggle-icon').click(function(){
        $('.header-menu').slideToggle();
        $(this).hide();
        $('.nav-toggle-crose').show();
    });
    $('.nav-toggle-crose').click(function(){
        $('.header-menu').slideToggle();
        $(this).hide();
        $('.nav-toggle-icon ').show();
    });
      // Profle Show
      $('.nav-toggle-dots').click(function(){
        $('.header-avator').toggleClass('active');
    });
    // Show Search 
    $('.show-search').click(function(){
        $('.search-area').toggleClass('add-search');
    })
    // Modal Muvie + Episod 
    $('#muvie-feature').click(function(){
        $('.hide-muvie-feature').slideToggle();
    })
    $('#episode-feature').click(function(){
        $('.hide-episode').slideToggle();
    })
    $('#epi-muvie-feature').click(function(){
        $('.hide-muvie-feature').slideToggle();
    })
    
      // Listing Top Slider Items
    //   $('.muvie-items-all').owlCarousel({
    //     loop:true,
    //     autoplay:false,
    //     margin:15,
    //     dots:false,
    //     nav:true,
    //     navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    //     responsive:{
    //         0:{
    //             items:2
    //         },
    //         768:{
    //             items:4
    //         },
    //         992:{
    //             items:4
    //         }
    //     }
    // })
    // Hover z-index 
   
    // Swipper Slider 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            clickable: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // breakpoints: {
        //     0: { slidesPerView: 1 },
        //     320: { slidesPerView: 2 },
        //     767: { slidesPerView: 4 },
        //     1400: { slidesPerView: 4 },
        //     1500: { slidesPerView: 4 }
        // },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            575:{
                slidesPerView: 2,
            },
            800:{
                slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //   },
        // effect: "coverflow",
        // grabCursor: true,
        // centeredSlides: true,
        // slidesPerView: "auto",
        // coverflowEffect: {
        //   rotate: 50,
        //   stretch: 5,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // },
    });



   
});

