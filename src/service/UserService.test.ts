import { User } from '../domain/User';
import { MockUserRepository } from '../infrastructure/builder/MockUserRepository';
import { GetUserQuery } from './query/GetUserQuery';
import { UserRepository } from '../repository/UserRepository';
import { UserQuery } from './query/UserQuery';

describe('GetUserQuery', () => {
  let userRepository: UserRepository;
  let getUserQuery: UserQuery;

  beforeEach(() => {
    userRepository = new MockUserRepository();
    getUserQuery = new GetUserQuery(userRepository);
  });

  it('should fetch a user and return a User instance', async () => {
    const user = await getUserQuery.execute(1);

    expect(user).toBeInstanceOf(User);
    expect(user.id).toEqual(1);
    expect(user.name).toEqual('John Doe');
    expect(user.email).toEqual('john.doe@example.com');
  });
});
