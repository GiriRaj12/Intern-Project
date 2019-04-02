package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/thankyou")
public class Thankyou extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// Thank you session:
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
	     PrintWriter out=res.getWriter();
	    String result="";
	     for(int i=0;i<Add.list.size();i++) {
   		  result=((i+1)+","+Add.list.get(i)+","+Add.quant.get(i)+","+(Add.quant.get(i)*Add.prc.get(i))+",")+result;
   	  }
	     if(result.length()>4) {
             result=result.substring(0,result.length()-1);
        	  }
	     out.println(result);
	}
}
