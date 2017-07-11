// understands the output of transaction history
(function(exports) {
 function Printer() {
	HEADLINE =  'date || credit || debit || balance'
	this.statement = []
	
	this.printHeadline = function() {
		this.statement.unshift(HEADLINE);
		return HEADLINE;
	};

	this.printDeposit = function(date, amount, balance) {
		var statementLine = `${ date } || ${ amount.toFixed(2) } || || ${ balance.toFixed(2) }`
		this.statement.push(statementLine)
		return statementLine;
	};
	
	this.printWithdrawal = function(date, amount, balance) {
		var statementLine = `${ date } || || ${ amount.toFixed(2) } || ${ balance.toFixed(2) }`
		this.statement.push(statementLine)
		return statementLine;
	};

	this.printStatement = function() {
		this.printHeadline();
		this.statement.forEach(function(line) {
			console.log(line);
		});
	};
 };
	exports.Printer = Printer;
})(this);
