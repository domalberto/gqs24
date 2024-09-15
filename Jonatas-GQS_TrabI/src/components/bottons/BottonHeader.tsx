export default function ButtonHeader({text}:{text:string}) {
    return(
        <button className="h-10 mx-1 text-azul tracking-wide px-6 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md">
            {text}
        </button>
    )
}