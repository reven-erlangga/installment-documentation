import LayoutDashboard from "@/components/LayoutDashboard";
import { NextPage } from "next";

interface Props {}

const Installment: NextPage<Props> = () => {
  return (
    <LayoutDashboard>
      <article className="prose text-justify">
        <h1>Cicilan</h1>
        <h2>Pendahuluan</h2>
        <p>
          Halo! Selamat datang di tutorial fitur terbaru di website cicilan.
          Kami senang bisa memperkenalkan fitur baru ini kepada Anda dan
          berharap dapat membantu meningkatkan pengalaman penggunaan website
          kami. Fitur terbaru yang kami perkenalkan adalah master data cicilan.
          Fitur ini dirancang untuk melakukan management data cicilan.
        </p>

        <h2>Tujuan Fitur</h2>
        <ul>
          <li>Management data cicilan</li>
          <li>Mengetahui total dan kekurangan pembayaran murid</li>
          <li>Mengetahui termin yang sedang berjalan</li>
        </ul>

        <h2>Membuat Cicilan</h2>
      </article>
    </LayoutDashboard>
  );
};

export default Installment;
