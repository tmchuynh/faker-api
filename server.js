import express from "express";
import faker from "faker";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];
const companies = [];

const createRandomUser = () => {
    const newUser = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.past(),
        registeredAt: faker.date.past(),
    };
    return newUser;
};

const createRandomComapny = () => {
    const newCompany = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
    };
    return newCompany;
};

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get('/api/users', (req, res) => {
    res.send(users);
});


app.get("/api/users/new", (req, res) => {
    const newFakeUser = createRandomUser();
    users.push(newFakeUser);
    req.body = users;
    res.json(newFakeUser);
});

app.get('/api/companies', (req, res) => {
    res.send(companies);
})

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createRandomComapny();
    companies.push(newFakeCompany);
    req.body = companies;
    res.json(newFakeCompany);
})

app.listen(port, () => console.log(`Listening on port: ${port}`));
