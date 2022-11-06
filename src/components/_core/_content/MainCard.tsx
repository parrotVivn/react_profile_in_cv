import { Card } from "@mui/material";
import { forwardRef, Fragment } from "react";

const MainCard = forwardRef(({ ...others }, ref) => (
  <Fragment>
    <Card {...others}>
            



    </Card>
  </Fragment>
));

export default MainCard;
