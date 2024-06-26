/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {StudioNavbar, defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './schema'
import { myTheme } from './theme'
import StudioNavBar from './src/app/components/StudioNavBar'
import Logo from './src/app/components/Logo'
import {getDefaultDocumentNode} from './structure'


export default defineConfig({
  basePath: '/studio',
  projectId: "ipalwtce",
  dataset : "production",
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  theme : myTheme,
  studio : {
    components:{
      logo : Logo,
      navbar : StudioNavBar,
    }
  },
  
  plugins: [
    structureTool({defaultDocumentNode :getDefaultDocumentNode
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

