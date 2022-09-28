import { IFormData } from "../../types/formData"

const sendForm = {
    async submitForm(data: IFormData){
        const response = await fetch("https://formspree.io/f/xeqdgwby", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)          
        })
        if(response.ok) {
            alert("Thank you for the message, I will reply back to you as soon as possible")
        } else {
            alert("Message did not send, please try again later")
        }
    }
}

export default sendForm