import Alert, { Type } from "@/components/Alert";
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
          <div className="flex justify-center">
            <iframe
              src="https://scribehow.com/embed/Workflow__7LxDHrTnR9W7_mkwHfEAWw"
              width="100%"
              height="640"
            ></iframe>
          </div>
        </div>

        <div>
          <h2>Menghapus Termin</h2>
          <Alert
            type={Type.Error}
            message="Penghapusan termin hanya bisa dilakukan oleh team IT, karena akan mengakibatkan permasalahan pada data cicilan di termin yang berjalan lebih baik buat termin untuk menampung data baru terlebih dahulu dan apabila data lama sudah selesai semua cicilannya baru hapus data termin lama dan edit data termin yang dibuat."
          />
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default Term;
