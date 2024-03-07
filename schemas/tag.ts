import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
  ],
})
