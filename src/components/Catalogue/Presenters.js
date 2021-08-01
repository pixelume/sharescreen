import React, { useContext } from "react";
import { Context } from "../../App";
import Cards from "../Cards/Cards";
import LoadAnimation2 from "../../styles/LoadAnimation2";
import Notification from '../../styles/Notification';

const Presenters = () => {
  const { presenterData, presenterError, presenterLoading } = useContext(Context);

  return (
    <>
      {presenterData && <Cards presenterData={presenterData}/>}
      {presenterError && <Notification color="red">{presenterError}</Notification>}
      {presenterLoading && <LoadAnimation2 />}
    </>
  );
};

export default Presenters;
