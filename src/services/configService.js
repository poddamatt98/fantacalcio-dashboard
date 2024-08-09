import axios from 'axios';
import yaml from 'js-yaml';

export const loadConfig = async (filePath) => {
  try {
    const response = await axios.get(filePath);
    const configData = yaml.load(response.data);
    return configData;
  } catch (error) {
    console.error('Error loading the config file:', error);
    throw error;
  }
};
