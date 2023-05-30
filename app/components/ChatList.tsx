const ChatList = () => {
  return (
    <div className="hidden lg:w-72 xl:px-3 lg:overflow-y-auto lg:bg-slate-800 lg:border-slate-800 lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-left space-y-1">
          <li className="group flex items-center gap-x-2 rounded-3xl p-1">
            <div className="rounded-full h-8 w-8 bg-red-200"></div>
            <span>Friend 1</span>
          </li>
          <li className="group flex items-center gap-x-2 rounded-3xl p-1">
            <div className="rounded-full h-8 w-8 bg-red-200"></div>
            <span>Friend 2</span>
          </li>
          <li className="group flex items-center gap-x-2 rounded-3xl p-1">
            <div className="rounded-full h-8 w-8 bg-red-200"></div>
            <span>Friend 3</span>
          </li>
          <li className="group flex items-center gap-x-2 rounded-3xl p-1">
            <div className="rounded-full h-8 w-8 bg-red-200"></div>
            <span>Friend 4</span>
          </li>
          <li className="group flex items-center gap-x-2 rounded-3xl p-1">
            <div className="rounded-full h-8 w-8 bg-red-200"></div>
            <span>Friend 5</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ChatList
