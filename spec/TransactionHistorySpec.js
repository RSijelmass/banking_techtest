describe('TransactionHistory', function() {
	 var transactionHistory;
	 beforeEach(function() {
	 	transactionHistory = new TransactionHistory();
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
});
