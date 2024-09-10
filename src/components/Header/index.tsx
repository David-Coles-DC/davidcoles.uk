import Logo from '@/components/Header/Logo';
import Menu from '@/components/Header/Menu';

export default function Header(props: any) {
    return <header className={'bg-white fixed px-[40px] py-[20px] shadow-2xl w-full'}>
        <div className={'flex items-center justify-between'}>
            <div className={'flex gap-[40px] items-center'}>
                <Logo/>
                <div>DAVID COLES</div>
            </div>
            <div>
                <Menu homeSection={props.homeSection} aboutSection={props.aboutSection} projectsSection={props.projectsSection} contactSection={props.contactSection} />
            </div>
        </div>
    </header>
}