import Image from "next/image"
import Link from "next/link";
import GetStarted from "@/components/GetStarted";

export default function Home() {

  return (
    <div className="h-full flex flex-col items-center justify-center relative px-4 mb-3">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Image className="rounded-full" alt="brc-logo" src="/b.gif" width={300} height={300}/>
            </div>
            <h2 className="text-4xl font-bold mb-4">Trusted Partner in Insolvency and Bankruptcy</h2>
            <p className="text-lg text-gray-700">A strategic leader with wholesome experience in asset reconstruction business.
              Worked with leading Non Banking Finance Companies and first Private Sector Asset Reconstruction Company. Partnered with lawyers in drafting revival or recovery plans for Corporate through erstwhile forums like BIFR, AAIFR.</p>
            <p className="text-lg text-gray-700 mt-4">I have worked majorly with first generation entrepreneurs over three decades. Instrumental in restructuring and rescheduling debts, repayments, raising funds and renegotiating
              contracts with leading Financial Institutes of India.</p>
            <p className="m-2">Registration Number: IBBI/IPA-002/IP/N00877/2019 -2020/12806</p>
            <div className="flex flex-col w-2/3 md:w-1/4 justify-center mx-auto">
              <button className="text-white font-bold py-2 px-4 rounded bg-[#2e7a84] mt-4">
                <Link href='https://ibbi.gov.in/en/insolvency-professional/details?fieldid=NDA4NA%3D%3D&type=IP_Details' target="_blank">IBBI Profile</Link>
              </button>
              <button className="text-white font-bold py-2 px-4 rounded bg-[#2e7a84] mt-4">
                <Link href='https://in.linkedin.com/in/bishwaranjan-chatterjee-1029354' target="_blank">LinkedIn Profile</Link>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="mt-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Insolvency Services</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="p-6 w-[22rem] bg-[#2e7a84] rounded-lg">
                <h3 className="text-xl font-semibold mb h-16">Personal Insolvency</h3>
              </div>
              <div className="p-6 w-[22rem] bg-[#2e7a84] rounded-lg">
                <h3 className="text-xl font-semibold h-16">Corporate Insolvency</h3>

              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Consultancy Services</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="p-6 w-[22rem] bg-[#2e7a84] rounded-lg">
                <h3 className="text-xl font-semibold mb-4 h-16">Stressed Assets and Turnaround Management</h3>
                <p className="text-gray-900 font-bold text-lg">Experienced in dealing with Stressed Assets and Companies which are undergoing stress in their operations, and can help them by restructuring their debts, rescheduling of loans and One Time Settlement with Banks and Financial Institutions. Also interim management to companies undergoing transformation.</p>
              </div>
              <div className="p-6 w-[22rem] bg-[#2e7a84] rounded-lg">
                <h3 className="text-xl font-semibold mb-4 h-16">Fund Raising</h3>
                <p className="text-gray-900 font-bold text-lg">Raising Funds for Stressed Corporates and Green Field projects.</p>
              </div>
              <div className="p-6 w-[22rem] bg-[#2e7a84] rounded-lg">
                <h3 className="text-xl font-semibold mb-4 h-16">Commercial Litigation & Arbitration</h3>
                <p className="text-gray-900 font-bold text-lg">Advising our clients on matters connected with DRT, DRAT, related to RDDFI Act, and SARFAESI Act, including drafting of DRT and DRAT suits, replies, counter –suits, writ Petitions etc. Advising clients on alternative dispute resolution mechanisms, mediation and arbitration.</p>
              </div>
              <div className="p-6 w-[22rem] bg-[#2e7a84] rounded-lg">
                <h3 className="text-xl font-semibold mb-4 h-16">Second Opinion</h3>
                <p className="text-gray-900 font-bold text-lg">Stressed asset resoultion and insolvency process for both personal and corporate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetStarted />


    </div>
  );
}
