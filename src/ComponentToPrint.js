import React from "react"

export class ComponentToPrint extends React.PureComponent {
	render() {
		return (
			<table>
				<thead>
					<th>column 1</th>
					<th>column 2</th>
					<th>column 3</th>
				</thead>
				<tbody>
					<tr>
						<td>Salohiddin</td>
						<td>Hello world</td>
						<td>data 3</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
