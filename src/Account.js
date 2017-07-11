function Account(transactionHistory = new TransactionHistory()) {
	this.startBalance = 0;	//turn into a constant - how to test?
	this.transactionHistory = transactionHistory;

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
		var date = '01/01/01' // this.getDate
	 	printer.printDeposit(date, amount, this.calculateBalance())
	};	
	
	this.recordWithdrawal = function(amount) {
		this.transactions.push(-amount)
	};

	this.calculateBalance = function() {
		var totalBalance = this.transactions.reduce(function(sum, transaction) {
			return sum + transaction;
		}, 0);
		return totalBalance;
	};
};

function Printer() {
	this.printedStatement = []

	this.printHeadline = function() {
		headline = 'date || credit || debit || balance'
		this.printedStatement.push(headline);
		return headline;
	};

	this.printDeposit = function(date, amount, balance) {
		var statement = `${ date } || ${ amount.toFixed(2) } || || ${ balance.toFixed(2) }`
		this.printedStatement.push(statement)
		return statement;
	};
};

