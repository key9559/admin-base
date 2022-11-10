// table checked
let $inputCheckboxs = document.querySelectorAll(".cell-chck [type='checkbox']");

for (i = 0; i <= $inputCheckboxs.length; i++) {
  let $inputCheckbox = $inputCheckboxs[i];

  if ($inputCheckboxs >= 0) {
    $inputCheckbox.addEventListener("click", function () {
      let $inputCheckeds = document.querySelectorAll(".cell-chck .inp-chck:checked");
      for (i = 0; i <= $inputCheckeds.length; i++) {
        let $inputChecked = $inputCheckeds[i];
        $inputChecked.closest('.ad-table-row').style.color = '#3B5A93';
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
