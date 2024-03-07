import {defineType, defineField} from 'sanity'
import {IoMdPricetags} from 'react-icons/io'

export default defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: IoMdPricetags,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
  ],
})
