function Duration({ heading, time, price }) {
  return (
    <div
      style={{ "--price": `"${price}"` }}
      className="border-[0.5px]  rounded-[20px] relative max-w-80 w-80 h-48  border-[#4F4F4F]"
    >
      {/* <div className="after:content-['20'] flex flex-col m-6  gap-3 after:absolute after:right-0 after:top-full after:font-semibold after:text-[18px]   after:leading-[21.94px]"> */}
      <div className="after:content-[var(--price)] after:text-center after:justify-center after:flex after:place-items-center after:text-white after:w-[100px] after:min-h-10 after:bg-[#523939] after:absolute  after:bottom-6 after:rounded-tl-[20px] after:rounded-bl-[20px] after:right-0  after:font-semibold after:text-[18px] flex flex-col m-6  gap-3  after:leading-[21.94px]">
        <h2 className="font-semibold text-[18px] leading-[21.94px]">
          {heading}
        </h2>
        <p className="uppercase font-semibold text-[18px] leading-[21.94px]">
          time:{" "}
          <span className="font-normal text-[18px] leading-[21.94px]">
            {time}
          </span>
        </p>
      </div>
    </div>
  );
}
export default Duration;
