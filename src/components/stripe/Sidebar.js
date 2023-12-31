import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import sublinks from './data';
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <div className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <aside className="sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {sublinks.map((items, index) => {
                        const { page, links } = items;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {links.map((link, index) => {
                                        const { label, icon, url } = link;
                                        return (
                                            <article key={index}>
                                                <a href={url}>
                                                    {label}
                                                    {icon}
                                                </a>
                                            </article>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
