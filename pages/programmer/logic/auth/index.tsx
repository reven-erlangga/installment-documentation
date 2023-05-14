import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const LogicAuth: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose text-justify">
        <h1>Auth Logic</h1>
        <div>
          <h2>Pendahuluan</h2>
          <p>
            Halo, selamat datang di tutorial fitur auth logic pada website kami.
            Fitur ini adalah salah satu fitur yang paling penting dan
            fundamental dalam pengembangan website, terutama dalam hal keamanan
            dan privasi.
          </p>
          <p>
            Fitur auth logic pada website kami bertujuan untuk melindungi akses
            ke bagian-bagian website yang sensitif atau memerlukan izin khusus
            dari pengguna. Dengan menggunakan auth logic, pengguna harus
            memasukkan username dan password yang benar untuk mendapatkan akses
            ke bagian-bagian tertentu dari website kami.
          </p>
          <p>
            Fitur auth logic kami dirancang dengan standar keamanan tertinggi
            untuk memastikan bahwa informasi dan data pengguna yang sensitif
            tetap aman dan terlindungi dari akses yang tidak sah. Kami berharap
            fitur auth logic pada website kami dapat memberikan rasa aman dan
            kepercayaan bagi pengguna kami dalam menggunakan layanan kami.
          </p>
          <p>
            Jangan ragu untuk mengikuti tutorial ini untuk mempelajari cara
            menggunakan fitur auth logic pada website kami dengan mudah dan
            efektif. Terima kasih telah menggunakan website kami, dan selamat
            membaca!
          </p>
        </div>
        <div>
          <h2>Logic</h2>
          <p>
            Autentifikasi yang digunakan pada website ini merujuk ke level dalam
            database <b>m_account</b>. Authentifikasi digunakan untuk mengecek
            level terkait, level yang diterima adalah level sales (level 6).
          </p>
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Apabila terjadi perubahan di metode authentifikasi itu diluar
                dari perjanjian awal, silahkan lakukan penyesuaian sendiri.
              </span>
            </div>
          </div>
          <br />
          <h4>Pseudo Code</h4>
          <p>Berikut merupakan pseudo code untuk logika authentifikasi :</p>
          <ul>
            <li>Ambil data akun di database.</li>
            <li>Check level akun terkait.</li>
            <li>
              Apabila level akun tersebut adalah level 4 maka approve akun
              tersebut dan arahkan ke dashboard sales.
            </li>
          </ul>
        </div>
      </article>
    </LayoutProgrammer>
  );
};

export default LogicAuth;
