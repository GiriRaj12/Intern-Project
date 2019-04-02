package com.giri;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
interface X{
static void method() {
	
}
}
public class Schedule_Email extends HttpServlet{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// Email Scheduler :
    void send() throws UnsupportedEncodingException, javax.mail.MessagingException {
    	Properties prop=new Properties();
		Session session=Session.getDefaultInstance(prop,null);
			Message msg=new MimeMessage(session);
			msg.setFrom(new InternetAddress("giriraj.sekar@anywhere.co","Admin"));
		msg.setRecipient(Message.RecipientType.TO, new InternetAddress("girirajsekar50@gmail.com","Coustomer"));
		msg.setSubject("Organic Store- Delivey Scheduled");
		msg.setText("Thank you for shopping with us Your order will be delivered Today");
         Transport.send(msg);
    }
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws UnsupportedEncodingException {
    	String[] present_date=new Date().toString().split(" ");
		DatastoreService dt=DatastoreServiceFactory.getDatastoreService();
    	Query q=new Query("Schedule_Email");
    	PreparedQuery pq=dt.prepare(q);
    	for(Entity e:pq.asIterable()) {
        	String order_date[]=e.getProperty("Date").toString().split(" ");
        	String result_date="";
        	if(order_date[0]=="Feb") {
        		if(order_date[1]=="26") {
        			result_date="1";
        		}
        		if(order_date[1]=="27") {
        			result_date="2";
        		}
        		if(order_date[1]=="28") {
        			result_date="3";
        		}
        	}
        	if(order_date[0]=="Jan"||order_date[0]=="Mar"||order_date[0]=="May"||order_date[0]=="Jul"||order_date[0]=="Aug"||order_date[0]=="Oct"||order_date[0]=="Dec") {
        		if(order_date[1]=="29") {
        			result_date="1";
        		}
        		if(order_date[1]=="30") {
        			result_date="2";
        		}
        		if(order_date[1]=="31") {
        			result_date="3";
        		}
        	}
        	else {
        		if(order_date[1]=="28") {
        			result_date="1";
        		}
        		if(order_date[1]=="29") {
        			result_date="2";
        		}
        		if(order_date[1]=="30") {
        			result_date="3";
        		}
        	}
        	if(result_date==present_date[2]) {
        		try {
					send();
				} catch (MessagingException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
        	}
    	}
   }
}
