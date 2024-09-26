import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { RegistrationData, RegistrationFlowStep } from '../../../../helpers/constants';

interface FormData {
  readonly firstName: string;
  readonly lastName: string;
  readonly linkedIn?: string;
}

interface Props {
  readonly data: RegistrationData;
  readonly refreshData: (data: RegistrationData) => void;
}

export const Details = ({ data, refreshData }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const handleFinish = ({ firstName, lastName, linkedIn }: FormData) => {
    // TODO: Implement real logic.
    const newData = {
      ...data,
      firstName,
      lastName,
      linkedIn,
      onboardingStep: RegistrationFlowStep.ConnectWallet,
    };
    refreshData(newData);
  };

  return (
    <Flex
      className="RotationAnimation"
      direction="column"
      gap={10}
      w={360}
      p="48px 32px 56px"
      borderRadius={16}
      border="1px"
      borderColor="brand.800">
      <Heading as="h3" alignSelf="center" size="lg">
        Your Details
      </Heading>

      <form onSubmit={handleSubmit(handleFinish)}>
        <FormControl mb="4" isInvalid={!!errors.firstName}>
          <FormLabel htmlFor="firstName">First name</FormLabel>
          <Input
            id="firstName"
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

        <Button w="full" colorScheme="green" isLoading={isSubmitting} type="submit">
          Continue
        </Button>
      </form>
    </Flex>
  );
};
