// plugins/your-plugin/src/addons/MakeAllImagesCatGifs.tsx

import React, { useEffect } from 'react';
import { useShadowRootElements } from '@backstage/plugin-techdocs-react';

// This is a normal react component; in order to make it an Addon, you would
// still create and provide it via your plugin as described above. The only
// difference is that you'd set `location` to `TechDocsAddonLocations.Content`.
export const MakeAllImagesCatGifsAddon = () => {
  // This hook can be used to get references to specific elements. If you need
  // access to the whole shadow DOM, use the underlying useShadowRoot()
  // hook instead.
  const images = useShadowRootElements<HTMLImageElement>(['img']);

  useEffect(() => {
    images.forEach(img => {
      if (img.src !== 'https://example.com/cat.gif') {
        img.src = 'https://example.com/cat.gif';
      }
    });
  }, [images]);

  // Nothing to render directly, so we can just return null.
  return null;
};
