import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { aboutUs } from "../../assets/data/content";
const FAQPage = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);
  return (
    <div
      className="continer-fluid text-center mt-5"
      style={{ minHeight: "calc(100vh - 215px)" }}
    >
      {loader ? (
        <Spinner
          className="position-absolute"
          style={{
            color: "#76c047",
            width: "3rem",
            height: "3rem",
            top: "44%",
          }}
        />
      ) : (
        <div className="container">
          <h3>FAQ</h3>
          <div
            className="text-left"
            dangerouslySetInnerHTML={{ __html: aboutUs }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FAQPage;
