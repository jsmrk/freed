import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
  title: string;
  description: string;
}

const WelcomeCard = ({ imageSrc, title, description }: Props) => {
  return (
    <div className='mb-11 flex flex-col justify-center items-center bg-secondaryBackground p-7 sm:p-11 rounded-3xl'>
      <Image src={imageSrc} alt={title} height={70} width={70} />
      <h3 className='font-bold mt-3'>{title}</h3>
      <p className='text-sm mt-5 text-center'>{description}</p>
    </div>
  );
};

export default WelcomeCard;
