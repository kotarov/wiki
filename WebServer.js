/** STATIC SERVER    ( no dependances )
 *    by: skotarov@gmail.com
 * usage: node start.js
 **/  

var port = 8080
/* */
function handleReq( req, res ){
	var file = `./${req.url.substr(1).split("?")[0] || 'index.html'}`
	require('fs').createReadStream( file )
		.on("error", ()=>{ res.writeHead(404); res.end("404 not found") })
		.pipe(res)
}

require('http').createServer( handleReq ).listen(port)
console.log(`Static Server on: http://localhost:${port}`)
/** /
require('express')().use(require('express').static("public")).listen(8080,()=>{
  console.log("\n*** Express - port: 8080, directory: public")
})
/**/
