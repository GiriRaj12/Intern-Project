package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;

@WebServlet("/orders")
public class Orders extends HttpServlet{
 /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// PREVIOUS ORDERS AJAX:
public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
	HttpSession ses=req.getSession(false);
	 DatastoreService dt=DatastoreServiceFactory.getDatastoreService();
	 Query q=new Query((String)ses.getAttribute("Username"));
	 PreparedQuery pq=dt.prepare(q);
	 String result="";
	 for(Entity et:pq.asIterable()) {
		 int n=1;
		 result=n+","+((String)et.getProperty("ProductName"))+","+et.getProperty("Quantity")+","+et.getProperty("Date")+","+result;
	 }
	 if(result.length()>2) {
		 result=result.substring(0,result.length()-1);
	 }
	 PrintWriter out=res.getWriter();
	 
	 out.println(result);
 }
}
