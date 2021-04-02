import React, { useContext } from "react";
import { Context } from "../../App";
import Cards from "../Cards/Cards";
import LoadAnimation from "../../styles/LoadAnimation";
import Notification from '../../styles/Notification';

const Presenters = () => {
  const { presenterData, presenterError, presenterLoading } = useContext(Context);

  return (
    <>
      {presenterData && <Cards presenterData={presenterData}/>}
      {presenterError && <Notification color="red">{presenterError}</Notification>}
      {presenterLoading && <LoadAnimation />}
    </>
  );
};

export default Presenters;
