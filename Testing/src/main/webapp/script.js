/**
 * 
 */
// ON LOAD (Session) ------------------------------------> SESSION MANAGEMET
function checkSession(){
    document.getElementById("headder").style.display="block";
	document.getElementById("myModal").style.display='none';
	document.getElementById("myModalreg").style.display='none';
	document.getElementById("myModalAdmin").style.display='none';
	document.getElementById("mymodal4").style.display='none';
	document.getElementById("myModal5").style.display='block';
    load();
    ajaxSession(function(res){
    	if(res.length>4){
    		document.getElementById("headder").style.display="none";
    		document.getElementById("loginHeadder").style.display='block';	
    	}
    });
        if(sessionStorage.getItem("direction")=="Login"){
    		  login();
    	  }
    	else if(sessionStorage.getItem("direction")=="Register"){
    		  register();
    	  }
    	else if(sessionStorage.getItem("direction")=="Admin"){
    		  admin();
    		  }
}
// Login Event -----------------------------------------> LOGIN EVENT :
var x = document.getElementById("lg");
var modal = document.getElementById("myModal");
var span = document.getElementById("close");
function login() {
	window.history.pushState("","","/Login");
	sessionStorage.setItem("direction","Login");
	modal.style.display = "block";
	document.getElementById("productShow").style.display='none';
}
span.onclick = function() {
	window.history.pushState("","","/index.html");
	sessionStorage.clear();
	modal.style.display = 'none';
}
window.addEventListener('click',function(event) {
	if (event.target == modal){
		window.history.pushState("","","/index.html");
		modal.style.display = 'none';
		sessionStorage.clear();
	};
});
 
