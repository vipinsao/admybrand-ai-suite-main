export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
    return value.trim().length > 0;
};

export const validatePassword = (password: string): boolean => {
    const minLength = 8;
    return password.length >= minLength;
};

export const validateForm = (formData: Record<string, string>): Record<string, boolean> => {
    return {
        email: validateEmail(formData.email),
        requiredField: validateRequired(formData.requiredField),
        password: validatePassword(formData.password),
    };
};