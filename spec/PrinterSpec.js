describe('Printer', function() {
	var printer;
	beforeEach(function(){
		printer = new Printer();
	});

	describe('headline', function() {
		it('prints the headline', function() {
			expect(printer.printHeadline()).toEqual('date || credit || debit || balance')
		});
	});

	describe('#printDeposit', function() {
		it('prints a line from one deposit', function() {
			expect(printer.printDeposit('01/01/2001', 50, 250)).toEqual('01/01/2001 || 50.00 || || 250.00')
		});
	});
	
	describe('#printWithdrawal', function() {
		it('prints a line from one withdrawal', function() {
			expect(printer.printWithdrawal('01/01/2001', 50, 250)).toEqual('01/01/2001 || || 50.00 || 250.00')
		});
	});

	describe('#printStatement', function() {
		it('only prints the headline if no transactions are made', function() {
			printer.printStatement()
			expect(printer.statement).toEqual(['date || credit || debit || balance'])
		});
	});
});
