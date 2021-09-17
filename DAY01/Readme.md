<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		<h1 text-align="centre">REDIS</h1><br>
		<p>USAGE about redis commands</p1><br>
	<p>-redis cli -> to enter in redis (command line interface )</p>
	<h5>For Strings</h5>
	<ul>
		<li>SET key value -> sets a value to a key : set < key name></li>
		<li>GET key -> gets a value from a key : get</li>
		<li>ttl key -> tttl(time to leave) it expire the key at given time : ttl</li>
		<li>KEYS * -> show all exist keys : key *</li>
		<li>DEL key -> deletes a key and its value : del</li>
		<li>FLUSHALL -> deletes all key : flushall</li>
		<li>EXISTS key -> if key exit return 1 otherwise 0 (for key check) : exists</li>
		<li>expire key time -> automatically delete the key after the specific time: expire</li>
		<li>setex key time value -> set and expire key at same time : setex</li></ul>
	<h5>For Arrays</h5>
	<ul>
		<li>LPUSH array value -> push the element at 0th index : lpush</li>
		<li>RPUSH array value -> add the element at last index : rpush</li>
		<li>LRANGE array start stop -> get range of elements from a list : lrange</li>
		<li>LPOP array -> removes and gets the first element of list : lpop</li>
		<li>RPOP array -> removes and gets the last element of list : rpop</li></ul>
	<h5>For Sets</h5>
	<ul>
		<li>SADD myset value -> it dosent repeat the key : sadd</li>
		<li>SMEMBERS myset -> to get all the members of the set : smembers</li></uL>
	<h5>For Hash</h5>
	<ul>
		<li>HSET key field value -> sets the hash field with string value : hset</li>
		<li>HGET key field -> gets the hash field with string value : hget</li>
		<li>HGETALL key -> gets all the fields and values in a specific key: hgetall</li>
		<li>HDEL key field -> delete the hash field : hdel</li>
		<li>HEXISTS key field -> exist th hash field : hexists</li></ul>
	<hr>
	<h1>PostgreSQL<h1>
		<h5>To start PostgresSQL:</h5>
		
