import { render } from '@testing-library/react';
import LabelWrapper from './LabelWrapper';

jest.mock('@plone/volto-slate/editor/render', () => ({
  serializeNodes: jest.fn(),
  serializeNodesToText: jest.fn(() => 'Tooltip Content'),
}));

describe('LabelWrapper', () => {
  it('renders without crashing', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          label_type: 'type',
          label_pointing: 'pointing',
          tooltip_content: [{ text: 'Tooltip Content' }],
          tooltip_pointing: 'top center',
          always_show: false,
          tooltip_type: 'info',
          tooltip_size: 'wide',
        },
      },
    };
    render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );
  });

  it('renders without crashing with always_show true', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          label_type: 'type',
          label_pointing: 'pointing',
          tooltip_content: [{ text: 'Tooltip Content' }],
          tooltip_pointing: 'top center',
          always_show: true,
          tooltip_type: 'info',
          tooltip_size: 'wide',
        },
      },
    };
    render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );
  });
  it('renders without crashing with no label_type', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          label_type: undefined,
          label_pointing: 'pointing',
          tooltip_content: [{ text: 'Tooltip Content' }],
          tooltip_pointing: 'top center',
          always_show: true,
          tooltip_type: 'info',
          tooltip_size: 'wide',
        },
      },
    };
    render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );
  });

  it('renders without crashing with no tooltip _content', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          label_type: undefined,
          label_pointing: 'pointing',
          tooltip_content: undefined,
          tooltip_pointing: 'top center',
          always_show: true,
          tooltip_type: 'info',
          tooltip_size: 'wide',
        },
      },
    };
    render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );
  });

  it('renders without crashing with no data field in element', () => {
    const props = {
      attributes: {},
      element: {},
    };
    render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );
  });
});
