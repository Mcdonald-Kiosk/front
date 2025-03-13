import { Global } from "@emotion/react"
import { global } from "./styles/global"
import { Route, Routes } from "react-router-dom"
import AdminRoute from "./routes/AdminRoute/AdminRoute"
// import MainRoute from "./routes/MainRoute/MainRoute"




function App() {
	
	
	return (
    	<>
			<Global styles={global} />
			<Routes>
				<Route path="/*" element={<AdminRoute />} />
				{/* <Route path="/auth/*" element={<MainRoute />} /> */}
			</Routes>
    	</>
  	)
}

export default App
