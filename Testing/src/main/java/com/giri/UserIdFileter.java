package com.giri;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebFilter("/login")
public class UserIdFileter implements Filter {

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req=(HttpServletRequest)request;
		HttpServletResponse res=(HttpServletResponse)response;
	    String username=req.getParameter("username");
	    PrintWriter out=res.getWriter();
	    boolean flag=false;
	    if(username!=null) {
	    for(int i=0;i<username.length();i++) {
	    	if(username.charAt(i)=='@') {
	    		flag=true;
	    	}
	      }
	    if(flag) {
	    	chain.doFilter(request, response);	
	    }
	    else {
	    	req.getRequestDispatcher("Validate.jsp").include(req,res);
	    	out.println("<p align=\"center\">"+"UserID must Contain @ notation"+"<p>");
	    }
	  }
	    else {
	    	chain.doFilter(request, response);
	    }
    }

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}
}
