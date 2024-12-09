const goToChannel = () => window.open('https://www.youtube.com/@sparklygeorgia');
const goToSerendipiware = () => window.open('https://serendipiwa.re');
const goToRecentVideo = () => window.open('https://www.youtube.com/shorts/5_Tf8Kcimgs');
const goToLinkedin = () => window.open('https://www.linkedin.com/in/georgia-patra-012149329/');

const body = document.body;
const heroSection = document.querySelector("#heroSection");
const channelStats = document.querySelector("#channelStats");
const channelInfoSection = document.querySelector("#channelInfoSection");

const navigationMenuMobileButton = document.querySelector("#navigationMenuMobileButton");
const navigationMenuMobile = document.querySelector("#navigationMenuMobile");
const navigationCloseButton = document.querySelector("#navigationCloseButton");

const showMobileMenu = () => {
    if (navigationMenuMobile.classList.contains("navigationMenuMobileInactive")) {
        navigationMenuMobile.classList.remove("navigationMenuMobileInactive");
        heroSection.style.filter = "blur(8)";
        navigationMenuMobile.classList.add("navigationMenuMobileActive");
        heroSection.classList.add("blurredBackground");
        channelStats.classList.add("blurredBackground");
        channelInfoSection.classList.add("blurredBackground");
        body.classList.add("noScroll");
    }
}
const hideMobileMenu = () => {
    if (navigationMenuMobile.classList.contains("navigationMenuMobileActive")) {
        navigationMenuMobile.classList.remove("navigationMenuMobileActive");
        navigationMenuMobile.classList.add("navigationMenuMobileInactive");
        heroSection.classList.remove("blurredBackground");
        channelStats.classList.remove("blurredBackground");
        channelInfoSection.classList.remove("blurredBackground");
        body.classList.remove("noScroll");
    }
}
navigationMenuMobileButton.addEventListener("click", showMobileMenu);
navigationMenuMobile.addEventListener("click", hideMobileMenu);