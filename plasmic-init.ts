import React, { ReactNode } from 'react';
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "sqsUtdEY9EziH5JCt3D7uY",  // ID of a project you are using
      token: "25osf5BcBiNFLXthR09qogHCK8TGSUVtL7mMUBhl6BUZ2ipo0fE2bGzxt0S8Da02DxS5GfmX6kx8VHcgjw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})