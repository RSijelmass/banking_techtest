describe('Printer', function() {
	var printer;
	beforeEach(function(){
		printer = new Printer();
	});

	describe('headline', function() {
		it('prints the headline', function() {
			expect(printer.print_headline()).toEqual('date || credit || debit || balance')
		});
	});

	describe('transaction', function() {
		it('prints a line from one deposit', function() {
			expect(printer.print_deposit('01/01/2001', 50, 250)).toEqual('01/01/2001 || 50.00 || || 250.00')
		});
	});
});
