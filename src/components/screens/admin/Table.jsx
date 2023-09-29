import React, { useState } from 'react'

const Table = () => {
	const [series, setSeries] = useState([])

	return (
		<div
			className='py-10 px-20'
			style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '48%' }}
		>
			<table
				className='table-fixed text-white w-full'
				style={{ borderCollapse: 'separate', borderSpacing: '0 1rem' }}
			>
				<thead>
					<tr>
						<th className='p-2 text-left w-1/4 font-bold'>Img</th>
						<th className='p-2 text-left w-1/4 font-bold'>Video url</th>
					</tr>
				</thead>
				<tbody>
					{series.map(item => (
						<tr
							key={item._id}
							style={{ backgroundColor: 'rgba(255,255,255, 0.3)' }}
						>
							<td>
								<img alt='' src={item.thumbnailPath} />
							</td>
							<td className='p-2'> {item.videoUrl} </td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table
