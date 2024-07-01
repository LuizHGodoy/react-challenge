import type { ReactNode } from "react";
interface Props {
	children: ReactNode;
	click: () => void;
}

const Button: React.FC<Props> = ({ click, children }) => {
	return (
		<button
			type="button"
			className="w-full p-2 bg-green-700 text-white rounded-lg"
			onClick={click}
		>
			{children}
		</button>
	);
};
export default Button;
