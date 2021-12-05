import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import H5 from "@material-tailwind/react/Heading5";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function DefaultNavbar({ goDown }) {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a href="/" rel="noreferrer">
            <div className="flex w-full items-center">
              <H5 color="white" className="tracking-wider">
                ALEYLA
              </H5>
              <h5 className="text-lg text-white font-thin leading-none tracking-wide item-center">
                SOFTWARE
              </h5>
            </div>
          </a>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink href="/profile" rel="noreferrer" ripple="light">
                <Icon name="description" size="2xl" />
                About Us
              </NavLink>
              <div className="text-white">
                <Dropdown
                  color="transparent"
                  size="sm"
                  buttonType="link"
                  buttonText={
                    <div className="py-2.5 font-medium flex items-center">
                      <Icon name="view_carousel" size="2xl" color="white" />
                      <span className="ml-2">References</span>
                    </div>
                  }
                  ripple="light"
                >
                  <NavLink href="https://www.odamax.com" target="_blank">
                    <DropdownItem color="lightBlue">
                      Odamax by ETS TUR
                    </DropdownItem>
                  </NavLink>
                  <NavLink href="https://www.wynninteractive.com/betbull/" target="_blank">
                    <DropdownItem color="lightBlue">Betbull</DropdownItem>
                  </NavLink>
                  <NavLink href="https://www.emlakjet.com" target="_blank">
                    <DropdownItem color="lightBlue">Emlakjet</DropdownItem>
                  </NavLink>
                </Dropdown>
              </div>
              <Button
                color="transparent"
                className="bg-white text-black ml-4"
                ripple="dark"
                onClick={goDown}
              >
                Contact us
              </Button>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
