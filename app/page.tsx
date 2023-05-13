import MainCard from "../components/MainCard";
import Button from "../components/UI/Button";
import TransformForm from "@/components/TransformForm/TransformForm";

export default function Home() {
    return (
        <MainCard className="flex justify-center items-center text-4xl font-bold px-[140px] flex-col">
            <header className="w-full border-b-[3px] border-myblack flex gap-5 justify-end py-5">
                <Button className="bg-mypink">Sign In</Button>
                <Button className="bg-mypurple">Sign Up</Button>
            </header>
            <div className="flex justify-start w-full my-12">
                <h1 className="font-PTmono text-7xl font-normal">
                    Your song. Any <br /> artist. Magic
                    <br /> created.
                </h1>
            </div>
            <TransformForm />
        </MainCard>
    );
}
