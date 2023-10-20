export default {
  'rs-button':
    'rounded-1 rs:text|--rs-gray-7 b-1 b-solid rs:border|--rs-gray-5 rs:bg|inherit cursor-pointer transition',

  // size
  //   'rs-button--small': '',
  'rs-button-default': 'py-2 px-4',
  //   'rs-button--large': '',

  //   'rs-button--block': '',

  'rs-button_hover': 'hover:op-70',
  // type
  'rs-button-primary': 'rs:bg|--rs-primary rs:text|white rs:border|--rs-primary',
  'rs-button-primary-active': 'active:rs:bg|--rs-blue-8',
  'rs-button-warning': 'rs:bg|--rs-yellow-5 rs:text|white rs:border|--rs-yellow-5',
  'rs-button-warning-active': 'active:rs:bg|--rs-yellow-8',
  'rs-button-danger': 'rs:bg|--rs-red-5 rs:text|white rs:border|--rs-red-5',
  'rs-button-danger-active': 'active:rs:bg|--rs-red-8'
} as Record<string, string>
