interface EntradaProps {
  tipo?: "text" | "number";
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
  className?: string;
  valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`
            border border-purple-500 rounded-lg
            focus:outline-none bg-gray-100 px-4 py-2
            ${props.somenteLeitura ? 'bg-gray-200 focus:animate-[pulseRed_700ms_ease-in-out_backwards]' : 'focus:bg-white focus:border-purple-800 focus:border-[1.2px]'}
            `}
        onChange={e => props.valorMudou?.(e.target.value)}
      />
    </div>
  );
}
