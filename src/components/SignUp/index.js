import { React } from "react";
import "./style.css";
// import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Row, Col, Button, Form, FloatingLabel, Image } from 'react-bootstrap';
import prepr_logo from "../assets/img/prepr-logo.png"
import { Link } from "react-router-dom";



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
                    <Form>
                    {/* <div className="grey-text"> */}
                        {/* <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                            success="right" />
                        <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                            success="right" />
                        <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                            error="wrong" success="right" />
                        <MDBInput label="Your password" icon="lock" group type="password" validate />
                        </div>
                        <div className="text-center">
                        <MDBBtn color="primary">Register</MDBBtn>
                        </div> */}
         
                        <FloatingLabel    
                        controlId="floatingInput"
                        label="First Name*"
                        className="mb-3">
                            <Form.Control type="text" placeholder="First Name*" />
                        </FloatingLabel>
       
                        <FloatingLabel    
                        controlId="floatingInput"
                        label="Last Name*"
                        className="mb-3">
                            <Form.Control type="text" placeholder="Last Name*" />
                        </FloatingLabel>

                        <FloatingLabel    
                        controlId="floatingInput"
                        label="User Name*"
                        className="mb-3">
                            <Form.Control type="text" placeholder="User Name*" />
                        </FloatingLabel>
                        
                        <FloatingLabel    
                        controlId="floatingInput"
                        label="Password*"
                        className="mb-3">
                            <Form.Control type="password" placeholder="Password*" />
                        </FloatingLabel>

                        <FloatingLabel    
                        controlId="floatingInput"
                        label="Confirm Password*"
                        className="mb-3">
                            <Form.Control type="password" placeholder="Confirm Password*" />
                        </FloatingLabel>

                        <FloatingLabel    
                        controlId="floatingInput"
                        label="Email Address*"
                        className="mb-3">
                            <Form.Control type="email" placeholder="Email*" />
                        </FloatingLabel>

                        <FloatingLabel    
                        controlId="floatingInput"
                        label="Phone Number*"
                        className="mb-3">
                            <Form.Control type="text" placeholder="Phone Number*" />
                        </FloatingLabel>

                        <FloatingLabel
                        controlID="floatingSelect"
                        label="User Type*"
                        className="mb-3">
                            <Form.Select>
                                <option>-</option>
                                <option value="1">Student</option>
                                <option value="2">Applicant</option>
                                <option value="3">Teacher</option>
                                <option value="4">Facilitator</option>
                                <option value="5">Mentor</option>
                                <option value="6">Expert</option>
                                <option value="7">Recent Grad</option>
                                <option value="8">Employee</option>
                                <option value="9">Employer</option>
                                <option value="10">Investor</option>
                                <option value="11">Job Seeker</option>
                                <option value="12">Intrapreneur</option>
                                <option value="13">Aspiring Entrepreneur</option>
                                <option value="14">Learner</option>
                                <option value="15">Innovater</option>
                                <option value="16">Startup</option>
                                <option value="17">Evaluator</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel
                        controlID="floatingSelect"
                        label="Status*"
                        className="mb-3">
                            <Form.Select>
                                <option>-</option>
                                <option value="1">Looking to mentor projects</option>
                                <option value="2">Looking to join a team</option>
                                <option value="3">Looking for teammates</option>
                                <option value="4">Looking to invest</option>
                                <option value="5">Looking for employees</option>
                                <option value="6">Looking for employers</option>
                                <option value="7">Looking to build skills</option>
                                <option value="8">Looking to learn</option>
                                <option value="9">Looking to solve problems</option>
                                <option value="10">Looking to create social impact</option>
                                <option value="11">Looking for investors</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel    
                        controlId="floatingInput"
                        label="Referral Code"
                        className="mb-3">
                            <Form.Control type="text" placeholder="Referral Code" />
                        </FloatingLabel>

                        <Form.Group>
                            <Form.Text>
                            By registering, you agree to the Prepr Terms of Use, Privacy Policy and Cookie Policy
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="text-center">
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form.Group>

                        <Form.Group className="text-center">
                            <Form.Text>
                            Already have an account? 
                            <br/>
                            <Link to="/login">Login</Link>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="text-center">
                            <Form.Text>
                            Are you an organization?
                            <br/>
                            <Link to="/organization/register">Organization Register</Link>
                            </Form.Text>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default SignUp;