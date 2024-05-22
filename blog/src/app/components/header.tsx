import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-3">
      <div>
        <Link href="/">
          <Image
            className="rounded-full"
            src=""
            width={50}
            height={50}
            alt="Logo"
          />
        </Link>
        <h1>Code Deploying Squad Blog</h1>
      </div>

      <div className="flex flex-col space-y-2">
        <Link
          href="https://github.com/mansi104-ai"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Connect with me at Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/mansi-kalra-b46608252/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Connect with me at LinkedIn
        </Link>
      </div>
    </header>
  );
}

export default Header;