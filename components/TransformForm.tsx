"use client";

import { useState } from "react";
import Box from "./UI/Box";
import Select from "./UI/Select";
import clsx from "clsx";
import { FormState } from "@/types";

const TransformForm = () => {
    const artists = [
        {
            id: 1,
            name: "Anuel",
            photo: "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/OC4NSXVPJ5E3RD4RU62UWWFJRI.png",
        },
        {
            id: 2,
            name: "Young Miko",
            photo: "https://telemedellin.tv/wp-content/uploads/2023/03/Young-Miko-trapera-internacional-karol-g.jpg",
        },
        {
            id: 3,
            name: "Maria Becerra",
            photo: "https://www.nexofin.com/archivos/2022/06/maria-becerra1.jpg",
        },
    ];

    const [isDragOver, setIsDragOver] = useState(false);
    const [fileName, setFileName] = useState("");
    const [form, setForm] = useState<FormState>({
        artist: {
            id: 1,
            name: "Anuel",
            photo: "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/OC4NSXVPJ5E3RD4RU62UWWFJRI.png",
        },
        file: null,
    });
    console.log(form);
    const handleDragEnter = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files![0];
        if (file) {
            setFileName(file.name);
            setForm((prev) => ({ ...prev, file: file }));
        } else {
            setFileName("");
        }
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("FILE UPLOADED");
        console.log(JSON.stringify(form));
    };

    return (
        <form onSubmit={handleFormSubmit} className="flex gap-[60px] relative">
            <Box className="bg-mygreen" title="Your Song" key={1}>
                <div
                    className={clsx(
                        "relative border-[3px] border-myblack w-full rounded-[32px] bg-mywhite w-full h-full flex justify-center items-center px-14 px-12 text-center max-h-24 relative",
                        isDragOver ? "border-dashed" : "border-solid"
                    )}
                >
                    <label
                        htmlFor="uploadFile"
                        className="text-xl font-normal z-10"
                    >
                        {!fileName ? (
                            <span>
                                <span className="font-bold cursor-pointer">
                                    Click to Upload{" "}
                                </span>
                                <span>or drag and drop</span>
                            </span>
                        ) : (
                            <span>{fileName}</span>
                        )}
                    </label>
                    <input
                        id="uploadFile"
                        type="file"
                        onDrop={(e) => {
                            setIsDragOver(false);
                        }}
                        className="w-full h-full text-sm opacity-0 absolute bg-gray-400 left-0 top-0 z-20 cursor-pointer z-30"
                        onDragEnter={handleDragEnter}
                        onDragOver={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onChange={handleFileUpload}
                    />
                </div>
            </Box>
            <Box className="bg-myfucsia" title="Artist" key={2}>
                <div
                    className={clsx(
                        "bg-mywhite border-[3px] border-myblack w-full rounded-[32px] text-center py-3 h-24"
                    )}
                >
                    <Select
                        selectedArtist={form.artist}
                        setSelectedArtist={setForm}
                        artists={artists}
                    />
                </div>
            </Box>
            <button
                type="submit"
                className="bg-myblack w-8/12 mx-auto left-0 right-0 bottom-12 rounded-[20px] absolute text-mywhite text-2xl h-[70px] font-normal z-10"
            >
                Transform
            </button>
        </form>
    );
};
export default TransformForm;
