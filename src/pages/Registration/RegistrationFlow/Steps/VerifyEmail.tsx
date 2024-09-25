import { RegistrationData } from '../../../../helpers/constants';

interface Props {
  readonly id: string;
  readonly refreshData: (data: RegistrationData) => void;
}

export const VerifyEmail = ({ id, refreshData }: Props) => {
  return <div>VerifyEmail</div>;
};
