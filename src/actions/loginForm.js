export const updateLoginForm = formData => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}

export const clearLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
        
         
    }
}