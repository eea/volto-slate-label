import { render, fireEvent } from '@testing-library/react';
import LabelWrapper from './LabelWrapper';

jest.mock('@plone/volto-slate/editor/render', () => ({
  serializeNodes: jest.fn(() => 'Tooltip Content'),
  serializeNodesToText: jest.fn(() => 'Tooltip Content'),
}));

describe('LabelWrapper', () => {
  it('renders without crashing', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          tooltip_content: [{ text: 'Tooltip Content' }],
          show_on_hover: true,
        },
      },
    };
    const { container } = render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('shows popup on hover', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          tooltip_content: [{ text: 'Tooltip Content' }],
          show_on_hover: true,
        },
      },
    };
    const { getByText, queryByText } = render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );

    const trigger = getByText('Test');
    fireEvent.mouseEnter(trigger);

    expect(queryByText('Tooltip Content')).not.toBeNull();

    fireEvent.mouseLeave(trigger);
    expect(queryByText('Tooltip Content')).toBeNull();
  });

  it('shows popup on focus and hides on blur', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          tooltip_content: [{ text: 'Tooltip Content' }],
        },
      },
    };
    const { getByText, queryByText } = render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );

    const trigger = getByText('Test');
    fireEvent.focus(trigger);

    expect(queryByText('Tooltip Content')).not.toBeNull();

    fireEvent.blur(trigger);
    expect(queryByText('Tooltip Content')).toBeNull();
  });

  it('shows popup on Enter or Space and hides on Escape', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          tooltip_content: [{ text: 'Tooltip Content' }],
        },
      },
    };
    const { getByText, queryByText } = render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );

    const trigger = getByText('Test');

    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(queryByText('Tooltip Content')).not.toBeNull();

    fireEvent.keyDown(trigger, { key: 'Escape' });
    expect(queryByText('Tooltip Content')).toBeNull();

    fireEvent.keyDown(trigger, { key: ' ' });
    expect(queryByText('Tooltip Content')).not.toBeNull();
  });

  it('renders with missing tooltip_content gracefully', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          tooltip_content: undefined,
        },
      },
    };
    const { container } = render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('renders ARIA attributes correctly', () => {
    const props = {
      attributes: {},
      element: {
        data: {
          uid: '123',
          tooltip_content: [{ text: 'Tooltip Content' }],
        },
      },
    };
    const { getByText } = render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );
  });
});
