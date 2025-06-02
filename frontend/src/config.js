const config = {
  API_URL: process.env.NODE_ENV === 'production' 
    ? 'https://your-render-backend-url.onrender.com/api/chatbot'  // Replace with your Render URL
    : 'http://localhost:5000/api/chatbot'
};

export default config; 