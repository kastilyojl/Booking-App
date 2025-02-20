import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApplicationLogo from "./ApplicationLogo";

export default function Sidebar({ sideBar }) {
  const [activeLink, setActiveLink] = useState("/home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex w-auto h-auto bg-[#365279]">
      {!sideBar && (
        <div className="flex h-screen flex-col justify-between border-e ">
          <div className="px-4 py-6">
            <ApplicationLogo />

            <ul className="mt-6 space-y-2">
              <li>
                <Link
                  to="/home"
                  onClick={() => handleLinkClick("/home")}
                  className={`flex items-center p-2 text-base font-medium rounded-lg
                    ${
                      activeLink === "/home"
                        ? "bg-gray-100 text-[#365279] hover:text-white"
                        : "text-white"
                    } 
                    hover:bg-gray-700 group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  to="/participants"
                  onClick={() => handleLinkClick("/participants")}
                  className={`flex items-center p-2 text-base font-medium rounded-lg
                    ${
                      activeLink === "/participants"
                        ? "bg-gray-100 text-[#365279] hover:text-white"
                        : "text-white"
                    } 
                    hover:bg-gray-700 group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path>
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  to="/archieve"
                  onClick={() => handleLinkClick("/archieve")}
                  className={`flex items-center p-2 text-base font-medium rounded-lg
                    ${
                      activeLink === "/archieve"
                        ? "bg-gray-100 text-[#365279] hover:text-white"
                        : "text-white"
                    } 
                    hover:bg-gray-700 group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2 3h20v4H2zm17 5H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-2zm-3 6H8v-2h8v2z"></path>
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  to="/user"
                  onClick={() => handleLinkClick("/user")}
                  className={`flex items-center p-2 text-base font-medium rounded-lg
                    ${
                      activeLink === "/user"
                        ? "bg-gray-100 text-[#365279] hover:text-white"
                        : "text-white"
                    } 
                    hover:bg-gray-700 group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a
        href="#"
        className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="size-10 rounded-full object-cover"
        />

        <div>
          <p className="text-xs">
            <strong className="block font-medium">Eric Frusciante</strong>

            <span> eric@frusciante.com </span>
          </p>
        </div>
      </a>
    </div> */}
        </div>
      )}

      {sideBar && (
        <div className="flex h-screen w-[250px] flex-col justify-between border-e ">
          <div className="px-4 py-6">
            <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              Logo
            </span>

            <ul className="mt-6 space-y-2">
              <li>
                <Link
                  to="/home"
                  onClick={() => handleLinkClick("/home")}
                  className={`flex items-center p-2 text-base font-medium rounded-lg
                    ${
                      activeLink === "/home"
                        ? "bg-gray-100 text-[#365279] hover:text-white"
                        : "text-white"
                    } 
                    hover:bg-gray-700 group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/participants"
                  onClick={() => handleLinkClick("/participants")}
                  className={`flex items-center p-2 text-base font-medium rounded-lg
                    ${
                      activeLink === "/participants"
                        ? "bg-gray-100 text-[#365279] hover:text-white"
                        : "text-white"
                    } 
                    hover:bg-gray-700 group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Participants
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/archieve"
                  onClick={() => handleLinkClick("/archieve")}
                  className={`flex items-center p-2 text-base font-medium rounded-lg
                    ${
                      activeLink === "/archieve"
                        ? "bg-gray-100 text-[#365279] hover:text-white"
                        : "text-white"
                    } 
                    hover:bg-gray-700 group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2 3h20v4H2zm17 5H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-2zm-3 6H8v-2h8v2z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Archives
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/user"
                  onClick={() => handleLinkClick("/user")}
                  className={`flex items-center p-2 text-base font-medium rounded-lg
                    ${
                      activeLink === "/user"
                        ? "bg-gray-100 text-[#365279] hover:text-white"
                        : "text-white"
                    } 
                    hover:bg-gray-700 group`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    My Account
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a
        href="#"
        className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="size-10 rounded-full object-cover"
        />

        <div>
          <p className="text-xs">
            <strong className="block font-medium">Eric Frusciante</strong>

            <span> eric@frusciante.com </span>
          </p>
        </div>
      </a>
    </div> */}
        </div>
      )}
    </div>
  );
}
