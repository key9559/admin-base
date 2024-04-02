// responsive
function leftHeaderFold () {
  if(window.innerWidth <= 768) {
    document.querySelector('#page').classList.add('tab-size');
  } else {
    document.querySelector('#page').classList.remove('tab-size');
    document.querySelector('.manage-left-hd').classList.remove('tab-active');
  }
}

leftHeaderFold();

window.addEventListener('resize', function () {
  leftHeaderFold()
});

document.querySelector('.btn-gnb-icon').addEventListener('click', function () {
  document.querySelector('.manage-left-hd').classList.toggle('tab-active');
})

// table checked
let $inputCheckboxs = document.querySelectorAll(".cell-chck [type='checkbox']");

for (i = 0; i <= $inputCheckboxs.length; i++) {
  let $inputCheckbox = $inputCheckboxs[i];

  if ($inputCheckboxs >= 0) {
    $inputCheckbox.addEventListener("click", function () {
      let $inputCheckeds = document.querySelectorAll(".cell-chck .inp-chck:checked");
      for (i = 0; i <= $inputCheckeds.length; i++) {
        let $inputChecked = $inputCheckeds[i];
        $inputChecked.closest('.manage-table-row').style.color = '#3B5A93';
      }
    })
  }
}

// gnb
const $gnbActive = document.querySelector(".nav-link.active");
const $gnbTtl = document.querySelectorAll(".nav-ttl");

for (i = 0; i <= $gnbTtl.length; i++) {
  let $targetGnbTtl = $gnbTtl[i];

  $targetGnbTtl.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  $gnbActive
    .closest(".nav-list-wrap")
    .previousElementSibling.classList.add("active", "on");
}