x.addEventListener("click", login);
// -----------------------------------------
// Login Check JS-------------------------------------------> LOGIN FINAL
function checkLogin() {
	console.log("came in login");
	var xl = document.getElementById("email1").value;
	var yl = document.getElementById("password").value;
	var ms = document.getElementById("msg");
	ms.innerHTML = "";
	if (xl == "") {
		document.getElementById("email1").style.border="1px solid red";
		ms.innerHTML = "Email not given";
		flg=0;
	}
	else if (yl == "") {
		document.getElementById("password").style.border="1px solid red";
		ms.innerHTML = "Password not given";
		flg=0;
	}
	else{
    ajaxLogin(xl,yl,function String(res){
    	console.log(res.length);
    	if(res.length<5){
    		console.log("true");
    		document.getElementById("headder").style.display='none';
    		document.getElementById("myModal").style.display='none';
    		document.getElementById("myModalreg").style.display='none';
    		document.getElementById("myModalAdmin").style.display='none';
    		document.getElementById("mymodal4").style.display='none';
    		document.getElementById("loginHeadder").style.display='block';
    		window.history.pushState("","","/Products");
    		 sessionStorage.clear();
    	}
    	else{
    	document.getElementById("email1").style.border="1px solid red";
    	document.getElementById("password").style.border="1px solid red";
    	document.getElementById("msg").innerHTML=res;
    	}
    	});
	}
}
var alg = document.getElementById("email1");
var blg = document.getElementById("password");
function events() {
	document.getElementById("msg").innerHTML = "";
	document.getElementById("email1").style.border="1px solid transparent";
	document.getElementById("password").style.border="1px solid transparent";
}
alg.addEventListener("click", events);
blg.addEventListener("click", events);
// ------------------------------------------->
// Register Event----------------------------------------> REGISTER EVENT
var modal2 = document.getElementById("myModalreg");
var spanreg = document.getElementById("closereg");
function register() {
	window.history.pushState("","","/EventRegister");
	sessionStorage.setItem("direction","Register");
	modal2.style.display = 'block';
}
spanreg.onclick = function() {
	window.history.pushState("","","/index.html");
	modal2.style.display = 'none';
	sessionStorage.clear();
}
window.onclick = function(event) {
	if (event.target == modal2) {
		window.history.pushState("","","/index.html");
		modal2.style.display = 'none';
		sessionStorage.clear();
	}
}
// ------------------------------------------> REGISTER CHECKS
function validateEmail(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}
// Password Check----------------------------> PASSWORD VALIDATION
function passwordCheck(password){
	var pass_flg="";
	var number_Check=/[0-9]/g;
	var Capital=/[A-Z]/g;
	var letters=/[a-z]/g;
	var special=/[@#&*]/g;
	if(password.length>=8){
		pass_flg=""
	}
	else{
		return pass_flg="Password must atleast have 8 characters";
	}
    if(password.match(number_Check)){
    	pass_flg="";
    }
    else{
    	return pass_flg="Password should have a number";
    }
    if(password.match(Capital)){
    	pass_flg="";
    }
    else{
    	return pass_flg="Password must contain a capital letter";
    }
    if(password.match(letters)){
    	pass_flg="";
    }
    else{
    	return pass_flg="Password Should have a lowercase letter";
    }
    if(password.match(special)){
    	pass_flg="";
    }
    else{
    	return pass_flg="Must have one special Character";
    }
    return pass_flg;
}
// Register Check JS------------------------------------------> REGISTER FINAL
function checkRegister() {
	var user = document.getElementById("email2").value;
	var password = document.getElementById("pass").value;
	var name = document.getElementById("name").value;
	var alert = document.getElementById("alert");
	msg.innerHTML = "";
	if (user == "") {
		document.getElementById("email2").style.border="1px solid red";
		alert.innerHTML ="Email not given";
	}
	if(validateEmail(user)){
	if (password == "") {
		document.getElementById("pass").style.border="1px solid red";
		alert.innerHTML ="Password not given";
	}
	else{
	var passCheck=passwordCheck(password);
	if(passCheck.length>4){
		document.getElementById("pass").style.border="1px solid red";
		alert.innerHTML =pass_check;
	}
	else if (name == "") {
		document.getElementById("name").style.border="1px solid red";
		alert.innerHTML ="Name cannot be blanck";
	}
	else{
	ajaxRegister(user,password,name,function(res){
		if(res.length>4){
			document.getElementById("alert").innerHTML=res;
		}
		else{
			console.log("else in register");
			document.getElementById("headder").style.display='none';
    		document.getElementById("myModal").style.display='none';
    		document.getElementById("myModalreg").style.display='none';
    		document.getElementById("myModalAdmin").style.display='none';
    		document.getElementById("mymodal4").style.display='none';
    		document.getElementById("loginHeadder").style.display='block';
    		sessionStorage.clear()
    		}
	});
		
	}
	}
	}
	else{
		document.getElementById("email2").style.border="1px solid red";
		alert.innerHTML ="Email Id is not proper";
	}
}
var d = document.getElementById("email2");
var e = document.getElementById("pass");
var f = document.getElementById("name");
 function eventRegister() {
	document.getElementById("alert").innerHTML = "";
	document.getElementById("email2").style.border="1px solid transparent";
	 document.getElementById("pass").style.border="1px solid transparent";
	 document.getElementById("name").style.border="1px solid transparent";

}
d.addEventListener("click", eventRegister);
e.addEventListener("click", eventRegister);
f.addEventListener("click", eventRegister);
// Swap ------------------------------------------> MODAL SWAPS();
function swap() {
		modal.style.display = 'none';
		modal2.style.display = 'block';
		window.history.pushState("","","/Register_event");
}
function swap2(){
	modal.style.display= 'block';
	modal2.style.display= 'none';
	window.history.pushState("","","/Login");
}
function swap3(){
	modal3.style.display='none';
	modal.style.display= 'block';
	window.history.pushState("","","/Login");	
}

// Admin Event--------------> -------------------------> ADMIN EVENT
var adm = document.getElementById("admin");
var modal3 = document.getElementById("myModalAdmin");
var spanadmin = document.getElementById("closeadmin");
function admin() {
	window.history.pushState("","","/Admin");
	document.getElementById("myModalAdmin").style.display = 'block';
	sessionStorage.setItem("direction","Admin");
	modal.style.display='none';
}
spanadmin.onclick = function() {
	window.history.pushState("","","/index.html");
	sessionStorage.clear();
	document.getElementById("myModalAdmin").style.display = 'none';
}
window.addEventListener('click',function(event) {
	if (event.target == modal3){
		window.history.pushState("","","/index.html");
		sessionStorage.clear();
		document.getElementById("myModalAdmin").style.display = 'none';
	};
});
 
adm.addEventListener("click", admin);
// Admin Check----------------------------------------> ADMIN FINAL
function checkAdmin(){
	window.history.pushState("","","/Admin");
	var adminuser = document.getElementById("email3").value;
	var adminpass = document.getElementById("adminPass").value;
	var adalert = document.getElementById("adminAlert");
	adalert.innerHTML="";
	if (adminuser == "") {
		document.getElementById("email3").style.border="1px solid red";
		adalert.innerHTML = "Email not given";
		flg=0;
	}
	else if (adminpass == "") {
		document.getElementById("adminPass").style.border="1px solid red";
		adalert.innerHTML = "Password not given";
		flg=0;
	}
	else{
		if(adminuser==="abc@gmail.com"&&adminpass==="asdf"){
		 document.getElementById("headder").style.display='none';
		 document.getElementById("myModalAdmin").style.display='none';
		 document.getElementById("mymodal4").style.display='block';
		}
		else{
		document.getElementById("adminAlert").innerHTML="Sorry you don't have access";	
		document.getElementById("email3").style.border="1px solid red"; 
		document.getElementById("adminPass").style.border="1px solid red";
		}
	    }
}
function eventAdmin(){
	document.getElementById("adminAlert").innerHTML = "";
	document.getElementById("email3").style.border="1px solid transparent";
	 document.getElementById("adminPass").style.border="1px solid transparent";
}
document.getElementById("email3").addEventListener('click',eventAdmin);
document.getElementById("adminPass").addEventListener('click',eventAdmin);
// Ajax login----------------------------------> LOGIN AJAX CALL
function ajaxLogin(x,y,callback){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
      if (xml.readyState == 4 && xml.status == 200) {
    	  callback(xml.responseText);
      }
    };
    xml.open("GET", "Check?username="+x+"&password="+y, true);
    xml.send();
}
// Ajax of register------------------------------> REGISTER AJAX CALL
function ajaxRegister(x,y,z,callback){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
	      if (xml.readyState == 4 && xml.status == 200) {
	    	  callback(xml.responseText);
	      }
	    };
	    xml.open("GET", "register?username="+x+"&password="+y+"&name="+z, true);
	    xml.send();
}

