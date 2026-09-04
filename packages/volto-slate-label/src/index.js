import { LABEL } from './constants';
import installLabelEditor from './editor';

export default function install(config) {
  config.settings.labels = [...(config.settings.labels || []), LABEL];
  config = installLabelEditor(config);
  return config;
}
