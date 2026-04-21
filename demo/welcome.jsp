<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head><title>Q7 JSP Welcome</title></head>
<body>

<%
  String name = request.getParameter("username");
  if (name != null) {
%>
  <h2>Welcome, <%= name %>!</h2>
<%
  } else {
%>
  <form method="post" action="welcome.jsp">
    Name: <input type="text" name="username" />
    <input type="submit" value="Submit" />
  </form>
<% } %>

</body>
</html>
