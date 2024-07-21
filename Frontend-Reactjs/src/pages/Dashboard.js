import FrameComponent from "../components/FrameComponentd";
import AdminDashboardText from "../components/AdminDashboardText";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <FrameComponent />
      <AdminDashboardText />
    </div>
  );
};

export default Dashboard;
