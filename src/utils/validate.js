export const validateFormDate=(email,password)=>{
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmailValid)
        return "Email is Not Valid";
    else if(!isPasswordValid)
        return "Password is Not Valid";
    return null;
} 