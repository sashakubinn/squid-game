import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Admin from './components/screens/admin/Admin'
import { ModalProvider } from './components/ModalProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ModalProvider>
			<Router>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
			</Router>
		</ModalProvider>
	</React.StrictMode>
)
