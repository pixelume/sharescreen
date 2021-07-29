import React from 'react';
import AdminNavItems from '../components/Navigation/AdminNavItems';
import SubHeader from '../components/Layout/SubHeader';

const admin = (props) => {
  //Logic

  return (
    <SubHeader>
      <AdminNavItems />
    </SubHeader>
  );
};

export default admin;
