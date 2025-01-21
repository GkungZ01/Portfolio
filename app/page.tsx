import Image from "next/image";
import profilePic from "@/public/profile.jpg";
import Typed from "@/components/Typed";

export default function Home() {
  return (
    <>
      <div className="relative w-full container mx-auto z-0">
        <section id="Home" className="flex justify-center items-center">
          <div className="md:w-[1200px] flex gap-4">
            <div className="inline-block select-none overflow-hidden rounded-full">
              <Image
                src={profilePic}
                alt="profile"
                style={{
                  width: "250px",
                  height: "250px",
                }}
                placeholder="blur"
              />
            </div>
            <div>
              test
              <Typed text="TEST|TEST2" />
            </div>
          </div>
        </section>
        <section id="Skill" className="">
          Skill
        </section>
      </div>
    </>
  );
}