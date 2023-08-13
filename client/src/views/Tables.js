/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { FillTable } from "components/TableFiller";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,

  Row,
  Col,
} from "reactstrap";

function TipoInsumoTable(){
  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Tabla de Tipo de Insumo</CardTitle>
              </CardHeader>
              <CardBody>
                <FillTable/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TipoInsumoTable;
