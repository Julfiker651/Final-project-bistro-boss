import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import { HiHome } from 'react-icons/hi';
import { AiFillFolderAdd } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsCalendar3Fill } from 'react-icons/bs';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import useCarts from '../../../Hooks/useCarts';
import useadmin from '../../../Hooks/useadmin';


const DashboardLayout = () => {
    const [cart] = useCarts()
    // todo: admin user and nomal user control
    const [admin,refetch]=useadmin()
    const Admin = refetch() && admin.admin
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer-2" className="btn btn-sm btn-primary fixed left-2 top-2 drawer-button lg:hidden"><AiOutlineDoubleRight /></label>
            <div className="drawer-content flex flex-col p-7">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu text-xl lg:text-[18px] p-4 w-80 h-full capitalize bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <h1 className='text-xl select-none text-[#b23082] font-bold lg:font-semibold ml-3 mb-6'>BISTRO BOSSM<br /><span className='lg:tracking-[.2em]'>Restaurant</span></h1>
                    {Admin ? <>
                        <li><CustomLink to="/dasboard/home"><HiHome />User Home</CustomLink></li>
                        <li><CustomLink to="/dasboard/manage"><BsCalendar3Fill />Manage items</CustomLink></li>
                        <li><CustomLink to="/dasboard/additems"><BsCalendar3Fill />Add items</CustomLink></li>
                        <li><CustomLink to="/dasboard/alluser"><FaUserPlus />All Users</CustomLink></li>
                        <li><CustomLink to="/dasboard/mycart"><BsFillCartPlusFill /> My Carts<span className="indicator-item bg-[red] text-white badge">{cart?.length || 0}</span></CustomLink></li>
                    </> : <>
                        <li><CustomLink to="/"><HiHome />Addmin Home</CustomLink></li>
                        <li><CustomLink to="/"><AiFillFolderAdd /> Add Items</CustomLink></li>
                        <li><CustomLink to="/dasboard/mycart"><BsFillCartPlusFill /> My Carts<span className="indicator-item bg-[red] text-white badge">{cart?.length || 0}</span></CustomLink></li>
                    </>}

                    <div className="divider">OR</div>
                    <li><Link to="/"><HiHome /> Home</Link></li>
                    <li><Link><RiContactsBook2Fill /> Contact Us</Link></li>
                    <li><Link to="/menu"><IoMdMenu /> Our Menu</Link></li>
                    <li><Link to="/shop/dessert"><BsFillCartPlusFill /> Shop</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;