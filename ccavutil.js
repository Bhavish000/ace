var crypto = require('crypto');

exports.encrypt = function (plainText, workingKey) {
    try {
        // Generate key and IV from the working key
        const m = crypto.createHash('md5');
        m.update(workingKey);
        const key = m.digest('hex').substring(0, 32); // Use first 32 characters for AES-128
        const iv = crypto.randomBytes(16); // Generate a random IV for each encryption

        // Create cipher using AES-128-CBC algorithm
        const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(key, 'hex'), iv);

        // Encrypt the plaintext
        let encoded = cipher.update(plainText, 'utf8', 'hex');
        encoded += cipher.final('hex');

        // Return the encrypted text as a string
        return encoded;
    } catch (error) {
        console.error("Encryption error:", error);
        return null;
    }
};



exports.decrypt = function (encText, workingKey) {
    	var m = crypto.createHash('md5');
    	m.update(workingKey)
    	var key = m.digest('binary');
	var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';	
	var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    	var decoded = decipher.update(encText,'hex','utf8');
	decoded += decipher.final('utf8');
    	return decoded;
};

