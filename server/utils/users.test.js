const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users = [];

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node js'
        }, {
            id: '2',
            name: 'Jane',
            room: 'React js'
        }, {
            id: '3',
            name: 'Rick',
            room: 'Node js'
        }]
    });
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Kostya',
            room: 'Node JS'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '55';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '1';
        var user = users.getUser(userId);
        expect(user.id).toEqual(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });

    it('should return names for node js', () => {
        var userList = users.getUserList('Node js');

        expect(userList).toEqual(['Mike', 'Rick']);
    });

    it('should return names for react js', () => {
        var userList = users.getUserList('React js');

        expect(userList).toEqual(['Jane']);
    })
})
