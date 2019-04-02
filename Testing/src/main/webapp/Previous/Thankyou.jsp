<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Winde Up</title>
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
  body{
  background-image:url("https://chainimage.com/images/thank-youshoppingpostcardcorporatea6gratitudegratefulshop.png");
  backgorund-size:cover;
  repeat:none;
  
  }
  p{
  margin-top:220px;
  font-size:30px;
  color:MediumSeaGreen;
  }
</style>
<body>
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
<p align="center">Thanks for Shooping with us<p>
<p align="center"><a href="Products.jsp">Home</a></p>
</body>
</html>