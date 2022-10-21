// popup
const $openBtn = document.querySelectorAll(".btn-modal-open");

function popupOpen(name) {
  var $popupName = document.getElementById(name);

  $popupName.classList.add("active");
}

function popupClose() {
  const $popup = document.querySelector(".popup.active");

  $popup.classList.remove("active");
}

// gnb
const $gnbActive = document.querySelector(".nav-link.active");
const $gnbTtl = document.querySelectorAll(".nav-ttl");

console.log($gnbTtl);

for (i = 0; i <= $gnbTtl.length; i++) {
  let $targetGnbTtl = $gnbTtl[i];

  $targetGnbTtl.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  $gnbActive
    .closest(".nav-list-wrap")
    .previousElementSibling.classList.add("active", "on");
}
