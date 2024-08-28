import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/register" element={<About />} />
                    <Route path="/register" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
