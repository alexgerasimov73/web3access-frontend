import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { RegistrationData } from '../../../../helpers/constants';

interface FormData {
  readonly verificationToken: string;
}

interface Props {
  readonly id: string;
  readonly refreshData: (data: RegistrationData) => void;
}

export const VerifyEmail = ({ id, refreshData }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const handleFinish = ({ verificationToken }: FormData) => {
    console.log('verificationToken', verificationToken);
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
        Verify your email
      </Heading>

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

        <Button w="full" colorScheme="green" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Flex>
  );
};
