import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";
import Link from "next/link";

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
          <ul>
            <li>Check apakah konfigurasi auto reminder sudah aktif.</li>
            <li>Apabila tidak aktif maka proses selesai.</li>
            <li>
              Apabila aktif, cronjob akan mengambil data dari t_pembayaran dan
              juga installment untuk selanjutnya di tambupung di{" "}
              <b>v_rekap_installments</b>. View rekap installment merupakan view
              yang dibuat untuk menampung data yang sudah masuk proses
              penagihan.
              <Link
                href={`/programmer/database/view-installment`}
                className="text-blue-600"
              >
                <h4>Tampilkan SQL Query Installment Recap</h4>
              </Link>
            </li>
            <li>
              <p>
                Installment Progress / Proses Cicilan dibuat melalui kode yang
                di picu (trigger) oleh cronjob. Data akan diambil oleh sistem
                dan akan dimasukan ke installment progress sesuai dengan termin
                yang berlaku setiap hari jam 1 pagi.
                <h4>Cronjob Installment Progress Configuration</h4>
                <div className="mockup-code mt-2">
                  <pre>
                    <code>{`$schedule->command('sales:auto_add_installment_progress')`}</code>{" "}
                    <br />
                    <code className="ml-10">{`->daily()`}</code> <br />
                    <code className="ml-10">{`->at('01:00');`}</code>
                  </pre>
                </div>
              </p>
            </li>

            <li>
              Data tersebut akan ditampung oleh <b>queue</b> dengan tujuan agar
              data yang di proses bisa diantrikan (queue) untuk dijalankan
              nanti.
            </li>
            <li>
              Data yang ada diantrian akan dijalankan dengan fungsi queue
              melalui cronjob
              <h4>Cronjob Queue Configuration</h4>
              <div className="mockup-code mt-2">
                <pre>
                  <code>{`$schedule->command('queue:work --stop-when-empty')`}</code>{" "}
                  <br />
                  <code className="ml-10">{`->hourly()`}</code> <br />
                  <code className="ml-10">{`->withoutOverlapping();`}</code>
                </pre>
              </div>
            </li>
            <li>
              Data yang ada di installment progress atau bisa disebut juga
              sebagai murid follow up akan dilakukan follow up oleh admin yang
              bertanggung jawab.
            </li>
            <li>Ambil total absent pada data installment recap.</li>
            <li>
              Ambil keseluruhan termin dengan kondisi kelas dan periode belajar
              sesuai dengan recap.
            </li>
            <li>
              Jika installment recap kelas private maka lakukan pengecekan
              berdasarkan batas total sesi, apabila total absent lebih besar
              sama dengan total sesi. Sedangkan jika kelas regular maka di check
              apakah sudah melewati masa penagihan (due date - 7 hari).
            </li>
            <li>
              Masukan semua data di installment recap ke installment progress
              mulai dari (nominal, payment, termin).
            </li>
          </ul>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default CronJobAutoAddInstallment;
