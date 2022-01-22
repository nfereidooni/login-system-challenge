import { React } from "react";
import "./style.css";
import { Row, Col, Image} from "react-bootstrap";
import prepr_logo from "../assets/img/prepr-logo.png"



function SignUp() {

  return (
    <div className="backgroundSection container-fluid">
        <div className="signUpBox">
            <Row>
                <Col sm={12} md={8} className="leftSide">
                    <div>
                    
                    LEFT
                    </div>
                </Col>
                <Col sm={12} md={4} className="rightSide">
                    <Image src={prepr_logo}/>

                </Col>
            </Row>
        </div>
    </div>
  );
}

export default SignUp;