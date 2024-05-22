import Image from "next/image";
import Link from "next/link";

function Header(){
    return(
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-3">
            <div>
                <Link href = "/">
                   <Image
                     className=" rounded-full"
                     src = "https://github.com/mansi104-ai"
                     width = {50}
                     height= {50}
                     alt = "Logo"
                />
                </Link>
                <h1>GITHUB LINK</h1>
            </div>

            <div></div>
        </header>
    )
}

export default Header;