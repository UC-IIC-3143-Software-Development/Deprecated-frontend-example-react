import {ApiUserRepository} from './ApiUserRepository';
import nock from 'nock';

describe('ApiUserRepository', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should fetch a user from the API', async () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com';
        const apiUserRepository = new ApiUserRepository(apiUrl);

        const mockResponse = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
        };

        nock(apiUrl)
            .get('/users/1')
            .reply(200, mockResponse, {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json'
            });

        const user = await apiUserRepository.getUser(1);

        expect(user).toEqual(mockResponse);
    });
});