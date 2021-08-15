// ----------------------------------------------------------------------
import faker from 'faker';

const account = {
  displayName: faker.name.findName(),
  email: `${faker.name.findName}@gmail.com`,
  role:faker.phone.phoneNumberFormat(),
  photoURL: faker.image.imageUrl()
};

export default account;
