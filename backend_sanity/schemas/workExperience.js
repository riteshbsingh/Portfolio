export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'id',
      type: 'number'
    },
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
    },
    {
      name: 'image',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
  ],
}
