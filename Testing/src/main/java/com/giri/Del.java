package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Del extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// DELETE ROW AJAX:
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
		int num=Integer.parseInt(req.getParameter("num"));
		System.out.println("Delete"+num);
		String resp="";
		if(num>(Add.list.size())) {
			resp="This element is not present";
		}
		else {
		Add.list.remove((num-1));
		Add.quant.remove((num-1));
		Add.prc.remove((num-1));
		resp="";
		}
		PrintWriter out=res.getWriter();
		out.println(resp);
		System.out.println(resp);
	}

}
