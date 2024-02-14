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
function successCallback(data) {
  console.log("success occurred", data);
}
function errorCallback(err) {
  console.log("error occurred", err);
}
function handleSubmit(event) {
  event.preventDefault();
  const regDetail = getRegistrationDetail();
  console.log(regDetail);
  const baseUrl = "localhost:8000";
  const apiUrl = "/api/events/smartdvm_events_register/list/";
  $.ajax({
    contentType: "application/json",
    dataType: "json",
    url: baseUrl + apiUrl,
    type: "POST",
    data: regDetail,
    success: successCallback,
    error: errorCallback,
  });
}
$("#pageForm").on("submit", handleSubmit);
