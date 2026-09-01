import Image from "next/image";
import ButtonLogin from "../components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const userName = "Shivam";
  return (
    <main>
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
    </main>
  );
}
