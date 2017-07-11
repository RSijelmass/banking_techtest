function Account(transactionHistory = new TransactionHistory()) {
	this.startBalance = 0;	//turn into a constant - how to test?
	this.transactionHistory = transactionHistory;

	this.deposit = function(amount) {
		transactionHistory.record_deposit(amount);
	};

	this.withdraw = function(amount) {
		transactionHistory.record_withdrawal(amount);
	};
};

function TransactionHistory(printer = new Printer()) {
	this.printer = printer;
	this.transactions = [];

	this.record_deposit = function(amount) {
		this.transactions.push(amount)
	};	
	
	this.record_withdrawal = function(amount) {
		this.transactions.push(-amount)
	};
};

function Printer() {
	this.print_headline = function() {
		return 'date || credit || debit || balance'
	};
};

