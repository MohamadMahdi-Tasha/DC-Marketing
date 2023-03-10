// Codes By Mahdi Tasha
// Variables
const homeSwiperNextButton = document.querySelector('.home-swiper-next-btn');
const homeSwiperPrevButton = document.querySelector('.home-swiper-prev-btn');
const mobileNavToggler = document.getElementById('mobile-nav-toggler');
const mobileNavHolder = document.getElementById('mobile-nav-holder');
const mobileNavDarkBg = document.getElementById('mobile-nav-dark-bg');
const mobileNavCloser = document.getElementById('mobile-nav-closer');
const homeSwiper = new Swiper('.home-swiper', {spaceBetween: 30, breakpoints: {991: {slidesPerView: 2,}, 0: {slidesPerView: 1,}}});

// A Function That Toggles 'opened' Attribute On Mobile Nav Holder
const mobileNavOpenAndClose = () => mobileNavHolder.toggleAttribute('opened');

// A Function That ...
function homeSliderSlide(slideIndex) {
    // If Index Of Slide Equals To 1 Then Remove Class Of Active From Previous Button
    if (slideIndex === 1) {homeSwiperPrevButton.classList.remove('active')}

    // If Index Of Slide Equals To 3 And Width Of Window Is More Or Equal To 991 Then Remove Class Of Active From Next Button
    else if (slideIndex === 3 && window.innerWidth >= 991) {homeSwiperNextButton.classList.remove('active')}

    // If Index Of Slide Equals To 4 And Width Of Window Is less Or Equal To 991 Then Remove Class Of Active From Next Button
    else if (slideIndex === 4 && window.innerWidth <= 991) {homeSwiperNextButton.classList.remove('active')}

    // If Index Of Slide Was not 3 or 1 Then Add Class Of Active To Prev And Next Buttons
    else {homeSwiperNextButton.classList.add('active');homeSwiperPrevButton.classList.add('active');}
}

// A Function That ...
function HomeSwiperSlideAndResizeActions() {
    // Variables
    const slideIndex = homeSwiper.activeIndex + 1
    const homeSwiperPaginationToActivate = document.querySelector(`.home-swiper-pagination:nth-of-type(${slideIndex})`);
    const homeSwiperPaginationToDeactivate = document.querySelector(`.home-swiper-pagination.active`);

    // Calling 'homeSliderSlide' Function
    homeSliderSlide(slideIndex)

    // Removing Class Of Active From Pagination Item That Haves It And Adding It To Pagination Item To Activate
    homeSwiperPaginationToDeactivate.classList.remove('active');
    homeSwiperPaginationToActivate.classList.add('active');
}

// Adding EventListener If Click To 'mobileNavDarkBg', 'mobileNavToggler' and 'mobileNavCloser' Which Calls 'mobileNavOpenAndClose' Function
mobileNavDarkBg.addEventListener('click', mobileNavOpenAndClose)
mobileNavToggler.addEventListener('click', mobileNavOpenAndClose)
mobileNavCloser.addEventListener('click', mobileNavOpenAndClose)

// When Clicked On Prev Or Next Button Slide The Slider To Previous Slide Or Next Of It
homeSwiperPrevButton.addEventListener('click', () => homeSwiper.slidePrev())
homeSwiperNextButton.addEventListener('click', () => homeSwiper.slideNext())

// Adding Event Listener On Home Swiper That Listens To Slide Change Of It And Calls 'HomeSwiperSlideAndResizeActions' Function
homeSwiper.on('slideChange', HomeSwiperSlideAndResizeActions)

// Adding Event Listener On Window That Listens To resize Of It And Calls 'HomeSwiperSlideAndResizeActions' Function
window.addEventListener('resize', HomeSwiperSlideAndResizeActions)