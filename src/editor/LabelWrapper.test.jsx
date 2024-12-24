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
    expect(container).toBeTruthy();
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
    const { getByText } = render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );

    const trigger = getByText('Test');
    fireEvent.mouseEnter(trigger);

    expect(getByText('Tooltip Content')).toBeInTheDocument();

    fireEvent.mouseLeave(trigger);
    expect(getByText('Tooltip Content')).not.toBeVisible();
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
    const { getByText } = render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );

    const trigger = getByText('Test');
    fireEvent.focus(trigger);

    expect(getByText('Tooltip Content')).toBeInTheDocument();

    fireEvent.blur(trigger);
    expect(getByText('Tooltip Content')).not.toBeVisible();
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
    const { getByText } = render(
      <LabelWrapper {...props}>
        <div>Test</div>
      </LabelWrapper>,
    );

    const trigger = getByText('Test');

    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(getByText('Tooltip Content')).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: 'Escape' });
    expect(getByText('Tooltip Content')).not.toBeVisible();

    fireEvent.keyDown(trigger, { key: ' ' });
    expect(getByText('Tooltip Content')).toBeInTheDocument();
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
    expect(container).toBeTruthy();
  });

  it('applies correct ARIA attributes', () => {
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

    const trigger = getByText('Test');
    expect(trigger).toHaveAttribute('aria-haspopup', 'true');
    expect(trigger).toHaveAttribute('role', 'button');
  });
});
