function openNav() {
    document.getElementById("sidebar").classList.add("openSidebar");
    document.querySelector(".openbtn").classList.add("rotateButton");
}

function closeNav() {
    document.getElementById("sidebar").classList.remove("openSidebar");
    document.querySelector(".openbtn").classList.remove("rotateButton"); 
}

function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    const button = document.querySelector(".openbtn");

    if (sidebar.classList.contains("openSidebar")) {
        closeNav();
    } else {
        openNav();
    }
}


function redirectToProject1() {
    window.location.href = "project1.html";
}

function redirectToProject2() {
  window.location.href = "project2.html";
}

function redirectToProject3() {
  window.location.href = "project2.html";
}

function redirectToProject4() {
  window.location.href = "project2.html";
}


const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });

  handleVideoPause();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateGallery();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateGallery();
}

function goToSlide(index) {
  currentIndex = index;
  updateGallery();
}

function handleVideoPause() {
  const video = document.querySelector('.video-slide');
  if (video && currentIndex !== 0 && !video.paused) {
    video.pause(); //Pause the video when it's not the current slide
  }
}

updateGallery();

