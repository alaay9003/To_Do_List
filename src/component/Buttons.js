import React from "react";
import { Col, Row } from "react-bootstrap";
export const Buttons = ({deleteData,viewData}) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8 d-flex justify-content-between ">
        <button onClick={deleteData} className="btn-style p-2">مسح الكل</button>
        <button onClick={viewData} className="btn-style p-2">عرض المواعيد</button>
      </Col>
    </Row>
  );
};
