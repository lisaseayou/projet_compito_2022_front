

function Nav() {
  return (
    <div className="flex flex-col justify-between w-20 h-screen bg-white border-r fixed mr-6">
      <div>
         <div className="inline-flex items-center justify-center w-18 h-16">
         <img src="./assets/logo/logoswag.svg" alt="logo" className="w-18"/>
        </div> 

        <div className="">
          <nav className="flex flex-col p-2">
           
            <ul className="pt-4 space-y-1 border-t border-gray-100">
              <li>
              <a
                href="/projects"
                className="flex justify-center px-2 py-1.5 text-violet-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
              >
                <img src="./assets/logo/liste.png" alt="projet" className="violet-400"></img>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg> */}

                <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                  Projets
                </span>
              </a>
              </li>
         

           
              <li>
                <a
                  href="/tasks"
                  className="flex justify-center px-2 py-1.5 text-violet-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                >
                 <img src="./assets/logo/checklist.png" alt="tasks"></img>

                  <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                    Tasks
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/dashboard"
                  className="flex relative group justify-center px-2 py-1.5 text-violet-600 rounded hover:bg-gray-50 hover:text-gray-700"
                >
                  <img src="./assets/logo/dashboard.png" alt="dashboard"></img>

                  <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                    Dashboard
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/profil"
                  className="flex justify-center px-2 py-1.5 text-violet-700 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                >
                  <img src="./assets/logo/photo.png" alt="profil"></img>

                  <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                    Profil
                  </span>
                </a>
              </li>

              
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100">
        <form action="/logout">
          <button
            type="submit"
            className="flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 group relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
