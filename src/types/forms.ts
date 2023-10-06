export type SignInFormValues = {
    si_email: string;
    si_password: string;
    si_rememberMe: boolean;
};

export type SignUpFormValues = {
    su_fullName: string;
    su_email: string;
    su_password: string;
    su_confirmPassword: string;
};

export type ContactFormValues = {
    co_firstName: string;
    co_lastName: string;
    co_email: string;
    co_subject: string;
    co_country: string;
    co_message: string;
};

export type DateFormValue = {
    date: string;
}

export type FileUploadValue = {
    file: File | null;
}

export type MultiSelectValues = {
    options: string[];
    selectedOptions: string[];
}

export type FeaturesCardValues = {
    type: string;
    desc: string;
    price: number;
    credits: string;
    upload: string;
    download_speed: string;
    video_length: string;
    ai_powered: boolean;
    year: boolean;
}