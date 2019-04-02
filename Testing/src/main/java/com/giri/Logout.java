package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Logout extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// LOGOUT AJAX:
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException {
		HttpSession ses=req.getSession();
		ses.invalidate();
		PrintWriter out=res.getWriter();
		out.println("");
		System.out.println("Logout");
	}
}
