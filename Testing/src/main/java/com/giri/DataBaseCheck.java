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

@WebServlet("/dbCheck")
public class DataBaseCheck extends HttpServlet {
     /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// CART QUANTITY CHECK AJAX:
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException {
    	 System.out.println("Came in db");
		PrintWriter out=res.getWriter();
    	 DatastoreService dt=DatastoreServiceFactory.getDatastoreService();
    	 Query q=new Query("Products");
    	 PreparedQuery pq=dt.prepare(q);
    	 String result="";
    	 boolean flg=true;
    	 for(Entity e:pq.asIterable()) {
    		 flg=true;
    		 for(int i=0;i<Add.list.size();i++) {
    		 if(e.getProperty("ProductName").equals(Add.list.get(i))) {
    			 int n=Integer.parseInt((String) e.getProperty("Quantity"));
    			 if(Add.quant.get(i)>n){
    				 System.out.println("came in if");
    				 result="We have only "+e.getProperty("Quantity")+" "+Add.list.get(i);
    			     flg=false;
    				 break;
    			 }
    		    }
    		 }
    		 if(!flg) {
    			 break;
    		 }
    	 }
    	 System.out.println(result);
    	 out.println(result);
     }
}
