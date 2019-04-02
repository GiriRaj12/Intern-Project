package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;

@WebServlet("/buyNow")
public class BuyNow extends HttpServlet{
          /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// BUY NOW BUTTON AJAX-----> Will Show Suggession wheather present or not to user
		public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException {
        	  PrintWriter out=res.getWriter();
        	  DatastoreService dt=DatastoreServiceFactory.getDatastoreService();
        	  Query q=new Query("Products");
        	  PreparedQuery pq=dt.prepare(q);
        	  for(Entity e:pq.asIterable()) {
        		 for(int i=0;i<Add.list.size();i++) {
        			 if(Add.list.get(i).equals((String)e.getProperty("ProductName"))) {
        				if(Add.quant.get(i)>=(Integer.parseInt((String)e.getProperty("Quantity")))){
        					out.println("");
        				}
        				else {
        					out.println((String)(e.getProperty("ProductName"))+e.getProperty("Quantity"));
        					break;
        				}
        			 };
        		 }
        	  }
          }
}
