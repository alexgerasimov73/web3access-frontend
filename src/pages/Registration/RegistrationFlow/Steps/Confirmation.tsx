import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/Card';

interface Props {
  readonly fullName: string;
}

export const Confirmation = ({ fullName }: Props) => (
  <Card title="Congratulations! 🎉">
    <Text>
      {fullName}, you’ve successfully completed the onboarding process and are all set to explore
      the platform.
    </Text>
    <Text>
      Welcome aboard, and thank you for joining <b>Web3Access</b>! Now, you're ready to dive into
      your personal dashboard, where you can manage your account and interact with our platform.
    </Text>
    <Text fontWeight="bold">Click the button below to get started!</Text>

    <Button size="lg">
      <Link to="/">To dashboard</Link>
    </Button>
  </Card>
);
