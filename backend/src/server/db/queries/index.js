const knex = require('../connection');

function getUsers() {
    return knex('user_list')
        .select('*');
}
function findUser(email, password) {
    return knex('user_list')
        .select('*')
        .where({
            email: email,
            password: password});
}
async function addUsers(name, email, password) {
    await knex('user_list')
        .insert({
            name: name,
            password: password,
            email: email
        });
}
module.exports = {
    getUsers,
    findUser,
    addUsers
};