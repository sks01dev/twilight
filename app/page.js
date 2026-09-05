import FaListItem from "@/components/FaListItem";
import ButtonLogin from "../components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const userName = "Shivam";
  const priceItems = [
    "Collect customer feedback",
    "Unlimited boards",
    "Admin dashboard",
    "24/7 support",
  ];
  const faqItems = [
    {
      question: "How do I create a feedback board?",
      answer:
        "You can create a feedback board by logging in and navigating to the 'Boards' section.",
    },
    {
      question: "Can I customize the appearance of my feedback board?",
      answer:
        "Yes, you can customize the appearance of your feedback board using our built-in customization options.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, you can request a refund within 30 days of your purchase.",
    },
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-4">
          <div className="font-bold">Twilight</div>
          <div className="space-x-4 max-md:hidden">
            <a class="link link-hover">Pricing</a>
            <a class="link link-hover">Login</a>
          </div>
          <div>
            <ButtonLogin hasLoggedIn={isLoggedIn} name={userName} />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="text-center px-8 py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes. Share it with your customers and
          start collecting feedback.
        </div>
        <ButtonLogin hasLoggedIn={isLoggedIn} name={userName} />
      </section>

      {/* Pricing Section */}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto px-8 py-32">
          <p className="text-sm uppercase text-center font-medium text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Pricing that adapts to your needs
          </h2>
          <div className="bg-base-100 max-w-96 rounded-3xl p-8 space-y-6 mx-auto">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>
            {/* Price Items List */}
            <ul className="space-y-2">
              {priceItems.map((priceItem) => {
                return (
                  <li key={priceItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="text-green-600 size-4 inline-block mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {priceItem}
                  </li>
                );
              })}
            </ul>
            <ButtonLogin
              hasLoggedIn={isLoggedIn}
              name={userName}
              extraStyle={"w-full"}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto px-8 py-32">
          <p className="text-sm uppercase text-center font-medium text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <ul className="max-w-lg mx-auto">
            {faqItems.map((faqItem) => {
              return <FaListItem key={faqItem.question} faqItem={faqItem} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
