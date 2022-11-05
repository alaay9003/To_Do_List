import React from "react";
import { Col, Row } from "react-bootstrap";
export const DatesList = ({person}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle ">
          {person.length ? (
            person.map((item) => {
              return (
                <div className="d-flex border-bottom my-2 mx-2">
                  <img className="img-avatar" src={item.img} alt="sdsd" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6"> {item.date} </p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5">لا يوجد مواعيد</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};
