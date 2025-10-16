// const form = document.getElementById("ticketForm");
// const ticketSection = document.getElementById("ticketSection");
// const formSection = document.getElementById("formSection");
// const ticketName = document.getElementById("ticketName");
// const ticketGithub = document.getElementById("ticketGithub");
// const ticketEmail = document.getElementById("ticketEmail");
// const ticketAvatar = document.getElementById("ticketAvatar");
// const newTicketBtn = document.getElementById("newTicketBtn");
// const uploadBox = document.getElementById("uploadBox");
// const avatarInput = document.getElementById("avatar");

// // When clicking the upload box, open file dialog
// uploadBox.addEventListener("click", () => avatarInput.click());

// // Preview uploaded image
// avatarInput.addEventListener("change", () => {
//   const file = avatarInput.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       uploadBox.innerHTML = `<img src="${event.target.result}" class="avatar" />`;
//     };
//     reader.readAsDataURL(file);
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const github = document.getElementById("github").value.trim();
//   const avatarFile = avatarInput.files[0];

//   if (!name || !email || !github || !avatarFile) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   ticketName.textContent = name;
//   ticketEmail.textContent = email;
//   ticketGithub.textContent = `@${github.replace("@", "")}`;

//   const reader = new FileReader();
//   reader.onload = function (event) {
//     ticketAvatar.src = event.target.result;
//   };
//   reader.readAsDataURL(avatarFile);

//   formSection.classList.add("hidden");
//   ticketSection.classList.remove("hidden");
// });
// newTicketBtn.addEventListener("click", () => {
//   ticketSection.classList.add("hidden");
//   formSection.classList.remove("hidden");
//   form.reset();
//   uploadBox.innerHTML = `
//     <img src="assets/images/icon-upload.svg" alt="" class="upload-icon" />
//     <p>Drag and drop or click to upload</p>
//   `;
// });



const form = document.getElementById("ticketForm");
const formSection = document.getElementById("form-section");
const ticketSection = document.getElementById("ticket-section");
const uploadBox = document.getElementById("uploadBox");
const avatarInput = document.getElementById("avatar");

uploadBox.addEventListener("click", () => avatarInput.click());

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const github = document.getElementById("github").value;
  const file = avatarInput.files[0];

  if (!file) {
    alert("Please upload an avatar image!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    document.getElementById("ticketAvatar").src = event.target.result;
  };
  reader.readAsDataURL(file);

  // Fill in ticket text
  document.getElementById("displayName").textContent = fullName;
  document.getElementById("displayEmail").textContent = email;
  document.getElementById("ticketName").textContent = fullName;
  document.getElementById("ticketHandle").textContent = github;

  // Show ticket section
  formSection.classList.add("hidden");
  ticketSection.classList.remove("hidden");
});

newTicketBtn.addEventListener("click", () => {
    ticketSection.classList.add("hidden");
    formSection.classList.remove("hidden");
    form.reset();
    uploadBox.innerHTML = `
        <img src="assets/images/icon-upload.svg" alt="" class="upload-icon" />
        <p>Drag and drop or click to upload</p>
    ;
    });