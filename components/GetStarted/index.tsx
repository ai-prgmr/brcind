export default function GetStarted() {
  return (
    <section className="my-10 py-16 bg-[#2e7a84] rounded-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-semibold text-2xl mb-4 lg:mb-0">
              Have a question? Get in touch!
            </h2>
          </div>
          <div className="flex justify-center lg:justify-end">
            <a
              href="/contact"
              className="text-white font-bold w-2/3 p-2 text-center rounded bg-[#0f89cb]"
            >
              Contact Me Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
