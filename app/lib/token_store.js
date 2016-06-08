/*
Token store class
*/
var TokenStore = function() {
	this.token = null;
};

TokenStore.prototype.storeToken(token) {
	this.token=token;
};

TokenStore.prototype.getToken() {
	return this.token;
};

var _tokenInst = null;

function getInstance() {
	if(!_tokenInst) {
		_tokenInst = new TokenStore();
	}
	return _tokenInst;
};

module.exports = {
	getInstance: getInstance
}
