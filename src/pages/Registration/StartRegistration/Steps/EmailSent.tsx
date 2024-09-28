import { Text } from '@chakra-ui/react';
import { Card } from '../../../../components/Card';

export const EmailSent = () => (
  <Card title="Please check your inbox!">
    <Text>
      We sent you an email containing instructions on how to continue with your application. If you
      don't see the email, please check your spam folder.
    </Text>
    <Text>
      Please keep this email safe in your inbox, as it is the only way for you to get back to your
      application later on.
    </Text>
  </Card>
);
