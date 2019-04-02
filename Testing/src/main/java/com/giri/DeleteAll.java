package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/deleteAll")
public class DeleteAll extends HttpServlet {
        /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// DELETE ALL IN AJAX:
		public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        	Add.list.clear();
        	Add.quant.clear();
        	Add.prc.clear();
        	PrintWriter out=res.getWriter();
        	out.println("Deleted All");
        }
}
