import { TestBed } from '@angular/core/testing';

import { User } from '../models/user/user';
import { UserRole } from '../models/user/user-role';
import { UserService } from 'src/app/shared/services/user.service';

describe('Service:: UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(UserService);
    service.fakeUsers = [
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
      })];
  });


  it('should be created with correct fakeUserData', () => {
    expect(service).toBeTruthy();
    expect(service.fakeUsers.length).toEqual(4);
    expect(service.fakeUsers[0].username).toBe('Reggie');
  });

  it('should correctly add user to mocked data list', () => {
    const newUser = new User({
      username: 'test',
      firstName: 'test',
      lastName: 'test',
      role: UserRole.USER,
      enabled: false,
    });

    service.addUser(newUser);

    expect(service.fakeUsers.length).toEqual(5);
    expect(service.fakeUsers[0].username).toBe('test');
  });

  it('should correctly update user on mocked data list', () => {
    const upadtedUser = new User({
      username: 'test',
      firstName: 'test',
      lastName: 'test',
      role: UserRole.USER,
      enabled: false,
    });

    service.updateUser(upadtedUser, service.fakeUsers[0]);

    expect(service.fakeUsers.length).toEqual(4);
    expect(service.fakeUsers[0].username).toBe('test');
  });

  it('should correctly delete user from mocked data list', () => {

    service.deleteUser(service.fakeUsers[0]);

    expect(service.fakeUsers.length).toEqual(3);
    expect(service.fakeUsers[0].username).toBe('Janaye');
  });

  it('should correctly filter user from mocked data list for correct value', () => {

    const spy = spyOn<any>(service, 'updateFilteredData');
    const filteredData = [new User({
      username: 'Janaye',
      firstName: 'Vlad',
      lastName: 'Le Monnier',
      role: UserRole.ADMIN,
      enabled: false
    })];

    service.filterUserData('Janaye');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(filteredData);

  });

  it('should call update method with empty array after filter with incorrect value', () => {

    const spy = spyOn<any>(service, 'updateFilteredData');

    service.filterUserData('incorrect');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith([]);

  });
});
