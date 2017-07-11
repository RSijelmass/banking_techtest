Bank Tech Test
==============

A trial tech test [...].

### Objects
##### Account
- has an initial balance (standard set to 0)
- can deposit money
- can withdraw money

##### TransactionHistory
- records when a deposit has been made with a date
	- stores it in an array
	- calls printer
- records when a withdrawal has been made with a date
	- stores it in an array
	- calls printer


##### Printer
- Prints out the headline
- Creates a line to view a deposit, stores it in an array
- Creates a line to view a withdrawal, stores it in an array
- Prints out the array (headline first) with all deposits/withdrawals in chronological
  order

### How to run the program
- Clone this repo
- `cd bank_techtest`

If one would wish to longer output the results on the console but rather to an
other form of output, go to #printStatement in the Printer object. Here, one can
change to print each line; e.g. by changing `console.log(line)` to `return line` and
directing the results to another output.

### How to run the tests
In the command line, run `open SpecRunner.html`
This opens up a window in your preferred web browser. Here, one can see all the tests.
To play around with the code, one can open the console (on a Mac, this is cmd + option
+ J).
Here, one can: 
- create a new account: `account = new Account`
- deposit money: `account.deposit([value])`
- withdraw money `account.withdraw([value])`
- see a statement of past transactions: `account.printStatement()`

### Things I struggled with
- The project has initially been written with a variable named ‘balance’, to keep track
of all deposits and withdrawals. However, I felt like the code would be cleaner when
having less states and more behaviour. This is why the instance variable balance is
converted into a method within the TransactionHistory.
- However, Jasmine offers limited solutions to test for behaviour; whereas rspec gives
  creative tests like expect { a thing }.to change { another thing }. by (a value), I
often found myself resorting to expect(*a variable*).toEqual(*a value*)


### Expected Output

Copied from the [tech test
specifications](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md):

Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of
2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints
her bank statement Then she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Next Steps
- test: amount has to be in numbers
- test: withdrawal can't go below 0
