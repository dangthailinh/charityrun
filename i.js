function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.style.display = 'none'; // Ẩn tất cả các trang
    });
    document.getElementById(pageId).style.display = 'block'; // Hiển thị trang được chọn
}
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000);

    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
});


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var event = document.getElementById('event').value;
    var message = document.getElementById('message').value;
    
    if (name === "" || email === "" || event === "" || message === "") {
        alert("Please fill out all required fields.");
        return false;
    }


    var checkboxes = document.querySelectorAll('input[name="category"]:checked');
    if (checkboxes.length === 0) {
        alert("Please select at least one category of enquiry.");
        return false;
    }

    return true; 
}


