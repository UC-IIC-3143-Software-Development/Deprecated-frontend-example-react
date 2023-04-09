import { UserRepository } from '../../repository/UserRepository';
import { UserAdapter } from '../../adapter/UserAdapter';
import { User } from '../../domain/User';

export class GetUserQuery {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number): Promise<User> {
    const userDto = await this.userRepository.getUser(id);
    return UserAdapter.toDomain(userDto);
  }
}
