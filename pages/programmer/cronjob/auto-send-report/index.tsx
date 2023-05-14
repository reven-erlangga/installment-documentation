import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const CronJobAutoSendReport: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Reminder</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial fitur cronjob untuk auto send
            report pada website kami. Fitur ini dirancang untuk membantu
            pengguna kami dalam mengelola laporan dengan lebih mudah dan
            efektif.
          </p>
          <p>
            Dengan menggunakan fitur cronjob ini, Anda dapat dengan mudah
            mengatur sistem untuk mengirimkan laporan secara otomatis pada waktu
            yang telah ditentukan. Fitur ini dapat membantu Anda menghemat waktu
            dan upaya dalam mengelola laporan, serta memastikan bahwa laporan
            yang dikirimkan selalu terbaru dan akurat.
          </p>
          <p>
            Kami berharap fitur ini dapat membantu meningkatkan efisiensi dan
            efektivitas dalam pengelolaan laporan pada website kami. Jangan ragu
            untuk mengikuti langkah-langkah yang akan kami berikan untuk
            menggunakan fitur ini dengan mudah dan efektif. Terima kasih telah
            menggunakan website kami, dan selamat mencoba!
          </p>
        </div>

        <div>
          <h2>Logic</h2>
          <p>
            Sistem akan mengirimkan log report setiap senin jam 4 pagi (weekly /
            mingguan) ke email IT. Log diambil dari catatan log di file{" "}
            <b>laravel.log </b>.<h4>Cronjob Send Report Configuration</h4>
            <div className="mockup-code mt-2">
              <pre>
                <code>{`$schedule->command('sales:send_logs')`}</code> <br />
                <code className="ml-10">{`->weeklyOn(1, '3:00')`}</code> <br />
              </pre>
            </div>
          </p>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default CronJobAutoSendReport;
