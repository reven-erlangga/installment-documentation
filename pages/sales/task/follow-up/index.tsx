import Alert, { Type } from "@/components/Alert";
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
          <Alert
            type={Type.Warning}
            message={`Saat mengirim follow up by telp, pastikan anda sudah melakukan
                di hari yang sesuai. Di beberapa case anda tidak akan bisa input
                foto bukti follow up by telp apabila step penagihan sudah
                terlewat`}
          />
          <br />
          <Alert
            type={Type.Error}
            message={`Anda tidak bisa melakukan follow up ke step yang sudah terlewat.`}
          />{" "}
          <br />
          <div className="mockup-window border border-base-300">
            <div className="flex justify-center">
              <iframe
                src="https://scribehow.com/embed/Workflow__JuN1iM2IRsm-KCBMKlsPWw"
                width="100%"
                height="640"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h2>Melihat Data Follow Up</h2>
          <p>
            Apabila anda ingin melihat detail dari hasil follow up yang
            dilakukan ke murid anda dapat melihat tutorial berikut. Adapun
            beberapa hal yang bisa anda lakukan :
          </p>
          <ul>
            <li>Melihat detail follow up</li>
            <li>Mengetahui list detail pembayaran yang dilakukan</li>
            <li>Mengetahui list detail follow up yang dilakukan</li>
          </ul>
          <div className="mockup-window border border-base-300">
            <div className="flex justify-center">
              <iframe
                src="https://scribehow.com/embed/Workflow__GtbvQcuESg-3gEoZcx_fHg"
                width="100%"
                height="640"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h2>Pembayaran</h2>
          <ul>
            <li>
              <h3>Lunas</h3>
              <p>
                Kondisi ini merupakan kondisi saat murid sudah melakukan
                pelunasan pembayaran dengan biaya yang telah disepakati.
              </p>
              <div className="mockup-window border border-base-300">
                <div className="flex justify-center">
                  <iframe
                    src="https://scribehow.com/embed/Pembayaran_Kelas_Lunas__F_1Rzr9KSrCs8OiFXtg65A"
                    width="100%"
                    height="640"
                  ></iframe>
                </div>
              </div>
            </li>
            <li>
              <h3>Partial / Pembayaran Sebagian</h3>
              <p>
                Kondisi ini merupakan kondisi saat murid melakukan pembayaran
                dengan termin yang sama. Apabila murid melakukan perjanjian
                dengan sales dalam hal pembayaran termin, metode ini dapat
                digunakan untuk mengcover hal tersebut.
              </p>
              <div className="mockup-window border border-base-300">
                <div className="flex justify-center">
                  <iframe
                    src="https://scribehow.com/embed/Pembayaran_Kelas_Secara_Partial__k11ZRpwFTOG0BA7iBA24SA"
                    width="100%"
                    height="640"
                  ></iframe>
                </div>
              </div>
            </li>
            <li>
              <h3>Tidak Lunas</h3>
              <p>
                Kondisi saat murid yang sedang di follow up tidak dapat melunasi
                biaya yang disepakati.
              </p>
              <div className="mockup-window border border-base-300">
                <div className="flex justify-center">
                  <iframe
                    src="https://scribehow.com/embed/Pembayaran_Kelas_Tidak_Lunas__bdxEEgHXQgOSRStEGwAoBg"
                    width="100%"
                    height="640"
                  ></iframe>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </LayoutDashboard>
  );
};

export default TaskFollowUp;
