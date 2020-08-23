import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user/user-model';
import { UserRole } from '../models/user/user-role';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  fakeUsers: User[] = [
    new User({
      username: 'Reggie',
      firstName: 'Giles',
      lastName: 'Langham',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Janaye',
      firstName: 'Vlad',
      lastName: 'Le Monnier',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Doralyn',
      firstName: 'Kristal',
      lastName: 'Samsworth',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Hercule',
      firstName: 'Levey',
      lastName: 'Teml',
      role: UserRole.ADMIN,
      enabled: true
    }),
    new User({
      username: 'Alicea',
      firstName: 'Amity',
      lastName: 'Furzey',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Bethina',
      firstName: 'Steffane',
      lastName: 'Gemlett',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Odo',
      firstName: 'Wilmer',
      lastName: 'Jandak',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Erminia',
      firstName: 'Daphene',
      lastName: 'Thorn',
      role: UserRole.ADMIN,
      enabled: true
    }),
    new User({
      username: 'Kerri',
      firstName: 'Melinda',
      lastName: 'Hackley',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Jackquelin',
      firstName: 'Tait',
      lastName: 'Frangello',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Dirk',
      firstName: 'Maure',
      lastName: 'Guinn',
      role: UserRole.ADMIN,
      enabled: true
    }),
    new User({
      username: 'Danie',
      firstName: 'Sada',
      lastName: 'de Tocqueville',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Hester',
      firstName: 'Roxine',
      lastName: 'Kisting',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Torin',
      firstName: 'Ingeberg',
      lastName: 'Balcombe',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Nanon',
      firstName: 'Bethanne',
      lastName: 'Cornels',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Kerstin',
      firstName: 'Blinni',
      lastName: 'Flaune',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Caralie',
      firstName: 'Jenda',
      lastName: 'Gillani',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Arnoldo',
      firstName: 'Nola',
      lastName: 'Filoniere',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Rockie',
      firstName: 'Ingamar',
      lastName: 'Pamment',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Dora',
      firstName: 'Carlene',
      lastName: 'Barrable',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Della',
      firstName: 'Kean',
      lastName: 'Marchenko',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Symon',
      firstName: 'Sonnnie',
      lastName: 'Luckcuck',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Davon',
      firstName: 'Cordy',
      lastName: 'Gecks',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Cissy',
      firstName: 'Lynn',
      lastName: 'Saffe',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Cherie',
      firstName: 'Helga',
      lastName: 'Stanbrooke',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Wilone',
      firstName: 'Olive',
      lastName: 'McQuilliam',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Karlens',
      firstName: 'Keir',
      lastName: 'O\'Donohue',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Anna',
      firstName: 'Garvy',
      lastName: 'Bulward',
      role: UserRole.ADMIN,
      enabled: true
    }),
    new User({
      username: 'Dwayne',
      firstName: 'Lorry',
      lastName: 'Guisby',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Alessandra',
      firstName: 'Pavel',
      lastName: 'Salsberg',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Gaile',
      firstName: 'Kata',
      lastName: 'Gerren',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Kaitlyn',
      firstName: 'Octavia',
      lastName: 'Lawlan',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Daisey',
      firstName: 'Eve',
      lastName: 'Lethcoe',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Antoni',
      firstName: 'Saraann',
      lastName: 'Augustin',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Lorenza',
      firstName: 'Aili',
      lastName: 'Agirre',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Tamqrah',
      firstName: 'Erskine',
      lastName: 'Cockren',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Erskine',
      firstName: 'Rickard',
      lastName: 'Ubank',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Vania',
      firstName: 'Janeczka',
      lastName: 'Mendonca',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Elset',
      firstName: 'Bealle',
      lastName: 'Braganza',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Felipe',
      firstName: 'Fay',
      lastName: 'Boarleyson',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Jerry',
      firstName: 'Doyle',
      lastName: 'Lissaman',
      role: UserRole.ADMIN,
      enabled: true
    }),
    new User({
      username: 'Dareen',
      firstName: 'Alanah',
      lastName: 'Rushford',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Lynnett',
      firstName: 'Rickie',
      lastName: 'Ell',
      role: UserRole.ADMIN,
      enabled: true
    }),
    new User({
      username: 'Austina',
      firstName: 'Benson',
      lastName: 'Sawell',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Marika',
      firstName: 'Sophronia',
      lastName: 'Leavey',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Rudie',
      firstName: 'Cosimo',
      lastName: 'Quail',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Correna',
      firstName: 'Arleen',
      lastName: 'Dymocke',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Anna-diana',
      firstName: 'Marven',
      lastName: 'Morston',
      role: UserRole.ADMIN,
      enabled: true
    }),
    new User({
      username: 'Magdalene',
      firstName: 'Audy',
      lastName: 'Buckley',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Harmon',
      firstName: 'Susanetta',
      lastName: 'Blackmore',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Morganne',
      firstName: 'Morie',
      lastName: 'Rubinovici',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Kirstin',
      firstName: 'Adan',
      lastName: 'Cutteridge',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Joyce',
      firstName: 'Charlot',
      lastName: 'Anstie',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Shandie',
      firstName: 'Iolande',
      lastName: 'Gerty',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Nikolai',
      firstName: 'Raff',
      lastName: 'Ronaghan',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Junie',
      firstName: 'Elizabeth',
      lastName: 'Ferrierio',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Barbara',
      firstName: 'Dalton',
      lastName: 'Ulyat',
      role: UserRole.USER,
      enabled: true
    }),
    new User({
      username: 'Ophelia',
      firstName: 'Drugi',
      lastName: 'Robbings',
      role: UserRole.ADMIN,
      enabled: false
    }),
    new User({
      username: 'Johanna',
      firstName: 'Isabel',
      lastName: 'Plowes',
      role: UserRole.USER,
      enabled: false
    }),
    new User({
      username: 'Melanie',
      firstName: 'Winnie',
      lastName: 'Fine',
      role: UserRole.ADMIN,
      enabled: true
    })
  ];

  fakeUsersSubject = new BehaviorSubject<User[]>(this.fakeUsers);

  getUsers(): Observable<User[]> {
    return this.fakeUsersSubject.asObservable();
  }

  addUser(newUser: User) {
    const users = [...this.fakeUsers];
    users.unshift(newUser);
    this.fakeUsers = users;
    this.updateData();
  }

  updateUser(updatedUser: UserInterface, user: User) {
    user.update(updatedUser);
    this.updateData();
  }

  deleteUser(userToDelete: User) {
    this.fakeUsers = _.filter(this.fakeUsers, user => user !== userToDelete);
    this.updateData();
  }

  filterUserData(value) {
    const filteredData: User[] = [];
    _.forEach(this.fakeUsers, element => {
      Object.keys(element).forEach(key => {
        if (_.includes(element[key].toString().toLowerCase(), value.toLowerCase())) {
          return !_.includes(filteredData, element) && filteredData.push(element);
        }
      });
    });
    this.updateFilteredData(filteredData);
  }

  private updateFilteredData(filteredData: User[]) {
    this.fakeUsersSubject.next(filteredData);
  }

  private updateData() {
    this.fakeUsersSubject.next(this.fakeUsers);
  }

}
