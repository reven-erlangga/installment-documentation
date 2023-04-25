import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const DatabaseTerm: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Auth Logic</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial pengenalan database termin.
            Database termin adalah kumpulan istilah atau terminologi yang
            berkaitan dengan pengelolaan database.
          </p>
          <p>
            Pengelolaan database adalah salah satu hal yang sangat penting dalam
            pengembangan aplikasi atau website. Database termin sendiri terdiri
            dari berbagai istilah dan konsep yang digunakan dalam pengelolaan
            database, seperti tabel, field, record, primary key, foreign key,
            query, dan masih banyak lagi.
          </p>
          <p>
            Dalam tutorial ini, kita akan membahas berbagai istilah dan konsep
            dalam database termin dengan bahasa yang mudah dipahami, sehingga
            Anda dapat memahami pengelolaan database dengan lebih baik dan
            efektif. Dengan memahami konsep dan istilah dalam database termin,
            Anda dapat mengembangkan aplikasi atau website dengan database yang
            lebih baik dan efisien.
          </p>
          <p>
            Jangan ragu untuk mengikuti tutorial ini untuk mempelajari lebih
            lanjut tentang database termin dan bagaimana menggunakannya dalam
            pengelolaan database pada aplikasi atau website. Terima kasih telah
            menggunakan website kami, dan selamat membaca!
          </p>
        </div>
        <div>
          <h2>Fungsi</h2>
          <ul>
            <li>Management term yang berlaku</li>
          </ul>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default DatabaseTerm;
