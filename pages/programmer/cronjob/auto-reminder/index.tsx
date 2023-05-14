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
          <h2>Crontab</h2>
          <p>
            Syntax untuk pengecekan menambahkan data cicilan dilakukan setiap
            hari jam 4 pagi dan di delay 6 jam kedepan. Delay digunakan agar
            pesan whatsapp tidak masuk jam 4 pagi ke customer.
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
          <ul>
            <li>Ambil data dari installment progress.</li>
            <li>
              Ambil termin terpilih berdasarkan parameter dari installment
              progress.
            </li>
            <li>
              Check tipe kelas, apabila private apabila private maka parameter
              berdasarkan sesi dan apabila regular maka parameter berdasarkan
              tanggal.
            </li>
            <li>
              Lakukan penyesuaian step tergantung parameter yang terpilih.
            </li>
            <li>
              Kirim pesan ke guru ataupun murid dan update step di installment
              progress serta create new data di installment progress list.
              <h4>Cronjob Send Reminder to Customer Configuration</h4>
              <div className="mockup-code mt-2">
                <pre>
                  <code>{`$schedule->command('sales:send_reminder_to_customers')`}</code>{" "}
                  <br />
                  <code className="ml-10">{`->daily()`}</code> <br />
                  <code className="ml-10">{`->at('04:00');`}</code>
                </pre>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default CronJobAutoReminder;
