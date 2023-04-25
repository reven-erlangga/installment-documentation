import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          By Reven Ferlian Erlangga
        </div>
      </div>

      <div className="relative place-items-center before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className="flex flex-col gap-4 place-items-center before:absolute ">
          <div className="mockup-code">
            <pre data-prefix="$" className="mb-2">
              <code>npm i --save installment-documentation@latest</code>
            </pre>
            <pre data-prefix=">" className="text-warning mb-2">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success mb-2">
              <code>Done! 😎</code>
            </pre>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/reven-erlangga" target="_blank">
              <button className="btn">
                <span className="whitespace-nowrap">Github</span>
              </button>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <button className="btn btn-secondary">Linkedin</button>
            </a>
            <a href="https://medium.com/@reven.erlangga" target="_blank">
              <button className="btn btn-accent">Medium</button>
            </a>
          </div>
        </div>
      </div>

      <div className=" mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left gap-4">
        <Link
          href={`/sales`}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sales{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm`}>
            Check installment website for sales dept.
          </p>
        </Link>

        <Link
          href={`/programmer`}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Programmer{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm`}>
            Check installment website for developer!
          </p>
        </Link>
      </div>
    </main>
  );
}
