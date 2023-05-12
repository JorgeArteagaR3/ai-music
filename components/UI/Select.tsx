"use client";
import { Artist, FormState } from "@/types";
import clsx from "clsx";
import { SetStateAction, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdSearch } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
const Select = ({
    artists,
    selectedArtist,
    setSelectedArtist,
}: {
    artists: Artist[];
    selectedArtist: Artist;
    setSelectedArtist: (value: SetStateAction<FormState>) => void;
}) => {
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const chooseArtist = ({ artist }: { artist: Artist }) => {
        setIsOpen(false);
        setSelectedArtist((prevState) => ({ ...prevState, artist }));
        setSearchValue("");
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const filteredArtists: Artist[] = artists.filter((artist) => {
        const lowerCasedName = artist.name.toLowerCase();
        return lowerCasedName.includes(searchValue);
    });

    useEffect(() => {
        setTimeout(() => {
            setSearchValue("");
        }, 300);
    }, [isOpen]);
    return (
        <div className="relative">
            <div
                className="flex justify-center gap-2 items-center cursor-pointer"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img
                        src={selectedArtist.photo}
                        className="h-full w-full object-cover"
                    />
                </div>

                <span className="font-normal text-xl">
                    {selectedArtist.name}
                </span>
                <MdOutlineKeyboardArrowDown />
            </div>
            <ul
                className={clsx(
                    "absolute mx-auto w-9/12 bottom-100 left-0 right-0 border-[2px] border-myblack text-xl bg-mywhite rounded-lg duration-300 z-20 overflow-hidden",
                    isOpen ? "visible opacity-1" : "invisible opacity-0 "
                )}
            >
                <div className="w-11/12 bg-gray-200 flex items-center mx-auto my-2 py-2 px-4 rounded-lg">
                    <MdSearch color="#0D1821" />
                    <input
                        className="all:unset outline-none w-full bg-transparent px-2 text-myblack font-normal text-base"
                        placeholder="Search"
                        value={searchValue}
                        type="text"
                        onChange={handleSearch}
                    />
                    <AiFillCloseCircle
                        color="#0D1821"
                        className="cursor-pointer"
                        size={24}
                        onClick={() => setSearchValue("")}
                    />
                </div>
                {filteredArtists.map((artist) => (
                    <li
                        className={clsx(
                            "hover:bg-primary cursor-pointer py-1.5 hover:text-myfucsia duration-200 font-normal",
                            selectedArtist.id === artist.id
                                ? "bg-primary text-myfucsia"
                                : ""
                        )}
                        onClick={() => chooseArtist({ artist })}
                        key={artist.name}
                    >
                        {artist.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Select;
