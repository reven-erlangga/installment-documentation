import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const DatabaseInstallmentPayment: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Pembayaran Cicilan</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial pengenalan database installment
            payment. Database installment payment adalah salah satu jenis
            database yang digunakan untuk menyimpan informasi tentang pembayaran
            atau cicilan pada sebuah produk atau layanan.
          </p>
          <p>
            Database installment payment sangat berguna dalam pengelolaan
            pembayaran, karena memungkinkan kita untuk melacak dan memonitor
            pembayaran yang telah dilakukan, seperti tanggal pembayaran, jumlah
            yang dibayar, dan sisa pembayaran yang harus dilakukan. Dengan
            menggunakan database installment payment, kita dapat mengatur dan
            mengelola pembayaran dengan lebih efektif dan efisien.
          </p>
          <p>
            Dengan memahami penggunaan database installment payment, Anda dapat
            mengembangkan aplikasi atau website yang lebih baik dan efisien
            dalam pengelolaan pembayaran. Jangan ragu untuk mengikuti tutorial
            ini untuk mempelajari lebih lanjut tentang penggunaan database
            installment payment dan bagaimana menggunakannya dalam pengelolaan
            pembayaran pada aplikasi atau website. Terima kasih telah
            menggunakan website kami, dan selamat membaca!
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
      </article>
    </LayoutProgrammer>
  );
};

export default DatabaseInstallmentPayment;
