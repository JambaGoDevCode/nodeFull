const nome = "Paulo oooo";

const person = {
  nome: "Jamba",
  age: 29,
  greeting() {
    console.log("Hi, i am " + this.nome);
  },
};
person.greeting();
