import React from 'react';
import FormDetailsForm from '../../../components/form-details-form';
import { FormDetailsType } from '../../../schema/form-details-schema';
import { config } from '../../../jsonRenders/formConfig';
import { FormRenderComponent } from '../../../components/render-fields/form-render-component';

const AddJsonIncorporation = () => {
  const handleSubmit = async (data: FormDetailsType) => {
    //
  };

  return (
    <main className='bg-gray-50 min-h-screen p-4'>
      <div className='h-auto bg-white shadow-md rounded-lg mx-auto w-3/4 p-4'>
        <FormDetailsForm onSubmitReady={handleSubmit} />
      </div>
    </main>
  );
};

export default AddJsonIncorporation;
