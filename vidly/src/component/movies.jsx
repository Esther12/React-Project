import React, { Component } from 'react';//imrc + returb

import { getMovies } from "../services/fakeMovieService";
import { deleteMovie } from "../services/fakeMovieService";

class Moives extends Component {//cc+ return
    state = { 
        movies: getMovies()
     }
     handleDelete = (movie) =>{
        const movies = this.state.movies.filter(m =>m._id !== movie._id);
        this.setState({ movies });
     }
    render() { 
        if (this.state.movies.length === 0) return <p>There are no movies in the database.</p>
        return (
        <p>Showing {this.state.movies.length} movies is in the database</p>
        <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            { this.state.movies.map(movie =>(
            <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm ">Delete</button></td>
            </tr>
            ))}
        </tbody>
    </table>
    )
        
    }
}
 //table.table>thead>tr>th*4 + return
export default Moives;

// class Movies extends Component {
//     state = {
//         movies: getMovies(),
//         delect: deleteMovie(),
//         save: saveMovie(movie)
//     };

//     handleDelect = movie =>{
//             this.deleteMovie();
//     };

//     render() {
//         <table>
//             <tr>
//                 <th>{this.getMovie(id)}</th>
//                 <th>{this.saveMovie(movie)}</th>
//                 <th>{this.handleDelect(movie)}</th>
//             </tr>
//         </table>
//     };

// }
// export default Movies;