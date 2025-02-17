interface Props {
  activeBotTab: boolean;
  setActiveBotTab: (tab: boolean) => void;
}

const BotsHeading: React.FC<Props> = ({ activeBotTab, setActiveBotTab }) => {
  return (
    <div className="flex justify-between gap-4 sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs">
      <h2 className="text-xl font-bold flex gap-4 grow">
        <span className="my-auto">My Bots</span>
        <span className="bg-dark-3 border border-light-1 rounded-md px-2 text-xs font-medium my-auto">
          33 bots
        </span>
      </h2>

      <form
        action="#"
        className="flex border border-grey-3 bg-dark-1 rounded-md pl-2 py-1 my-auto"
      >
        <i className="lni lni-search-1 my-auto"></i>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for bots"
          className="grow my-auto px-2 outline-none"
        />
      </form>

      <form
        action="#"
        className="bg-dark-1 border border-grey-3 rounded-md px-2 py-1"
      >
        <select name="" id="" className="outline-none">
          <option value="#">Filter by Access</option>
        </select>
      </form>

      <button
        className="flex gradient-1 gap-2 rounded-md pl-2 pr-3 py-1 text-black font-medium"
        onClick={(e) => {
          e.stopPropagation();
          setActiveBotTab(true);
        }}
      >
        <i className="lni lni-plus my-auto"></i>
        <span className="my-auto">Create new bot</span>
      </button>
    </div>
  );
};

export default BotsHeading;
