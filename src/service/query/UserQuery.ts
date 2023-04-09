import { User } from '../../domain/User';

export interface UserQuery {
  execute(id: number): Promise<User>;
}
