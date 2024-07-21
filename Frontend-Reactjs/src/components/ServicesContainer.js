import { useMemo } from "react";
import "./ServicesContainer.css";

const ServicesContainer = ({
  image15,
  order,
  filterDropdown,
  propBackgroundColor,
  propMinWidth,
  propBackgroundColor1,
  propWidth,
  propPadding,
  propMinWidth1,
  propGap,
}) => {
  const imageStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      minWidth: propMinWidth,
    };
  }, [propBackgroundColor, propMinWidth]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const image15IconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const orderStyle = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth1,
    };
  }, [propPadding, propMinWidth1]);

  const completedOrdersTextStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="services-container">
      <div className="services-container-child" />
      <div className="image" style={imageStyle}>
        <div className="image-child" style={rectangleDivStyle} />
        <img
          className="image-15-icon"
          loading="lazy"
          alt=""
          src={image15}
          style={image15IconStyle}
        />
      </div>
      <div className="order" style={orderStyle}>
        <div className="completed-orders-text" style={completedOrdersTextStyle}>
          <h3 className="order1">{order}</h3>
          <div className="filter-button">
            <div className="filter-dropdown">{filterDropdown}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
