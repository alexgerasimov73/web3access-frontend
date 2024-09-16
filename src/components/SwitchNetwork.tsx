import { useChainId, useSwitchChain } from 'wagmi';

export const SwitchNetwork = () => {
  const chainId = useChainId();
  const { chains, switchChain } = useSwitchChain();

  const handleSwitchChain = (id: number) => () => switchChain({ chainId: id });

  return (
    <div className="SwitchNetwork">
      <h2>Switch Network</h2>
      <p>Connected to {chainId}</p>
      {chains.map((chain) => (
        <button
          key={chain.id}
          onClick={handleSwitchChain(chain.id)}>{`Switch to ${chain.name}`}</button>
      ))}
    </div>
  );
};
