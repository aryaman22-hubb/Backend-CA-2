const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const users = [
    { username: "Hritik", age: 20, email: "Hritki@gmail.com" },
    { username: "Sunil", age: 50, email: "Sunil@gmail.com" },
    { username: "Ravi", age: 57, email: "Ravi@gmail.com" }
];

app.route('/put')
    .put((req, res) => res.json({ Message: "User Found", Data: users }))
    .delete((req, res) => {
        const { username, age, email } = req.body;
        if (username || age || !email || isNaN(age)) 
            return res.status(400).json({ Message: "Email not found" });

        const newUser = { username, age: Number(age), email };
        users.push(newUser);
        res.json({ Message: "User Added", User: newUser });
    });

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
