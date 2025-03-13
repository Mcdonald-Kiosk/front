import { Global } from "@emotion/react"
import { global } from "./styles/global"
import { Route, Routes } from "react-router-dom"
import UserRoute from "./routes/UserRoute/UserRoute"
// import MainRoute from "./routes/MainRoute/MainRoute"




function App() {
	
	
	return (
    	<>
			<Global styles={global} />
			<Routes>
				<Route path="/*" element={<UserRoute />} />
				{/* <Route path="/auth/*" element={<MainRoute />} /> */}
			</Routes>
    	</>
  	)
}

export default App
