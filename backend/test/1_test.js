const query = require('../src/server/db/queries/index');

async function test() {
    await query.findUser('lisa@mail.ru','12345678').then( (res) => {
        console.log(res);
        return;
    });
}

test();