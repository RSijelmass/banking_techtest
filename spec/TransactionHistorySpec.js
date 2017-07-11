describe('TransactionHistory', function() {
	 var transactionHistory;
	 beforeEach(function() {
	 	transactionHistory = new TransactionHistory();
	 });

	 describe('initialize', function() {
	 	// expect(this.printer).toEqual('printer')
	 });

	 describe('#recordDeposit', function() {
	 	it('saves a deposit in a list of transactions', function() {
		 	transactionHistory.recordDeposit(20)
			expect(transactionHistory.transactions).toEqual([20])
		});
	 });

	describe('#recordWithdrawal', function() {
	 	it('saves a withdrawal in a list of transactions', function() {
		 	transactionHistory.recordWithdrawal(20)
			expect(transactionHistory.transactions).toEqual([-20])
		});
	 });

	describe('#calculateBalance', function() {
		it('calculates current balance after deposits', function() {
			transactionHistory.recordDeposit(50)
			transactionHistory.recordDeposit(10)
			transactionHistory.recordDeposit(100)
			expect(transactionHistory.calculateBalance()).toEqual(160)
		});
	});

	describe('#getCurrentDate', function() {
		it('returns current date in proper styling', function() {
			var date = new Date();
			var currentDate = date.toLocaleDateString();
			expect(transactionHistory.getCurrentDate()).toEqual(currentDate)
		});
	});
});
