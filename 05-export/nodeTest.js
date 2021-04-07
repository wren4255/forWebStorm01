let ages = [234,543,44,23,3,423,5,33];

console.log(ages.filter(age => age > 50));
// console.log(global)
// console.log

let aa = Buffer.alloc(10)



console.log(aa)

let http = require('http')

let server = http.createServer();
server.on('request',
  (request,response) =>{
    console.log('url:' + request.url);
    for (const rwewElement of 'rwew') {
      
    }


    console.log('uri:' + request.uri)

    response.write('hello man')

    response.end();
  }

)

server.listen('3000', () => console.log('listen is created'));

// server.on('response',() => console.log('server is gave you response'))