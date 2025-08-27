// components/SchoolInformation.tsx
export default function SchoolInformation() {
  return (
    <section className="min-h-screen pt-28 items-center justify-between px-10 md:px-20 lg:px-28">
      <div className="mt-20 md:mt-24 w-full">
        <div className="flex flex-col-reverse gap-y-10 lg:flex-row-reverse justify-between items-center gap-x-[48px] m-auto mt-20">
          <div className="w-full lg:w-[45%]">
            <img
              className="w-full md:w-[500x] h-[300px] md:h-[420px] rounded-lg"
              src="/images/back2school.png"
              alt="about"
            />
          </div>
          <div className="w-full px-6 md:px-0 lg:w-[45%]">
            <p>
              Welcome to VES, we look forward to a cordial relationship with
              you.
            </p>
            <p>Please note the following:</p>
            <ul className="text-[#000000] space-y-[24px] list-disc font-[300] text-sm md:text-[16px] leading-[20px] md:leading-[20px]">
              <li>The school resumes at 7:30am and closes at 3:00pm prompt.</li>
              <li>
                The crèche operates between 7:00am and 5:00pm Monday through
                Friday. (We observe all public holidays)
              </li>
              <li>
                Your Pre-school child should come to school with the following:{" "}
                <br />
                • Adequate portion of breakfast, snacks, drinks and lunch.{" "}
                <br />
                • Trainer pants and diapers (4) sets, if your child is not
                toilet trained. <br />
                • Two sets of clothing, please include sweaters on rainy days.{" "}
                <br />
              </li>
              <li>
                You will be contacted via phone if your child falls ill while in
                school. In rare cases, your specified medical facility would be
                consulted. Note all medical bill is borne by parent.
              </li>
              <li>
                A child with illness/communicable infection must remain at home
                until fully recovered.
              </li>
              <li>
                Parents/guardian are expected to pick their children/ward on
                time. Your child will not be released to stranger unless after a
                verifiable phone call.
              </li>
              <li>
                Please note that all fees are to be paid on/before resumption
                date of every new term.
              </li>
              <li>You will receive periodical report of your children/ward.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
