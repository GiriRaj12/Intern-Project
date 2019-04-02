package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;

public class Load extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// PRODUCT LOAD JAVA AJAX:
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException {
		HttpSession ses=req.getSession(false);
		System.out.println("load java");
		PrintWriter out=res.getWriter();
		DatastoreService dt=DatastoreServiceFactory.getDatastoreService();
		Query q=new Query("Products");
		PreparedQuery pq=dt.prepare(q);
		String url="";
		for(Entity et:pq.asIterable()) {
			url=(String)et.getProperty("url")+","+url;
		}
		out.println(url);
	  }
}
