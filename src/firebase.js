import { getFirestore } from 'firebase/firestore/lite'
import { initializeApp } from 'firebase/app'

const fireBaseConfig = {
	apiKey: 'AIzaSyAjIsWhCS9AioliMZb8uabDX1cutAPcYqM',

	authDomain: 'squid-game-ec7c9.firebaseapp.com',

	projectId: 'squid-game-ec7c9',

	storageBucket: 'squid-game-ec7c9.appspot.com',

	messagingSenderId: '1012931439623',

	appId: '1:1012931439623:web:eb006e4a7ac2cc422d8ea2',

	measurementId: 'G-DZ314FW3WZ',
}

initializeApp(fireBaseConfig)

export const db = getFirestore()
