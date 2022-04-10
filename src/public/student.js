

// const 

const courseSelect = document.querySelector(".form-top-input-course");
const groupSelect = document.querySelector(".form-top-selectr-user");

courseSelect?.addEventListener("change", (e) => {
  let value = e.target.value;
  console.log(value);

  fetch("/api")
    .then((res) => res.json())
    .then((data) => {
      allGroups(data);
      console.log(data);

      function allGroups(groups) {
        groupSelect.innerHTML = "";
        const foundGroup = groups.filter((e) => e.KursName == value);
        foundGroup?.map((group) => {
          const { GroupName } = group;
          let option = document.createElement("option");
          option.value = GroupName;
          option.innerHTML = GroupName;
          groupSelect.appendChild(option);
        });
      }
    });
});
const buttonKursCreate = document.querySelector(".card-Crouser-about-button");
const formCreateKurs = document.querySelector(".form");
buttonKursCreate.addEventListener("click", () => {
  formCreateKurs.style.display = "block";
  overlay.style.display = "block";
});

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  formCreateKurs.style.display = "none";
});