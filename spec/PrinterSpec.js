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
});
