function notAvailable() {
    alert('Tính năng này đang phát triển! Quý khách có nhu cầu mua hàng xin vui lòng liên hệ Zalo 0965 266 926');
}

// Scroll to top btn
// Khi cuộn đến 300px thì func sẽ chạy
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let myBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myBtn.className = "show";
    } else {
        myBtn.className = "";
    }
}

// cuộn về đầu khi click btn
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}