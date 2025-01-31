// plugins/your-plugin/src/addons/MakeAllImagesCatGifs.test.tsx
import { TechDocsAddonTester } from '@backstage/plugin-techdocs-addons-test-utils';

// Note: import your actual addon (the one provided by your plugin).
import { MakeAllImagesCatGifsAddon } from './MakeAllImagesCatGifs';
import React from 'react';

describe('MakeAllImagesCatGifs', () => {
  it('replaces img srcs with cat gif', async () => {
    const { getByTestId } = await TechDocsAddonTester.buildAddonsInTechDocs([
      <MakeAllImagesCatGifsAddon />,
    ])
      .withDom(<img data-testid="fixture" src="http://example.com/dog.jpg" />)
      .renderWithEffects();

    expect(getByTestId('fixture')).toHaveAttribute(
      'src',
      'https://example.com/cat.gif',
    );
  });
});
