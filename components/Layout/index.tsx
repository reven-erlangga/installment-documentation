import { Inter } from "next/font/google";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, ...props }: Props) => {
  return (
    <main className={`min-h-screen `}>
      <div
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        <div className="z-10 w-full items-center justify-between font-mono text-sm">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
