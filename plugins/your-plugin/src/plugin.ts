// plugins/your-plugin/src/plugin.ts

import {
  createTechDocsAddonExtension,
  TechDocsAddonLocations,
} from '@backstage/plugin-techdocs-react';
import { MakeAllImagesCatGifsAddon } from './addons/MakeAllImagesCatGifs';

// ...

// You must "provide" your Addon, just like any extension, via your plugin.
export const CatGif = MakeAllImagesCatGifsAddon.provide(
  // This function "creates" the Addon given a component and location. If your
  // component can be configured via props, pass the prop type here too.
  createTechDocsAddonExtension<HTMLImageElement>({
    name: 'CatGif',
    location: TechDocsAddonLocations.Header,
    component: MakeAllImagesCatGifsAddon,
  }),
);
