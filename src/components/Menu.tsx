'use client'
import Link from 'next/link';
import { useState } from 'react';
import * as IconsBs from 'react-icons/bs';
import * as IconsFa from 'react-icons/fa';
import * as IconsIo from 'react-icons/io5';
import { useContext } from 'react';
import {AppContext} from '../context/index'

const menuItems = [
    {
        title: "Menu",
        Items: [
            {
                icon: IconsBs.BsGraphUpArrow,
                label: "Dashobard",
                href: "/admin"
            },
            {
                icon: IconsFa.FaCalendar,
                label: "Meetings",
                href: "/meetings"
            },
            {
                icon: IconsIo.IoCallSharp,
                label: "Calls",
                href: "/calls"
            },
            {
                icon: IconsFa.FaUsers,
                label: "Contacts",
                href: "/contacts"
            },
            {
                icon: IconsFa.FaUsersCog,
                label: "Effective Contacts",
                href: "/effective-contacts"
            }
        ]
    }
]

const Menu = () => {
    const [activeUrl,setActiveUrl] = useState(false)
    const {pathname} = useContext(AppContext)
    // console.log(pathname)
    return (
        <div className='mt-4 text-sm'>
            {
                menuItems.map(items => (
                    <div className='flex flex-col gap-2' key={items.title}>
                        <span className='hidden lg:block text-blue-400 font-light my-4'>{items.title}</span>
                        {items.Items.map((item, index) => (
                            <Link href={`${item.href}`} key={index} className={`flex items-center justify-center lg:justify-start gap-4 py-2 ${pathname==item.href?'text-blue-600':'text-blue-950'} ${pathname==item.href && 'bg-blue-200 px-2 rounded-lg'}`}>
                                <item.icon className='text-lg'/>
                                <span className='hidden lg:block text-nowrap'>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default Menu