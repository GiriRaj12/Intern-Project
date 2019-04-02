/**
 * 
 */

// Load products
var a=[];
function load() {
	var x = sessionStorage.getItem("username");
	if (x.length < 5) {
		window.location.replace("index.html");
	}
	ajax_products(function(res) {
		var urlList = res.split(",");
		var i;
		for (i = 0; i < urlList.length; i++) {
			var list = document.createElement("LI");
			var img = document.createElement("img");
			img.src = urlList[i];
			a.push(urlList[i]);
			img.id=i;
			img.style.width = "200px";
			list.appendChild(img);
			document.getElementById('imageList').appendChild(list);
		}
	});
}
// list listerner---------------------------->
var list=document.getElementById("imageList")
list.addEventListener('click',imageAdd);
// Logout
function logout() {
	sessionStorage.setItem("username", null);
	sessionStorage.setItem("password", null);
	return true;
}
// Image adder------------------------>
function imageAdd(event){
	event.stopPropagation();
	var id=event.target.id;
	console.log(a[id]);
	document.getElementById("myModal").style.display="block";	
	var img=document.getElementById("insert");
	img.src=a[id];
	img.style.width="400px";
	img.style.float="left";
	window.addEventListener('click',function(event) {
			modal.style.display = 'none';
	});
}
// Ajax products loading
function ajax_products(callback) {
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			callback(xml.responseText);
		}
	};
	xml.open("GET", "load", true);
	xml.send();
}