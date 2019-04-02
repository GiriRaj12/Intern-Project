package com.giri;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;

public class Add extends HttpServlet {
	static List<String> list = new ArrayList<>();
	static List<Integer> quant = new ArrayList<>();
	static List<Integer> prc = new ArrayList<>();
	boolean flag;
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
// ADD TO CART HANDLER :
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		PrintWriter out = res.getWriter();
		String url = req.getParameter("element");
		String qty = req.getParameter("quant");
		System.out.println("came in addkart" + url + "---" + qty);
		DatastoreService dt = DatastoreServiceFactory.getDatastoreService();
		Filter filter=new FilterPredicate("url",FilterOperator.EQUAL,url);
		Query q = new Query("Products").setFilter(filter);
		PreparedQuery pq = dt.prepare(q);
		for (Entity et : pq.asIterable()) {
			String u = (String) et.getProperty("url");
			if (url.contentEquals(u)) {
				int x = Integer.parseInt((String) et.getProperty("Quantity"));
				int y = Integer.parseInt(qty);
				if (x >= y) {
					boolean flg=check_present((String)et.getProperty("ProductName"),y);
					if(flg) {
					list.add((String) et.getProperty("ProductName"));
					quant.add(Integer.parseInt(qty));
					prc.add(Integer.parseInt((String) et.getProperty("price")));
					}
					out.println("Product Added to kart"+","+list.size());
				 }
				else {
					System.out.println("Not added");
					out.println("Quantity expected is not in stock"+","+"");
				}
			}
		}
	}
	
	 boolean check_present(String str,int qty) {
		boolean flg=true;
		System.out.println(str);
		for(int i=0;i<list.size();i++) {
			if(list.get(i).contentEquals(str)) {
				System.out.println("Came in if");
				int val=quant.get(i);
				val=val+qty;
				System.out.println(val);
				quant.set(i, val);
				flg=false;
				break;
			}
		}
		return flg;
		
	}
}
