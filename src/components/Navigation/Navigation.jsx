import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const handleLink = (link) => {
    navigate(link);
  };
  return (
    <>
      <Button color="buttons" onClick={() => handleLink("/")}>
        All Films
      </Button>
      <Button color="buttons" onClick={() => handleLink("/top")}>
        Top 100 Films
      </Button>
      <Button color="buttons" onClick={() => handleLink("/premiere")}>
        Premieres
      </Button>
    </>
  );
};

export default Navigation;
