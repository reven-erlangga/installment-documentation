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
            tertentu.
          </p>
          <p>
            Kami berharap fitur ini dapat membantu Anda dalam melakukan follow
            up cicilan ke murid. Terima kasih telah menggunakan website kami,
            dan selamat mencoba!
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
                  <td>#student_name#</td>
                  <td>Nama murid</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>#teacher_name#</td>
                  <td>Nama guru</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>#day#</td>
                  <td>Nama hari</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>#identify_order#</td>
                  <td>
                    Nomor identitas, dalam hal ini nomor order id (jika ada)
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>#class_name#</td>
                  <td>Nama kelas</td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>#start_course_date#</td>
                  <td>Tanggal mulai kursus</td>
                </tr>
                <tr>
                  <th>7</th>
                  <td>#bill_pay#</td>
                  <td>Total penagihan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2>Ganti Pesan Whatsapp</h2>
          <div className="mockup-window border border-base-300">
            <div className="flex justify-center">
              <iframe
                src="https://scribehow.com/embed/Bagaimana_Cara_Konfigurasi_Setting_Whatsapp__ywTRY6edQIeStVAeIhv2Jg"
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

export default SettingWhatsapp;
