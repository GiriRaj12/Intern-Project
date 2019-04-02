package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Kart extends HttpServlet {
          /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// KART SHOW AJAX:
		public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        	  System.out.println("Came in kart");
        	  PrintWriter out=res.getWriter();
        	  String result="";
        	  for(int i=0;i<Add.list.size();i++) {
        		  result=((i+1)+","+Add.list.get(i)+","+Add.quant.get(i)+","+(Add.quant.get(i)*Add.prc.get(i))+",")+result;
        	  }
        	  String fin="";
        	  if(result.length()>4) {
             fin=result.substring(0,result.length()-1);
        	  }
        	  out.println(fin);
       }
}
