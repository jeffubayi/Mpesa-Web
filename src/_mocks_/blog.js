import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'BOOK A BUS',
  'BOOK A BUS',
  'BUY GIFT VOUCHERS',
  'CPF',
  'DSTV',
  'E-BIMA',
  'MADARAKA EX-PRESS',
  'MDAKTARI',
  'MINET',
  'MTICKETS',
  'PRO GAS',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
