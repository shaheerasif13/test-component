import Image from "next/image";
import { OpenEnvelopSvg } from "./components/svgs";

export default function Home() {
  return (
    <main className="w-screen h-full bg-white flex justify-center items-center p-4 sm:p-10">
      <div className="bg-black w-full md:w-[85%] rounded-[40px] p-10 lg:p-20">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0">
          <div className="w-full lg:w-1/2 flex flex-col gap-7 justify-center lg:justify-start items-center lg:items-start">
            <div className="bg-blue-500 w-fit rounded-full text-white p-3">
              <OpenEnvelopSvg />
            </div>
            <h1 className="text-5xl text-center lg:text-start w-full xl:w-11/12">
              Keep up with the latest
            </h1>
            <p className="text-center lg:text-start">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6">
            <h2 className="text-2xl font-semibold">Stay up to date</h2>
            <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-4">
              <input
                type="text"
                placeholder="Your email"
                className="text-black outline-none px-6 py-3.5 rounded-full w-full sm:w-11/12 xl:w-2/3"
              />
              <button className="bg-blue-500 text-white px-2 py-3.5 rounded-full w-full sm:w-11/12 xl:w-1/3">
                Subscribe
              </button>
            </div>
            <p className="text-center xl:text-start">
              By subscribing you agree with our Privacy Policy
            </p>
          </div>
        </div>
        <hr className="opacity-50 my-10" />
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/3 flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start">
            <Image
              src="/logo.png"
              alt="Hero"
              width={200}
              height={200}
              objectFit="cover"
              className="rounded-[40px]"
            />
            <p className="text-opacity-50 text-white text-center lg:text-start w-full xl:w-11/12">
              Test yout IQ in a very easy and simple step not complex
            </p>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row justify-between items-center md:items-start px-10 lg:p-0 text-center md:text-start gap-6 md:gap-0">
            <ol className="w-fit flex flex-col gap-1 text-white text-opacity-50">
              <li className="text-white">IQTEST</li>
              <li>Quiz</li>
              <li>Results</li>
              <li>Pricing</li>
            </ol>
            <ol className="w-fit flex flex-col gap-1 text-white text-opacity-50">
              <li className="text-white">Support</li>
              <li>Help</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ol>
            <ol className="w-fit flex flex-col gap-1 text-white text-opacity-50">
              <li className="text-white">Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies Policy</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
