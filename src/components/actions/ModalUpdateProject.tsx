// @ts-nocheck
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
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../../graphql/mutation"
import { GET_PROJECT_BY_USER } from "../../graphql/query";

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

export default function CustomizedDialogs({project } ) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [form, setForm] = useState({
    name: project.name,
    description: project.description,
  });

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    onCompleted: (data) => {
      console.log("success", data);
      return "succes";
    },
    onError: () => {
      console.log("error");
    },
    refetchQueries: [GET_PROJECT_BY_USER],
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    updateProject({ variables: { updateProjectId: project.id, data: form } });
    handleClose();
  };

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
          Modifie ton projet
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="flex justify-center flex-col m-5">
                <TextField
                  required
                  id="outlined-required"
                  label="Nom"
                  margin="dense"
                  defaultValue={project.name}
                  name={"name"}
                  onChange={handleChange}
                />
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={8}
                margin="dense"
                name="description"
                defaultValue={project.description}
                onChange={handleChange}
              />
            </div>
            </div>
            <DialogActions>
              <Button autoFocus type="submit">
                Sauvegarder
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
