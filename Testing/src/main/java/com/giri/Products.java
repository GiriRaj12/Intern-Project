package com.giri;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
@WebServlet("/Products")
public class Products extends HttpServlet {
       /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// PRODUCTS reloading:
	public void service(HttpServletRequest req,HttpServletResponse res) throws IOException {   
	   HttpSession ses=req.getSession();
	   if(ses.getAttribute("direction")!=null) {
	   ses.removeAttribute("direction");
	   }
	   System.out.println("Products");
	   ses.setAttribute("direction", "Products");
		res.sendRedirect("index.html");	
       }
}