// ADMIN Add products Check null ----------------------------------------> ADMIN
// FINAL
function AdminCheck() {
	var product_name = document.getElementById("product").value;
	var url = document.getElementById("url").value;
	var price=document.getElementById("price").value;
	var msg = document.getElementById("added");
	var e = document.getElementById("quantity");
	var value = e.options[e.selectedIndex].value;
	msg.innerHTML = "";
	if (product_name == "") {
		document.getElementById("product").style.border="1px solid red"
		msg.innerHTML = "Product Name not given";
	}
	else if (url == "") {
		document.getElementById("url").style.border="1px solid red"
		msg.innerHTML =  "Url cannot be blanck";
	}
	else if(price== ""){
		doucment.getElementById("price").style.border="1px solid red"
	}
	else{
		ajaxAdmin(product_name,url,value,price);
	}
	
}
// ADMIN Products Add Event -----------------------------------------> ADMIN SHOW EVENT
var b = document.getElementById("product");
var c = document.getElementById("url");
var m=document.getElementById("price");
function event() {
	document.getElementById("added").innerHTML = "";
	document.getElementById("product").style.border="1px solid transparent";
	document.getElementById("url").style.border="1px solid transparent";
	document.getElementById("price").style.border="1px solid transparent";
}
b.addEventListener('click', event);
c.addEventListener('click', event);
m.addEventListener('click',event);
// Ajax function Admin ------------------------------------> ADMIN AJAX CALLS
function ajaxAdmin(x,y,z,p){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
	      if (xml.readyState == 4 && xml.status == 200) {
	    	  document.getElementById("added").innerHTML=xml.responseText;  
	      }
	    };
	    xml.open("GET", "/adminStore?name="+x+"&url="+y+"&quant="+z+"&price="+p, true);
	    xml.send();
}
// Admin SPAN------------------------------------------------------------>
var spanAds=document.getElementById("closeAdProduct");
spanAds.onclick=function(){
	window.history.pushState("","","/index.html");
	document.getElementById("mymodal4").style.display='none';
	document.getElementById("headder").style.display='block';
	window.location.replace("/index.html");
	sessionStorage.clear();
};
// Admin over--------------------------------------------------------------->


