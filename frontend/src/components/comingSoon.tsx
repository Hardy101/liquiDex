import Legendary from "../assets/legendary.gif";

const ComingSoon = () => {
  return (
    <>
      <div className="body grid gap-8">
        <div className="h-full text-light-1">
          <h1 className="text-2xl font-bold">Greatness Loading...</h1>
          <p className="text-grey-4">
            This page isnt available yet, we're still working on it. But stay
            tuned.
          </p>
          <p className="mt-4">
            <img src={Legendary} alt="legendary image" className="w-1/2"/>
          </p>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
