import dotenv from "dotenv";

dotenv.config();

const config = {
  api_host: process.env.REACT_APP_API_HOST,
  api_image: process.env.REACT_APP_IMAGE_HOST,
};

export { config };
