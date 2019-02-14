//Alphabetical order
//Alphabetical order
//Alphabetical order

//Log the user
	//if correct take to home page
	//else clear log in information
function backHome() {
	//Takes the user back to home page
	window.location.replace("HomePage.html");
}

function editUserInformation() {
	//Load the users information

	//Load the users information to the page
	window.location.replace("EditUserInformation.html")
}

function forgotPassword() {
	//send them an email
	//Take them back to log in page

}

function loadAddQuotePage() {
	window.location.replace("UploadQuote.html")
}

function loadAdminPage() {
	window.location.replace("AdminPage.html")
}

function loadforgotPassword() {
	window.location.replace("ForgotPassword.html")
}

function loadregisterUserPage() {
	//Loads the register user page
	window.location.replace("RegisterUser.html");
}

function logUserIn() {
	//Test if the users information is correct
	
	//Takes the user to the home page if their log in information is correct
	window.location.replace("HomePage.html");
	
}

function logoutUser() {
	//Takes the user back to the log In page
	window.location.replace("logInPage.html");
	//reset the client holding variable if used
	
}

function registerUser() {
    //submit form with info
    document.getElementById("regisFormId").submit()
	// take all information and store to database

    //clear old information

	// take to home page

}


function CreateAccount(fName, lName, email, password, genre1, genre2) {
    var webMethod = "AccountServices.asmx/RequestAccount";
    var parameters = "{\"firstName\":\"" + encodeURI(fName) + "\",\"lastName\":\"" + encodeURI(lName) + "\",\"email\":\"" + encodeURI(email) + "\",\"password\":\"" + encodeURI(password) + "\",\"firstFaveGenre\":\"" + encodeURI(genre1) + "\",\"secondFaveGenre\":\"" + encodeURI(genre2)+"\"}";

    $.ajax({
        type: "POST",
        url: webMethod,
        data: parameters,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            alert("Thank you for registering!");
            window.location.replace("HomePage.html");
        },
        error: function (e) {
            alert("Something went wrong please try again later");
        }
    });
}

function submitUserEditInfo() {
	//edit users information in sql

	//takes the user back home
	window.location.replace("HomePage.html");
}

function submitAddQuote() {
	//insert quote into SQL statement

	//return to home page if it works
	window.location.replace("HomePage.html")
}
function SubmitSearch(){
	//user the id from the search input box 

	// print the results to the text area
}

