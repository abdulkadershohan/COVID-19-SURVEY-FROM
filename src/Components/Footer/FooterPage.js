import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './FooterPage.css'
/*
  <div>
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow className="py-4 d-flex align-items-center">


                    </MDBRow>
                </MDBContainer>
            </div>
 */
const FooterPagePro = () => {
    return (
        <div className={"a"}>


        <MDBFooter color="mdb-color" className="container font-small lighten-3 pt-4 mt-4">



            <MDBContainer className="text-center text-md-left">
                <MDBRow className="my-4">
                    <MDBCol md="4" lg="4">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            MDBFooter Content
                        </h5>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                            error amet numquam iure provident voluptate esse quasi,
                            veritatis totam voluptas nostrum.{" "}
                        </p>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2" lg="2" className="ml-auto">
                        <h5 className="text-uppercase mb-4 font-weight-bold">About Us</h5>
                        <ul className="about-links">
                            <p>
                                <a className="text-decoration-none" href="#!">A BRIEF HISTORY</a>
                            </p>
                            <p>
                                <a className="text-decoration-none" href="#!">OUR TEAM</a>
                            </p>
                            <p>
                                <a className="text-decoration-none" href="#!">DEVELOPER CONTRACT</a>
                            </p>
                            <p>
                                <a className="text-decoration-none" href="#!">AWARDS</a>
                            </p>
                        </ul>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="5" lg="3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                        <p>
                            <i className="fa fa-home mr-3" /> Mirpur-2 Dhaka,1216, BN
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-3" /> covit19.survey@bd.com
                        </p>
                        <p>
                            <i className="fa fa-phone mr-3" /><a className="text-decoration-none" href="tel:+8801766614798">+ 88 01 766 147 98</a>
                        </p>
                        <p>
                            <i className="fa fa-print mr-3" /><a className="text-decoration-none" href="tel:+8801766614798">+ 88 01 766 147 98</a>
                        </p>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2" lg="2" className="follow text-center">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            Follow us
                        </h5>
                        <div className="social-icon" >
                            <li className><a href="https://www.facebook.com/Covit-19-Survey-FORM-106000444581681" target="_blank" className="btn-floating btn-small btn-fb">
                                <i className="fab fa-facebook-f" />
                            </a></li>
                                <li> <a type="button" className="btn-floating btn-small btn-tw">
                                <i className="fab fa-twitter" />
                            </a></li>
                                    <li><a type="button" className="btn-floating btn-small btn-gplus">
                                <i className="fab fa-google-plus" />
                            </a></li>
                                        <li> <a type="button" className="btn-floating btn-small btn-dribbble">
                                <i className="fab fa-dribbble" />
                            </a></li>
                        </div>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>

            </div>
        </MDBFooter>

        </div>
    );
}

export default FooterPagePro;