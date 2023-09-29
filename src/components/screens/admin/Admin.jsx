import React from 'react'
import Form from './form/Form'
import Layout from '../../layout/Layout'
import Table from './Table'

const Admin = () => {
	return (
		<Layout>
			<div
				className='flex mt-10 justify-between'
				style={{
					minHeight: '850px',
				}}
			>
				<Table />
				<Form />
			</div>
		</Layout>
	)
}

export default Admin
