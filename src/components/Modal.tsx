import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(8),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const user: any = useSelector((state: any) => state.auth.user);
  const [edition, setEdition] = useState(false);
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
  });

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Modifier
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Modifie ton profil
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="flex">
            <div className="flex justify-center flex-col m-5">
              <TextField
                required
                id="outlined-required"
                label="Nom"
                margin="dense"
                defaultValue={user.name}
              />
              <TextField
                required
                id="outlined-required"
                label="E-mail"
                margin="dense"
                defaultValue={user.email}
              />
              <TextField
                id="outlined-password-input"
                label="Site Web"
                type="Site Web"
              />
            </div>
            <div className="flex justify-center flex-col m-5">
              <TextField
                id="outlined-password-input"
                label="LinkedIn"
                type="LinkedIn"
              />
              <TextField
                id="outlined-password-input"
                label="GitHub"
                type="GitHub"
              />
              <TextField
                id="outlined-password-input"
                label="Twitter"
                type="Twitter"
              />
            </div>{" "}
          </div>
          <div className="m-5">
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={8}
              margin="dense"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Sauvegarder
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
