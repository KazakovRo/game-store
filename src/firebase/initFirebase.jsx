import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAZ1w6YfiwclST3dTIZBNU5VAo-qYXBgGo',
  authDomain: 'game-store-f1171.firebaseapp.com',
  databaseURL: 'https://game-store-f1171-default-rtdb.firebaseio.com',
  projectId: 'game-store-f1171',
  storageBucket: 'game-store-f1171.appspot.com',
  messagingSenderId: '344837054642',
  appId: '1:344837054642:web:d41be10be40bec3eb829ab'
})

const database = getDatabase(firebaseApp)

export { database }
