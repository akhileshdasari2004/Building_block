import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-400">
        A project by{" "}
        <a
          className="font-semibold text-white underline-offset-4 transition-colors hover:underline"
          href="https://twitter.com/steventey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akhil Dasari
        </a>
      </p>
      <a
        href="https://www.buymeacoffee.com/akhileshda9"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-6 py-2 transition-all duration-75 hover:scale-105"
      >
        <BuyMeACoffee className="h-6 w-6" />
        <p className="font-medium text-gray-300">Buy me a coffee</p>
      </a>
    </div>
  );
}
