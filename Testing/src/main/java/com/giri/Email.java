package com.giri;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;


public class Email extends HttpServlet {
   public String[] date=new Date().toString().split(" ");
   private int total=0;
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// EMAIL BILL GENERATE AJAX:
	void saveInDatastore(String name,String value) {
		DatastoreService dt=DatastoreServiceFactory.getDatastoreService();
		Entity et=new Entity("Schedule_Email");
		et.setProperty("Name", name);
		et.setProperty("Date",date[1]+" "+date[2]);
		dt.put(et);
		SetUpdate update=new SetUpdate();
		update.Update();
	}
	
    String Creation_of_String(String user) {
    	total=0;
    	DatastoreService ds=DatastoreServiceFactory.getDatastoreService();
    	StringBuffer bf=new StringBuffer();
		bf.append("---------- Organic Store Bill  ------------");
		bf.append(System.getProperty("line.separator"));
		bf.append("Products ---------Quantity---------- Price");
		for(int i=0;i<Add.list.size();i++) {
			bf.append(System.getProperty("line.separator"));
			bf.append(Add.list.get(i)+"          "+Add.quant.get(i)+"kg            Rs:"+Add.prc.get(i));
			total=total+Add.prc.get(i);
			System.out.println(total);
		}
		bf.append(System.getProperty("line.separator"));
		bf.append("------------------------------------------");
		bf.append(System.getProperty("line.separator"));
		bf.append("--------------------------- Totoal: Rs:"+total+"/-");
		bf.append(System.getProperty("line.separator"));
		bf.append("Order will be delivered in 3 days");
		Entity et=new Entity(user);
		for(int i=0;i<Add.list.size();i++) {
			et.setProperty("ProductName", Add.list.get(i));
			et.setProperty("Quantity", Add.quant.get(i));
			et.setProperty("Price", Add.prc.get(i));
			et.setProperty("Date", date[1]+" "+date[2]);
		}
		ds.put(et);
		total=0;
		return bf.toString();
    }
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
	 HttpSession ses=req.getSession(false);
	 System.out.println(ses.getAttribute("Username")+"email should be sent to this email for checking purpose i hve sent to me");
		Properties prop=new Properties();
		Session session=Session.getDefaultInstance(prop,null);
		String bill=Creation_of_String((String)ses.getAttribute("Username"));
		saveInDatastore((String) ses.getAttribute("Username"),req.getParameter("Address"));
		try {
			Message msg=new MimeMessage(session);
			msg.setFrom(new InternetAddress("giriraj.sekar@anywhere.co","Giriraj"));
			msg.addRecipient(Message.RecipientType.TO, new InternetAddress("girirajsekar50@gmail.com","Coustomer"));
			msg.setSubject("Bill - Orgaic Store");
			msg.setText(bill);
			Transport.send(msg);
		}
		catch(Exception e) {
			
		}
		
	}
}
