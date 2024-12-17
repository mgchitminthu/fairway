const computerBasicTag = document.getElementById("computer-basic");
const programmingBasicTag = document.getElementById("programming-basic");
const webUiUxTag = document.getElementById("webUiUx");
const professionalGraphicDesignTag = document.getElementById(
  "professionalGraphicDesign"
);
const professionalWebDeveloperTag = document.getElementById(
  "professionalWebDeveloper"
);
const rockStarTag = document.getElementById("rockStar");

const totalTimeTag = document.getElementById("totalTime");
const totalPriceTag = document.getElementById("totalPrice");
const check1Tag = document.getElementById("check1");
const check2Tag = document.getElementById("check2");
const check3Tag = document.getElementById("check3");
const check4Tag = document.getElementById("check4");
const check5Tag = document.getElementById("check5");
const check6Tag = document.getElementById("check6");

// const upArrowTag = document.getElementById("upArrow");

// window.addEventListener("load", () => {
//   upArrowTag.style.transform = "translateX(100px)";
// })

// window.onscroll = function() {
//   myFunction();
// }

// function myFunction() {
//   if(document.documentElement.scrollTop > 150)  {
//     upArrowTag.style.transform = "translateX(-10px)"
//   }
// }

//rock Star
rockStarTag.addEventListener("click", () => {
  if (rockStarTag.classList.contains("selected")) {
    rockStarRemoveSelected();
    if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၄၅၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (computerBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၂ လ";
      totalPriceTag.textContent = " ၅၀,၀၀၀ ကျပ်";
    } else if (programmingBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၀၀,၀၀၀ ကျပ်";
    } else if (webUiUxTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    }
  } else {
    if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၇ လ ";
      totalPriceTag.textContent = " ၁,၂၅၀,၀၀၀ ကျပ် ";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = "၁၅ လ";
      totalPriceTag.textContent = " ၁,၂၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = "၁၄ လ";
      totalPriceTag.textContent = "၁,၀၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = "၁,၀၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ ";
      totalPriceTag.textContent = "  ၇၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = "၈၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = "  ၁၁ လ";
      totalPriceTag.textContent = "  ၈၀၀,၀၀၀ ကျပ် ";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ် ";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (computerBasicTag.classList.contains("selected")) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (programmingBasicTag.classList.contains("selected")) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (webUiUxTag.classList.contains("selected")) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      rockStarTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check6Tag.classList.add("fas", "fa-check");
    } else {
      rockStarAddSelected();
    }
  }
});

function rockStarAddSelected() {
  rockStarTag.classList.add("selected");
  totalTimeTag.textContent = " ၃ လ";
  totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
  check6Tag.classList.add("fas", "fa-check");
}

function rockStarRemoveSelected() {
  rockStarTag.classList.remove("selected");
  totalTimeTag.textContent = "";
  totalPriceTag.textContent = "";
  check6Tag.classList.remove("fas", "fa-check");
}

// professional WebDeveloper
professionalWebDeveloperTag.addEventListener("click", () => {
  if (professionalWebDeveloperTag.classList.contains("selected")) {
    professionalWebDeveloperRemoveSelected();
    if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၄၅၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (computerBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၂ လ";
      totalPriceTag.textContent = " ၅၀,၀၀၀ ကျပ်";
    } else if (programmingBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၀၀,၀၀၀ ကျပ်";
    } else if (webUiUxTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (rockStarTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    }
  } else {
    if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၇ လ ";
      totalPriceTag.textContent = " ၁,၂၅၀,၀၀၀ ကျပ် ";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = "၁၅ လ";
      totalPriceTag.textContent = " ၁,၂၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = "၁၄ လ";
      totalPriceTag.textContent = "၁,၀၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = "၁,၀၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ ";
      totalPriceTag.textContent = "  ၇၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = "၈၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = "  ၁၁ လ";
      totalPriceTag.textContent = "  ၈၀၀,၀၀၀ ကျပ် ";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ် ";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (computerBasicTag.classList.contains("selected")) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (programmingBasicTag.classList.contains("selected")) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (webUiUxTag.classList.contains("selected")) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else if (rockStarTag.classList.contains("selected")) {
      professionalWebDeveloperTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check5Tag.classList.add("fas", "fa-check");
    } else {
      professionalWebDeveloperAddSelected();
    }
  }
});

