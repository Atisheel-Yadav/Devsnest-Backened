<html>
  <head></head>
  <body>
    <h3>DB == Drives</h3>
    <h3>Schemas == Folders</h3>
    <h3>Create a Schema-->  create schema {schemaName};</h3>
    <h3>Create a table in a Schema-->  create table {schemaName}.{tableName};
</h3>
    <h3>List all tables in a Schema-->  \d {schemaName}.*;</h3>
    <h3>View a specific table-->  \d {schemaName}.{tableName};
</h3>
    <h3>Drop Schema-->  If(empty Schema)--> drop schema {schemaName};</h3>
    <h3>else--> drop schema {schemaName} cascade;
</h3><br><br><br>
    <h2>Tables in schema are objects.</h2>
    <h4>A schema is a collection of database objects, (tables).</h4>
    <h6>View a table's content: select * from {tablename};</h6><br>
    <h1>Aggregate Functions:</h1>
    <p>Used to compute a single result from a set of input values.<br>

To count the number of rows in a table: select count(*) from {tablename};<br>


Where clause: select {column} from {tableName} where {conditons...};<br>

LIKE works with strings only. So we need to type cast data types accordingly.<br>

For type casting, use ::</p>
