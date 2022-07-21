import { toast, ToastOptions } from 'react-toastify';

const option : ToastOptions = {
    theme: 'colored',
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

const ToastSuccess = ( message : string ) => {
    return toast.success( message, option );
}

const ToastError = ( message : string ) => {
    return toast.error( message, option );
}

export { ToastSuccess, ToastError }