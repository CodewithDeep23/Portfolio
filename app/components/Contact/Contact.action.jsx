"use server"

export const contactAction = async (formData) => {
    console.log("formData", formData.get("name"));
};