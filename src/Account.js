// understands the flux of money
function Account(transactionHistory = new TransactionHistory()) {
	this.startBalance = 0;	//turn into a constant - how to test?
	this.transactionHistory = transactionHistory;
	
	this.transactionHistory.transactions.push(this.startBalance);

	this.deposit = function(amount) {
		transactionHistory.recordDeposit(amount);
		return `You deposited £${amount.toFixed(2)}`
	};

	this.withdraw = function(amount) {
		transactionHistory.recordWithdrawal(amount);
		return `You withdrew £${amount.toFixed(2)}`
	};

	this.printStatement = function() {
		this.transactionHistory.printer.printStatement();
	};
};
// understands the past money transactions
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


