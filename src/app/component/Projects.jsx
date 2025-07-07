import Link from "next/link";

export default function Projects() {
  return (
    <div id="projects" className="m-14 ">
        <hr className="my-28" />
        <h1 className="text-4xl text-[#c1cffb] font-bold">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 min-h-[calc(100vh-12rem)] md:min-h-[350px] mt-24">
            <div className="col-span-1 md:col-start-1 row-span-1 md:row-start-1 m-4">
                <Link href={'https://github.com/kerolosNabil247/e-commerce-react-vite'}>
                    <h3 className="text-[#c1cffb] font-bold text-2xl mb-6">E-Commerce</h3>
                </Link>
                <p className="text-[#c1cffb]">A responsive e-commerce platform built with Vite React, HTML, CSS, Bootstrap, Animate.css, and AOS library, specializing in smartphones.</p>
            </div>
            <div className="col-span-1 md:col-start-2 row-span-1 md:row-start-1 m-4">
                <Link href={'https://github.com/Mahmoud-Hanyy/SceneSmith'}>
                    <h3 className="text-[#c1cffb] font-bold text-2xl mb-6">SceneSmith(Movie-website)</h3>
                </Link>
                 <p className="text-[#c1cffb]">SceneSmith is a responsive movie app built with React.js and Bootstrap. Discover trending movies, search by title, and view details like ratings and overviews. Smooth animations and a modern UI ensure a great user experience across all devices.</p>
            </div>
            <div className="col-span-1 md:col-start-3 row-span-1 md:row-start-1 m-4">
                <Link href={'https://github.com/kerolosNabil247/react-todo-app'}>
                    <h3 className="text-[#c1cffb] font-bold text-2xl mb-6">To-Do App</h3>
                </Link>
                 <p className="text-[#c1cffb]">This is a simple to-do application built with React. It allows users to create, read, update, and delete to-do items, helping you manage your tasks effectively.</p>
            </div>
        </div>
        <hr className="relative" /> 
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 min-h-[calc(100vh-12rem)] md:min-h-[350px] mt-24">
            <div className="col-span-1 md:col-start-1 row-span-1 md:row-start-1 m-4">
                <Link href={'https://github.com/Mahmoud-Hanyy/WindyX'}>
                    <h3 className="text-[#c1cffb] font-bold text-2xl mb-6">WindyX (Weather website)</h3>
                </Link>
                 <p className="text-[#c1cffb]">WindyX is a sleek and interactive weather application built using HTML, CSS, and JavaScript. It provides real-time weather updates with a minimalist, futuristic UI, allowing users to check the weather for different cities effortlessly.</p>
            </div>
            <div className="col-span-1 md:col-start-2 row-span-1 md:row-start-1 m-4">
                <Link href={'https://github.com/kerolosNabil247/django-bookstore-app'}>
                    <h3 className="text-[#c1cffb] font-bold text-2xl mb-6">Book-Store</h3>
                </Link>
                 <p className="text-[#c1cffb]">A Django-based bookstore application showcasing the MVT design pattern, user authentication (login, signup, permissions), Django Admin, and PostgreSQL integration for managing books with CRUD functionalities</p>
            </div>
            <div className="col-span-1 md:col-start-3 row-span-1 md:row-start-1 m-4">
                <Link href={'https://github.com/kerolosNabil247/Bash-User-Management'}>
                    <h3 className="text-[#c1cffb] font-bold text-2xl mb-6">User-Management</h3>
                </Link>
                 <p className="text-[#c1cffb]">A complete interactive user management system written in Bash, designed for Linux environments. It allows system administrators to easily perform essential user-related tasks via a simple terminal menu.</p>
            </div>
        </div>
    </div>
  )
}
