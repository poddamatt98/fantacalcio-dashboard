import axios from 'axios';
import yaml from 'js-yaml';
import Competition from '../models/Competition';

const loadConfig = async (filePath) => {
  try {
    const response = await axios.get(filePath);
    const data = yaml.load(response.data);
    
    return data.competitions.map(c => new Competition(c.name, c.logoUrl, c.rules, c.teams));
  } catch (error) {
    console.error('Error loading config:', error);
    throw error;
  }
};

export default loadConfig;
