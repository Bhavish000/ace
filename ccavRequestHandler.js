const ccav = require('./ccavutil.js');

exports.postReq = function(request, response) {
    let body = '';
    const workingKey = '5C19E63B576A7BAE181BDE319A617A18'; // Put in the 32-Bit key shared by CCAvenues.
    const accessCode = 'AVKJ05LC60BF56JKFB'; // Put in the Access Code shared by CCAvenues.
    
    request.on('data', function(data) {
        body += data;
    });

    request.on('end', function() {
        const encRequest = ccav.encrypt(body, workingKey);
        console.log('encRequest'+encRequest )
        const formbody = `
            <form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction">
                <input type="hidden" id="encRequest" name="encRequest" value="${encRequest}">
                <input type="hidden" name="access_code" id="access_code" value="${accessCode}">
            </form>
            <script language="javascript">document.redirect.submit();</script>
        `;
        
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(formbody);
        response.end();
    });
};



// var http = require('http'),
//     fs = require('fs'),
//     ccav = require('./ccavutil.js'),
//     qs = require('querystring');

// exports.postReq = function(request,response){
//     var body = '',
// 	workingKey = '5C19E63B576A7BAE181BDE319A617A18',	//Put in the 32-Bit key shared by CCAvenues.
// 	accessCode = 'AVKJ05LC60BF56JKFB',			//Put in the Access Code shared by CCAvenues.
// 	encRequest = '',
// 	formbody = '';
//     // console.log('encRequest' + workingKey)
//     // console.log('encRequest' + request)
// 	// const workingKeys = '5C19E63B576A7BAE181BDE319A617A18'.slice(0, 16).padEnd(16, '0');			
    
//     request.on('data', function (data) {
// 	body += data.body;
// 	encRequest = ccav.encrypt(body,workingKey); 
//     console.log('encRequest ' + encRequest)
// 	formbody = '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';
//     });
				
//     request.on('end', function () {
//         response.writeHeader(200, {"Content-Type": "text/html"});
// 	response.write(formbody);
// 	response.end();
//     });
//    return; 
// };
