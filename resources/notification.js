function postContactForm(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://getsimpleform.com/messages/ajax?form_api_token=${{ secrets.SIMPLE_FORM }}";
    var data = new FormData();

    url += "&name=" + document.getElementById("name").value;
    url += "&email=" + document.getElementById("email").value;
    url += "&subject=" + document.getElementById("title").value;
    url += "&message=" + document.getElementById("message").value;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            toggleNotification('success', 'Contact Form Successfully Posted', 'contact');
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send(data);

    console.log(xmlhttp);
}

function toggleNotification(type, msg, from) {
    var notificationDiv = document.getElementById("notification");
	var hideNotification = function(){
		document.getElementById('notification').style.display = 'none';
	};

    window.scrollTo(0, 0);

    if(from == "contact"){
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("title").value = "";
        document.getElementById("message").value = "";
    } else {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("birthdate").value = "";
        document.getElementById("address").value = "";
        document.getElementById("phone").value = "";

    }
    notificationDiv.innerHTML = msg;
    notificationDiv.className = "alert-box " + type;
    notificationDiv.style.display = "block";

	window.setInterval(hideNotification, '3500');
}
