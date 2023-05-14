import LayoutDashboard from "@/components/LayoutDashboard";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Account: NextPage<Props> = () => {
  return (
    <LayoutDashboard>
      <article className="prose">
        <h1>Account</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial fitur konfigurasi akun di website
            kami. Fitur ini dirancang untuk membantu pengguna kami dalam
            mengatur dan mempersonalisasi akun mereka di website kami.
          </p>
          <p>
            Dalam fitur ini, Anda dapat mengubah informasi pribadi Anda seperti
            nama dan alamat email, mengatur preferensi notifikasi, mengubah kata
            sandi, dan banyak lagi. Dengan konfigurasi akun yang tepat, Anda
            dapat mengoptimalkan pengalaman penggunaan website kami dan
            memastikan informasi akun Anda selalu aman dan terlindungi.
          </p>
          <p>
            Kami sangat bersemangat untuk memperkenalkan fitur konfigurasi akun
            ini kepada Anda dan berharap dapat membantu meningkatkan pengalaman
            penggunaan website kami. Jangan ragu untuk mengikuti langkah-langkah
            yang akan kami berikan untuk menggunakan fitur ini dengan mudah dan
            efektif. Terima kasih telah menggunakan website kami, dan selamat
            mencoba!
          </p>
        </div>

        <div>
          <h2>Fitur</h2>
          <ul>
            <li>Ganti Nama, Email dll</li>
            <li>Detail Akun</li>
          </ul>
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default Account;
