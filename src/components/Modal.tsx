// @ts-nocheck
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../graphql/mutation';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(8),
    },
    '& .MuiDialogActions-root': {
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
                        position: 'absolute',
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
    const user: any = useSelector((state: any) => state.auth.user);
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({
        name: user.name,
        email: user.email,
        url: user.url,
        description: user.description,
        linkedin: user.linkedin,
        twitter: user.twitter,
        github: user.github,
    });

    const [updateProfile] = useMutation(UPDATE_PROFILE, {
        onCompleted: () => {
            console.log('success');
            return 'succes';
        },
        onError: () => {
            console.log('error');
        },
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
        updateProfile({ variables: { updateUserId: user.id, data: form } });
        handleClose();
    };

    return (
        <div>
            <Button
                variant="outlined"
                color="secondary"
                onClick={handleClickOpen}
            >
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
                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <div className="flex justify-center flex-col m-5">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nom"
                                    margin="dense"
                                    defaultValue={user.name}
                                    name={'name'}
                                    onChange={handleChange}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="E-mail"
                                    margin="dense"
                                    defaultValue={user.email}
                                    name={'email'}
                                    onChange={handleChange}
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="Site Web"
                                    type="Site Web"
                                    name="url"
                                    defaultValue={user.url}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-center flex-col m-5">
                                <TextField
                                    id="outlined-password-input"
                                    label="LinkedIn"
                                    type="LinkedIn"
                                    name="linkedin"
                                    dafaultValue={user.linkedin}
                                    onChange={handleChange}
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="GitHub"
                                    type="GitHub"
                                    name="github"
                                    defaultValue={user.github}
                                    onChange={handleChange}
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="Twitter"
                                    type="Twitter"
                                    name="twitter"
                                    defaultValue={user.twitter}
                                    onChange={handleChange}
                                />
                            </div>{' '}
                        </div>
                        <div className="m-5">
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={8}
                                margin="dense"
                                name="description"
                                defaultValue={user.description}
                                onChange={handleChange}
                            />
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
