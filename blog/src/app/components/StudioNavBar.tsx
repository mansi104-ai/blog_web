import Link from "next/link";
import myTheme from "../../../theme";
// 'use client'
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavBar(props: any) {
  return (
    <div className="flex items-center justify-between p-5">
      <Link href="/" className="text-[#F7AB0A] flex items-center">
        <ArrowUturnLeftIcon
          className="h-{6} w-{10} text-[#F7AB0A]" // Maintain size and color
          style={{ fontSize: "1rem" }} // Adjust size using fontSize
        />
        Go to Website
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavBar;
