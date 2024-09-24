import { StartRegistrationStep } from '../../../../helpers/constants';

interface Props {
  readonly setStep: (step: StartRegistrationStep) => void;
}

export const Introduction = ({ setStep }: Props) => {
  return <div>Introduction</div>;
};