function professionalWebDeveloperAddSelected() {
  professionalWebDeveloperTag.classList.add("selected");
  totalTimeTag.textContent = " ၃ လ";
  totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
  check5Tag.classList.add("fas", "fa-check");
}
function professionalWebDeveloperRemoveSelected() {
  professionalWebDeveloperTag.classList.remove("selected");
  totalTimeTag.textContent = "";
  totalPriceTag.textContent = "";
  check5Tag.classList.remove("fas", "fa-check");
}

//graphic Design
professionalGraphicDesignTag.addEventListener("click", () => {
  if (professionalGraphicDesignTag.classList.contains("selected")) {
    professionalGraphicDesignRemoveSelected();
    if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၄၅၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (computerBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၂ လ";
      totalPriceTag.textContent = " ၅၀,၀၀၀ ကျပ်";
    } else if (programmingBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၀၀,၀၀၀ ကျပ်";
    } else if (webUiUxTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (rockStarTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    }
  } else {
    if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၇ လ ";
      totalPriceTag.textContent = " ၁,၂၅၀,၀၀၀ ကျပ် ";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = "၁၅ လ";
      totalPriceTag.textContent = " ၁,၂၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = "၁၄ လ";
      totalPriceTag.textContent = "၁,၀၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = "၁,၀၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ ";
      totalPriceTag.textContent = "  ၇၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = "၈၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = "  ၁၁ လ";
      totalPriceTag.textContent = "  ၈၀၀,၀၀၀ ကျပ် ";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ် ";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (computerBasicTag.classList.contains("selected")) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (programmingBasicTag.classList.contains("selected")) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (webUiUxTag.classList.contains("selected")) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (rockStarTag.classList.contains("selected")) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      professionalGraphicDesignTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check4Tag.classList.add("fas", "fa-check");
    } else {
      professionalGraphicDesignAddSelected();
    }
  }
});

function professionalGraphicDesignAddSelected() {
  professionalGraphicDesignTag.classList.add("selected");
  totalTimeTag.textContent = " ၃ လ";
  totalPriceTag.textContent = "၂၅၀,၀၀၀ ကျပ်";
  check4Tag.classList.add("fas", "fa-check");
}
function professionalGraphicDesignRemoveSelected() {
  professionalGraphicDesignTag.classList.remove("selected");
  totalTimeTag.textContent = " ";
  totalPriceTag.textContent = " ";
  check4Tag.classList.remove("fas", "fa-check");
}

//webuiux design
webUiUxTag.addEventListener("click", () => {
  if (webUiUxTag.classList.contains("selected")) {
    webUiUxRemoveSelected();
    if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၄၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (computerBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၂ လ";
      totalPriceTag.textContent = " ၅၀,၀၀၀ ကျပ်";
    } else if (programmingBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၀၀,၀၀၀ ကျပ်";
    } else if (rockStarTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    }
  } else {
    if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၇ လ ";
      totalPriceTag.textContent = " ၁,၂၅၀,၀၀၀ ကျပ် ";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = "၁၅ လ";
      totalPriceTag.textContent = " ၁,၂၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = "၁၄ လ";
      totalPriceTag.textContent = "၁,၀၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = "၁,၀၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ ";
      totalPriceTag.textContent = "  ၇၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = "၈၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = "  ၁၁ လ";
      totalPriceTag.textContent = "  ၈၀၀,၀၀၀ ကျပ် ";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ် ";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (computerBasicTag.classList.contains("selected")) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (programmingBasicTag.classList.contains("selected")) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (rockStarTag.classList.contains("selected")) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      webUiUxTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check3Tag.classList.add("fas", "fa-check");
    } else {
      webUiUxAddSelected();
    }
  }
});
function webUiUxAddSelected() {
  webUiUxTag.classList.add("selected");
  totalTimeTag.textContent = " ၃ လ";
  totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
  check3Tag.classList.add("fas", "fa-check");
}

function webUiUxRemoveSelected() {
  webUiUxTag.classList.remove("selected");
  totalTimeTag.textContent = " ";
  totalPriceTag.textContent = " ";
  check3Tag.classList.remove("fas", "fa-check");
}

