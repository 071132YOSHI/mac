<%@ page contentType="text/html; charset=Shift_JIS" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>


    <h3>JSP 1�� ���K�ۑ� 4</h3>
    <%! int size = 0; %>
    <%  size++; %>
    <table border="1">
      <% for(int i = 0; i < size; i++){ %>
           <tr>
           <% for(int j = 0; j < size; j++){ %>
              <td><%= i %>x<%= j %></td>
           <% } %>
           </tr>
      <% } %>
    </table>


����΂��



</body>



</html>