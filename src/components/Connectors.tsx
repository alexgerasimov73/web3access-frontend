import { OpenloginLoginParams } from '@web3auth/openlogin-adapter';
import { sepolia } from 'viem/chains';
import { useConnect } from 'wagmi';
import { Web3AuthConnectorInstance } from '../providers/ChainProvider/Web3AuthConnectorInstance';

export const enum ConnectorNames {
  MetaMask = 'MetaMask',
  Web3Auth = 'Web3Auth',
}

interface SingleValueFormType {
  readonly emailAddress: string;
}

export const Connectors = () => {
  const { connect, connectors } = useConnect();

  const connectWithWeb3Auth = (options?: OpenloginLoginParams) =>
    connect({ connector: Web3AuthConnectorInstance(sepolia, options) });

  const loginWithGoogle = () => connectWithWeb3Auth();

  const loginWithLinkedIn = () => connectWithWeb3Auth({ loginProvider: 'linkedin' });

  const loginWithEmail = ({ emailAddress }: SingleValueFormType) =>
    connectWithWeb3Auth({ loginProvider: 'email_passwordless', login_hint: emailAddress });

  const loginWithMetaMask = () => {
    // We use this way of connecting because when we try to use the connect method with MetaMaskConnector,
    // MetaMaskConnector doesn't save data about the connection in localStorage.
    connectors.map((connector) => {
      console.log('connector', connector);
      if (connector.name === ConnectorNames.MetaMask) {
        connect({ connector });
      }
    });
  };

  return (
    <div className="Connectors">
      <div>
        <h3>Sign in</h3>
        <p>Your wallet with one click</p>
      </div>
      <div className="Buttons">
        <p>Continue with</p>
        <button onClick={loginWithGoogle}>Google</button>
        <button onClick={loginWithLinkedIn}>LinkedIn</button>
      </div>

      <form>
        <div>
          <label>Email</label>
          <input type="string" name="emailAddress" placeholder="E.g. hello@example.com" />
        </div>
        <button type="submit">Continue with Email</button>
      </form>

      <div className="wallet">
        <p>External wallet</p>
        <button onClick={loginWithMetaMask}>Connect with MetaMask</button>
      </div>
    </div>
  );
};
