package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.*;
import javax.servlet.http.*;

import com.google.appengine.api.datastore.*;
public class Register extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// Registration HANDLING:
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws ServletException, IOException {
		String username=req.getParameter("username");
	    String password =req.getParameter("password");
	    String name=req.getParameter("name");
	    System.out.println("came in register->"+username+password+name);
	    PrintWriter out = res.getWriter();
	    boolean flg=true;
	    DataStore ds=new DataStore();
	    flg=ds.Check_DataStore(username);
	    if(flg) {
	    	ds.Add_in_DataStore(name,username,password);
	    	HttpSession ses=req.getSession(true);
	    	ses.setAttribute("Username", username);
	    	ses.setAttribute("Password", password);
	    	out.println("");
	    }
	    else {
	    	out.println("User aldready Exist");
	    }
	}
}
 //This class is to communicate with the DataStore
class DataStore{
	private static DatastoreService dt=DatastoreServiceFactory.getDatastoreService();
	//To check weather data is present or not
	boolean Check_DataStore(String usrname) throws ServletException, IOException {
	    Query q=new Query("User");
	    PreparedQuery pq=dt.prepare(q);
	    boolean flg=true;
	    for(Entity et:pq.asIterable()) {
	    	String user=(String) et.getProperty("Username");
	    	if(user.equals(usrname)) {
	    		flg=false;
	    	}
         }
	    return flg;
	    }
	//Data Not present so adding this in Data Store
	void Add_in_DataStore(String name,String username,String password) {
	    Entity data=new Entity("User");
	    data.setUnindexedProperty("Name",name);
	    data.setProperty("Username", username);
	    data.setProperty("Password", password);
	    dt.put(data);
	       }
}
