import { LABEL } from './constants';
import installLabelEditor from './editor';
//import RichTextWidgetView from 'volto-slate/widgets/RichTextWidgetView';

export default function install(config) {
  config.settings.labels = [...(config.settings.labels || []), LABEL];
  //config.widgets.views.widget.slate = RichTextWidgetView;
  config = installLabelEditor(config);

  return config;
}
