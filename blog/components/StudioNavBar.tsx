import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

function StudioNavBar(props:any){
    return (
        <div>
            <div className="">
                <Link href = "/" className="text - [#F7AB0A] flex items-center">
                    <ArrowUturnLeftIcon className="h-0.5 w-0.5 text-[#F7AB0A] mr-2"/>
                    Go to Website
                    </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavBar