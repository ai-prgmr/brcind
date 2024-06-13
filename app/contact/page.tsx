import Link from "next/link";
import Image from "next/image";
const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-4 min-h-screen justify-center mx-auto">
      <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-4">
        <div className="relative isolate overflow-hidden bg-[#2e7a84] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#rdg)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="rdg">
                <stop stopColor="#75d684" />
                <stop offset={1} stopColor="#67e8f9" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Time to decompress, we are here for your
              <br />
              <b className="uppercase">Resolution</b>!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Connect with us today for your better tomorrow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <span className="text-md ml-3 flex flex-col items-center">
                <a href="mailto:brcind@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded inline-block" >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill='#ffffff' strokeWidth="1.5" stroke="#ffffff"
                    viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000" />
                  </svg></a>
                <hr className="h-1 w-7 my-2 bg-white border-2 " />
                <span className="text-white text-center">brcind@gmail.com</span>
              </span>
              <span className="text-md ml-3 flex flex-col items-center">
                <a href="tel:+919711401771" className="bg-blue-500 text-white font-bold rounded inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" fill='#007bff' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentcolor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" data-original="#000000" />
                  </svg>
                </a>
                <hr className="h-1 w-7 my-2 bg-white border-2 " />
                <span className="text-white text-center">+91 97114-01771</span>
              </span>
            </div>
          </div>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto py-12 lg:py-32">
            <h1 className="text-lg font-semibold text-center mb-4">Scan Me</h1>
            <Image className="mx-auto" src="/barcode.png" alt="qr code" width={200} height={200} />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
