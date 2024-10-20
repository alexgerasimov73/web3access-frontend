import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Card } from '../../../../components/Card';
import type { StepProps } from '../../types';
import { useSubmitDetails } from '../../hooks/useSubmitDetails';

interface FormData {
  readonly firstName: string;
  readonly lastName: string;
  readonly linkedIn?: string;
}

export const Details = ({ data, refreshData }: StepProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();
  const { freshData, isPending, submitDetails } = useSubmitDetails();
  const { id, verificationToken } = data;

  const handleFinish = ({ firstName, lastName, linkedIn }: FormData) => {
    submitDetails({ id, firstName, lastName, linkedIn, verificationToken });
    console.log('freshData', freshData);

    freshData?.data && refreshData(freshData.data);
  };

  return (
    <Card title="Your Details">
      <form onSubmit={handleSubmit(handleFinish)}>
        <FormControl mb="4" isInvalid={!!errors.firstName}>
          <FormLabel htmlFor="firstName">First name</FormLabel>
          <Input
            id="firstName"
            disabled={isPending}
            placeholder="Alex"
            {...register('firstName', {
              required: 'This is required',
            })}
          />
          <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
        </FormControl>

        <FormControl mb="4" isInvalid={!!errors.lastName}>
          <FormLabel htmlFor="lastName">Last name</FormLabel>
          <Input
            id="lastName"
            disabled={isPending}
            placeholder="Gerasimov"
            {...register('lastName', {
              required: 'This is required',
            })}
          />
          <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
        </FormControl>

        <FormControl mb="8" isInvalid={!!errors.linkedIn}>
          <FormLabel htmlFor="linkedIn">First name</FormLabel>
          <Input
            id="linkedIn"
            disabled={isPending}
            placeholder="https://www.linkedin.com/in/alexg73/"
            {...register('linkedIn', {
              pattern: {
                message: 'Must be an URL such as https://www.linkedin.com/in/john',
                value:
                  /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm,
              },
            })}
          />
          <FormErrorMessage>{errors.linkedIn && errors.linkedIn.message}</FormErrorMessage>
        </FormControl>

        <Button w="full" isLoading={isPending} type="submit">
          Continue
        </Button>
      </form>
    </Card>
  );
};
