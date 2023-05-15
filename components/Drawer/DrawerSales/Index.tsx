import Link from "next/link";
import React from "react";
import DrawerItem from "../../DrawerItem/Index";

export default function DrawerSales() {
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="flex flex-col gap-3 pace-y-2 font-medium text-medium text-gray-400">
            <li>
              <Link href={`/`} className="flex mb-4 mt-2">
                <button className="btn btn-block ">
                  <span className="material-icons">chevron_left</span>
                  <span className="ml-3 whitespace-nowrap">Kembali</span>
                </button>
              </Link>
            </li>
            <li>
              <DrawerItem text="Read Me" href={`/sales`} />
            </li>
            <li>
              <h5 className="mx-3 my-1">Master Data</h5>
            </li>
            <li>
              <DrawerItem text="Cicilan" href={`/sales/master/installment`} />
            </li>
            <li>
              <DrawerItem text="Termin" href={`/sales/master/term`} />
            </li>
            <li>
              <h5 className="mx-3 my-1">Task</h5>
            </li>
            <li>
              <DrawerItem text="Follow Up" href={`/sales/task/follow-up`} />
            </li>
            <li>
              <h5 className="mx-3 my-1">Report</h5>
            </li>
            <li>
              <DrawerItem
                text="Report Follow Up"
                href={`/sales/report/follow-up`}
              />
            </li>
            <li>
              <h5 className="mx-3 my-1">Akun</h5>
            </li>
            <li>
              <DrawerItem text="Konfigurasi Akun" href={`/sales/account`} />
            </li>
            <li>
              <DrawerItem
                text="Ganti Password"
                href={`/sales/account/change-password`}
              />
            </li>
            <li>
              <h5 className="mx-3 my-1">Lainnya</h5>
            </li>
            <li>
              <DrawerItem text="Setting Auto Action" href={`/sales/setting`} />
            </li>
            <li>
              <DrawerItem
                text="Konfigurasi Pesan Whatsapp"
                href={`/sales/setting/whatsapp`}
              />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
