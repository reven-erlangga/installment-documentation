import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const LogicReminder: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Reminder Logic</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial fitur reminder logic pada website
            kami. Fitur ini adalah salah satu fitur yang sangat berguna dalam
            membantu pengguna kami untuk mengingatkan dan mengatur tugas atau
            aktivitas yang perlu dilakukan.
          </p>
          <p>
            Fitur reminder logic pada website kami memungkinkan pengguna untuk
            menambahkan tugas atau aktivitas yang perlu dilakukan pada jadwal
            tertentu, dan sistem kami akan mengirimkan pengingat pada waktu yang
            telah ditentukan. Dengan menggunakan fitur ini, pengguna dapat
            mengatur jadwal tugas dan aktivitas dengan lebih mudah dan efisien,
            dan memastikan bahwa tidak ada tugas yang terlupakan.
          </p>
          <p>
            Fitur reminder logic kami dirancang dengan user-friendly interface
            dan mudah digunakan, sehingga pengguna dapat dengan mudah
            menambahkan dan mengatur tugas pada jadwal yang tepat. Kami berharap
            fitur reminder logic pada website kami dapat membantu pengguna kami
            dalam mengatur jadwal dan aktivitas dengan lebih baik dan efisien.
          </p>
          <p>
            Jangan ragu untuk mengikuti tutorial ini untuk mempelajari cara
            menggunakan fitur reminder logic pada website kami dengan mudah dan
            efektif. Terima kasih telah menggunakan website kami, dan selamat
            membaca!
          </p>
        </div>
        <div>
          <h2>Logic</h2>
          <p>
            Logika reminder ini digunakan pada saat sistem ingin melakukan kirim
            pesan tagihan ke murid terkait. Dalam melakukan reminder programmer
            harus melakukan konfigurasi cronjob terlebih dahulu agar pesan dapat
            terkirim. Apabila belum familiar dengan cronjob bisa mengunjung{" "}
            <a href="https://crontab.guru/">Crontab Guru</a>
          </p>
          <h4>Pseudo Code</h4>
          <p>Berikut merupakan pseudo code untuk logika authentifikasi</p>
          <div className="mockup-code">
            <pre>
              <code>
                1. Check di setting database apakah auto reminder dinyakalan{" "}
                {"\n "} (on) atau dinonaktifkan (off) {"\n "} 2. Apabila dalam
                kondisi off maka reminder tidak akan dilakukan {"\n "} 3.
                Apabila dalam kondisi on maka reminder akan dilakukan sesuai{" "}
                {"\n "} dengan kriteria yang berlaku di file <b>Kernel.php</b>
              </code>
            </pre>
          </div>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default LogicReminder;
