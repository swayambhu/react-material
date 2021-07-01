/** @format */

import { Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Controls from "./Form Controls/Controls";
import CloseIcon from "@material-ui/icons/Close";

const Popup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
          <div style={{display:'flex', alignItems: 'center'}}>
              <Typography variant="h6" component="div" style={{flexGrow:1}}>
                {title.toUpperCase()}
              </Typography>
              <Controls.ActionButton color="secondary" onClick={() => setOpenPopup(false)}>
                  <CloseIcon />
              </Controls.ActionButton>
          </div>
      </DialogTitle>
      <DialogContent dividers>
          {children}
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
