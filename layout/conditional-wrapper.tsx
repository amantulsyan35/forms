import React from 'react';
import { IncorporationFormStep } from '../src/pages/incorporation/add-incorporation';

const ConditionalWrapper = ({
  condition,
  incorpWrapper,
  directorWrapper,
  children,
}: any) =>
  condition === IncorporationFormStep.CompanyInformation
    ? incorpWrapper(children)
    : condition === IncorporationFormStep.DirectorInformation
    ? directorWrapper(children)
    : children;

export default ConditionalWrapper;
