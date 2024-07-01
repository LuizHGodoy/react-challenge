import Button from "@/components/button";
import "@/pages/home/home.css";
import periodicTable from "@/periodicTable.json";
import { setName } from "@/store/name";
import type { RootState } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
	const dispatch = useDispatch();
	const nameData = useSelector((state: RootState) => state.name);

	const [firstNameInput, setFirstNameInput] = useState("");
	const [lastNameInput, setLastNameInput] = useState("");

	const getElementFromName = (name: string) => {
		let element = "";

		for (let i = 0; i < periodicTable.length; i++) {
			const currentElement = periodicTable[i].symbol.toLocaleLowerCase();
			if (name.toLowerCase().includes(currentElement)) {
				element = currentElement;

				if (currentElement.length === 2) {
					break;
				}
			}
		}

		return element;
	};

	const highlightedName = (name: string, element: string) => {
		return name
			.toLowerCase()
			.replace(element, `<span class="bg-secondary capitalize">${element}</span>`);
	};

	const handleBreakify = () => {
		if (firstNameInput.length === 0 || lastNameInput.length === 0) {
			return;
		}

		const firstNameElement = getElementFromName(firstNameInput);
		const lastNameElement = getElementFromName(lastNameInput);

		dispatch(
			setName({
				firstName: { element: firstNameElement, name: firstNameInput },
				lastName: { element: lastNameElement, name: lastNameInput },
			}),
		);
	};

	return (
		<div className="home-container flex flex-col items-center justify-center min-h-screen bg-black px-4">
			<div className="title font-bold text-center mb-8 space-y-4">
				<h1
					className="text-4xl sm:text-5xl md:text-6xl text-white"
					dangerouslySetInnerHTML={{
						__html: highlightedName(
							nameData.firstName.name,
							nameData.firstName.element,
						),
					}}
				/>
				<h1
					className="text-4xl sm:text-5xl md:text-6xl text-white"
					dangerouslySetInnerHTML={{
						__html: highlightedName(
							nameData.lastName.name,
							nameData.lastName.element,
						),
					}}
				/>
			</div>

			<div className="form rounded-lg p-6 w-full max-w-md flex flex-col gap-y-4 items-center">
				<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-0 w-full p-4 rounded-lg">
					<div className="flex flex-col w-full sm:w-1/2">
						<p className="text-secondary text-white mb-2">First Name</p>
						<input
							className="p-2 rounded-lg w-full"
							type="text"
							placeholder="First Name"
							data-testid="firstNameInput"
							value={firstNameInput}
							onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
								setFirstNameInput(target.value);
							}}
						/>
					</div>
					<div className="flex flex-col w-full sm:w-1/2">
						<p className="text-secondary text-white mb-2">Last Name</p>
						<input
							className="p-2 rounded-lg w-full"
							type="text"
							placeholder="Last Name"
							data-testid="lastNameInput"
							value={lastNameInput}
							onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
								setLastNameInput(target.value);
							}}
						/>
					</div>
				</div>

				<div className="w-full flex justify-center p-4 rounded-lg mt-4">
					<Button click={handleBreakify}>Breakify</Button>
				</div>
			</div>
		</div>
	);
}
