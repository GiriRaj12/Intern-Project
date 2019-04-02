package com.giri;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
@WebServlet("/EventRegister")
public class ReloadRegister extends HttpServlet {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
    	HttpSession ses=req.getSession();
    	System.out.println("Came in ReloadRegister");
		res.sendRedirect("index.html");
    }
}
