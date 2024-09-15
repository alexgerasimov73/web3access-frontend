interface Props {
  readonly label?: string;
}

// TODO: Implement good-looked spinner.
export const Loader = ({ label = 'Please wait...' }: Props) => (
  <div className="Loader">
    <span>{label}</span>
  </div>
);
