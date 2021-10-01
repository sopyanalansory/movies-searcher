import React from 'react';

const MoviesDetail=(props) => {
		const { state } = props.location;
    return (
		<div className="Detail">
			<table className="titleBar">
				<tbody>
					<tr>
						<td><h1>Details</h1></td>
					</tr>
				</tbody>
			</table>
			<table key={state.imdbID}>
				<tbody>
					<tr>
						<td><img width="120" alt="poster" src={state.Poster}></img></td>
						<td style={{textAlign: "left", paddingLeft: 10, fontSize:16}}>
							<h3>{state.Title} ({state.Year} / {state.Type})</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    )
}

export default MoviesDetail;