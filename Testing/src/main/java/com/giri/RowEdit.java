package com.giri;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RowEdit extends HttpServlet{
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// Edit a ROW QUANTITY:
public void doGet(HttpServletRequest req, HttpServletResponse res) {
	  int id=Integer.parseInt(req.getParameter("id"));
      int num=Integer.parseInt(req.getParameter("value"));
      System.out.println(id+num);
      Add.quant.set((id-1), num);
      System.out.println(Add.quant);
  }
}
