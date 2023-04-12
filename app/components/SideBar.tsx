import { RxDashboard } from "react-icons/rx";
import { SlMusicToneAlt } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

const icons = [
    { path: "/", Icon: RxDashboard },
    { path: "/songs", Icon: SlMusicToneAlt },
    { path: "/profile", Icon: BsPerson },
    { path: "/liked", Icon: FiHeart },
    { path: "/settings", Icon: IoSettingsOutline },
];

export default function SideBar() {
    return (
        <aside className="h-screen w-50">
            <nav className="h-full w-[145px] flex items-center justify-center">
                <div className="flex flex-col gap-20">
                    {icons.map((icon) => {
                        return (
                            <Link
                                href={icon.path}
                                className="hover:scale-125 duration-300"
                            >
                                {<icon.Icon size={32} />}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
