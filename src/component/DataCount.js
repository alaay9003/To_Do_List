import React from "react";
import { Col, Row } from "react-bootstrap";

export const DataCount = ({ person }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8"> مواعيد {person.length} لديك</Col>
    </Row>
  );
};
