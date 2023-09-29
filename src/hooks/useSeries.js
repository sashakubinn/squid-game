import { useState, useEffect } from 'react'
import { collection, query, orderBy } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

export const useSeries = () => {
	const [series, setSeries] = useState([])

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, 'series'), orderBy('timestamp', 'desc')),
				snapshot => {
					setSeries(
						snapshot.docs.map(doc => ({
							_id: doc.id,
							...doc.data(),
						}))
					)
				}
			),
		[]
	)
	return [series, setSeries]
}
