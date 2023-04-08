import { UserService } from './UserService';
import { UserRepository } from '../repository/UserRepository';
import { User } from '../domain/User';

class MockUserRepository implements UserRepository {
    async getUser(id: number): Promise<any> {
        return {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
        };
    }
}

describe('UserService', () => {
    it('should fetch a user and return a User instance', async () => {
        const userRepository = new MockUserRepository();
        const userService = new UserService(userRepository);
        const user = await userService.getUser(1);

        expect(user).toBeInstanceOf(User);
        expect(user.id).toEqual(1);
        expect(user.name).toEqual('John Doe');
        expect(user.email).toEqual('john.doe@example.com');
    });
});