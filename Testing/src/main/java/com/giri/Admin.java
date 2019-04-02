package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;

public class Admin extends HttpServlet{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// ADMIN HANDLER ADD PRODUCTS TO DS:
	public void doGet (HttpServletRequest req,HttpServletResponse res) throws ServletException, IOException {
		System.out.println("Came admin");
		PrintWriter out= res.getWriter();
		DatastoreService dt=DatastoreServiceFactory.getDatastoreService();
		String product_name=req.getParameter("name");
	    String url=req.getParameter("url");
	    String quantity=req.getParameter("quant");
	    String price=req.getParameter("price");
        System.out.println(product_name+" "+quantity);
	    boolean flg=Check_datastore(product_name,url,quantity,price);
	    if(flg) {
	    	System.out.println("Added");
	    }
	    else {
	    	Entity et=new Entity("Products");
	    	et.setProperty("ProductName", product_name);
	    	et.setProperty("url", url);
	    	et.setProperty("Quantity", quantity);
	    	et.setProperty("price", price);
	    	dt.put(et);
	    }
	    out.println("Product Added Successfully");
	}
	boolean Check_datastore(String name,String url,String quantity,String price) {
		System.out.println(name+" "+url+" "+quantity);
		DatastoreService dt=DatastoreServiceFactory.getDatastoreService();
		Query q=new Query("Products");
		PreparedQuery pq=dt.prepare(q);
		boolean flg=false;
		for(Entity e:pq.asIterable()) {
			String n=(String) e.getProperty("ProductName");
			if(n.equals(name)) {
				System.out.println("true");
				String quant=Integer.parseInt((String)e.getProperty("Quantity"))+Integer.parseInt(quantity)+"";
			    dt.delete(e.getKey());
				Entity et=new Entity("Products");
			    et.setProperty("ProductName",n);
			    et.setProperty("url", url);
			    et.setProperty("Quantity",quant);
			    et.setProperty("price", price);
			    dt.put(et);
			    flg=true;
			}
		}
		return flg;
	}
 }
