longurl = https://help.mementodatabase.com/?ht_kb=scripts;
result = http().get("https://api-ssl.bitly.com/v3/shorten?access_token=%var[1]%&format=txt&longurl= + longurl");

message( result.body  );
