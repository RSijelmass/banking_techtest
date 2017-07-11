describe('TransactionHistory', function() {
	 var transactionHistory;
	 beforeEach(function() {
	 	transactionHistory = new TransactionHistory();
	 });

	 describe('initialize', function() {
	 	// expect(this.printer).toEqual('printer')
	 });

	 describe('#record_deposit', function() {
	 	it('saves a deposit in a list of transactions', function() {
		 	transactionHistory.record_deposit(20)
			expect(transactionHistory.transactions).toEqual([20])
		});
	 });

	describe('#record_withdrawal', function() {
	 	it('saves a withdrawal in a list of transactions', function() {
		 	transactionHistory.record_withdrawal(20)
			expect(transactionHistory.transactions).toEqual([-20])
		});
	 });

	describe('#calculate_balance', function() {
		it('calculates current balance after deposits', function() {
			transactionHistory.record_deposit(50)
			transactionHistory.record_deposit(10)
			transactionHistory.record_deposit(100)
			expect(transactionHistory.calculate_balance()).toEqual(160)
		});
	});
});
