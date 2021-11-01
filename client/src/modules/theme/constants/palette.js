const BASE_COLOR = {
  GREEN: '#00bc77',
  WHITE: '#ffffff',
  BLACK: '#000000',
  COAL: '#12002b',
  GREY: '#2c3e50',
  SMOKE: '#cccccc',
  BROWN: '#222222',
};

const PALETTE = {
  background: {
    default: BASE_COLOR.WHITE,
    primary: BASE_COLOR.GREEN,
    alternative: BASE_COLOR.COAL,
  },
  border: {
    default: BASE_COLOR.BLACK,
    primary: BASE_COLOR.GREEN,
    alternative: BASE_COLOR.SMOKE,
  },
  text: {
    default: BASE_COLOR.GREY,
    alternative: BASE_COLOR.BROWN,
    contrasted: BASE_COLOR.WHITE,
  },
};

export default PALETTE;
