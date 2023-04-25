import LayoutDashboard from "@/components/LayoutDashboard";
import { NextPage } from "next";

interface Props {}

const AccountChangePassword: NextPage<Props> = () => {
  return (
    <LayoutDashboard>
      <article className="prose text-justify">
        <h1>Ganti Password</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo! Selamat datang di tutorial fitur ganti password akun di
            website kami. Fitur ini dirancang untuk memungkinkan pengguna kami
            mengganti kata sandi akun mereka dengan mudah dan cepat.
          </p>
          <p>
            Mengganti kata sandi secara berkala adalah salah satu cara terbaik
            untuk melindungi akun Anda dari aktivitas yang tidak sah atau
            penyalahgunaan. Dengan fitur ini, Anda dapat dengan mudah mengganti
            kata sandi akun Anda tanpa perlu membuka akun Anda melalui email
            atau formulir lainnya.
          </p>
          <p>
            Kami senang dapat memberikan fitur ini kepada Anda dan berharap
            dapat membantu meningkatkan keamanan akun Anda di website kami.
            Jangan ragu untuk mengikuti langkah-langkah yang akan kami berikan
            untuk menggunakan fitur ini dengan mudah dan efektif. Terima kasih
            telah menggunakan website kami, dan selamat mencoba!
          </p>
        </div>

        <div>
          <h2>Fitur</h2>
          <ul>
            <li>Ganti Password</li>
          </ul>
        </div>

        <div>
          <h2>Ganti Password</h2>
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default AccountChangePassword;
