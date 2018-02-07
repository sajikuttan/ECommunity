import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
export const getProjectDetails = functions.https.onRequest((request, response) => {
    console.log(request);
});