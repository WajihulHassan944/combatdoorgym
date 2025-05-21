import Image from "next/image";
import prp from "./../../public/images/prood6.png";
import Button from "./button";
import Link from "next/link";
export default function Palette() {
  return (
    <div className="bg-black p-6 w-full text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center my-12 md:my-16 gap-12">
          <div className="md:w-1/2">
            <div className="mb-16">
              <div className="flex items-center mb-2">
                <h2 className="text-5xl font-bold ">Compact Power </h2>
              </div>
              <h2 className="text-5xl font-bold ">with Zero Compromises</h2>
              <p className="mt-6 text-base opacity-90">
                One of the best things about the COMBAT DOOR GYM is how it
                redefines compact home gym expectations. You’re not losing power
                or performance just because {"you're"} saving space. You get the
                same sweat-dripping, core-burning intensity of a fight camp in a
                package that stores in a closet.
              </p>
              <p>
                And while other setups take an hour just to assemble, this one’s
                up and ready in minutes. Want to turn your living room into a
                conditioning arena? No problem. Want it out of sight before
                guests come over? Also no problem. It’s quiet. It’s clean. It
                works.
              </p>
            </div>
            <Link href="#product">
            <Button text="Buy Gym Door Bar" variant="dark" />
            </Link>
          </div>

          <div className="w-fullmd:w-2/3 flex mt-8 md:mt-0 relative gap-4 md:gap-0">
            <Image src={prp} alt="Palette" className="rounded-3xl w-full md:max-w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
