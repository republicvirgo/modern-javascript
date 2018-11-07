import React, { Component } from "react";
import { getMovies } from "../services/dummyMovie";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { movies } = this.state;
    const { length: count } = this.state.movies;

    return (
      <div>
        <h5>{count > 0 ? `Tersedia ${count} Movie List` : ""}</h5>

        <table className="table">
          <thead>
            <tr>
              <th>Judul</th>
              <th>Genre</th>
              <th>Stok</th>
              <th>Rating</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {count > 0 ? (
              movies.map(mv => (
                <tr key={mv._id}>
                  <td>{mv.judul}</td>
                  <td>{mv.genre.jenis}</td>
                  <td>{mv.stok}</td>
                  <td>{mv.rating}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(mv)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colspan="5">Movie List Tidak Tersedia</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
