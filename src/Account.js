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
