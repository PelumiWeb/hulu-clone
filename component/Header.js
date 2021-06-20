import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {  HomeIcon, SearchIcon, CollectionIcon, LightningBoltIcon, UserIcon, BadgeCheckIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
           <div className='flex flex-grow justify-evenly max-w-2xl'>
               <HeaderItem Title='HOME' Icon={HomeIcon}/>
               <HeaderItem Title='TRENDING' Icon={LightningBoltIcon}/>
               <HeaderItem Title='VERIFIED' Icon={BadgeCheckIcon}/>
               <HeaderItem Title='COLLECTION' Icon={CollectionIcon}/>
               <HeaderItem Title='SEARCH' Icon={SearchIcon}/>
               <HeaderItem Title='ACCOUNT' Icon={UserIcon}/>
           </div>
           <div>
              <Image
            className='object-contain'
            src='https://links.papareact.com/ua6'
            width={200}
            height={100}
            />
           </div>
        </header>
    )
}

export default Header
