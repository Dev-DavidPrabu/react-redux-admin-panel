import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

const CardComp = (props) => {
  const { title, price, percent, bgColor } = props;
  return (
    <>
      <Col md={4}>
        <Card bg={bgColor} className="shadow border-0">
          <Card.Body>
            <h4 className="mb-3 text-light">
              {title}{" "}
              <i className="mdi mdi-chart-line mdi-24px float-right"></i>
            </h4>
            <h2 className="mb-5">{price}</h2>
            <h6 className="card-text">{percent}</h6>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardComp;
