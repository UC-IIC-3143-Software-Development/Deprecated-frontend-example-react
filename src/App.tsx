import { useState, useEffect } from 'react';
import { UserService } from './service/UserService';
import { ApiUserRepository } from './infrastructure/ApiUserRepository';
import { User } from './domain/User';
import { UserRepositoryAdapter } from './adapter/UserRepositoryAdapter';

const apiUrl = 'https://jsonplaceholder.typicode.com';
const apiUserRepository = new ApiUserRepository(apiUrl);
const userRepositoryAdapter = new UserRepositoryAdapter(apiUserRepository);
const userService = new UserService(userRepositoryAdapter);

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await userService.getUser(1);
      setUser(fetchedUser);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
