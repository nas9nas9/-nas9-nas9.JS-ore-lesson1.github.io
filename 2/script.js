let MyMath = {
    a: 5,
    b: 2,
    sum: function() {
        sum = this.a + this.b;
        console.log(sum);

    },
    multiplication: function () {
        multiplication = this.a * this.b;
        console.log(multiplication);
    },
    division: function() {
        division = this.a / this.b;
        console.log(division);
    },
    subtraction: function() {
        subtraction = this.a - this.b;
        console.log(subtraction);
    }
}

console.log(MyMath);
MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();