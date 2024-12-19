function IconComponent({ src, text }) {
  return (
    <div
      className="text-brown-primary min-w-[calc(40vh)]
 min-h-[12rem] md:min-w-[14rem] md:min-h-[13rem] gap-4 flex   justify-center items-center flex-col  border-[#523939] border-[0.5px]"
    >
      <img src={src} alt="listen icon" />
      <p className="font-bold uppercase text-[24px] leading-[29.26px]">
        {text}
      </p>
    </div>
  );
}

export default IconComponent;
