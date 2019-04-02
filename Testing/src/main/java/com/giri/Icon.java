package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/icon")
public class Icon extends HttpServlet{
     /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// ON LOAD ICON SHOW AJAX:
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
    	 PrintWriter out=res.getWriter();
    	 int n=Add.list.size();
    	 System.out.println(n);
    	 if(n>0) {
    	 out.println(n+"");
    	 }
    	 else {
    		 out.println("0");
    	 }
     }
	
}
