import LayoutDashboard from "@/components/LayoutDashboard";
import { NextPage } from "next";

interface Props {}

const Term: NextPage<Props> = () => {
  return (
    <LayoutDashboard>
      <article className="prose text-justify">
        <h1>Termin</h1>
        <h2>Pendahuluan</h2>
        <p>
          Master data termin digunakan untuk melakukan segala macam terkait
          batasan pembayaran (payment). Anda dapat mengatur sendiri kelas dengan
          batasan penagihan yang berbeda-beda tergantung kebijakan yang ada.
        </p>

        <h2>Membuat Termin</h2>
        <p>Silahkan cermati proses membuat termin dibawah ini.</p>
        <div className="mockup-window border border-base-300">
          <div className="flex justify-center">
            <iframe
              className="h-[32rem] w-full"
              src="https://scribehow.com/embed/Bagaimana_Membuat_Payment_Term__EDuNRB21SgON-Y3Q27xR3w"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h2>Memperbaharui Termin</h2>
        <p>Silahkan cermati proses memperbaharui termin dibawah ini.</p>
        <div className="mockup-window border border-base-300">
          <div className="flex justify-center"></div>
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default Term;
