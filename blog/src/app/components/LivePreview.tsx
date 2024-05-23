import { createPreviewHook } from '@sanity/preview-kit';

const useCustomPreview = createPreviewHook({
  // Add your configuration options here
});

export default function LivePreview({ query, params }) {
  const data = useCustomPreview(null, query, params);
  // Use the data in your component
}
