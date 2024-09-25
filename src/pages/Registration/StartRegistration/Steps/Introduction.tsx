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
import { StartRegistrationStep } from '../../../../helpers/constants';

interface FormData {
  readonly emailAddress: string;
}
interface Props {
  readonly setStep: (step: StartRegistrationStep) => void;
}

export const Introduction = ({ setStep }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const increaseStep = ({ emailAddress }: FormData) => {
    console.log('emailAddress', emailAddress);
    setStep(StartRegistrationStep.EmailSent);
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
        Your application to join
      </Heading>

      <form onSubmit={handleSubmit(increaseStep)}>
        <FormControl mb="4" isInvalid={!!errors.emailAddress}>
          <FormLabel htmlFor="emailAddress">Email</FormLabel>
          <Input
            id="emailAddress"
            placeholder="E.g. hello@example.com"
            {...register('emailAddress', {
              required: 'This is required',
              pattern: {
                message: 'It should be valid email',
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              },
            })}
          />
          <FormErrorMessage>{errors.emailAddress && errors.emailAddress.message}</FormErrorMessage>
        </FormControl>

        <Button w="full" colorScheme="green" isLoading={isSubmitting} type="submit">
          Continue
        </Button>
      </form>
    </Flex>
  );
};
