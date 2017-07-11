'use strict';

describe('Account', function() {
	var account;
	var testAccount;
	beforeEach(function() {
		account = new Account();
		testAccount = new Account();
	});

	describe('initialize', function() {
		it('has a starting balance of 0', function() {
			expect(account.startBalance).toEqual(0);
		});	
	});

	describe('#deposit', function() {
		it('returns message with amount deposited', function() {
			expect(account.deposit(20)).toEqual('You deposited £20.00');
		});
		it('calls transactionHistory to record deposit', function() {
			spyOn(testAccount.transactionHistory, 'recordDeposit')
			testAccount.deposit(20);
			expect(testAccount.transactionHistory.recordDeposit).toHaveBeenCalled()
		});
	});

	describe('#withdraw', function() {
		it('returns message with amount withdrawn', function() {
			expect(account.withdraw(20)).toEqual('You withdrew £20.00');
		});
		it('calls transactionHistory to record withdrawal', function() {
			spyOn(testAccount.transactionHistory, 'recordWithdrawal')
			testAccount.withdraw(20);
			expect(testAccount.transactionHistory.recordWithdrawal).toHaveBeenCalled()
		});});
});
