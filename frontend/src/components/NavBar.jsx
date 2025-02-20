import React from "react";
import SearchInput from "./SearchInput";
import ApplicationLogo from "./ApplicationLogo";

export default function NavBar({ toggleSideBar }) {
  return (
    // <nav className="flex shrink-0 justify-between h-16 items-center sm:px-6 border-b border-gray-100 bg-gray-200">
    //   <button onClick={toggleSideBar}>
    //     <svg
    //       className="cursor-pointer"
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //     >
    //       <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h6v12H4zm8 0V7h8V5l.002 14H12z"></path>
    //       <path d="M6 10h2v2H6zm0 4h2v2H6z"></path>
    //     </svg>
    //   </button>

    //   <SearchInput />

    //   <div className="flex items-center lg:order-2">
    //     <button
    //       type="button"
    //       data-dropdown-toggle="notification-dropdown"
    //       className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    //     >
    //       <span className="sr-only">View notifications</span>

    //       <svg
    //         aria-hidden="true"
    //         className="w-6 h-6"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
    //       </svg>
    //     </button>

    //     <div
    //       className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
    //       id="notification-dropdown"
    //     >
    //       <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
    //         Notifications
    //       </div>
    //       <div>
    //         <a
    //           href="#"
    //           className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
    //         >
    //           <div className="flex-shrink-0">
    //             <img
    //               className="w-11 h-11 rounded-full"
    //               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
    //               alt="Bonnie Green avatar"
    //             />
    //             <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
    //               <svg
    //                 aria-hidden="true"
    //                 className="w-3 h-3 text-white"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
    //                 <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
    //               </svg>
    //             </div>
    //           </div>
    //           <div className="pl-3 w-full">
    //             <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
    //               New message from
    //               <span className="font-semibold text-gray-900 dark:text-white">
    //                 Bonnie Green
    //               </span>
    //               : "Hey, what's up? All set for the presentation?"
    //             </div>
    //             <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
    //               a few moments ago
    //             </div>
    //           </div>
    //         </a>
    //       </div>
    //     </div>

    //     <button
    //       type="button"
    //       className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    //       id="user-menu-button"
    //       aria-expanded="false"
    //       data-dropdown-toggle="dropdown"
    //     >
    //       <span className="sr-only">Open user menu</span>
    //       <img
    //         className="w-8 h-8 rounded-full"
    //         src="https://i.pinimg.com/236x/89/32/0b/89320b300f86419065241da67b97f7ed.jpg"
    //         alt="user photo"
    //       />
    //     </button>
    //   </div>

    //   <div className="-me-2 flex items-center sm:hidden"></div>
    // </nav>

    <header class="bg-white">
      <div class="mx-auto flex justify-between h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <button onClick={toggleSideBar} className="hidden md:block">
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h6v12H4zm8 0V7h8V5l.002 14H12z"></path>
              <path d="M6 10h2v2H6zm0 4h2v2H6z"></path>
            </svg>
          </button>
          <ApplicationLogo className="md:hidden" />
        </div>

        <SearchInput />

        <div class="flex items-center gap-4">
          <button
            type="button"
            className="hidden md:block mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://i.pinimg.com/236x/89/32/0b/89320b300f86419065241da67b97f7ed.jpg"
              alt="user photo"
            />
          </button>

          <button class="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span class="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
