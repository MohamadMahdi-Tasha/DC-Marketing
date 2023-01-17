// Codes By Mahdi Tasha
// Variables
const homeSwiperNextButton = document.querySelector('.home-swiper-next-btn');
const homeSwiperPrevButton = document.querySelector('.home-swiper-prev-btn');
const homeSwiper = new Swiper('.home-swiper', {slidesPerView: 2,spaceBetween: 30,});

// When Clicked On Prev Or Next Button Slide The Slider To Previous Slide Or Next Of It
homeSwiperPrevButton.addEventListener('click', () => homeSwiper.slidePrev())
homeSwiperNextButton.addEventListener('click', () => homeSwiper.slideNext())

// Adding Event Listener On Home Swiper That Listens To Slide Change Of It ...
homeSwiper.on('slideChange', () => {
    // Variables
    const slideIndex = homeSwiper.activeIndex + 1
    const homeSwiperPaginationToActivate = document.querySelector(`.home-swiper-pagination:nth-of-type(${slideIndex})`);
    const homeSwiperPaginationToDeactivate = document.querySelector(`.home-swiper-pagination.active`);

    // If Index Of Slide Equals To 1 Then Remove Class Of Active From Previous Button
    if (slideIndex === 1) {
        homeSwiperPrevButton.classList.remove('active')
    }
    // If Index Of Slide Equals To 3 Then Remove Class Of Active From Next Button
    else if (slideIndex === 3) {
        homeSwiperNextButton.classList.remove('active')
    }
    // If Index Of Slide Was not 3 or 1 Then Add Class Of Active To Prev And Next Buttons
    else {
        homeSwiperNextButton.classList.add('active')
        homeSwiperPrevButton.classList.add('active')
    }

    // Removing Class Of Active From Pagination Item That Haves It And Adding It To Pagination Item To Activate
    homeSwiperPaginationToDeactivate.classList.remove('active');
    homeSwiperPaginationToActivate.classList.add('active');
})