import LayoutDashboard from "@/components/LayoutDashboard";
import { NextPage } from "next";

interface Props {}

const Setting: NextPage<Props> = () => {
  return (
    <LayoutDashboard>
      <article className="prose text-justify">
        <h1>Setting</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo! Selamat datang di tutorial fitur setting action auto di
            website kami. Fitur ini dirancang untuk membantu pengguna kami dalam
            mengotomatisasi tindakan tertentu pada website kami.
          </p>
          <p>
            Dengan fitur ini, Anda dapat mengatur tindakan yang akan dilakukan
            secara otomatis ketika pengguna melakukan tindakan tertentu pada
            website kami.
          </p>
          <p>
            Kami berharap fitur ini dapat membantu Anda dalam menghemat waktu
            dan upaya dalam mengelola website kami dan memberikan pengalaman
            yang lebih efektif dan efisien bagi pengguna kami. Jangan ragu untuk
            mengikuti langkah-langkah yang akan kami berikan untuk menggunakan
            fitur ini dengan mudah dan efektif. Terima kasih telah menggunakan
            website kami, dan selamat mencoba!
          </p>
        </div>

        <div>
          <h2>Fitur</h2>
          <ul>
            <li>Setting auto reminder</li>
            <li>Setting auto reminder</li>
          </ul>
        </div>

        <div>
          <h2>Ganti auto action</h2>
          <p>Silahkan cermati proses membuat termin dibawah ini.</p>
          <div className="mockup-window border border-base-300">
            <div className="flex justify-center">
              <iframe
                src="https://scribehow.com/embed/Konfigurasi_Sales_Setting__PO4LL2BkQf2XT89-9dvy5w"
                width="100%"
                height="640"
              ></iframe>
            </div>
          </div>
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default Setting;
