import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const CronJobAutoAddInstallment: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Menambahkan Data Cicilan</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial fitur cronjob menambahkan data
            cicilan otomatis ke database website kami. Fitur ini dirancang untuk
            membantu pengguna kami dalam mengelola data cicilan dengan lebih
            mudah dan efisien.
          </p>
          <p>
            Dengan menggunakan fitur ini, Anda dapat dengan mudah menambahkan
            data cicilan secara otomatis ke database website kami pada waktu
            yang telah ditentukan. Fitur cronjob ini dapat membantu Anda
            menghemat waktu dan upaya dalam mengelola data cicilan, dan
            memastikan bahwa data yang disimpan di database kami selalu terbaru
            dan akurat.
          </p>
          <p>
            Kami berharap fitur ini dapat membantu meningkatkan efisiensi
            pengelolaan data cicilan pada website kami. Jangan ragu untuk
            mengikuti langkah-langkah yang akan kami berikan untuk menggunakan
            fitur ini dengan mudah dan efektif. Terima kasih telah menggunakan
            website kami, dan selamat mencoba!
          </p>
        </div>

        <div>
          <h2>Crontab</h2>
          <p>
            Syntax untuk pengecekan menambahkan data cicilan dilakukan setiap
            hari jamn 1 pagi
          </p>
        </div>

        <div>
          <h2>Logic</h2>
          <p>
            Sistem akan menyeleksi data yang ada di view installment recap untuk
            kemudian dimasukan ke table installment progress.
          </p>
          <h4>Pseudo Code</h4>
          <p>
            Berikut merupakan pseudo code untuk logika cronjob auto add
            installment progress
          </p>
          <div className="mockup-code">
            <pre>
              <code>
                1. Check apakah konfigurasi auto reminder sudah aktif. {"\n "}{" "}
                2. Apabila tidak aktif maka proses selesai. {"\n "} 3. Apabila
                aktif, maka ambil data di view installment recap {"\n "} dengan
                kondisi have_in_installment_progress bernilai false. {"\n "} 4.
                Ambil absent pertama kali pada data installment recap. {"\n "}{" "}
                5. Ambil total absent pada data installment recap. {"\n "} 6.
                Ambil keseluruhan termin dengan kondisi kelas dan periode{"\n "}{" "}
                belajar sesuai dengan recap. {"\n "} 7. Jika installment recap
                kelas private maka lakukan pengecekan {"\n "} berdasarkan batas
                total sesi, apabila total absent lebih besar sama dengan {"\n "}{" "}
                total sesi. Sedangkan jika kelas regular maka di check apakah
                {"\n "} sudah melewati masa penagihan (due date - 7 hari).
                {"\n "} 8. Masukan semua data di installment recap ke
                installment progress{"\n "} mulai dari (nominal, payment,
                termin).
                {"\n "}{" "}
              </code>
            </pre>
          </div>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default CronJobAutoAddInstallment;
