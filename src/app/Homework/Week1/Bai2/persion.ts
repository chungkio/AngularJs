interface Person {
    name: string;
    age: number;
    email: string;
}

const infoPerson = (person: Person): void => {
    const { name, age, email } = person;
    console.log(`Name: ${name}\nAge: ${age}\nEmail: ${email}`);
};

const persion1: Person = { name: "Hong Chung", age: 28, email: "chungkio818@gmail.com" };
infoPerson(persion1);
