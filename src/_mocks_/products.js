import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgProduct } from '../utils/mockImages';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'SEND MONEY',
  'REQUEST MONEY',
  'GLOBAL',
  'ANOTHER NETWORK',
  'PAY BILL',
  'BUY GOODS',
  'POCHI LA BIASHARA',
  'AT AGENT ',
  'AT ATM',
  'FOR MY NUMBER',
  'FOR ANOTHER NUMBER',
  'CREDIT',
];

const PRODUCT_COVER = [
  'https://hapakenya.com/wp-content/uploads/2015/11/mpesa.jpg',
  'REQUEST MONEY',
  'GLOBAL',
  'ANOTHER NETWORK',
  'PAY BILL',
  'BUY GOODS',
  'POCHI LA BIASHARA',
  'AT AGENT ',
  'AT ATM',
  'FOR MY NUMBER',
  'FOR ANOTHER NUMBER',
  'CREDIT',
];
const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: PRODUCT_COVER[index],
    name: PRODUCT_NAME[index],
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['SEND AND REQUEST', 'PAY', 'WIDTHRAW', 'BUY AIRTIME','CREDIT'])
  };
});

export default products;
