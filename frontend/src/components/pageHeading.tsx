interface Props {
  isSidebarActive: boolean;
  setIsSidebarActive: (tab: boolean) => void;
}
 
const PageHeading: React.FC<Props> = ({
  isSidebarActive,
  setIsSidebarActive,
}) => {
  return (
    <div className="flex justify-between gap-4 bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs">
      <h2 className="text-xl font-bold flex gap-2 grow">
        <span className="my-auto">Notifications</span>
        <span className="bg-dark-3 border border-light-1 rounded-md px-2 text-xs font-medium my-auto">
          33
        </span>
      </h2>

      <form
        action="#"
        className="flex border border-grey-3 bg-dark-1 rounded-md pl-2 py-1 my-auto"
      >
        <i className="fa-solid fa-magnifying-glass my-auto"></i>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for notifications"
          className="grow my-auto px-2 outline-none"
        />
      </form>

      <form
        action="#"
        className="bg-dark-1 border border-grey-3 rounded-md px-2 py-1"
      >
        <select name="" id="" className="outline-none bg-dark-1">
          <option value="#">Filter by Type</option>
          <option value="#">System notifications</option>
          <option value="#">Analysis notifications</option>
        </select>
      </form>

      <button
        className="flex gradient-1 gap-2 rounded-md pl-2 pr-3 py-1 text-black font-medium"
        onClick={(e) => {
          e.stopPropagation();
          setIsSidebarActive(true);
        }}
      >
        <i className="fa-solid fa-plus my-auto"></i>
        <span className="my-auto">Create notification</span>
      </button>
    </div>
  );
};

export default PageHeading;
