import LayoutDashboard from "@/components/LayoutDashboard";
import { NextPage } from "next";

interface Props {}

const TaskFollowUp: NextPage<Props> = () => {
  return (
    <LayoutDashboard>
      <article className="prose text-justify">
        <div>
          <h1>Follow Up</h1>
          <h2>Pendahuluan</h2>
          <p>
            Halo! Selamat datang di tutorial fitur terbaru di website cicilan.
            Kami senang bisa memperkenalkan fitur baru ini kepada Anda dan
            berharap dapat membantu meningkatkan pengalaman penggunaan website
            kami. Fitur terbaru yang kami perkenalkan adalah follow up cicilan.
            Fitur ini dirancang untuk melakukan follow up terhadap murid yang
            masih ada tunggakan.
          </p>
        </div>
        <div>
          <h2>Membuat Follow Up</h2>
          <p>
            Proses pembuatan data follow up dibuat otomatis oleh sistem, sistem
            akan mendeteksi sekiranya cicilan mana yang sudah masuk ke dalam
            proses penagihan dan akan masuk ke menu follow up secara otomatis.
          </p>
          <div className="alert alert-info shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>
                Pembuatan master task follow up dibuat otomatis by sistem.
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2>Mengirim Follow Up</h2>
          <p>
            Murid yang sudah mnasuk ke masa cicilan dapat dikirimkan berupa
            pesan whatsapp maupun pesan email ke murid terkait. Pada proses
            pengiriman follow up ke murid dapat dilakukan dengan 2 cara yakni :
          </p>
          <ul>
            <li>
              Otomatis, sistem akan mengirimkan follow up ke murid secara
              otomatis sesuai dengan logika step yang berlaku
            </li>
            <li>
              Manual, sistem akan mengirimkan follow up sesuai dengan step yang
              dipilih oleh pengguna
            </li>
          </ul>
          <div className="alert alert-warning shadow-lg">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                Saat mengirim follow up by telp, pastikan anda sudah melakukan
                di hari yang sesuai. Di beberapa case anda tidak akan bisa input
                foto bukti follow up by telp apabila step penagihan sudah
                terlewat
              </span>
            </div>
          </div>{" "}
          <br />
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
                Anda tidak bisa melakukan follow up ke step yang sudah terlewat.
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2>Mengubah Data Follow Up</h2>
          <p>s</p>
        </div>
        <div>
          <h2>Pembayaran</h2>
          <ul>
            <li>
              <h3>Termin Yang Sama</h3>
              <p>s</p>
            </li>
            <li>
              <h3>Termin Yang Berbeda</h3>
              <p>s</p>
            </li>
            <li>
              <h3>Lunas</h3>
              <p>s</p>
            </li>
            <li>
              <h3>Partial / Pembayaran Sebagian</h3>
              <p>s</p>
            </li>
            <li>
              <h3>Tidak Lunas</h3>
              <p>s</p>
            </li>
          </ul>
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default TaskFollowUp;
