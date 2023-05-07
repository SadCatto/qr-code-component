/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

export default function QRComponent() {
  return (
    <div className="h-screen flex shrink-0 items-center justify-center">
      <div className="flex flex-col justify-start items-center bg-white w-[300px] rounded-ob">
        <div className="h-4/6 w-full p-3 rounded-md">
          <img src='/images/image-qr-code.png' alt="qr-code" className="h-full w-full rounded-lg"></img>
        </div>
        <div className="flex shrink-0 pt-2 w-[250px]">
          <h1 className="text-[#1f3251] font-bold font-outfit text-xl text-center mb-3">Improve your front-end skills by building projects</h1>
        </div>
        <div className="w-[250px] flex shrink-0">
          <h3 className="font-outfit leading-tight text-center font-[400] font-[15] text-[#7b879d] pt-2 pb-12">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h3>
        </div>
      </div>
    </div>
  )
}