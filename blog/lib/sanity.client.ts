import {createClient} from "next-sanity";
import

import {
    NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID,

    
  }

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn : isPreviewMode ? false :true,
    perspective : isPreviewMode  ? 'previewDrafts' : "published",
    token : isPreviewMode ? PUBLIC
});