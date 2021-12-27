var url = "http://localhost:3000/register";
var data;

let obtainData = () => {
  data = {
    mail: document.querySelector('[name="userMail"]').value,
    name: document.querySelector('[name="nameUser"]').value,
    middle_name: document.querySelector('[name="middleNameUser"]').value,
    last_name: document.querySelector('[name="lastNameUser"]').value,
    city: document.querySelector('[name="userDirection"]').value,
    country: document.querySelector('[name="userCountry"]').value,
    birth_date: document.querySelector('[name="userBirth"]').value,
    academic_level: document.querySelector('[name="userStudies"]').value,
    lenguages: document.querySelector('[name="userLenguages"]').value,
    linkedIn: document.querySelector('[name="userLinkedIn"]').value,
    hobbies: document.querySelector('[name="userHobbies"]').value,
    password: document.querySelector('[name="user_password"]').value,
    profile_photo: document.querySelector('[name="userPhoto"]').value,
  };

  return data;
};

let envioDatos = () => {
  fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(obtainData()), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.json();
      console.log(res);
    })
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      console.log("Success:", response);
      location.href = "../index.html";
    });
};
