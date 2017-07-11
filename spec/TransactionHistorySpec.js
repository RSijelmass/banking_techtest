describe('TransactionHistory', function() {
	 var transactionHistory;
	 beforeEach(function() {
	 	transactionHistory = new TransactionHistory();
	 });

	 describe('#deposit', function() {
	 	it('saves a deposit in a list of transactions', function() {
		 	transactionHistory.record_deposit(20)
			expect(transactionHistory.transactions).toEqual([20])
		});
	 });
});
