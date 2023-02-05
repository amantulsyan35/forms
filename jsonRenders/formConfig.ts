export const config = {
  form: [
    {
      component: 'input',
      label: 'Company Legal Name',
      name: 'entityName',
      id: 'entityName',
      type: 'text',
      required: true,
      className:
        'shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
      children: '',
    },
    {
      component: 'input',
      label: 'Address Line 1',
      name: 'addressLine1',
      id: 'addressLine1',
      type: 'text',
      required: true,
      className:
        'shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
      children: '',
    },
  ],
};
