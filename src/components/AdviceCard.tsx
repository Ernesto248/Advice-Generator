import { Slip } from "../type";

interface Props {
  slip: Slip;
  onClick: () => void;
}

const AdviceCard = ({ slip, onClick }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="relative w-full max-w-md p-6 mx-4 bg-slate-800 rounded-2xl shadow-xl">
        <h2 className="mb-4 text-sm font-bold tracking-widest text-center text-emerald-400 uppercase">
          Advice #{`${slip.id}`}
        </h2>
        <p className="mb-6 text-2xl font-bold text-center text-slate-200">
          "{`${slip.advice}`}"
        </p>
        <div className="flex items-center justify-center mb-6">
          <div className="w-full h-px bg-slate-600"></div>
          <div className="px-2">
            <div className="w-1 h-4 mx-1 bg-slate-200 inline-block"></div>
            <div className="w-1 h-4 mx-1 bg-slate-200 inline-block"></div>
          </div>
          <div className="w-full h-px bg-slate-600"></div>
        </div>
        <button
          onClick={onClick}
          className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-16 h-16 flex items-center justify-center bg-emerald-400 rounded-full hover:bg-emerald-300 transition-colors duration-300 shadow-lg"
          aria-label="Generate new advice"
        >
          <img
            className="w-8 h-8 text-slate-900"
            src="/icon-dice.svg"
            alt="icon dice"
          />
        </button>
      </div>
    </div>
  );
};
export default AdviceCard;

{
  /* <div className="relative flex flex-col items-center justify-center bg-slate-700 rounded-lg w-1/4 h-2/6 shadow-lg">
      <h6 className="absolute top-6 text-green-600 ">Advice #{`${slip.id}`}</h6>
      <p className="text-white border-b-2 border-slate-600 w-10/12 p-4 text-center">
        "{`${slip.advice}`}"
      </p>
      <button
        onClick={onClick}
        className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-16 h-16 flex items-center justify-center bg-emerald-400 rounded-full hover:bg-emerald-300 transition-colors duration-300 shadow-lg"
      >
        <img className="w-2/5" src="/icon-dice.svg" alt="icon dice" />
      </button>
    </div> */
}
