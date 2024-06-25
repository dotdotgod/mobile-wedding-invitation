import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: 'AIzaSyAJu9zYERO5IIWZ8nzLCyUJSFFS56yeCh4',
  authDomain: 'alpc-wedding-invitation.firebaseapp.com',
  projectId: 'alpc-wedding-invitation',
  storageBucket: 'alpc-wedding-invitation.appspot.com',
  messagingSenderId: '551352453879',
  appId: '1:551352453879:web:5449a804fad9776851e1f2',
  measurementId: 'G-V2873NSNZL',
  databaseURL: 'https://alpc-wedding-invitation-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
