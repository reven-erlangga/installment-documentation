import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const DatabaseTerm: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Database Termin</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial pengenalan database termin.
            Database termin digunakan untuk management term yang ada tergantung
            dengan tipe kelas (regular & ict / private) dan juga masa belajar.
          </p>
          <p>
            Pengelolaan database termin adalah salah satu hal yang sangat
            penting dalam memastikan pesan reminder dikirim sesuai dengan
            periode yang ditentukan.
          </p>
          <p>
            Dalam tutorial ini, kita akan membahas mengenai termin untuk
            memahami lebih lanjut mengenai management termin yang digunakan.
            Dengan memahami konsep dan istilah dalam database termin, Anda dapat
            mengembangkan aplikasi atau website dengan database yang lebih baik
            dan efisien.
          </p>
          <p>
            Jangan ragu untuk mengikuti tutorial ini untuk mempelajari lebih
            lanjut tentang database termin dan bagaimana menggunakannya dalam
            pengelolaan database pada aplikasi atau website dan selamat membaca!
          </p>
        </div>
        <div>
          <h2>Fungsi</h2>
          <ul>
            <li>Management termin yang berlaku di website cicilan.</li>
          </ul>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default DatabaseTerm;
