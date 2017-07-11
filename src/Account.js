function Account(transactionHistory = new TransactionHistory()) {
	this.startBalance = 0;	//turn into a constant - how to test?
	this.transactionHistory = transactionHistory;
	
	transactionHistory.transactions.push(this.startBalance);

	this.deposit = function(amount) {
		transactionHistory.recordDeposit(amount);
	};

	this.withdraw = function(amount) {
		transactionHistory.recordWithdrawal(amount);
	};
};

function TransactionHistory(printer = new Printer()) {
	this.printer = printer;
	this.transactions = [];

	this.recordDeposit = function(amount) {
		this.transactions.push(amount)
		var date = this.getCurrentDate()
	 	printer.printDeposit(date, amount, this.calculateBalance())
	};	
	
	this.recordWithdrawal = function(amount) {
		this.transactions.push(-amount)
		var date = this.getCurrentDate()
	 	printer.printWithdrawal(date, amount, this.calculateBalance())
};

	this.calculateBalance = function() {
		var totalBalance = this.transactions.reduce(function(sum, transaction) {
			return sum + transaction;
		}, 0);
		return totalBalance;
	};

	this.getCurrentDate = function() {
		var date = new Date();
		return date.toLocaleDateString();
	};
};

function Printer() {
	this.statement = []
	
	//this.printHeadline();
	
	this.printHeadline = function() {
		headline = 'date || credit || debit || balance'
		this.statement.unshift(headline);
		return headline;
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

