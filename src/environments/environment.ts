// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAF7szpD8U8P1UpFey9iUSAhnb3l9u-g4E',
    authDomain: 'book-store-fa5d0.firebaseapp.com',
    databaseURL: 'https://book-store-fa5d0.firebaseio.com',
    projectId: 'book-store-fa5d0',
    storageBucket: 'book-store-fa5d0.appspot.com',
    messagingSenderId: '600221167039'
  }
};
