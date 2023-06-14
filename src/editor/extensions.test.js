import { withLabel, withBeforeInsertFragment } from './extensions';
import { Transforms } from 'slate';

jest.mock('slate', () => ({
  Transforms: {
    setNodes: jest.fn(),
  },
}));

jest.mock('@plone/volto-slate/utils', () => ({
  nanoid: () => 'mockedId',
}));

describe('withLabel', () => {
  it('sets isInline correctly', () => {
    const editor = {
      isInline: jest.fn(),
    };
    const newEditor = withLabel(editor);

    const elementWithCorrectLabel = { type: 'label' };
    const elementWithIncorrectLabel = { type: 'LABEL' };
    expect(newEditor.isInline(elementWithCorrectLabel)).toEqual(true);
    expect(newEditor.isInline(elementWithIncorrectLabel)).toEqual(undefined);
  });

  it('normalizes node correctly with label that matches', () => {
    const editor = {
      normalizeNode: jest.fn(),
    };
    const newEditor = withLabel(editor);

    const node = { type: 'label' };
    const path = 'mockedPath';

    newEditor.normalizeNode([node, path]);

    expect(Transforms.setNodes).toHaveBeenCalledWith(
      newEditor,
      { data: { uid: 'mockedId' } },
      { at: path },
    );
  });

  it('normalizes node correctly with label that does not match', () => {
    const editor = {
      normalizeNode: jest.fn(),
    };
    const newEditor = withLabel(editor);

    const node = { type: 'LABEL' };
    const path = 'mockedPath';

    newEditor.normalizeNode([node, path]);
  });
});

describe('withBeforeInsertFragment', () => {
  it('calls beforeInsertFragment correctly and generates new uid correctly', () => {
    const editor = {
      beforeInsertFragment: jest.fn((parsed) => parsed),
    };
    const newEditor = withBeforeInsertFragment(editor);
    const parsed = [{ children: [{ data: { uid: 'existingId' } }] }];
    const returnedValue = newEditor.beforeInsertFragment(parsed);

    expect(returnedValue[0].children[0].data.uid).toEqual('mockedId');
  });

  it('generates new uid correctly when there is no beforeInsertFragment', () => {
    const editor = {};
    const newEditor = withBeforeInsertFragment(editor);
    const parsed = [{ children: [{ data: { uid: 'existingId' } }] }];
    const returnedValue = newEditor.beforeInsertFragment(parsed);

    expect(returnedValue[0].children[0].data.uid).toEqual('mockedId');
  });

  it('returns the same object when beforeInsertFragment is not defined and the date does not have uid', () => {
    const editor = {};
    const newEditor = withBeforeInsertFragment(editor);
    const parsed = [{ children: [{ data: {} }] }];
    const returnedValue = newEditor.beforeInsertFragment(parsed);

    expect(returnedValue).toEqual(parsed);
  });
});
