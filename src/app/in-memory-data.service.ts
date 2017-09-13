import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{

    createDb(){
        const heroes = [
            {id: 0, name: 'Ram'},
            {id: 11, name: 'krishan'},
            {id: 12, name: 'Shayam'},{id: 20, name: 'Gopal'},
            {id: 52, name: 'Arjun'},{id: 30, name: 'Lakshman'},
            {id: 17, name: 'Rama'},
            {id: 13, name: 'Sita'},
            {id: 1352, name: 'Radha'},{id: 110, name: 'Kanha'},{id: 111, name: 'Ravan'}
        ];
        return {heroes};
    }
}