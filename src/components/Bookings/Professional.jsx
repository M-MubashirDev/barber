import ProfessionalBar from "./ProfessionalBar";
import LinksBar from "./LinksBar";
import { useProfessionals } from "./Hooks/useProfessionals";
import Spinner from "../Spinner";

function Professional() {
  const { professionData, isPending } = useProfessionals();
  if (professionData)
    sessionStorage.setItem("professionaldata", JSON.stringify(professionData));
  if (isPending) return <Spinner />;
  return (
    <section className="max-w-[1440px]   mx-auto w-[90%]">
      <LinksBar />
      <h1 className="booking-h1">Choose a professional</h1>
      {professionData ? (
        <div className="grid md:grid-cols-2 gap-8">
          {professionData?.map((val) => (
            <ProfessionalBar data={val} key={val._id} />
          ))}
        </div>
      ) : (
        <div className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h1 className="text-2xl sm:text-4xl text-[#523939] font-semibold">
            There is not currently available professionals
          </h1>
        </div>
      )}
    </section>
  );
}

export default Professional;
