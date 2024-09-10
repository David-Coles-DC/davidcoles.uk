"use client";

export default function Header(props: any) {
    return <nav className={'flex gap-[30px] items-center'}>
        <button onClick={() => {
            window.scrollTo({
                top: props.homeSection.current?.offsetTop - 60,
                behavior: 'smooth',
            });
        }}>HOME</button>
        <button onClick={() => {
            props.aboutSection.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }}>ABOUT</button>
        <button onClick={() => {
            props.projectsSection.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }}>PROJECTS</button>
        <button onClick={() => {
            props.contactSection.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }}>CONTACT</button>
    </nav>
}