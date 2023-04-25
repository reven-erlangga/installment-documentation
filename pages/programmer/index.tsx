import LayoutProgrammer from "@/components/Layout/LayoutProgrammer";
import { NextPage } from "next";

interface Props {}

const Dashboard: NextPage<Props> = () => {
  return (
    <LayoutProgrammer>
      <article className="prose">
        <h1>Read Me</h1>
        <h2>Pendahuluan</h2>
        <p>
          Website untuk melakukan cicilan pembayaran yang menyediakan layanan
          untuk memudahkan murid dalam melakukan pembayaran secara cicilan untuk
          kelas tertentu. Biasanya, website ini menyediakan pembiayaan kepada
          pelanggan yang ingin membeli kelas namun tidak mampu membayarnya
          secara tunai.
        </p>
        <p>
          Pada website ini team sales dapat mengatur arus kas untuk murid
          cicilan secara mudah dan cepat, bahkan team sales juga dapat melakukan
          follow up terhadap murid tertentu untuk reminder mengenai tunggakan /
          cicilan yang mereka miliki.
        </p>
        <p>
          Pada website ini team sales juga memiliki kontrol terhadap script
          whatsapp yang digunakan untuk reminder murid dan juga memiliki kontrol
          terhadap termin yang berlaku untuk tiap kelas dengan periode tertentu.
        </p>

        <h2>Fitur</h2>
        <p>
          Berikut adalah beberapa fitur yang tersedia dalam website ini untuk
          memudahkan pengguna dalam melakukan pembayaran:
        </p>
        <ul>
          <li>Dashboard Cicilan</li>
          <li>Management Cicilan</li>
          <li>Management Termin</li>
          <li>Follow Up Cicilan</li>
          <li>Report</li>
          <li>Konfigurasi Script Whatsapp</li>
          <li>More</li>
        </ul>

        <h2>User Terkait Website Ini</h2>
        <ul>
          <li>Sales</li>
        </ul>
      </article>
    </LayoutProgrammer>
  );
};

export default Dashboard;
