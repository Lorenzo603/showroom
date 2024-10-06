import Link from "next/link";

const HeaderNavLink = (props) => {

    return (
        <Link className=" 
            p-6
            text-slate-50 text-lg font-bold uppercase
            hover:text-slate-900 hover:bg-slate-50"
            href={props.href}>
            {props.children}
        </Link>
    );
};

export default HeaderNavLink;