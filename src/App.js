import React, {useRef} from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";

const App = () => {
	const componentRef = useRef();

	return (
		<div>
			<ReactToPrint
				trigger={() => <button>Print this out!</button>}
				content={() => componentRef.current}
			/>
			<ComponentToPrint ref={componentRef} />
		</div>
	);
};


export default App;
