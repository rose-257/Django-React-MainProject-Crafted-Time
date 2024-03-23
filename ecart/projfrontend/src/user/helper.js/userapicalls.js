import {API} from "../../backend";

export const getUser =(id)=>{
    return fetch(`${API}user/${id}/`, {method:"GET"})
    .then((response)=>{
        return response.json();
    })
    .catch((err)=>console.log(err));
};      

export const updateUser = (id, userData) => {
    return fetch(`${API}user/${id}/`, {
        method: "PATCH", 
        headers: {
            Accept:"application/json",
            "Content-Type":"application/json",
        },
        body: JSON.stringify(userData),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to update user data");
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Error updating user data:", error);
        throw new Error("Failed to update user data");
    });
};
