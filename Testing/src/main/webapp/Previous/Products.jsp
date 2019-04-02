<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
  pageEncoding="ISO-8859-1"%>
  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Organic Store</title>
</head>
<style>
.header {
  font-family: sans-serif;;
  background-color: MediumSeaGreen;
  box-shadow: 0 0 18px #6699ff;
  opacity: 1;
  padding: 5px;
}
.Company {
  float: left;
  text-decoration: none;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 10px;
}

.list {
  float: right;
}

.list a, .Company a {
  text-decoration: none;
  color: white;
  margin-right: 10px;
}

li {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  color: #ffff;
}
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
.form {
  position: realtive;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 1px solid transparent;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 50%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.modal{
  display: none; 
  position: fixed;
  z-index: 2;
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

body {
  overflow-x:hidden;
  background-image:
    url("http://www.ascendskills.com/data/archive/img/938560745.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
img{
cursor:pointer;
}
</style>
<header>
  <div class="header clearfix">
    <div class="Company">
      <a href="index.html">Organic Store</a>
    </div>
    <ul class="list">
      <li><a href="Products.jsp">Home</a></li>
      <li><a href="index.html">Main</a>
      <li><form action="logout" onsubmit="return logout()">
          <button>Logout</button>
        </form></li>
      <li><button onclick="data()">Cart</button></li>
    </ul>
  </div>
</header>
<body onload="load()">
<%
HttpSession ses=request.getSession(false);
String user=(String)ses.getAttribute("username");
if(user.equals("")){
response.sendRedirect("index.html");
}
%>
 <div class="List">
 <ul id="imageList">
  </ul>
  </div>
  <div class="modal" id="myModal" style="display:none">
		<div class="login">
			<div class="form clearfix">
			   <span class="close" id="closereg">&times;</span>
				  <img id="insert">
				  <button onclick="buyNow()">Buy Now</button>
			</div>
		</div>
	</div>
  <div class="footer">
    <p style="float: left; font-size:25px; color:white">Contact:+12345</p>
    <p style="float: right; font-size:25px; color:white">Organic Store
    <p>
  </div>
  <script type="text/javascript" src="Product_Script.js"></script>
</body>
</html>