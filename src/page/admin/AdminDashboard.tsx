import TableDataUser from "../../components/info/TableDataUser";
import FormLogin from "../../components/form/login";
import InfoCard from "../../components/info/InfoCard";
import { useState } from "react";

const AdminDashboard: React.FC = () => {
    return (
        <div className='bg-slate-100 py-10'>
            <h1>DASHBOARD ADMIN</h1>
            <div className="mt-3">
                <TableDataUser/>
            </div>
        </div>
    )
}

export default AdminDashboard;