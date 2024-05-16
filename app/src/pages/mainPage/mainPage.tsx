import { Toaster } from "sonner";
import HeaderBar from "../../components/headerBar/headerBar";


export default function MainPage () {

    return (
        <div className="p-0">
            				<Toaster
					toastOptions={{
						classNames: {
							toast: "bg-vive_items",
							title: "text-white",
							description: "text-white",
						},
					}}
				/>
            <HeaderBar />
        </div>
    )
}