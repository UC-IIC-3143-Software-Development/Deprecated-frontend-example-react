import { MockUserRepository } from '../../infrastructure/builder/MockUserRepository';
import { GetUserQuery } from './GetUserQuery';

describe('GetUserQuery', () => {
  it('should fetch and convert user data', async () => {
    const userRepository = new MockUserRepository();
    const getUserQuery = new GetUserQuery(userRepository);

    const user = await getUserQuery.execute(1);

    expect(user.id).toEqual(1);
    expect(user.name).toEqual('John Doe');
    expect(user.email).toEqual('john.doe@example.com');
  });
});
