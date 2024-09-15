import { useSwitchChain } from 'wagmi';

export const SwitchNetwork = () => {
  const { chains, switchChain } = useSwitchChain();

  const handleSwitchChain = (id: number) => () => switchChain({ chainId: id });

  return (
    <div className="SwitchNetwork">
      {chains.map((chain) => (
        <button
          key={chain.id}
          onClick={handleSwitchChain(chain.id)}>{`Switch to ${chain.name}`}</button>
      ))}
    </div>
  );
};
