interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {

    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            active:scale-95 transition-all ease-out duration-75
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}