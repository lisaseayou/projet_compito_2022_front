const validation = {
    login: {
        email: {
            required: 'Le champ email est requis',
            pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "L'adresse email n'est pas au bon format",
            },
        },
        password: {
            required: 'Le champ mot de passe est requis',
            minLength: {
                value: 8,
                message: 'Le mot de passe doit comporter 8 caractères minimum',
            },
        },
    },
    register: {
        name: {
            required: 'Le champ nom est requis',
            minLength: {
                value: 3,
                message: 'Le nom doit comporter 3 caractères minimum',
            },
        },
        email: {
            required: 'Le champ email est requis',
            pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "L'adresse email n'est pas au bon format",
            },
        },
        password: {
            required: 'Le champ mot de passe est requis',
            minLength: {
                value: 8,
                message: 'Le mot de passe doit comporter 8 caractères minimum',
            },
        },
        passwordConfirm: {
            required: 'Le champ confirmation de mot de passe est requis',
            minLength: {
                value: 8,
                message:
                    'La confirmation de mot de passe doit comporter 8 caractères minimum',
            },
        },
    },
    resetPassword: {
        password: {
            required: 'Le champ mot de passe est requis',
            minLength: {
                value: 8,
                message: 'Le mot de passe doit comporter 8 caractères minimum',
            },
        },
        passwordConfirm: {
            required: 'Le champ confirmation de mot de passe est requis',
            minLength: {
                value: 8,
                message:
                    'La confirmation de mot de passe doit comporter 8 caractères minimum',
            },
        },
    },
    forgotPassword: {
        email: {
            required: 'Le champ email est requis',
            pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "L'adresse email n'est pas au bon format",
            },
        },
    },
    addProject: {
        name: {
            required: 'Le champ titre du projet est requis',
            minLength: {
                value: 5,
                message:
                    'Le titre du projet doit comporter 5 caractères minimum',
            },
        },
        description: {
            required: 'Le champ description est requis',
            minLength: {
                value: 10,
                message: 'La description doit comporter 10 caractères minimum',
            },
        },
    },
    addTask: {
        name: {
            required: 'Le champ titre est requis',
            minLength: {
                value: 5,
                message:
                    'Le titre de la tache doit comporter 5 caractères minimum',
            },
        },
        description: {
            required: 'Le champ description est requis',
            minLength: {
                value: 10,
                message: 'La description doit comporter 10 caractères minimum',
            },
        },
    },
    profil: {
        url: {
            pattern: {
                value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g,
                message: "L'url n'est pas au bon format",
            },
        },
        linkedin: {
            pattern: {
                value: /[A-Za-z0-9]/g,
                message: "Le pseudo Linkedin n'est pas valide",
            },
        },
        github: {
            pattern: {
                value: /[A-Za-z0-9]/g,
                message: "Le pseudo Github n'est pas valide",
            },
        },
        twitter: {
            pattern: {
                value: /[A-Za-z0-9]/g,
                message: "Le pseudo Twitter n'est pas valide",
            },
        },
        description: {
            minLength: {
                value: 10,
                message: 'La description doit comporter 10 caractères minimum',
            },
        },
    },
};

export default validation;
