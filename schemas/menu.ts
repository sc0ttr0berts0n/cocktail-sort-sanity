import {defineType, defineField} from 'sanity'
import {MdMenuBook} from 'react-icons/md'

export default defineType({
  name: 'menu',
  type: 'document',
  title: 'Menu',
  icon: MdMenuBook,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
  ],
})
