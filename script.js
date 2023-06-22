function getFormvalue(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    var firstName = document.querySelector("input[name='fname']").value;
    var lastName = document.querySelector("input[name='lname']").value;
    alert(firstName + " " + lastName);
}