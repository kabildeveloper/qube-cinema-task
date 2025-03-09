import './App.css'
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import ViewCollectionDetails from "./pages/ViewCollectionDetails.tsx";

function App() {

  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/collection-details/:id" element={<ViewCollectionDetails/>} />
        </Routes>
    </Layout>
  )
}

export default App
