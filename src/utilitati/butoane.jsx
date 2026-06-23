import { Link } from "react-router-dom";

function AncoraColorata(props) {
    return (
        <Link
            to={props.ancora}
            className="px-10 py-1 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] hover:bg-gradient-to-r hover:from-[#377e3a] hover:to-[#1968a9]  rounded-[20px] text-white scale-95 hover:scale-105 transition ease-in duration-250 hover:shadow-2xl ">
            {props.title}
        </Link>
    );
}

function AncoraSur(props) {
    return (
        <Link
            to={props.ancora}
            className="px-10 py-1 bg-gray-300 hover:bg-gray-400 text-black border border-black rounded-[20px] scale-95 hover:scale-105 transition ease-in duration-250 hover:shadow-2xl ">
            {props.title}
        </Link>
    );
}

export { AncoraColorata, AncoraSur };