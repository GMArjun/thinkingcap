const pageHeader = document.querySelector(".page-header");
const menuWrapper = pageHeader.querySelector(".menu-wrapper");
const level1Links = pageHeader.querySelectorAll(".level-1 > li > a");
const listWrapper2 = pageHeader.querySelector(".list-wrapper:nth-child(2)");
const listWrapper3 = pageHeader.querySelector(".list-wrapper:nth-child(3)");
const subMenuWrapper2 = listWrapper2.querySelector(".sub-menu-wrapper");
const subMenuWrapper3 = listWrapper3.querySelector(".sub-menu-wrapper");
const backOneLevelBtns = pageHeader.querySelectorAll(".back-one-level");
const goBack2 = listWrapper2.querySelectorAll(".back-one-level span");
const goBack3 = listWrapper3.querySelectorAll(".back-one-level span");

const isVisibleClass = "is-visible";
const isActiveClass = "is-active";

for (const level1Link of level1Links) {
  level1Link.addEventListener("click", function (e) {
    const siblingList = level1Link.nextElementSibling;
    if (siblingList) {
      e.preventDefault();
      this.classList.add(isActiveClass);
      const cloneSiblingList = siblingList.cloneNode(true);
      subMenuWrapper2.innerHTML = "";
      subMenuWrapper2.append(cloneSiblingList);
      listWrapper2.classList.add(isVisibleClass);
      goBack2[0].innerText = e.target.innerText;
    }
  });
}

listWrapper2.addEventListener("click", function (e) {
  const target = e.target;
  if (target.tagName.toLowerCase() === "a" && target.nextElementSibling) {
    const siblingList = target.nextElementSibling;
    e.preventDefault();
    target.classList.add(isActiveClass);
    const cloneSiblingList = siblingList.cloneNode(true);
    subMenuWrapper3.innerHTML = "";
    subMenuWrapper3.append(cloneSiblingList);
    listWrapper3.classList.add(isVisibleClass);
    goBack3[0].innerText = e.target.innerText;
  }
});

for (const backOneLevelBtn of backOneLevelBtns) {
  backOneLevelBtn.addEventListener("click", function () {
    const parent = this.closest(".list-wrapper");
    parent.classList.remove(isVisibleClass);
    parent.previousElementSibling
      .querySelector(".is-active")
      .classList.remove(isActiveClass);
  });
}
