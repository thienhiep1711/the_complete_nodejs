var square = (x) => {
  var result = x * x;
  return result;
};

console.log(square(5 ));


var user = {
  name: 'Mike',
  sayHi: () => {
    console.log(arguments)
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
}

user.sayHi(4,5,6);
user.sayHiAlt(1,2,3);