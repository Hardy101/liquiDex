const SettingsAccount: React.FC = () => {
  return (
    <div className="bg-dark-2 border border-grey-3 rounded-xl text-light-1 text-xs">
      <div className="header p-3 border-b-2 border-grey-3">
        <h2 className="text-xl font-bold mb-2 flex gap-4 grow">
          Account Settings
        </h2>
        <p>Update your personal details and settings here</p>
      </div>
      <form action="#" className="grid gap-3 px-3 py-4">
        <div className="form-control flex justify-between border-b-2 border-dark-3 pb-4">
          <span className="text-grey-2 text-sm">Profile</span>
          <div className="w-3/4 grid grid-cols-2 gap-y-2 gap-x-8">
            <label htmlFor="name">Name</label>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="<FirstName> <LastName>"
              className="bg-dark-1 rounded-md p-2 border border-grey-3 outline-none"
            />
            <input
              type="email"
              placeholder="Jonsnow@winter.fell"
              className="bg-dark-1 rounded-md p-2 border border-grey-3 outline-none"
            />
          </div>
        </div>
        <div className="form-control flex justify-between">
          <span className="text-grey-2 text-sm">Location</span>
          <div className="w-3/4 grid grid-cols-2 gap-y-2 gap-x-8">
            <label htmlFor="name">City</label>
            <label htmlFor="email">Country</label>
            <input
              type="text"
              placeholder="winterfell"
              className="bg-dark-1 rounded-md p-2 border border-grey-3 outline-none"
            />
            <input
              type="email"
              placeholder="kingslanding"
              className="bg-dark-1 rounded-md p-2 border border-grey-3 outline-none"
            />
          </div>
        </div>
        <div className="form-control grid grid-cols-2 gap-3 mt-4">
          <button className="p-3 my-auto rounded-md bg-[#0C0C0C] border-1 border-grey-3">
            Cancel
          </button>
          <button className="p-3 my-auto rounded-md gradient-1 text-dark-1">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsAccount;
