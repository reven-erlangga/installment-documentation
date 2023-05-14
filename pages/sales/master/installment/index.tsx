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

        <div>
          <h2>Membuat Cicilan</h2>
          <p>
            Apabila terdapat murid yang tidak terdaftar di aplikasi Golden
            English / di luar aplikasi. Anda dapat memasukan data tersebut ke
            dalam fitur buat data cicilan agar murid mendapatkan reminder
            otomatis seperti murid lainnya yang terdaftar di aplikasi.
          </p>
          <div>
            <div className="mockup-window border border-base-300">
              <div className="flex justify-center"></div>
              <iframe
                src="https://scribehow.com/embed/Workflow__p8QGhVciQqSjrZFrv_nkJQ"
                width="100%"
                height="640"
              ></iframe>
            </div>
          </div>

          <div>
            <h2>Melihat Data Cicilan</h2>
            <p>Opsi untuk show data cicilan yang telah dibuat sebelumnya.</p>

            <div className="mockup-window border border-base-300">
              <div className="flex justify-center"></div>
              <iframe
                src="https://scribehow.com/embed/Melihat_Data_Cicilan__TyN7j06DRtGKqK5YayNI8g"
                width="100%"
                height="640"
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <h2>Mengubah Data Cicilan</h2>
          <p>
            Apabila terdapat ketidak cocokan data yang telah di daftarkan di
            website cicilan, pengguna dapat mengubah data tersebut dan
            menyesuaikannya sesuai dengan data yang benar.
          </p>

          <div className="mockup-window border border-base-300">
            <div className="flex justify-center"></div>
            <iframe
              src="https://scribehow.com/embed/Mengubah_Data_Cicilan__S6jmVBZMQzmX7hcdXunA1w"
              width="100%"
              height="640"
            ></iframe>
          </div>
        </div>

        <div>
          <h2>Active / Deactive Data Cicilan</h2>
          <p>
            Aksi ini dilakukan untuk mengaktifkan / menonaktifkan data cicilan
            saat proses pengecekan data follow up. Apabila data yang diberikan
            memerlukan revisi atau masih belum pasti anda dapat menonaktifkan
            data ini untuk tidak dilakukan pengecekan follow up oleh sistem.
          </p>

          <div className="mockup-window border border-base-300">
            <div className="flex justify-center"></div>
            <iframe
              src="https://scribehow.com/embed/Active__Deactive_Data_Cicilan__MpOy0pysRxuRINaOEPEfhg"
              width="100%"
              height="640"
            ></iframe>
          </div>
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default Installment;
