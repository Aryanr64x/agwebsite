import Image from "next/image";
import Link from "next/link";

const Navbar = ()=>{
    return <div className="flex justify-between items-center mx-16 h-16">
        <div><Image src={'/logo.jpg'}  alt = "logo" width={40} height={40}/></div>
        <div className="flex">
            <div className="mr-8 hover:text-amber-600 transition-all duration-100"> <Link href={'#home'}>Home</Link>  </div>
             <div className="mr-8 hover:text-amber-600 transition-all duration-100"><Link href={'#about'}>About</Link></div>
              <div className="mr-8 hover:text-amber-600 transition-all duration-100"><Link href={'#services'}>Services</Link></div>
               <div className="mr-8 hover:text-amber-600 transition-all duration-100"><Link href={'#book-session'}>Book a Session</Link></div>
                <div className="mr-8 hover:text-amber-600 transition-all duration-100"><Link href={'#faq'}>FAQ</Link></div>
                <div className="mr-8 hover:text-amber-600 transition-all duration-100"><Link href={'#contact'}>Contact</Link></div>
        </div>
    </div>
}

export default Navbar;