<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Kart</title>
</head>
<style>
.header{
  font-family:sans-serif;;
  background-color:MediumSeaGreen;
  box-shadow: 0 0 18px #6699ff;
  opacity:1;
  padding:5px;
  }
 .Company{
   float:left;
   text-decoration:none;
   font-size:30px;
   margin-left:20px;
   margin-top:10px;
  }
.list {
  float:right;
  }
.list a,.Company a{
  text-decoration:none;
  color:white;
  margin-right:10px;
    }
li{
  display:inline-block;
  margin-left:0px;
  margin-right:0px;
  color:#ffff;
  }
.clearfix::after{
    content:'';
    display:block;
    clear:both;
  }
  img{
  padding:40px;
  margin-top:50px;
  margin-left:430px;
  }
  .Adding{
  margin-left:631px;
  }
</style>
<header>
    <div class="header clearfix">
      <div class="Company">
        <a href="index.html">Organic Store</a>
      </div>
      <ul class="list">
      <li><a href="Products.jsp">Home</a></li>
      <li><form action="logout">
      <button>Logout</button>
      </form></li>
      </ul>
      </div>
      </header>
<body>

<%
String fruit=request.getParameter("fruit");
HttpSession ses=request.getSession(false);
if(fruit!=null) {
	ses.setAttribute("item", fruit);
	if(fruit.equals("Apple")) {
		%>
		  <img src="https://i.imgur.com/SOarLFi.jpg" height="340px">
		  <p align="center">Apple</p>
		  <p align="center">Rs:60/kg</p> 
	  <%}
	  if(fruit.contentEquals("Orange")) {
		  %>
		  <img src="http://pureoilguide.com/wp-content/uploads/2015/10/Oranges.jpg" height="340px;">
	  <p align="center">Orange</p>
	  <p align="center">Rs:100/kg</p>
	  <%}
	  if(fruit.contentEquals("Banana")) {
		  %>
		  <img src="https://ripeme.com/wp-content/uploads/RF-10012-RIPE-ORGANIC-ORGANIC-BANANAS.jpg" height="340px">
	  <p align="center">Banana</p>
	  <p align="center">Rs:30/kg</p>
	  <%}
	  if(fruit.contentEquals("Kiwi")) {
		%>
		  <img src="https://5.imimg.com/data5/XE/PC/MY-18928303/fresh-kiwi-fruit-500x500.jpg" height="340px">
	  <p align="center">Kiwi</p>
	  <p align="center">Rs:80/kg</p>
	  <%}
	  if(fruit.contentEquals("Mango")) {
		 %>
		  <img src="https://5.imimg.com/data5/KI/YJ/MY-26818540/fresh-mango-500x500.jpg" height="340px">
	  <p align="center">Mango</p>
	  <p align="center">Rs:50/kg</p>
	  <%}
}
%>
<%
String vegtbl=request.getParameter("veg");

if(vegtbl!=null) {
	ses.setAttribute("item", vegtbl);
	if(vegtbl.contentEquals("Cabbage")) {
		%>
  	  <img src="https://timedotcom.files.wordpress.com/2018/10/cabbage.jpg" height="340px">
  	<p align="center">Cabbage</p>
  	<p align="center">Rs:70/kg</p>
  	<%}
    if(vegtbl.contentEquals("Carrot")) {
  	  %>
    <img src="http://www.indian30.in/wp-content/uploads/2017/12/carrot.jpg" height="340px">
  	<p align="center">Carrot</p>
  	<p align="center">Rs:50/kg</p>
  	<%}
    if(vegtbl.contentEquals("Beetroot")){
  	  %>
    	<img src="https://cdn1.medicalnewstoday.com/content/images/articles/277/277432/beetroot-on-a-white-background.jpg" height="340px">
  	<p align="center">Beetroot</p>
  	<p align="center">Rs:40/kg</p>
  	<%}
	  if(vegtbl.contentEquals("Broccoli")){
		%>
		 <img src="http://www.koshercrops.com/uploads/9/4/4/1/9441768/s425178637313967570_p8_i1_w1000.jpeg" height="340px">
	<p align="center">Broccoli</p> 
	<p align="center">Rs:40/kg</p> 
	<%}
	  if(vegtbl.contentEquals("Brinjal")){
		%>
		  <img src="https://4.imimg.com/data4/WV/SR/MY-7344877/organic-big-brinjal-bharit-vangi-500x500.jpg" height="240px">
	  <p align="center">Brinjal</p>
	  <p align="center">Rs:30/kg</p>
	  <% }
}%>
<% 
String med=request.getParameter("med");
if(med!=null) {
	  ses.setAttribute("item", med);
	  if(med.contentEquals("Tulsi")) {
		  %>
		  <img src="https://cdn.firstcrycdn.com/2018/02/223269154-H.jpg" height="340px">
	 <p align="center">Tulsi</p>
	 <p align="center">Rs:20/kg</p>
	  <% }
	  if(med.contentEquals("Barks")) {
		  %>
		  <img src="https://tiimg.tistatic.com/fp/1/003/426/athimathuram-288.jpg" height="340px">
	  <p align="center">Barks</p>
	  <p align="center">Rs:100/kg</p>
	  <% }
	  
}
%>
<div class="Adding">
<form action="adding" method="post">
<button>Add to Kart</button>
<select name="quantity">
<option value="1">1Kg</option>
<option value="2">2Kg</option>
<option value="3">3Kg</option>
<option value="4">4Kg</option>
<option value="5">5Kg</option>
</select>
<p></p>
<a href="Products.jsp">Shop More</a>
<p></p>
</form>
</div>
</body>
</html>