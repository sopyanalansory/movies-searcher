import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MoviesList(props){
	const { movies, isLoading } = props;
	const [item, setItem] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const handleShowDialog = (movie) => {
		setShowModal(!showModal);
		setItem(movie);
	};

	if(movies.length){
		return movies.map((movie, index) => {
			if(movie.Poster){
				const regex = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;
				const defaultUrl = 'http://i-4y7nx3e8mekd-cdn.plushcontent.com/uploads/files/34/bpjtldva3cq7v6ez.jpg';
				movie.Poster = movie.Poster.match(regex) ? movie.Poster : defaultUrl;
				return (
					<table key={index}>
						<tbody>
							<tr>
								<td>
									<img width="120" alt="poster" src={ movie.Poster } onClick={()=> handleShowDialog(movie)}/>
									{showModal && item.imdbID == movie.imdbID && (
										<dialog
											className="dialog"
											style={{ position: "absolute"}}
											open
											onClick={handleShowDialog}
										>
											<img
												className="image"
												src={movie.Poster}
												onClick={handleShowDialog}
												alt="no image"
											/>
										</dialog>
									)}
								</td>
								<td style={{textAlign: "left", paddingLeft: 10, fontSize:12}}>
									<h3>{movie.Title}</h3>
									{movie.Year} / {movie.Type} < br/>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
									<NavLink to={{pathname:`/view/${movie.imdbID}`, state:movie}}><button className="button">View</button></NavLink>
								</td>
							</tr>
							{movies.isFetch && 'Fething more list...'}
						</tbody>
					</table>
				)
			}
		})
	}
	return <h3>Opps. no record found, try another keyword!</h3>;
}
export default MoviesList;