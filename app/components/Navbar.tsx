import Link from "next/link"

const Navbar = ()=> {
    return (

    <header>        
      <nav className="bg-gray-800 text-white py-1 w-full">
          <div className="container mx-auto flex flex-row items-center justify-between py-1">
              <Link href='/' className="flex flex-row items-center gap-x-2">
                  <h6>monyorojoseph</h6>
                  <h6 className="font-extrabold text-yellow-400 animate-pulse">/</h6>
              </Link>
              <div className="flex flex-row items-center gap-x-4 font-semibold">
                  <Link href='/' className='cursor-pointer'>About</Link>
                  {/* <Link href='/blogs' className='cursor-pointer'>Blogs</Link> */}
                  <Link href='/projects' className='cursor-pointer'>Projects</Link>
              </div>
          </div>
      </nav>
    </header>
    )
}

export default Navbar;