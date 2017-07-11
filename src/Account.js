function Account(transactionHistory = new TransactionHistory()) {
	this.startBalance = 0;	//turn into a constant - how to test?
	this.transactionHistory = transactionHistory;

	this.deposit = function(amount) {
		transactionHistory.record_deposit(20);
	};
};

function TransactionHistory() {
	this.transactions = [];

	this.record_deposit = function(amount) {
		this.transactions.push(amount)
	};	
};
