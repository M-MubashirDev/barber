function ProfessionalBar() {
  return (
    <div className="uppercase flex  items-center gap-6  border-[#4F4F4F] border-[0.5px] rounded-[100px] px-2 py-2 max-w-[45%]">
      <img src="/imgCircle.png" alt="barber" className="max-w-20" />
      <div>
        <p className="font-semibold text-[20px] uppercase leading-[29.26px]">
          jay w.
        </p>
        <p className="font-semibold text-[18px] leading-[24.38px] text-left">
          availabilty:{" "}
          <span className=" italic font-medium text-left">today</span>{" "}
        </p>
      </div>
    </div>
  );
}
// srcs ? srcs : "imgCircle.png"
export default ProfessionalBar;
