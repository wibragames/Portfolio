import emailjs from "@emailjs/browser"

export const sendEmail = (email: string, name: string, message: string) => {
    emailjs.send
        (  
            "service_nyzleyj",
            "template_1dlnhjk",
            {
                from_name: name,
                reply_to: email,
                message: message,
                to_name: "Bjarne"
            },
            "d5GLcB3GkbgaJM_-w"
        );
}