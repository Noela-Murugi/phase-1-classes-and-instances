class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }

    area() {
      return this.sideLength * this.sideLength;
    }
  }

  const square = new Square(5);
  square; // => Square { sideLength: 5 }
  square.sideLength; // => 5
  square.area();


//private classes
  class Transaction {
    // declare private fields
    #amount;
    #date;
    #memo;
    constructor(amount, date, memo) {
      // assign values to private fields
      this.#amount = amount;
      this.#date = date;
      this.#memo = memo;
    }
  }

const transaction = new Transaction(100.24, "03/04/2018", "Grocery Shopping");
transaction.amount;
// => undefined
//transaction.#amount;
