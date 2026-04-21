<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head><title>Q9 Login</title></head>
<body>

<h2>Login</h2>

<%
  String username = request.getParameter("username");
  String password = request.getParameter("password");

  if (username != null && password != null) {
    if (username.equals("admin") && password.equals("1234")) {
      session.setAttribute("user", username);
%>
      <h3 style="color:green">Welcome, <%= username %>!</h3>
<%
    } else {
%>
      <h3 style="color:red">Invalid credentials!</h3>
<%
    }
  } else {
%>
  <form method="post" action="login.jsp">
    Username: <input type="text" name="username" /><br/><br/>
    Password: <input type="password" name="password" /><br/><br/>
    <input type="submit" value="Login" />
  </form>
<% } %>

</body>
</html>
