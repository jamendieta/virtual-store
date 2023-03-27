
import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import Sidebar from "../components/common/sidebar";

export default function Main() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div style={{ padding: '5%' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}