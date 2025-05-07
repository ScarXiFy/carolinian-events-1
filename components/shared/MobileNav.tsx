import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import NavItems from "./NavItems"


const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className=''>
          <Image src='/assets/icons/menu.svg' alt='menu' width={24} height={24} className='cursor-pointer'/>
        </SheetTrigger>
        <SheetContent className='flex flex-col bg-white md:hidden'>
          <Image src='/assets/images/logo.svg' alt='Evently logo' width={128} height={38} />
          <Separator className=''/>
          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav