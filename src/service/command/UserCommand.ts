import { User } from '../../domain/User';

export interface UserCommand {
  execute(user: User): Promise<void>;
}
