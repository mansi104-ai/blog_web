import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './src/app/schemaTypes/blockContent'
import category from './src/app/schemaTypes/category'
import post from './src/app/schemaTypes/post'
import author from './src/app/schemaTypes/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
}
