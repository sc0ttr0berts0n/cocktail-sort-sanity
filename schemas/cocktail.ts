import {defineField, defineType} from 'sanity'
import {BiSolidDrink} from 'react-icons/bi'

export default defineType({
  name: 'cocktail',
  type: 'document',
  title: 'Cocktail',
  icon: BiSolidDrink,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'menu',
      type: 'string',
      title: 'Menu',
      initialValue: 'unsorted',
      options: {
        list: [
          {title: 'Sassafras', value: 'Sassafras'},
          {title: '48 Record Bar', value: '48 Record Bar'},
          {title: 'Unsorted', value: 'unsorted'},
        ],
        layout: 'dropdown',
        direction: 'horizontal',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Recipe',
      name: 'recipe',
      type: 'text',
      description: `Each step on its own line\n \nExample: Build in pint glass.
        Fill with ice.\nTop with water.\nGarnish with lemon.\nServe with straw.`,
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
    }),
  ],
})
