import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';

const AdminNavLink = styled(Link).attrs({
  activeClassName: 'active'
})`
  position: relative;
  top: 0px;
  /* top: ${(props) => (props.active ? "10px" : "0px")}; */
  padding: 10px;
  background-color: whitesmoke;
  /* background-color: ${({ active }) =>
    active ? "AliceBlue" : "whitesmoke"}; */
  cursor: pointer;
  color: ${({ active, theme }) => (active ? theme.dark1 : "slategrey")};
  font-size: 1em;
  z-index: 1;
  transition: all 0.2s ease-out;
  border-radius: 10px;
  box-shadow: none;
  /* box-shadow: ${({ active }) =>
    active ? "1px 1px 8px -4px rgba(0, 0, 0, 0.75)" : "none"}; */
  margin: 0px 2px;
  /* text-transform: uppercase; */
  /* letter-spacing: 0.08em; */
  &.active {
    background-color: aliceblue;
    top: 10px;
    box-shadow: 1px 1px 8px -4px rgba(0, 0, 0, 0.75);
  }
`;

const AdminNavItems = (props) => {
  //Logic

  return (
    <>
      <AdminNavLink
        to="/admin/presenterRegistration"
        // active={activeCat === "presentations"}
        // onClick={() => setActiveCat("presentations")}
      >
        Add a Presenter
      </AdminNavLink>
      <AdminNavLink
        to="/admin/register-presentation"
        // active={activeCat === "presenters"}
        // onClick={() => setActiveCat("presenters")}
      >
        Add a Presentation
      </AdminNavLink>
    </>
  );
};

export default AdminNavItems;
