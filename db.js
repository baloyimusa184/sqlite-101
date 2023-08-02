import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const db = await sqlite.open({
    filename:  './101.db',
    driver:  sqlite3.Database
});

await db.migrate()

// call the query using an await
// create a function that returns all the greetings from the db
export async function getGreetings() {
    const result = await db.all(`select * from greetings`);
    return result;
}

// create a function that delete a specific greeting

// create a function that adds a new greeting
export async function addGreeting(language, greeting) {

    const sql = `insert into greetings (language, greeting) values (?, ?)`
    await db.run(sql, [language, greeting]);
}

export async function deleteGreetingByLanguage(language) {

}

export async function deleteGreeting(id) {
    // 
    const sql = `delete from greetings where id = ?`;
    await db.run(sql, [id]);
}

export async function updateGreeting(language, greeting, id) {
    const sql = `update greetings set language = ?, greeting = ? where id = ?`;
    await db.run(sql, [language, greeting, id])
}


// const result1 = await getGreetings()
// console.log(result1);
// console.log('====================');

// await updateGreeting('Sepedi', 'Thobela', 5)

// console.log('====================')

// const result2 = await getGreetings()
// console.log(result2);


// create a function that updates a given greeting

// .then(result => console.log(result));

// console.log()

// call the query using a promse
// db
//     .all(`select * from greetings`)
//     .then(result => {
//         console.log(result)
//     })

// const countResult = await db.get(`select count(*) as count from greetings`);

// console.log(countResult.count);

// console.log(result);



// console.log('end')