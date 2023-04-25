import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const CronJobAutoReminder: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Reminder</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial fitur cronjob untuk reminder
            cicilan pada website kami. Fitur ini dirancang untuk membantu
            pengguna kami dalam mengingatkan pembayaran cicilan dengan lebih
            mudah dan efektif.
          </p>
          <p>
            Dengan menggunakan fitur cronjob ini, Anda dapat dengan mudah
            mengatur sistem untuk mengirimkan pengingat pembayaran cicilan
            secara otomatis pada waktu yang telah ditentukan. Fitur ini dapat
            membantu Anda menghemat waktu dan upaya dalam mengingatkan
            pembayaran cicilan, serta memastikan bahwa pengguna kami selalu
            mendapatkan pengingat pembayaran tepat waktu.
          </p>
          <p>
            Kami berharap fitur ini dapat membantu meningkatkan efisiensi dan
            efektivitas dalam pengelolaan pembayaran cicilan pada website kami.
            Jangan ragu untuk mengikuti langkah-langkah yang akan kami berikan
            untuk menggunakan fitur ini dengan mudah dan efektif. Terima kasih
            telah menggunakan website kami, dan selamat mencoba!
          </p>
        </div>

        <div>
          <h2>Logic</h2>
          <p>
            Sistem akan menyeleksi data di installment progress untuk reminder
            murid berdasarkan termin yang berlaku.
          </p>
          <h4>Pseudo Code</h4>
          <p>
            Berikut merupakan pseudo code untuk logika cronjob auto reminder
          </p>
          <div className="mockup-code">
            <pre>
              <code>
                1. Ambil data dari installment progress. {"\n "} 2. Ambil termin
                terpilih berdasarkan parameter dari installment progress.{" "}
                {"\n "} 3. Check tipe kelas, apabila private apabila private{" "}
                {"\n "} maka parameter berdasarkan sesi dan apabila regular maka{" "}
                {"\n "} parameter berdasarkan tanggal. {"\n "} 4. Lakukan
                penyesuaian step tergantung parameter yang terpilih. {"\n "} 5.
                Kirim pesan ke guru ataupun murid dan update step di installment
                progress{"\n "} serta create new data di installment progress
                list.
              </code>
            </pre>
          </div>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default CronJobAutoReminder;
