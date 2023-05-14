import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";
import Image from "next/image";
import viewInstallmentRecap from "../../../../public/assets/images/programmers/view-rekap-installments.svg";

interface Props {}

const DatabaseViewInstallment: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Pembayaran Cicilan</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial pengenalan database view
            installment recap. Database view installment recap adalah salah satu
            jenis database yang digunakan untuk menggabungkan informasi dari
            beberapa tabel dalam sebuah database menjadi satu tampilan yang
            komprehensif.
          </p>
          <p>
            Database view installment recap sangat berguna dalam pengelolaan
            pembayaran, karena memungkinkan kita untuk melihat informasi tentang
            pembayaran atau cicilan dari beberapa tabel dalam sebuah database
            dalam satu tampilan. Dengan menggunakan database view installment
            recap, kita dapat dengan mudah melacak dan memonitor kemajuan
            pembayaran, jumlah cicilan yang telah dibayar, sisa cicilan, dan
            tanggal jatuh tempo berikutnya pada beberapa produk atau layanan
            secara bersamaan.
          </p>
          <p>
            Dengan memahami penggunaan database view installment recap, Anda
            dapat mengembangkan aplikasi atau website yang lebih baik dan
            efisien dalam pengelolaan pembayaran. Jangan ragu untuk mengikuti
            tutorial ini untuk mempelajari lebih lanjut tentang penggunaan
            database view installment recap dan bagaimana menggunakannya dalam
            pengelolaan pembayaran pada aplikasi atau website. Terima kasih
            telah menggunakan website kami, dan selamat membaca!
          </p>
        </div>
        <div>
          <h2>Fungsi</h2>
          <ul>
            <li>Management data pembayaran</li>
            <li>List data murid yang melakukan pembayaran</li>
            <li>Mengetahui status pembayaran murid</li>
          </ul>
        </div>

        <div>
          <h2>Relasi</h2>
          <ul>
            <li>Installment Progress {"(n > 1)"}</li>
          </ul>
        </div>

        <div>
          <h2>View Installment Recap SQL Syntax</h2>
          <p>
            Berikut merupakan gambar syntax code untuk view installment recap.
          </p>
          <Image
            priority
            src={viewInstallmentRecap}
            alt="View Installment Recap MySQL Syntax"
          />
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default DatabaseViewInstallment;
