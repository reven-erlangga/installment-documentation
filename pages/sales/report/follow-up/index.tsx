import LayoutDashboard from "@/components/LayoutDashboard";
import { NextPage } from "next";

interface Props {}

const ReportFollowUp: NextPage<Props> = () => {
  return (
    <LayoutDashboard>
      <article className="prose text-justify">
        <h1>Report Follow Up</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Fitur Report Follow Up adalah salah satu fitur baru yang ditambahkan
            ke dalam website cicilan. Fitur ini memungkinkan pengguna untuk
            menghasilkan laporan yang berisi data dari berbagai aspek yang
            relevan dengan aktivitas follow up di dalam website. Fitur ini
            biasanya digunakan oleh team sales untuk memantau cicilan dan
            statistik dari murid.
          </p>
          <p>
            Dengan Fitur Report Follow Up, pengguna dapat memilih kategori data
            yang ingin mereka lihat dalam laporan, seperti total pembayaran,
            sisa pembayaran yang belum lunas, status pembayaran, atau detail
            dari murid yang bersangkutan.
          </p>
          <p>
            Fitur ini juga dilengkapi dengan berbagai opsi untuk memfilter atau
            mengatur data dalam laporan, seperti menentukan periode waktu
            tertentu, memilih jenis data sebagai filtering dalam reporting
            follow up. Fitur Report Follow Up dapat membantu pengguna untuk
            mengidentifikasi siapa yang bertanggung jawab dalam melakukan follow
            up murid cicilan.
          </p>
        </div>
        <div>
          <h2>Fitur</h2>
          <ul>
            <li>Report To PDF</li>
            <li>Filtering Data</li>
            <li>Percentage Report</li>
          </ul>
        </div>
        <div>
          <h2>Report Follow Up</h2>
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default ReportFollowUp;
