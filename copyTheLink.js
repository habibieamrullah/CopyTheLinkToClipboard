/*
copyTheLink.js by habibieamrullah@gmail.com
Watch my videos on https://www.youtube.com/ThirteeNov/
Visit my blog http://thirteenov.ciihuy.com/
*/

var customText = "Hey check out this link:\n\n";
var sharedlink = "https://www.youtube.com/ThirteeNov/";
var loadingJquery = false;
var jCheckInterval;

//Check do we have jQuery or not, if we don't have it, we include it 
function jQueryCheck(){
	if (window.jQuery) {  
		console.log("jQuery is here. Let's go!");
		initCtl();
	} else {
		if(!loadingJquery){
			console.log("Who is jQuery, again?");
			letsGetjQuery();
		}
	}
}

//To get jQuery
function letsGetjQuery(){
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    document.getElementsByTagName("head")[0].append(s);
	loadingJquery = true;
    jCheckInterval = setInterval(function(){
        jQueryCheck();
    }, 500);
}

//form initialisation
function initCtl(){
	clearInterval(jCheckInterval);
	$("#sharerpopup").remove();
	$("body").append("<div id='sharerpopup' style='position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 100; background-color: rgba(0,0,0,.5); backdrop-filter: blur(5px); padding: 40px;'><div style='background-color: white; border-radius: 10px; padding: 20px;'><textarea id='texttocopy' style='width: 100%; box-sizing: border-box; height: 128px;'>" + customText + sharedlink + "</textarea><button onclick='copyTheText()'>Copy The Text</button><button onclick='closeThePopUp()'>Close</button></div></div>");
}

//Function to show the form
function showTheForm(ct){
	if(ct != undefined){
		customText = ct + "\n\n";
	}
	sharedlink = location.href;
	jQueryCheck();
}

//Function to show the form
function showCustomLinkForm(ct, lnk){
	if(ct != undefined){
		customText = ct + "\n\n";
	}
	if(lnk != undefined){
		sharedlink = lnk;
	}else{
		sharedlink = location.href;
	}
	jQueryCheck();
}

//Function to close the popup
function closeThePopUp(){
	$("#sharerpopup").hide();
}

//function to copy the text of the textarea
function copyTheText(){
	var copyText = document.getElementById("texttocopy");
	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /*For mobile devices*/
	/* Copy the text inside the text field */
	document.execCommand("copy");
	/* Alert the copied text */
	alert("The text has been copied to your clipboard!");
}