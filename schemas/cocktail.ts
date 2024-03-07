import {Rule, defineField, defineType} from 'sanity'

export default defineType({
  name: 'cocktail',
  type: 'document',
  title: 'Cocktail',
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
          {title: 'Unsorted', value: 'unsorted'},
          {title: 'Sassafras', value: 'Sassafras'},
          {title: '48 Record Bar', value: '48 Record Bar'},
        ],
        layout: 'radio',
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
