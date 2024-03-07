import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'menu',
  type: 'document',
  title: 'Menu',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
  ],
})
