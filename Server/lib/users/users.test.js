const sinon = require('sinon');
const users_test_controller = require('./users_test_controller');
const testDb = require('../../../test/init');

//Daniels test
describe('Unit Test', () => {
    describe('Get', () => {
        it('Should get a user', () => {
            const fakeDb = {
                query: sinon.mock().withArgs(
                    sinon.match.string
                )
            }
            return users_test_controller.getUser(fakeDb);
        })
    }),
    describe('create user', () => {
        it('Should create a user', () => {
            const user = {
                auth0_id: '1',
                name: 'poopiebuttholefaceman',
                first_name:'Face',
                last_name:'Man',
                picture: 'some pic',
                gender: 'poop',
                email: 'somemail@email.com',
                birthdate: 'oct 26 1997',
                screen_name: 'manpoop'
            }
            const db = {
                query: sinon.mock().withArgs(
                    sinon.match.string,
                    sinon.match({
                        auth0_id: user.auth0_id,
                        name: user.name,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        picture: user.oicture,
                        emialL: user.email,
                        birthdate: user.birthdate,
                        screen_name: user.screen_name
                    })
                )
        }
        return users_test_controller.createUser(db, user);
    })
})
})

describe('Integration Test', () => {
    let db;

    function clearDataBase(){
        return db.query('DELETE FROM users')
    }

    beforeAll(() => {
        return testDb.initDb().then(database => {
            db = database;
        })
    })

    //  beforeEach(() => {
    //     return clearDataBase();
    // })

    describe('create user', () => {
        it('Should create a user', () => {
            const user = {
                auth0_id: '1',
                name: 'tpforbungh',
                first_name:'butt',
                last_name:'munch',
                picture: 'some pic',
                gender: 'ballsack',
                email: 'shitballs@email',
                birthdate: 'oct 26 1997',
                screen_name: 'shitdick'
            }

            return users_test_controller.createUser(db, user).then(addedUser => {
                expect(addedUser.length).not.toEqual(0);

                expect(addedUser[0]).toMatchObject({
                    id: expect.any(Number),
                    auth0_id: user.auth0_id,
                    name: user.name,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    picture: user.picture,
                    email: user.email,
                    birthdate: user.birthdate,
                    screen_name: user.screen_name
                })
            })
   
        })
    })
})