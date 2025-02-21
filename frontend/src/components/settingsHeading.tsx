interface Props {
  setActiveTab: (tab: boolean) => void;
}

const SettingsHeading: React.FC<Props> = ({ setActiveTab }) => {
  return (
    <div className="bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs">
      <h2 className="text-xl font-bold flex gap-4 grow">
        <span className="my-auto">Subscription</span>
        <span className="bg-dark-3 border border-light-1 rounded-md px-2 text-xs font-medium my-auto">
          Current Plan - Basic Plan
        </span>
      </h2>
      <p className="mt-1">Unlock your edge with DexBot Pro.</p>
    </div>
  );
};

export default SettingsHeading;
