// understands the past money transactions
(function(exports) {
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
	exports.TransactionHistory = TransactionHistory;
})(this);
