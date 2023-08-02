import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import  express  from 'express';

const app = express();
const PORT = process.env.PORT || 3008;

// get all the greetings

app.get('/api/greetings', async(_req, res) =>{
    const greetings = await getGreetings();
    console.log(greetings);
    res.json({
        greetings //: []
    })
});

// create a route to add a greeting
//?
app.listen(PORT, () => console.log(`started on port : ${PORT}`))

// end here

console.log('start')

const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});
await db.migrate()
//call the query using await
//create a function that returns all the greetings from the db
async function getGreetings() {
    const result = await db.all(`select * from greetings`);
    return result;
}
const result = await getGreetings()
console.log(result)



// create a function that adds a new greeting
async function addGreeting(language, greeting) {
    // sql statement type - insert

    const sql = `insert into greetings (language, greeting) values (?, ?)`
    await db.run(sql, [language, greeting]);

    async function deleteGreetingByLanguage(language) { }
}
async function deleteGreeting(id) {
    const sql = `delete from greetings where id = ?`;
    await db.run(sql, [id]);
}

async function updateGreeting(language, greeting, id) {
    const sql = `update greetings set language = ?, greeting = ? where id = ?`;
    await db.run(sql, [language, greeting, id])
}
const result1 = await getGreetings()

console.log(result1);

console.log('====================');

await updateGreeting('Sepedi', 'Thobela', 5)

console.log('====================');

// await deleteGreeting(6);
// await deleteGreeting(8);

//await addGreeting('sepedi', 'Dumela');

// console.log('=====================')

const result2 = await getGreetings()
console.log(result2);

//call the query using promise
// db
//     .all(`select * from greetings`)
//     .then(result => {
//         console.log(result)
//     })
// const countResult = await db.get(`select count(*) as count from greetings`);
// console.log(countResult.count)

// console.log('end')