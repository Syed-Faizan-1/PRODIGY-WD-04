import React, { useState } from 'react';
import csharpSvg from '../skill-svgs/csharp.svg';
import htmlSvg from '../skill-svgs/html.svg';
import cssSvg from '../skill-svgs/css.svg';
import bootstrapSvg from '../skill-svgs/bootstrap.svg';
import javascriptSvg from '../skill-svgs/javascript.svg';
import jquerySvg from '../skill-svgs/jquery.svg';
import typescriptSvg from '../skill-svgs/typescript.svg';
import aspdotnetSvg from '../skill-svgs/aspdotnet.svg';
import angularSvg from '../skill-svgs/angular.svg';
import reactSvg from '../skill-svgs/react.svg';
import jsxSvg from '../skill-svgs/jsx.svg';
import mysqlSvg from '../skill-svgs/mysql.svg';
import sqlSvg from '../skill-svgs/sql.svg';
import netlifySvg from '../skill-svgs/netlify.svg'
import tailwindSvg from '../skill-svgs/tailwind.svg'
import pythonSvg from '../skill-svgs/python.svg'
import commercejsSvg from '../skill-svgs/commercejs.svg'
import { FaGithub, FaLink } from "react-icons/fa";

function Project({ children, commercejs ,githubLink,websiteLink ,netlify, tailwind, python, csharp, html, css, bootstrap, javascript, jquery, typescript, aspdotnet, angular, react, jsx, mysql, sql, description, imgsrc }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="project-card bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2"> {children} </h3>
            <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={imgsrc} alt="project-image" />
                {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/70 to-blue-900/70 ">
                        <div className="flex items-center gap-4">
                            <FaGithub  onClick={()=>window.open(githubLink,'_blank')} className='w-10 h-10 text-gray-300 hover:cursor-pointer hover:text-white' />
                            <FaLink  onClick={()=>window.open(websiteLink,'_blank')}  className='w-10 h-10 text-gray-300 hover:cursor-pointer hover:text-white' />
                        </div>
                    </div>
                )}
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-wrap grid grid-cols-5 gap-4 logos">
                {csharp && <img src={csharpSvg} alt="csharp" className="w-10 h-10" />}
                {html && <img src={htmlSvg} alt="html" className="w-10 h-10" />}
                {css && <img src={cssSvg} alt="css" className="w-10 h-10" />}
                {bootstrap && <img src={bootstrapSvg} alt="bootstrap" className="w-10 h-10" />}
                {javascript && <img src={javascriptSvg} alt="javascript" className="w-10 h-10" />}
                {jquery && <img src={jquerySvg} alt="jquery" className="w-10 h-10" />}
                {typescript && <img src={typescriptSvg} alt="typescript" className="w-10 h-10" />}
                {aspdotnet && <img src={aspdotnetSvg} alt="aspdotnet" className="w-10 h-10" />}
                {angular && <img src={angularSvg} alt="angular" className="w-10 h-10" />}
                {mysql && <img src={mysqlSvg} alt="mysql" className="w-10 h-10" />}
                {react && <img src={reactSvg} alt="react" className="w-10 h-10" />}
                {jsx && <img src={jsxSvg} alt="jsx" className="w-10 h-10" />}
                {sql && <img src={sqlSvg} alt='sql' className="w-10 h-10" />}
                {netlify && <img src={netlifySvg} alt='netlify' className="w-10 h-10" />}
                {tailwind && <img src={tailwindSvg} alt='tailwind' className="w-10 h-10" />}
                {python && <img src={pythonSvg} alt='python' className="w-10 h-10" />}
                {commercejs && <img src={commercejsSvg} alt='commercejs' className="w-30 h-30" />}

            </div>
        </div>
    );
}

export default Project;
