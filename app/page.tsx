import { FaNodeJs } from "react-icons/fa";
import HomePage from "./HomePage";

async function getData() {
  // Import JSON as a module (bundled by Next.js)
  const json = await import("../public/data.json");
  return json.default;
}

export default async function Page() {
  let data: any;

  try {
    data = await getData();
  } catch (err) {
    console.error("Failed to load data.json:", err);
    data = null;
  }

  return (
    <>
      {data ? (
        <HomePage data={data} />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          <FaNodeJs size={100} className="animate-pulse" />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}
