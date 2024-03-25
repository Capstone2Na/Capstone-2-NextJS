import Image from "next/image";
import Link from "next/link";
import { appLabels } from "./appLabels";

export default function Home() {
  // useEffect(() => {
  //   console.log(process.env.NEXT_PUBLIC_API_TOKEN);
  // });
  return (
    <main className="content mx-auto h-full max-h-full overflow-y-auto">
      <div className="flex flex-col pt-6">
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-center">
            Welcome to{" "}
            <span className="text-4xl font-bold">{appLabels.title}</span>
          </h1>
          <h2 className="text-sm font-semibold text-center">
            {appLabels.tagLine}
          </h2>
          <div className="my-4  h-60 border content items-center">
            <span className="text-green-500">
              Header Image: Image of a modern smart home with water management
              system installed
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm font-base">
            At HydroSync, we believe in empowering homeowners with smart
            technology to efficiently manage their water usage and ensure water
            quality. Our IoT Water Management System provides real-time
            monitoring and control features, allowing you to track water quality
            parameters, monitor usage, and water flow—all from the convenience
            of your mobile device in real time.
          </p>
        </div>
      </div>
    </main>
  );
}
