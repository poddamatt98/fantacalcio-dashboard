import yaml from 'js-yaml';

export const loadConfig = async () => {
  try {
    const response = await fetch('/config.yaml');
    const yamlText = await response.text();
    return yaml.load(yamlText);
  } catch (error) {
    console.error("Error loading the YAML config", error);
    throw error;
  }
};
