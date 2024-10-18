import { Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Card } from '../../../../components/Card';
import { RegistrationFlowStep, type StepProps } from '../../types';

interface FormData {
  readonly verificationToken: string;
}

interface Props extends Omit<StepProps, 'data'> {
  readonly id: string;
}

export const VerifyEmail = ({ id, refreshData }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const handleFinish = ({ verificationToken }: FormData) => {
    console.log('verificationToken', verificationToken);

    // TODO: Implement real logic.
    const data = {
      id,
      verificationToken,
      emailAddress: 'mail@mail.org',
      onboardingStep: RegistrationFlowStep.YourDetails,
    };
    refreshData(data);
  };

  return (
    <Card title="Verify your email">
      <Text>We have sent a verification code to your email address.</Text>

      <form onSubmit={handleSubmit(handleFinish)}>
        <FormControl mb="4" isInvalid={!!errors.verificationToken}>
          <FormLabel htmlFor="verificationToken">Enter verification code</FormLabel>
          <Input
            id="verificationToken"
            placeholder="ex: 6174e841"
            {...register('verificationToken', {
              required: 'This is required',
              minLength: {
                message: 'Code should consist of 8 symbols',
                value: 8,
              },
              maxLength: {
                message: 'Code should consist of 8 symbols',
                value: 8,
              },
            })}
          />
          <FormErrorMessage>
            {errors.verificationToken && errors.verificationToken.message}
          </FormErrorMessage>
        </FormControl>

        <Button w="full" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
};
