package com.giri;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
// DATASTORE UPDATE AFTER BUYNOW
public class SetUpdate {
	void Update() {
		DatastoreService dt = DatastoreServiceFactory.getDatastoreService();
		Query q = new Query("Products");
		PreparedQuery pq = dt.prepare(q);
		for (Entity e : pq.asIterable()) {
			String n=(String) e.getProperty("ProductName");
			for (int i = 0; i < Add.list.size(); i++) {
				if (n.equals(Add.list.get(i))) {
					String quant = (Integer.parseInt((String) e.getProperty("Quantity")) - Add.quant.get(i)) + "";
					String product = (String) e.getProperty("ProductName");
					String prc = (String) e.getProperty("price");
					String url=(String)e.getProperty("url");
					System.out.println(prc + " " + product + " " + quant);
					dt.delete(e.getKey());
					Entity et = new Entity("Products");
					et.setProperty("ProductName", product);
					et.setProperty("url", url);
					et.setProperty("Quantity", quant);
					et.setProperty("price", prc);
					dt.put(et);
				}
			}
		}
	}
}
