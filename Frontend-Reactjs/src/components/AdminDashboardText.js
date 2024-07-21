import ServicesContainer from "./ServicesContainer";
import "./AdminDashboardText.css";

const AdminDashboardText = () => {
  return (
    <section className="admin-dashboard-text">
      <header className="frame-header">
        <div className="frame-child3" />
        <div className="ellipse-div" />
        <div className="admin-container">
          <b className="admin2">Admin</b>
        </div>
      </header>
      <div className="admin-dashboard">
        <h2 className="admin-dashboard1">Admin Dashboard</h2>
      </div>
      <div className="admin-dashboard-text-inner">
        <div className="rectangle-parent1">
          <div className="frame-child4" />
          <div className="services-container-parent">
            <ServicesContainer
              image15="/image-15@2x.png"
              order="Order"
              filterDropdown="26"
            />
            <ServicesContainer
              image15="/image-18@2x.png"
              order="Technicians"
              filterDropdown="2"
              propBackgroundColor="#ff4f36"
              propMinWidth="125px"
              propBackgroundColor1="#ff4f36"
              propWidth="72.4px"
              propPadding="31px 0px 0px"
              propMinWidth1="120px"
              propGap="18px 0px"
            />
          </div>
          <div className="frame-group">
            <ServicesContainer
              image15="/image-20@2x.png"
              order="Completed orders"
              filterDropdown="50"
              propBackgroundColor="#00da30"
              propMinWidth="125px"
              propBackgroundColor1="#00da30"
              propWidth="64.8px"
              propPadding="31px 0px 0px"
              propMinWidth1="184px"
              propGap="12px 0px"
            />
            <ServicesContainer
              image15="/image-23@2x.png"
              order="Listed services"
              filterDropdown="5"
              propBackgroundColor="#2ba6ff"
              propMinWidth="125px"
              propBackgroundColor1="#2ba6ff"
              propWidth="70.9px"
              propPadding="36px 0px 0px"
              propMinWidth1="151px"
              propGap="13px 0px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardText;
