import Link from "next/link";
import React from "react";
import DrawerItem from "../../DrawerItem/Index";

export default function DrawerProgrammer() {
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
              <DrawerItem text="Read Me" href={`/programmer`} />
            </li>
            <li>
              <DrawerItem
                text="Pre Requirements"
                href={`/programmer/pre-requirements`}
              />
            </li>
            <li>
              <h5 className="mx-3 my-1">Logic</h5>
            </li>
            <li>
              <DrawerItem text="Auth" href={`/programmer/logic/auth`} />
            </li>
            <li>
              <DrawerItem text="Reminder" href={`/programmer/logic/reminder`} />
            </li>
            <li>
              <h5 className="mx-3 my-1">Database</h5>
            </li>
            <li>
              <DrawerItem text="Termin" href={`/programmer/database/termin`} />
            </li>
            <li>
              <DrawerItem
                text="Installment"
                href={`/programmer/database/installment`}
              />
            </li>
            <li>
              <DrawerItem
                text="Installment Progress"
                href={`/programmer/database/installment-progress`}
              />
            </li>
            <li>
              <DrawerItem
                text="Installment Payment"
                href={`/programmer/database/installment-payment`}
              />
            </li>
            <li>
              <DrawerItem
                text="View Installment"
                href={`/programmer/database/view-installment`}
              />
            </li>
            <li>
              <h5 className="mx-3 my-1">CronJob</h5>
            </li>
            <li>
              <DrawerItem
                text="Auto Add Installment"
                href={`/programmer/cronjob/auto-add-installment`}
              />
            </li>
            <li>
              <DrawerItem
                text="Auto Reminder"
                href={`/programmer/cronjob/auto-reminder`}
              />
            </li>
            <li>
              <DrawerItem
                text="Auto Send Report"
                href={`/programmer/cronjob/auto-send-report`}
              />
            </li>
            <li>
              <h5 className="mx-3 my-1">Lainnya</h5>
            </li>
            <li>
              <DrawerItem
                text="Open Crontab Guru"
                href={`https://crontab.guru/`}
              />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
