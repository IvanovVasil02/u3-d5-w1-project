import { Component } from "react";

import { Alert, Card, Col, Row, Spinner } from "react-bootstrap";

class MovieCarousel extends Component {
  state = {
    thereIsErrors: false,
    isLoading: true,
    movieArray: [],
  };

  fetchMovies = async () => {
    const URL = "https://www.omdbapi.com/?s=" + this.props.search + "&apikey=bafb6310";

    try {
      const response = await fetch(URL);
      const movies = await response.json();

      if (response.ok) {
        this.setState({ movieArray: movies.Search });
      } else {
        this.setState({ thereIsErrors: true });
      }
    } catch (error) {
      this.setState({ thereIsErrors: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = async () => {
    await this.fetchMovies();
  };

  render() {
    return (
      <Row className='row-cols-4 row-cols-lg-5 g-3 flex-nowrap overflow-hidden mb-4'>
        {this.state.thereIsErrors && <Alert variant={"danger"}>There was an error loading the data</Alert>}
        {this.state.isLoading && <Spinner animation='border' variant='danger' className='ms-5' />}
        {this.state.movieArray.map((movie, index) => (
          <Col key={index}>
            <Card className='border-0 h-100'>
              <Card.Img variant='top' src={movie.Poster} className='img-fluid object-fit-cover w-100 h-100 ' />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default MovieCarousel;
