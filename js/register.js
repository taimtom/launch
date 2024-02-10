const getRegistrationDetail = () => {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone_number").value;
  const practiceName = document.getElementById("practice_name").value;
  const otherInfo = document.getElementById("other_info").value;
  const registrationDetail = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    practiceName: practiceName,
    otherInfo: otherInfo,
  };
  return registrationDetail;
};

function handleSubmit(event) {
  event.preventDefault();
  alert("dfdd");
  const regDetail = getRegistrationDetail();
  console.log(regDetail);
}
