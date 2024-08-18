/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GkAJb9nXwrK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function WarrantiesServicePlansHero() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Extended Warranty
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Breakdowns can happen at the most inconvenient times. Fortunately, we offer warranties that provide peace of mind and protect you from unexpected repair costs once your manufacturer&apos;s warranty has expired.
            <br />
            <br />
            Our warranty is a specialized insurance policy designed to cover your vehicle&apos;s parts and components in the event of a mechanical breakdown. We offer a range of options tailored to suit any vehicle, with premiums based on your vehicle&apos;s make, model, age, and mileage.
            <br />
            <br />
            Enjoy driving with confidence, knowing that you&apos;re covered no matter what happens on the road.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">Service Plan</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A service plan ensures your vehicle receives routine maintenance according to the original manufacturer&apos;s guidelines. This plan covers a set number of services to keep your vehicle in top condition.
            <br />
            You can choose from options that cover 2, 3 or 4 services, depending on your needs.
            <br />
            <br />
            <ul>
                <li>
                    <strong>For vehicles with an existing service or maintenance plan:</strong> Coverage begins once your current plan expires.
                </li>
                <li>
                    <strong>For vehicles without an existing service or maintenance plan:</strong> Coverage begins immediately upon purchase.
                </li>
            </ul>
            </p>
          </div>
        </div>
      </section>
    )
  }