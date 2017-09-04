// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyCZhKqsks7qs5DHKDz2zNEjA3DFqYDrNC4",
    authDomain: "fir-tester-7b83b.firebaseapp.com",
    databaseURL: "https://fir-tester-7b83b.firebaseio.com",
    projectId: "fir-tester-7b83b",
    storageBucket: "fir-tester-7b83b.appspot.com",
    messagingSenderId: "176394777246"
  }
};
