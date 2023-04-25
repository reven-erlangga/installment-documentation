import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const DatabaseTerm: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Database Cicilan</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial pengenalan database installment.
            Database installment adalah salah satu jenis database yang digunakan
            untuk menyimpan informasi tentang pembayaran atau cicilan pada
            sebuah produk atau layanan.
          </p>
          <p>
            Database installment sangat berguna dalam pengelolaan pembayaran,
            karena memungkinkan kita untuk melacak dan memonitor pembayaran yang
            telah dilakukan, sisa cicilan, dan tanggal jatuh tempo. Dengan
            menggunakan database installment, kita dapat mengatur dan mengelola
            pembayaran dengan lebih efektif dan efisien.
          </p>
          <p>
            Dalam tutorial ini, kita akan membahas tentang bagaimana menggunakan
            database installment, termasuk cara membuat tabel, menyimpan data,
            dan melakukan query untuk mengambil informasi dari database
            tersebut. Kita juga akan membahas beberapa istilah dan konsep
            penting dalam database installment, seperti tabel cicilan, jumlah
            pembayaran, dan tanggal jatuh tempo.
          </p>
          <p>
            Dengan memahami penggunaan database installment, Anda dapat
            mengembangkan aplikasi atau website yang lebih baik dan efisien
            dalam pengelolaan pembayaran. Jangan ragu untuk mengikuti tutorial
            ini untuk mempelajari lebih lanjut tentang penggunaan database
            installment dan bagaimana menggunakannya dalam pengelolaan
            pembayaran pada aplikasi atau website. Terima kasih telah
            menggunakan website kami, dan selamat membaca!
          </p>
        </div>
        <div>
          <h2>Fungsi</h2>
          <ul>
            <li>Management data murid cicilan</li>
            <li>Mengetahui sisa pembayaran murid</li>
          </ul>
        </div>
        <div>
          <h2>Relasi</h2>
          <ul>
            <li>Installment Progress {"(1 > 1)"}</li>
          </ul>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default DatabaseTerm;
