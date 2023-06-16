• DTO or Data Transfers Object

We use DTOs for the response and request object to deliver only the properties 
that the client needs, without giving too much information...

For example, if the user has 7 properties like "ID, Name, Password, CIN, PhoneNumber,..."
and you want to deliver only some like "ID, Name, CIN, PhoneNumber"
You create a class named "GetUsersResponse" with the target properties and it is done! 

• Remarc: 
naming DTO classes should start with the Method name like "GET", "POST", "PUT", "Delete", 
and should end with "Request" if it is POST or PUT request and you need to send JSON Data
or Response, if you need just to deliver data