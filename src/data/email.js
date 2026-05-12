import emailjs from '@emailjs/browser';

// Get credentials from .env file
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};

// Send email function
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'gautamshende144@gmail.com', // Your email
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    
    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      return { success: false, message: 'Failed to send email' };
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, message: error.text || 'Something went wrong' };
  }
};