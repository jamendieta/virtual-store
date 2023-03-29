
import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";

export default function Main() {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '2%' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}