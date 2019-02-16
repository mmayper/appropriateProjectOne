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

function logoutUser() {
	//Takes the user back to the log In page
    
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

function logUserIn() {
    //Test if the users information is correct
    userEmail = document.getElementById("inputEmailLogInId").value
    pass = document.getElementById("inputPasswordLogInId").value
    LogOn(userEmail, pass)
    //Takes the user to the home page if their log in information is correct
    //window.location.replace("HomePage.html");

}
//New code post 2/15
//HERE'S AN EXAMPLE OF AN AJAX CALL WITH JQUERY!
function LogOn(userEmail, pass) {
    //the url of the webservice we will be talking to
    var webMethod = "AccountServices.asmx/LogOn";
    //the parameters we will pass the service (in json format because curly braces)
    //note we encode the values for transmission over the web.  All the \'s are just
    //because we want to wrap our keynames and values in double quotes so we have to
    //escape the double quotes (because the overall string we're creating is in double quotes!)
    var parameters = "{\"email\":\"" + encodeURI(userEmail) + "\",\"password\":\"" + encodeURI(pass) + "\"}";

    //jQuery ajax method
    $.ajax({
        //post is more secure than get, and allows
        //us to send big data if we want.  really just
        //depends on the way the service you're talking to is set up, though
        type: "POST",
        //the url is set to the string we created above
        url: webMethod,
        //same with the data
        data: parameters,
        //these next two key/value pairs say we intend to talk in JSON format
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //jQuery sends the data and asynchronously waits for a response.  when it
        //gets a response, it calls the function mapped to the success key here
        success: function (msg) {
            //the server response is in the msg object passed in to the function here
            //since our logon web method simply returns a true/false, that value is mapped
            //to a generic property of the server response called d (I assume short for data
            //but honestly I don't know...)
            if (msg.d) {
                //server replied true, so show the accounts panel
                window.location.replace("HomePage.html")
            }
            else {
                //server replied false, so let the user know
                //the logon failed
                alert("logon failed");
            }
        },
        error: function (e) {
            //if something goes wrong in the mechanics of delivering the
            //message to the server or the server processing that message,
            //then this function mapped to the error key is executed rather
            //than the one mapped to the success key.  This is just a garbage
            //alert becaue I'm lazy
            alert("boo...");
        }
    });
}
