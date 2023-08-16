'use strict';

const user = {
  firstName: 'Brad',
  lastName: 'Pitt',
  age: 50,
  isMale: true,
  pett: undefined,
  children: ['Anna', undefined, 'Tom'],
  address: {
    town: 'NY',
    street: 12,
    home: undefined,
    qqqq:{
      prop:12
    }
  },
  ukrainen: null,
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  [Symbol('my symbol')]: 123,
};
//serialize
const userSerialize = JSON.stringify(user);
const userDeSerialize = JSON.parse(userSerialize);

