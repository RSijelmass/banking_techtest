'use strict';

describe('Account', function() {
	var account;
	beforeEach(function() {
		account = new Account();
	});

	describe('initialize', function() {
		it('has a starting balance of 0', function() {
			expect(account.startBalance).toEqual(0);
		});	
	});
});
