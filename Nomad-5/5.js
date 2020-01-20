/*function sayHello(name, age)
{
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("name", 21);*/

/*function sayHello(name, age)
{
    return `Hello ${name} you are ${age} years old`;
}

const greet = sayHello("name", 21);

console.log(greet);*/

const calculator = 
{
    plus: function(a, b)
    {
        return a + b;
    },

    minus: function(a, b)
    {
        return a - b;
    },

    mul: function(a, b)
    {
        return a * b;
    },

    div: function(a, b)
    {
        return a / b;
    },

    pow: function(a, b)
    {
        return a ** b;
    }
}

const plus = calculator.plus(3, 5);
const minus = calculator.minus(3, 5);
const mul = calculator.mul(3, 5);
const div = calculator.div(3, 5);
const pow = calculator.pow(3, 5);

console.log(plus);
console.log(minus);
console.log(mul);
console.log(div);
console.log(pow);