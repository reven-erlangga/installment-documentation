import LayoutDashboard from "@/components/LayoutDashboard";
import { NextPage } from "next";

interface Props {}

const SettingWhatsapp: NextPage<Props> = () => {
  return (
    <LayoutDashboard>
      <article className="prose text-justify">
        <h1>Konfigurasi Pesan Whatsapp</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial fitur konfigurasi script pesan
            WhatsApp di website kami. Fitur ini dirancang untuk membantu
            pengguna kami dalam mengirim pesan WhatsApp dengan cepat dan mudah
            melalui website kami.
          </p>
          <p>
            Dengan fitur ini, Anda dapat menambahkan script pesan kustom yang
            akan memudahkan pengguna untuk mengirim pesan ke nomor WhatsApp
            tertentu. Misalnya, jika Anda menjual produk atau layanan melalui
            website kami, Anda dapat menambahkan script pesan dengan pesan
            promosi atau informasi lebih lanjut tentang produk atau layanan
            Anda, sehingga pengguna dapat menghubungi Anda dengan mudah melalui
            WhatsApp.
          </p>
          <p>
            Kami berharap fitur ini dapat membantu Anda dalam memperluas
            jangkauan bisnis Anda dan meningkatkan interaksi pengguna dengan
            website kami. Jangan ragu untuk mengikuti langkah-langkah yang akan
            kami berikan untuk menggunakan fitur ini dengan mudah dan efektif.
            Terima kasih telah menggunakan website kami, dan selamat mencoba!
          </p>
        </div>

        <div>
          <h2>Fitur</h2>
          <ul>
            <li>Ganti pesan whatsapp</li>
            <li>Mengubah pesan whatsapp secara dinamis</li>
          </ul>
        </div>

        <div>
          <h2>List Dinamis Whatsapp</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Kode</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2>Ganti Pesan Whatsapp</h2>
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default SettingWhatsapp;
