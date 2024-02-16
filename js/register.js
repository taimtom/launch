const getRegistrationDetail = () => {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone_number").value;
  const practiceName = document.getElementById("practice_name").value;
  const otherInfo = document.getElementById("other_info").value;
  const eventId = "SM8716";

  const registrationDetail = {
    event: eventId,
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone_number: phoneNumber,
    practice_name: practiceName,
    other_info: otherInfo,
  };
  return registrationDetail;
};
function successCallback(data) {
  document.getElementById("regResponse").innerHTML =
    "Registration successful. Your registration ID is " + data.id;
  console.log("success occurred", data);
}
function errorCallback(err) {
  document.getElementById("regResponse").innerHTML = err.message;
  console.log("error occurred", err);
}
function handleSubmit(event) {
  event.preventDefault();
  const regDetail = getRegistrationDetail();
  console.log(regDetail);
  const baseUrl = "http://localhost:8000";
  const apiUrl = "/api/event/smartdvm_events_register/list/";
  $.ajax({
    contentType: "application/json",
    dataType: "json",
    url: baseUrl + apiUrl,
    type: "POST",
    data: JSON.stringify(regDetail),
  })
    .done(successCallback)
    .fail(errorCallback);
}
$("#pageForm").on("submit", handleSubmit);
