import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const PreRequirements: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Pra Persyaratan</h1>
        <div>
          <h2>Teknologi</h2>
          <p>
            Dalam pembuatan website ini ada beberapa teknologi yang saya
            gunakan. Adapun beberapa teknologi yang digunakan dalam membangun
            website cicilan ini adalah sebagai berikut :{" "}
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Nama</th>
                  <th>Versi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>PHP</td>
                  <td>8.x.x</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Laravel</td>
                  <td>8.x.x</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Tailwind</td>
                  <td>3.1.0</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Alpine JS</td>
                  <td>2.8.2</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Select 2</td>
                  <td>4.1.0</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Clipboard</td>
                  <td>2.0.11</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Moment</td>
                  <td>2.x.x</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Perfect Scrollbar</td>
                  <td>1.5.5</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Sweetalert</td>
                  <td>11.4.33</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Turbolink</td>
                  <td>5.x.x</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Zooming</td>
                  <td>2.x.x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2>Layanan</h2>
          <p>
            Berikut merupakan layanan yang digunakan di website cicilan yang ada
            sekarang adalah sebagai berikut :
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Nama</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Woonotif</td>
                  <td>Layanan yang bertindak sebagai whatsapp api.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2>Kriteria Hosting</h2>
          <p>
            Berikut merupakan kriteria hosting yang harus dimiliki oleh penyedia
            hosting adalah sebagai berikut :
          </p>
          <ul>
            <li>Memiliki CronJob</li>
            <li>Memiliki Hosting Email</li>
            <li>Support PHP 8.x.x or later</li>
          </ul>
        </div>

        <div>
          <h2>Akun Email</h2>
          <p>
            Ada beberapa konfigurasi yang dilakukan pada email hosting di
            website ini. Berikut merupakan konfigurasi akun email yang digunakan
            :
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <tr>
                  <td>MAIL MAILER</td>
                  <td>SMTP</td>
                </tr>
                <tr>
                  <td>MAIL HOST</td>
                  <td>mail.golden-english.net</td>
                </tr>
                <tr>
                  <td>MAIL PORT</td>
                  <td>465</td>
                </tr>
                <tr>
                  <td>MAIL USERNAME</td>
                  <td>no-reply@golden-english.net</td>
                </tr>
                <tr>
                  <td>MAIL PASSWORD</td>
                  <td>HcWQCKOTf,Qt</td>
                </tr>
                <tr>
                  <td>MAIL ENCRYPTION</td>
                  <td>tls</td>
                </tr>
                <tr>
                  <td>MAIL FROM ADDRESS</td>
                  <td>no-reply@golden-english.net</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default PreRequirements;