// CHAPTER Products
// ------------------------------------------------------------------------>
// Load products----------------------------------------------------------->
// ON LOADING PRODUCTS
var a=[];
function load() {
	window.history.pushState("","","");
	window.history.pushState("","","/Products");
	ajaxProducts(function(res) {
		console.log(res);
		var urlList = res.split(",");
		for (var i = 0; i < urlList.length-1; i++) {
			var list = document.createElement("LI");
			var img = document.createElement("img");
			img.src = urlList[i];
			if(urlList[i].length>4){
			a.push(urlList[i]);
			}
			img.id=i;
			img.style.width = "200px";
			list.appendChild(img);
			document.getElementById('imageList').appendChild(list);
		}
	});
	if(sessionStorage.getItem("direction")=="Cart"){
    	cart();
    }
}
// IMAGE list listerner---------------------------->(TO HANDLE IMAGE SHOW)
var list=document.getElementById("imageList");
list.addEventListener('click',imageAdd);
// AJAX Logout----------------------------------------------> ANAX LOGOUT CALL
function ajaxLogout() {
	console.log("Ajax Logout");
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			window.location.replace("/index.html");
		}
	};
	xml.open("GET", "logout", true);
	xml.send()
}
// Image SHOW POP UP MODAL------------------------> IMAGE SHOW UP
var addC;
function imageAdd(event){
	event.stopPropagation();
	var id=event.target.id;
	document.getElementById("productShow").style.display="block";	
	var img=document.getElementById("insert");
	img.src=a[id];
	addC=a[id];
	img.style.width="200px";
}
window.addEventListener('click',function(event) {
	if(event.target==productShow){
		document.getElementById("productmsg").innerHTML="";
	document.getElementById("productShow").style.display = 'none';
	document.getEle
	}
});
var pclose=document.getElementById("closeProducts");
pclose.addEventListener('click',function(){
	document.getElementById("productmsg").innerHTML="";
	document.getElementById("productShow").style.display = 'none';
});
// Ajax products loading------------------------------------> AJAX PRODUCTS
// GENERIC
function ajaxProducts(callback) {
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			callback(xml.responseText);
		}
	};
	xml.open("GET", "load", true);
	xml.send();
}
// Products
// over----------------------------------------------------------------------------->
// BUY NOW MODALS
// ADD TO CART
// ------------------------------------------------------------------>
function AddtoCart(){
	document.getElementById("icon").style.display="block";
	var quant=document.getElementById("orderQuant").value;
	if(quant==""){
		document.getElementById("productmsg").innerHTML="Enter Quantity";
		document.getElementById("orderQuant").style.border="1px solid red";
	}
	else if(isNaN(quant)||quant<=0||quant.length>8){
		document.getElementById("productmsg").innerHTML="Enter valid Number";
	}
	else{
	ajaxSession(function(res){
		if(res.length<4){
			login();
		}
		else{
			ajaxAddcart(quant,function(res){
				var add_split=res.split(",");
				document.getElementById("productmsg").innerHTML=add_split[0];
				if(add_split[0]!=""){
					document.getElementById("icon").style.display="block";
					document.getElementById("icon").innerHTML=add_split[1];
				}
				console.log(res);
				});
		}
	});
		}
}
var quantListerner=document.getElementById("orderQuant");
quantListerner.addEventListener("click",quantEvent);
function quantEvent(){
	document.getElementById("productmsg").innerHTML="";
	quantListerner.style.border="1px solid transparent";
}
// SHOW Cart-------------------------------------------------->
function cart(){
	window.history.pushState("","","/Cart");
	sessionStorage.setItem("direction","Cart");
	document.getElementById("cart").style.display='block';
	ajaxCart("kart",function(res){
		console.log(res);
		document.getElementById("icon").style.display="block";
		var table_content=res.split(",");
		console.log(table_content);
		var t=document.getElementById("cart_table");
		var tb=document.getElementsByTagName("tbody");
		for(var j=0;j<tb.length;j++){
			if(tb[j].parentNode==t){
				t.removeChild(tb[j]);
				}
		}
		var tbody=document.createElement('tbody');
		if(table_content.length>2){
			var last=0;
		for(var i=0;i<(table_content.length);i++){
			var c=0;
			var n=0;
			var row=tbody.insertRow(c);
			var cell1=row.insertCell(0);
			var cell2=row.insertCell(1);
			var cell3=row.insertCell(2);
			var cell4=row.insertCell(3);
			var cell5=row.insertCell(4);
			cell1.innerHTML=table_content[i];
			cell2.innerHTML=table_content[i+1];
			cell3.innerHTML="<p contenteditable='true' onblur=\'rowEdit("+table_content[i]+")\'"+" id=\'"+table_content[i]+"n"+"\'>"+table_content[i+2]+"</p>";
			cell4.innerHTML=table_content[i+3];
			cell5.innerHTML="<input type=button value=Delete onclick=\'rowDelete(" + table_content[i] + ")\'>";
			i=i+3;
		}
		if(res==null||res==undefined||res==""){
			document.getElementById("icon").innerHTML=0;
		}
		else{
		document.getElementById("icon").innerHTML=table_content.length/4;
		}
		t.appendChild(tbody);
		}
	});
}
var cartspan=document.getElementById("closecart");
cartspan.onclick=function(){
    sessionStorage.clear();
    icon();
	document.getElementById("cart").style.display='none';
	document.getElementById("productmsg").innerHTML="";
	window.history.pushState("","","/Products");
}
window.onclick=function(event){
     if(event.target == cart){
    	 document.getElementById("cart").style.display='none';
    	 window.history.pushState("","","/Products");
    	 document.getElementById("productmsg").innerHTML="";
    	 sessionStorage.clear();
     }	
}
var numberInput=document.getElementById("orderQuant");
numberInput.onclick=function(){
	document.getElementById("productmsg").innerHTML="";
}
// RED Icon SHOW UP--------------------------------->
function icon(){
	var xml=new XMLHttpRequest();
	xml.onreadyStateChange=function(){
		if (xml.readyState == 4 && xml.status == 200) {
			let iconText=xml.responseText
			document.getElementById("icon").innerHTML=iconText;		
		}	
	}
	xml.open("GET", "icon", true);
	xml.send();
}
// CART Delete element----------------------->
function rowDelete(del_num){
	var flag=confirm("Are you sure want to delete ?");
		if(flag){
	    ajaxDelete(del_num,function(res){
			cart();
			icon();
	     });
	}
}
// CART Row edit--------------------------------->
function rowEdit(num_edit){
	document.getElementById("delmsg").innerHTML="";
	if(isNaN(num_edit)){
		document.getElementById("delmsg").innerHTML="Enter valid Number";
	}
	else{
	console.log(num_edit);
	var num=document.getElementById(num_edit+"n").innerHTML;
	console.log(num);
	var xml=new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			document.getElementById("cart").style.display='none';
			cart();
		}
	};
	xml.open("GET", "edit?id="+num_edit+"&value="+num, true);
	xml.send();
	}
}
// Check out FINAL ---------------------------->
function checkout(){
	var quant=document.getElementById("orderQuant").value;
	if(quant==""){
		document.getElementById("productmsg").innerHTML="Enter Quantity";
		document.getElementById("orderQuant").style.border="1px solid red";
	}
    else{
	if(isNaN(quant)){
		document.getElementById("productmsg").innerHTML="Enter valid Number";
	}
	else{
	document.getElementById("productShow").style.display='none';
	AddtoCart();
	sessionStorage.setItem("direction","Cart");
	window.location.replace("/Cart");
	}
    }
}
// Buy now (FINAL MOVE)------------ BUY NOW ! this gets activated when BuyNow is
// clicked
function buyNow(){
    console.log("BuyNow");
    var td_elements=document.getElementsByTagName('tbody');
    var bol=true;
    if(td_elements==null){
    	bol=true;
    }
    else{
    	for(var i=0;i<td_elements.length;i++){
    		if(td_elements[i].parentNode.id==("cart_table")){
    			bol=false;
    			break;
    		}
    	}
    }
    if(bol){
    	alert("Please add elements in cart then Buy !");
    }
    else{
	check_buyNow_elements(function(res){
		console.log(res);
		if(res.length>4){
			alert(res);
		}
		else{
			document.getElementById("cart").style.display='none';
			document.getElementById("buy_product").style.display='block';
		}
	});
    }
}
var spanBuyNow=document.getElementById("closeBuyNow");
spanBuyNow.onclick=function(){
	document.getElementById("buy_product").style.display='none';
	document.getElementById("cart").style.display='block';
}
function check_buyNow_elements(callback){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			callback(xml.responseText);
		}
	};
	xml.open("GET", "dbCheck", true);
	xml.send();
}
// Ajax Delete--------------------------> DELETE AJAX
function ajaxDelete(x,callback){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			callback(xml.responseText);
		}
	};
	xml.open("GET", "delete?num="+x, true);
	xml.send();
}
// Ajax Cart----------------------------> CART AJAX
function ajaxCart(kart,callback){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			callback(xml.responseText);
		}
	};
	xml.open("GET", kart, true);
	xml.send();	
}
// Ajax AddCart ----------------------> ADD CART AJAX
function ajaxAddcart(quant,callback){
	var send=addC;
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			callback(xml.responseText);
		}
	};
	xml.open("GET", "addkart?element="+send+"&quant="+quant, true);
	xml.send();		
}
// Ajax checkout--------------------> CHECK OUT AJAX
function ajaxCheckout(callback){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			callback(xml.responseText);
		}
	};
	xml.open("GET", "checkout", true);
	xml.send();			
}
// Ajax to get session-------------> SESSION CHECK AJAX
function ajaxSession(callback){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			callback(xml.responseText);
		}
	};
	xml.open("GET", "session", true);
	xml.send();	
}
// PLACE ORDER Final--------------------------------------------->
var globalAddress;
function final(){
	var name=document.getElementById("ownerName").value;
	var phone=document.getElementById("phoneNumber").value;
	var address=document.getElementById("address").value;
    if(name ==""){
    	document.getElementById("ownerName").style.border="1px solid red";
    	document.getElementById("buyMsg").innerHTML="Enter name";
    }
    else if(phone ==""){
    	document.getElementById("phoneNumber").style.border="1px solid red";
    	document.getElementById("buyMsg").innerHTML="Enter Phone number";
    }
    else if(isNaN(phone)){
    		document.getElementById("phoneNumber").style.border="1px solid red";
    		document.getElementById("buyMsg").innerHTML="Enter valid phone number";
    }
    else if(address==""){
    	document.getElementById("address").style.border="1px solid red";
    	document.getElementById("buyMsg").innerHTML="Enter Address";
    }
    else{
    	console.log(address);
    	globalAddress=address;
    	finalCheckout(address);
    }
}
// Final Checkout Ajax------------------------------------------------>
function finalCheckout(address){
	var choise=confirm("Do you want to change anything ?");
	if(!choise)
	{
		var xml = new XMLHttpRequest();
		xml.onreadystatechange = function() {
			if (xml.readyState == 4 && xml.status == 200) {
				modalThankyou();
			}
		};
		xml.open("GET", "email?address="+address, true);
		xml.send();	
	}
}
// EVENT LISTERNERS FINAL CHECKOUT
// ----------------------------------------------->
var event_name=document.getElementById("ownerName");
var event_phone=document.getElementById("phoneNumber");
var event_address=document.getElementById("address");
function eventFinal(){
	document.getElementById("ownerName").style.border="1px solid transparent";
	document.getElementById("phoneNumber").style.border="1px solid transparent";
	document.getElementById("address").style.border="1px solid #f2f2f2";
	document.getElementById("buyMsg").innerHTML="";
}
event_name.addEventListener("click",eventFinal);
event_phone.addEventListener("click",eventFinal);
event_address.addEventListener("click",eventFinal);
// Delete ALL Button ------------------------------------------------->
// DELETE ALL BUTTON WITH AJAX;
function deleteAll(){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			table_parent=document.getElementById("cart_table");
		   cart();
			document.getElementById("icon").innerHTML="";
			}
		};
	xml.open("GET", "deleteAll", true);
	xml.send();	
}
// Activate Thank You Modal-------------------------------------------------->
function modalThankyou(){
	document.getElementById("thankyou").style.display='block';
	document.getElementById("cart").style.display='none';
	document.getElementById("buy_product").style.display="none";
	ajaxCart("thankyou",function(res){
		let table_content=res.split(",");
		let t=document.getElementById("thankyou_table");
		let tbody=document.createElement('tbody');
		if(table_content.length>2){
		for(var i=0;i<(table_content.length);i++){
			var c=0;
			let row=tbody.insertRow(c);
			let cell1=row.insertCell(0);
			let cell2=row.insertCell(1);
			let cell3=row.insertCell(2);
			let cell4=row.insertCell(3);
			let cell5=row.insertCell(4);
			let cell6=row.insertCell(5);
			cell1.innerHTML=table_content[i];
			cell2.innerHTML=table_content[i+1];
			cell3.innerHTML=table_content[i+2];
			cell4.innerHTML=table_content[i+3];
			if(i==0){
				var date=new Date().toString().split(" ");
				cell5.innerHTML=globalAddress;
				var delv=parseInt(date[2]);
				var result_date=0;
				if(date[1]=="Feb"){
					if(delv==26){
						result_date=1
					}
					if(delv==37){
						reslut_date=2
					}
					if(delv==38){
						result_date=3
					}
				}
				if(date[1]=="Jan"||date[1]=="Mar"||date[1]=="May"||date[1]=="Jul"||date[1]=="Aug"||date[1]=="Oct"||date[1]=="Dec"){
					if(delv==29){
						result_date=1
					}
					if(delv==30){
						reslut_date=2
					}
					if(delv==31){
						result_date=3
					}
				}
				else{
					if(delv==28){
						result_date=1
					}
					if(delv==29){
						reslut_date=2
					}
					if(delv==30){
						result_date=3
					}
				}
				
				result_date=delv+3;
				cell6.innerHTML=(date[1]+" "+result_date);
			}
			i=i+3;
		}
		document.getElementById("icon").innerHTML=table_content.length/4;
		t.appendChild(tbody);
		}
	});
	
}
var span_thankyou=document.getElementById("closethankyou");
span_thankyou.onclick=function(){
	document.getElementById("thankyou").style.display="none";
	window.history.pushState("","","/Products");
	finish();
}
// PLACE ORDER Finish Ajax (Done verything)
// -------------------------------------->
function finish(){
	var xml = new XMLHttpRequest();
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			document.getElementById("thankyou").style.display='none';
			document.getElementById("icon").innerHTML="";
			winodw.location.replace("/index.html");
		}
	};
	xml.open("GET", "deleteAll", true);
	xml.send();	
}
// Onclick of Previous Orders ----------------------------------------------->
function previousOrders(){
	document.getElementById("order").style.display='block';
	ajaxCart("orders",function(res){
		let table_content=res.split(",");
		let table=document.getElementById("order_table");
		let td=document.getElementsByTagName('tbody')
		for(let j=0;j<td.length;j++){
			if(td[j].parentNode==table){
			table.removeChild(td[j]);
			}
		}
		let tbody=document.createElement('tbody');
		if(table_content.length>2){
		for(var i=0;i<(table_content.length);i++){
			var c=0;
			let row=tbody.insertRow(c);
			let cell1=row.insertCell(0);
			let cell2=row.insertCell(1);
			let cell3=row.insertCell(2);
			let cell4=row.insertCell(3);
			cell1.innerHTML=table_content[i];
			cell2.innerHTML=table_content[i+1];
			cell3.innerHTML=table_content[i+2];
			cell4.innerHTML=table_content[i+3];
		i=i+3;
		}
		table.appendChild(tbody);
		}
  });
	
}

function closeOrders(){
	document.getElementById("order").style.display='none';
	window.history.pushState("","","/Products");
}