//programming basic
programmingBasicTag.addEventListener("click", () => {
  if (programmingBasicTag.classList.contains("selected")) {
    programmingRemoveSelected();
    if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၄၅၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (computerBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၂ လ";
      totalPriceTag.textContent = " ၅၀,၀၀၀ ကျပ်";
    } else if (rockStarTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၀၀,၀၀၀ ကျပ်";
    } else if (webUiUxTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    }
  } else {
    if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၇ လ ";
      totalPriceTag.textContent = " ၁,၂၅၀,၀၀၀ ကျပ် ";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၁၅ လ";
      totalPriceTag.textContent = " ၁,၂၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၁၄ လ";
      totalPriceTag.textContent = "၁,၀၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = "၁,၀၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ ";
      totalPriceTag.textContent = "  ၇၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = "၈၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = "  ၁၁ လ";
      totalPriceTag.textContent = "  ၈၀၀,၀၀၀ ကျပ် ";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ် ";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      rockStarTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      computerBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (computerBasicTag.classList.contains("selected")) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (rockStarTag.classList.contains("selected")) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (webUiUxTag.classList.contains("selected")) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      programmingBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check2Tag.classList.add("fas", "fa-check");
    } else {
      programmingAddSelected();
    }
  }
});
function programmingAddSelected() {
  programmingBasicTag.classList.add("selected");
  totalTimeTag.textContent = "၃ လ";
  totalPriceTag.textContent = "၂၀၀,၀၀၀ ကျပ်";
  check2Tag.classList.add("fas", "fa-check");
}

function programmingRemoveSelected() {
  programmingBasicTag.classList.remove("selected");
  totalTimeTag.textContent = "";
  totalPriceTag.textContent = "";
  check2Tag.classList.remove("fas", "fa-check");
}

// computer basic
computerBasicTag.addEventListener("click", () => {
  if (computerBasicTag.classList.contains("selected")) {
    computerSelectedRemove();
    if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၄၅၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = " ၆ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
    } else if (rockStarTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၂ လ";
      totalPriceTag.textContent = " ၅၀,၀၀၀ ကျပ်";
    } else if (programmingBasicTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၀၀,၀၀၀ ကျပ်";
    } else if (webUiUxTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      totalTimeTag.textContent = " ၃ လ";
      totalPriceTag.textContent = " ၂၅၀,၀၀၀ ကျပ်";
    }
  } else {
    if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၇ လ ";
      totalPriceTag.textContent = " ၁,၂၅၀,၀၀၀ ကျပ် ";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၁၅ လ";
      totalPriceTag.textContent = " ၁,၂၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၁၄ လ";
      totalPriceTag.textContent = "၁,၀၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = "၁,၀၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၄ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ ";
      totalPriceTag.textContent = "  ၇၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = "၈၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = "  ၁၁ လ";
      totalPriceTag.textContent = "  ၈၀၀,၀၀၀ ကျပ် ";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၈၀၀,၀၀၀ ကျပ် ";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၁ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၉၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၁၂ လ";
      totalPriceTag.textContent = " ၁,၀၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      programmingBasicTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      rockStarTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၈ လ";
      totalPriceTag.textContent = " ၅၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      webUiUxTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      programmingBasicTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalGraphicDesignTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      webUiUxTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (
      professionalGraphicDesignTag.classList.contains("selected") &&
      professionalWebDeveloperTag.classList.contains("selected")
    ) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၉ လ";
      totalPriceTag.textContent = " ၇၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (rockStarTag.classList.contains("selected")) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = " ၅ လ";
      totalPriceTag.textContent = " ၃၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (programmingBasicTag.classList.contains("selected")) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = " ၄၅၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (webUiUxTag.classList.contains("selected")) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (professionalGraphicDesignTag.classList.contains("selected")) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else if (professionalWebDeveloperTag.classList.contains("selected")) {
      computerBasicTag.classList.add("selected");
      totalTimeTag.textContent = "၆ လ";
      totalPriceTag.textContent = "၅၀၀,၀၀၀ ကျပ်";
      check1Tag.classList.add("fas", "fa-check");
    } else {
      computerAddSelected();
    }
  }
});
function computerAddSelected() {
  computerBasicTag.classList.add("selected");
  totalTimeTag.textContent = "၂ လ";
  totalPriceTag.textContent = " ၅၀,၀၀၀ ကျပ်";
  check1Tag.classList.add("fas", "fa-check");
}

function computerSelectedRemove() {
  computerBasicTag.classList.remove("selected");
  totalTimeTag.textContent = "";
  totalPriceTag.textContent = "";
  check1Tag.classList.remove("fas", "fa-check");
}
