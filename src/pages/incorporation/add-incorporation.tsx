import React, { useState } from 'react';
import {
  CompanyIncorporationForm,
  DirectorIncorporationForm,
} from '../../../components/incorporation';
import { trpc } from '../../utils/trpc';
import { CompanyInformationFormValue } from '../../../schema/incorporation-form/company-info-schema';
import { DirectorInfoFormValue } from '../../../schema/incorporation-form/director-info-schema';
import ConditionalWrapper from '../../../layout/conditional-wrapper';

export enum IncorporationFormStep {
  CompanyInformation,
  DirectorInformation,
  EquityInformation,
  ReviewApplication,
  SuccessPage,
}

const AddIncorporation = () => {
  const [step, setStep] = useState(IncorporationFormStep.CompanyInformation);
  const companyDetails =
    trpc.companyInfo.saveIncorporationDetails.useMutation();

  const handleCompanyInfoSubmit = async (data: CompanyInformationFormValue) => {
    await companyDetails.mutate({
      ...data,
    });
    setStep(IncorporationFormStep.DirectorInformation);
  };

  const handleDirectorInfoSubmit = async (data: DirectorInfoFormValue) => {
    console.log(data);
  };

  return (
    <main className='bg-gray-50 min-h-screen p-4'>
      <div className='h-auto bg-white shadow-md rounded-lg mx-auto w-3/4 p-4'>
        <ConditionalWrapper
          condition={step}
          incorpWrapper={() => (
            <CompanyIncorporationForm onSubmitReady={handleCompanyInfoSubmit} />
          )}
          directorWrapper={() => (
            <DirectorIncorporationForm
              onSubmitReady={handleDirectorInfoSubmit}
            />
          )}
        >
          {JSON.stringify('error')}
        </ConditionalWrapper>
      </div>
    </main>
  );
};

export default AddIncorporation;
