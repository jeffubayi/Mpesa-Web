import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company:faker.phone.phoneNumberFormat(),
  date: faker.date.past(),
  status: sample(['sent', 'declined']),
  role: faker.commerce.price(),
}));

export default users;
