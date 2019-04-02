package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class SendSession extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// Session HANDLING:
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
		HttpSession ses = req.getSession(false);
		PrintWriter out = res.getWriter();
		System.out.println("Came in session");
		try {
			String sesion = (String) ses.getAttribute("Username");
			if (sesion != null) {
				out.println((String) ses.getAttribute("Username"));
				System.out.println(sesion);
			} else {
				out.println("");
			}
		} catch (Exception e) {
			out.println("");
		}
	}
}
