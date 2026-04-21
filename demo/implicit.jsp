<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head><title>Q8 Implicit Objects</title></head>
<body>

<h2>JSP Implicit Objects</h2>

<%
  session.setAttribute("user", "Rahul");
  String user   = (String) session.getAttribute("user");
  String method = request.getMethod();
  String uri    = request.getRequestURI();
%>

<p>request.getMethod()     : <%= method %></p>
<p>request.getRequestURI() : <%= uri %></p>
<p>session user            : <%= user %></p>
<p>Server Info             : <%= application.getServerInfo() %></p>
<% out.println("<p>Written using out.println()</p>"); %>

</body>
</html>
