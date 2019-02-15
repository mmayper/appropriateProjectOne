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
            window.location.replace("logInPage.html");
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

//New Code post 2/14 class
function registerUser() {
    //take all input
    fname = document.getElementById('regFirstNameId').value
    lname = document.getElementById('regLastNameId').value
    regpassword = document.getElementById('regPasswordId').value
    testemail = document.getElementById('regEmailId').value
    genre1 = document.getElementById('RegGenre2Id').value
    genre2 = document.getElementById('RegGenre2Id').value

    //store to lower
    fname.toLowerCase();
    lname.toLowerCase();
    testemail.toLowerCase();
    //test if any are  empty
    if (fname === "" || lname === "" || regpassword === "" || testemail === "") {
        alert("Please be sure to fill out all criteria");
    }
    else {
        //Test if password has symbol, lettter, and number
        //symbol
        if (regpassword.includes("!") || regpassword.includes("@") || regpassword.includes("#") || regpassword.includes("$") || regpassword.includes("%") || regpassword.includes("^") || regpassword.includes("&") || regpassword.includes("*")) {
            //number
            if (regpassword.includes("1") || regpassword.includes("2") || regpassword.includes("3") || regpassword.includes("4") || regpassword.includes("5") || regpassword.includes("6") || regpassword.includes("7") || password.includes("8") || regpassword.includes("9") || regpassword.includes("0")) {
                //letter
                if (regpassword.includes("a") || regpassword.includes("b") || regpassword.includes("c") || regpassword.includes("d") || regpassword.includes("e") || regpassword.includes("f") || regpassword.includes("g") || regpassword.includes("h") || regpassword.includes("i") || regpassword.includes("j") || regpassword.includes("k") || regpassword.includes("l") || regpassword.includes("m") || regpassword.includes("n") || regpassword.includes("o") || regpassword.includes("p") || regpassword.includes("q") || regpassword.includes("r") || regpassword.includes("s") || regpassword.includes("t") || regpassword.includes("u") || regpassword.includes("v") || regpassword.includes("w") || regpassword.includes("x") || regpassword.includes("y") || regpassword.includes("z")) {
                    //test if email is unique
                    if (testemail.includes("@gmail.com") || testemail.includes("@asu.edu") || testemail.includes("@yahoo.com") || testemail.includes("@hotmail.com")) {
                        ReqTestPass(testemail)
                        //test email contains . and @
                    }
                    else {
                        alert("We only accept emails from: Yahoo, gmain, asu, and hotmail");
                        document.getElementById('regEmailId').value = "";
                    }
                }              
                else {
                    alert("Passwords must include a lowercase letter (abcdefghijklmnopqrstuvwxyz)")
                    document.getElementById('regPasswordId').value = "";
                }
            }
            else {
                alert("Passwords must include a number (0123456789)")
                document.getElementById('regPasswordId').value = "";   
            }              
        }
        else {
            alert("Passwords must include a symbol (!@#$%^&*)")
            document.getElementById('regPasswordId').value = ""
        }   
    }
}

function ReqTestPass(tmpEmail) {
    //var webMethod = "AccountServices.asmx/GetAccounts";
    var webMethod = "AccountServices.asmx/CheckEmail";   
    var parameters = "{\"email\":\"" + encodeURI(tmpEmail) + "\"}";
    $.ajax({
        type: "POST",
        url: webMethod,
        data: parameters,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.d.length > 0) {
                emailArray = msg.d;
                //console.log(emailArray); //for debugging
                tmp = true;
                for (var i = 0; i < emailArray.length; i++) {
                    //console.log(emailArray[i].email); //for debugging
                    //console.log(tmpEmail); //for debugging
                    str1 = emailArray[i].email;
                    console.log(str1); //for debugging
                    console.log(tmpEmail); // for debugging
                    str1.toLowerCase();
                    if (str1 == tmpEmail) {
                        document.getElementById('regEmailId').value = ""
                        return alert("This Email is already in use please use another")
                        
                    }
                }
                //submit form with info
                CreateAccount($('#regFirstNameId').val(), $('#regLastNameId').val(), $('#regEmailId').val(), $('#regPasswordId').val(), $('#RegGenre1Id').val(), $('#RegGenre2Id').val()); //return false;
                //clear old information
                document.getElementById('regFirstNameId').value = "";
                document.getElementById('regLastNameId').value = "";
                document.getElementById('regPasswordId').value = "";
                document.getElementById('regEmailId').value = "";
                document.getElementById('RegGenre2Id').value = "";
                document.getElementById('RegGenre2Id').value = "";
            }
            else {
                //submit form with info
                CreateAccount($('#regFirstNameId').val(), $('#regLastNameId').val(), $('#regEmailId').val(), $('#regPasswordId').val(), $('#RegGenre1Id').val(), $('#RegGenre2Id').val()); //return false;
                //clear old information
                document.getElementById('regFirstNameId').value = "";
                document.getElementById('regLastNameId').value = "";
                document.getElementById('regPasswordId').value = "";
                document.getElementById('regEmailId').value = "";
                document.getElementById('RegGenre2Id').value = "";
                document.getElementById('RegGenre2Id').value = "";
            }
        },
        error: function (e) {
            alert("ERRRRRRROR");
        }
    });
    //console.log("THIS IS WAT I AM LOGGING");
    //console.log(tmp)
    //return tmp;
}
